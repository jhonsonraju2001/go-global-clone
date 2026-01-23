import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, ChevronRight, Check, X, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { allDestinations, DestinationPackage } from "@/data/itineraries";
import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DestinationPage = () => {
  const { destination } = useParams<{ destination: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<DestinationPackage | null>(null);
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const destinationData = destination ? allDestinations[destination] : null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  const handleInquiry = (pkg: DestinationPackage) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  if (!destinationData) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-8">The destination you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={destinationData.heroImage}
            alt={destinationData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative h-full container-custom flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-white/80 mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{destinationData.name}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
              {destinationData.name}
            </h1>
            <p className="text-2xl text-primary font-medium mb-4">{destinationData.tagline}</p>
            <p className="text-white/90 max-w-2xl">{destinationData.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Tour Packages for {destinationData.name}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated packages designed to give you the best experience
            </p>
          </motion.div>

          <div className="grid gap-8">
            {destinationData.packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden border"
              >
                {/* Package Header */}
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <span className="discount-badge">{pkg.discount}% Off</span>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {pkg.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {destinationData.name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            4.8 / 5
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground line-through text-lg">
                            ₹{formatPrice(pkg.originalPrice)}
                          </span>
                          <span className="text-3xl font-bold text-primary">
                            ₹{formatPrice(pkg.currentPrice)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">per person</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{pkg.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
                      >
                        {activePackage === pkg.id ? "Hide Details" : "View Itinerary"}
                      </Button>
                      <Button onClick={() => handleInquiry(pkg)}>
                        Book Now
                      </Button>
                      <Button variant="secondary" onClick={() => handleInquiry(pkg)}>
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                {activePackage === pkg.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t bg-muted/30 p-6 md:p-8"
                  >
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      {/* Inclusions */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          Inclusions
                        </h4>
                        <ul className="space-y-2">
                          {pkg.inclusions.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Exclusions */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <X className="w-5 h-5 text-red-500" />
                          Exclusions
                        </h4>
                        <ul className="space-y-2">
                          {pkg.exclusions.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quick Info */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          Quick Info
                        </h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Duration:</strong> {pkg.duration}</p>
                          <p><strong>Best Time:</strong> Year Round</p>
                          <p><strong>Difficulty:</strong> Easy</p>
                          <p><strong>Group Size:</strong> 2-15 persons</p>
                        </div>
                      </div>
                    </div>

                    {/* Itinerary */}
                    <div>
                      <h4 className="font-semibold text-xl mb-4">Day-wise Itinerary</h4>
                      <Accordion type="single" collapsible className="w-full">
                        {pkg.itinerary.map((day) => (
                          <AccordionItem key={day.day} value={`day-${day.day}`}>
                            <AccordionTrigger className="hover:no-underline">
                              <div className="flex items-center gap-4 text-left">
                                <span className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                  {day.day}
                                </span>
                                <div>
                                  <p className="font-semibold">{day.title}</p>
                                  <p className="text-sm text-muted-foreground font-normal">
                                    Day {day.day}
                                  </p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-16">
                                <p className="text-muted-foreground mb-4">{day.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {day.highlights.map((h, i) => (
                                    <span
                                      key={i}
                                      className="px-3 py-1 bg-muted rounded-full text-sm"
                                    >
                                      {h}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {destinationData.bannerImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`${destinationData.name} gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={selectedPackage?.name}
        destination={destinationData.name}
      />
    </div>
    </PageTransition>
  );
};

export default DestinationPage;
