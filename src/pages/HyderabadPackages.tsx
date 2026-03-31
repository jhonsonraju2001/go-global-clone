import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Star, Filter, Search, ChevronDown, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hyderabadData } from "@/data/destinationsExtended";
import InquiryModal from "@/components/InquiryModal";
import { DestinationPackage } from "@/data/itineraries";

type TourType = "All" | "Heritage" | "Pilgrimage" | "Night Tour" | "Day Tour" | "Ramoji" | "Nature";

const tourTypeMap: Record<string, TourType[]> = {
  "hyderabad-heritage": ["Heritage"],
  "hyderabad-1day-city": ["Day Tour"],
  "hyderabad-2day-heritage": ["Heritage"],
  "hyderabad-srisailam-3day": ["Pilgrimage"],
  "hyderabad-temple-tour": ["Pilgrimage"],
  "hyderabad-night-tour": ["Night Tour"],
  "hyderabad-ramoji-tour": ["Ramoji"],
  "nagarjuna-sagar-tour": ["Nature", "Day Tour"],
  "araku-valley-tour": ["Nature"],
  "vizag-beach-tour": ["Nature", "Day Tour"],
};

const filterTypes: TourType[] = ["All", "Heritage", "Pilgrimage", "Night Tour", "Day Tour", "Ramoji", "Nature"];

const filterIcons: Record<TourType, string> = {
  All: "🗺️",
  Heritage: "🏛️",
  Pilgrimage: "🛕",
  "Night Tour": "🌙",
  "Day Tour": "☀️",
  Ramoji: "🎬",
  Nature: "🌿",
};

const HyderabadPackages = () => {
  const [activeFilter, setActiveFilter] = useState<TourType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<DestinationPackage | null>(null);

  const packages = hyderabadData.packages;

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesType =
        activeFilter === "All" ||
        (tourTypeMap[pkg.id]?.includes(activeFilter) ?? false);
      const matchesSearch =
        searchQuery === "" ||
        pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [packages, activeFilter, searchQuery]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN").format(price);

  const handleInquiry = (pkg: DestinationPackage) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920&h=1080&fit=crop"
              alt="Hyderabad Charminar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center text-center text-background px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" /> Explore Hyderabad
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-3">
                Hyderabad Tour Packages
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                Heritage, Pilgrimage, Night Life & Film City — find your perfect Hyderabad experience
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-[calc(theme(spacing.16)+36px)] z-30 bg-background/95 backdrop-blur-md border-b shadow-sm">
          <div className="container-custom py-4 space-y-3">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search Hyderabad packages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            {/* Filter chips */}
            <div className="flex flex-wrap justify-center gap-2">
              {filterTypes.map((type) => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    activeFilter === type
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <span>{filterIcons[type]}</span>
                  {type}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="container-custom py-12">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredPackages.length}</span> packages
            </p>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="group bg-card rounded-2xl overflow-hidden border shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                      {pkg.discount}% Off
                    </span>
                    <span className="absolute bottom-3 right-3 bg-background/90 backdrop-blur text-foreground text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {pkg.duration}
                    </span>
                    {/* Type badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1">
                      {(tourTypeMap[pkg.id] || []).map((t) => (
                        <span
                          key={t}
                          className="bg-primary/85 backdrop-blur text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        >
                          {filterIcons[t]} {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {pkg.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pkg.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="text-[11px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl font-bold text-primary">
                          ₹{formatPrice(pkg.currentPrice)}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{formatPrice(pkg.originalPrice)}
                        </span>
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
                          onClick={() => handleInquiry(pkg)}
                        >
                          Get Callback
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPackages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl font-semibold mb-2">No packages found</p>
              <p className="text-muted-foreground">Try adjusting your filters or search query</p>
              <Button className="mt-4" onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}>
                Reset Filters
              </Button>
            </motion.div>
          )}
        </section>

        <InquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          packageName={selectedPackage?.name}
        />

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default HyderabadPackages;
