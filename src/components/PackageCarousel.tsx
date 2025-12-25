import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin, Clock, Star } from "lucide-react";
import { Package } from "@/data/destinations";
import { Button } from "@/components/ui/button";
import InquiryModal from "./InquiryModal";

interface PackageCarouselProps {
  title: string;
  subtitle?: string;
  packages: Package[];
  sectionId: string;
}

const PackageCarousel = ({ title, subtitle, packages, sectionId }: PackageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const itemsPerView = 4;
  const maxIndex = Math.max(0, packages.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleCallback = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  return (
    <section id={sectionId} className="py-16 md:py-20 bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            {subtitle && (
              <span className="text-primary font-medium mb-2 block">{subtitle}</span>
            )}
            <h2 className="section-title">{title}</h2>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-3 rounded-full border-2 border-foreground/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-3 rounded-full border-2 border-foreground/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (100 / itemsPerView + 2)}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="min-w-[280px] md:min-w-[calc(25%-18px)] flex-shrink-0"
              >
                <div className="package-card h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                    />
                    <span className="discount-badge">{pkg.discount}% Off</span>
                    <span className="duration-badge">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Rating */}
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
                        <span className="text-xs text-muted-foreground">No reviews</span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                      <Link to={`/packages/${pkg.id}`}>{pkg.name}</Link>
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {pkg.location}
                    </div>

                    {/* Price */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="price-current">INR {formatPrice(pkg.currentPrice)}</span>
                        <span className="price-original">INR {formatPrice(pkg.originalPrice)}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Link to={`/packages/${pkg.id}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            View Detail
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90"
                          onClick={() => handleCallback(pkg)}
                        >
                          Get A Callback
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={selectedPackage?.name}
      />
    </section>
  );
};

export default PackageCarousel;
