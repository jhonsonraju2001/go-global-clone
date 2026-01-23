import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Search, Filter, MapPin, Clock, Star, X, 
  SlidersHorizontal, ChevronDown, Grid, List
} from "lucide-react";
import { Package, indiaPackages, internationalPackages } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import InquiryModal from "./InquiryModal";

type DestinationType = "all" | "india" | "international";
type SortOption = "price-low" | "price-high" | "duration" | "discount" | "rating";
type ViewMode = "grid" | "list";

const allPackages = [...indiaPackages, ...internationalPackages];

// Helper to parse duration string to nights
const parseDuration = (duration: string): number => {
  const match = duration.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

// Duration options
const durationOptions = [
  { value: "all", label: "Any Duration" },
  { value: "1-3", label: "1-3 Nights" },
  { value: "4-6", label: "4-6 Nights" },
  { value: "7-10", label: "7-10 Nights" },
  { value: "10+", label: "10+ Nights" },
];

const PackageSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [destinationType, setDestinationType] = useState<DestinationType>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 400000]);
  const [durationFilter, setDurationFilter] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("price-low");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  // Filter and sort packages
  const filteredPackages = useMemo(() => {
    let packages = allPackages;

    // Filter by destination type
    if (destinationType === "india") {
      packages = indiaPackages;
    } else if (destinationType === "international") {
      packages = internationalPackages;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      packages = packages.filter(
        (pkg) =>
          pkg.name.toLowerCase().includes(query) ||
          pkg.location.toLowerCase().includes(query)
      );
    }

    // Filter by price range
    packages = packages.filter(
      (pkg) => pkg.currentPrice >= priceRange[0] && pkg.currentPrice <= priceRange[1]
    );

    // Filter by duration
    if (durationFilter !== "all") {
      packages = packages.filter((pkg) => {
        const nights = parseDuration(pkg.duration);
        switch (durationFilter) {
          case "1-3":
            return nights >= 1 && nights <= 3;
          case "4-6":
            return nights >= 4 && nights <= 6;
          case "7-10":
            return nights >= 7 && nights <= 10;
          case "10+":
            return nights > 10;
          default:
            return true;
        }
      });
    }

    // Sort packages
    packages = [...packages].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.currentPrice - b.currentPrice;
        case "price-high":
          return b.currentPrice - a.currentPrice;
        case "duration":
          return parseDuration(a.duration) - parseDuration(b.duration);
        case "discount":
          return b.discount - a.discount;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

    return packages;
  }, [searchQuery, destinationType, priceRange, durationFilter, sortBy]);

  const handleCallback = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setDestinationType("all");
    setPriceRange([0, 400000]);
    setDurationFilter("all");
    setSortBy("price-low");
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    destinationType !== "all" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 400000 ||
    durationFilter !== "all";

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Destination Type */}
      <div>
        <label className="text-sm font-medium mb-3 block">Destination Type</label>
        <div className="flex flex-wrap gap-2">
          {[
            { value: "all", label: "All" },
            { value: "india", label: "India" },
            { value: "international", label: "International" },
          ].map((option) => (
            <Button
              key={option.value}
              variant={destinationType === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => setDestinationType(option.value as DestinationType)}
              className="flex-1 min-w-[80px]"
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-sm font-medium mb-3 block">
          Price Range: ₹{formatPrice(priceRange[0])} - ₹{formatPrice(priceRange[1])}
        </label>
        <Slider
          value={priceRange}
          min={0}
          max={400000}
          step={5000}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="mt-2"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>₹0</span>
          <span>₹4,00,000</span>
        </div>
      </div>

      {/* Duration */}
      <div>
        <label className="text-sm font-medium mb-3 block">Duration</label>
        <Select value={durationFilter} onValueChange={setDurationFilter}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent className="bg-background z-50">
            {durationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="ghost" onClick={clearFilters} className="w-full gap-2">
          <X className="w-4 h-4" />
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <section id="package-search" className="py-16 md:py-20 bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium mb-2 block">Find Your Perfect Trip</span>
          <h2 className="section-title mb-4">Search & Explore Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Filter through our curated collection of travel packages to find your dream destination
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl shadow-lg border p-4 md:p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by destination or package name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Sort Select */}
            <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
              <SelectTrigger className="w-full md:w-[200px] h-12 bg-background">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="discount">Highest Discount</SelectItem>
                <SelectItem value="rating">Best Rating</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="hidden md:flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 transition-colors ${
                  viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 transition-colors ${
                  viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden gap-2 h-12">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-background">
                <SheetHeader>
                  <SheetTitle>Filter Packages</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Filter Toggle */}
            <Button
              variant="outline"
              className="hidden md:flex gap-2 h-12"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>
          </div>

          {/* Desktop Expandable Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden md:block overflow-hidden"
              >
                <div className="pt-6 border-t mt-6 grid md:grid-cols-3 gap-6">
                  <FilterContent />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between mb-6"
        >
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredPackages.length}</span>{" "}
            {filteredPackages.length === 1 ? "package" : "packages"}
            {hasActiveFilters && " (filtered)"}
          </p>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
              <X className="w-4 h-4" />
              Clear filters
            </Button>
          )}
        </motion.div>

        {/* Results Grid/List */}
        {filteredPackages.length > 0 ? (
          <motion.div
            layout
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  {viewMode === "grid" ? (
                    // Grid Card
                    <div className="package-card h-full flex flex-col group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <span className="discount-badge">{pkg.discount}% Off</span>
                        <span className="duration-badge">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-1 mb-2">
                          {pkg.rating ? (
                            <>
                              <Star className="w-4 h-4 fill-primary text-primary" />
                              <span className="text-sm font-medium">{pkg.rating} / 5</span>
                              <span className="text-xs text-muted-foreground">
                                ({pkg.reviews} Reviews)
                              </span>
                            </>
                          ) : (
                            <span className="text-xs text-muted-foreground">No reviews yet</span>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          <Link to={`/packages/${pkg.id}`}>{pkg.name}</Link>
                        </h3>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                          <MapPin className="w-4 h-4" />
                          {pkg.location}
                        </div>
                        <div className="mt-auto">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="price-current">₹{formatPrice(pkg.currentPrice)}</span>
                            <span className="price-original">₹{formatPrice(pkg.originalPrice)}</span>
                          </div>
                          <div className="flex gap-2">
                            <Link to={`/packages/${pkg.id}`} className="flex-1">
                              <Button variant="outline" size="sm" className="w-full">
                                View Detail
                              </Button>
                            </Link>
                            <Button
                              size="sm"
                              className="flex-1"
                              onClick={() => handleCallback(pkg)}
                            >
                              Get Quote
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // List Card
                    <div className="bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                          <img
                            src={pkg.image}
                            alt={pkg.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <span className="discount-badge">{pkg.discount}% Off</span>
                        </div>
                        <div className="flex-1 p-5 flex flex-col md:flex-row justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                {pkg.duration}
                              </span>
                              {pkg.rating && (
                                <span className="flex items-center gap-1 text-sm">
                                  <Star className="w-4 h-4 fill-primary text-primary" />
                                  {pkg.rating}
                                </span>
                              )}
                            </div>
                            <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                              <Link to={`/packages/${pkg.id}`}>{pkg.name}</Link>
                            </h3>
                            <div className="flex items-center gap-1 text-muted-foreground text-sm">
                              <MapPin className="w-4 h-4" />
                              {pkg.location}
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-between">
                            <div className="text-right">
                              <span className="text-2xl font-bold text-primary">
                                ₹{formatPrice(pkg.currentPrice)}
                              </span>
                              <span className="block text-sm text-muted-foreground line-through">
                                ₹{formatPrice(pkg.originalPrice)}
                              </span>
                              <span className="text-xs text-muted-foreground">per person</span>
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Link to={`/packages/${pkg.id}`}>
                                <Button variant="outline" size="sm">
                                  View Detail
                                </Button>
                              </Link>
                              <Button size="sm" onClick={() => handleCallback(pkg)}>
                                Get Quote
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          // No Results
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No packages found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
            <Button onClick={clearFilters} className="gap-2">
              <X className="w-4 h-4" />
              Clear All Filters
            </Button>
          </motion.div>
        )}
      </div>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={selectedPackage?.name}
      />
    </section>
  );
};

export default PackageSearch;
