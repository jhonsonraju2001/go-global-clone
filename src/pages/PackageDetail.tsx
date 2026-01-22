import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, ChevronRight, Check, X, Calendar, Users, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { allDestinations, DestinationPackage, DestinationData } from "@/data/itineraries";
import { useState } from "react";
import InquiryModal from "@/components/InquiryModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PackageDetail = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the package across all destinations
  let foundPackage: DestinationPackage | null = null;
  let foundDestination: DestinationData | null = null;

  for (const dest of Object.values(allDestinations)) {
    const pkg = dest.packages.find(p => p.id === packageId);
    if (pkg) {
      foundPackage = pkg;
      foundDestination = dest;
      break;
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  if (!foundPackage || !foundDestination) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <p className="text-muted-foreground mb-8">The package you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px]">
        <div className="absolute inset-0">
          <img
            src={foundPackage.image}
            alt={foundPackage.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative h-full container-custom flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-white/80 mb-4 flex-wrap">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to={`/destinations/${foundDestination.id}`} className="hover:text-white">
                {foundDestination.name}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{foundPackage.name}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              {foundPackage.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-1">
                <Clock className="w-5 h-5" />
                {foundPackage.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                {foundDestination.name}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-primary text-primary" />
                4.8 / 5 (120+ Reviews)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-background rounded-2xl border p-6 md:p-8 mb-8"
              >
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-6">{foundPackage.description}</p>

                <h3 className="font-semibold text-lg mb-3">Highlights</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {foundPackage.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Inclusions */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Inclusions
                    </h3>
                    <ul className="space-y-2">
                      {foundPackage.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusions */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500" />
                      Exclusions
                    </h3>
                    <ul className="space-y-2">
                      {foundPackage.exclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Itinerary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-background rounded-2xl border p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Day-wise Itinerary</h2>
                <Accordion type="single" collapsible defaultValue="day-1" className="w-full">
                  {foundPackage.itinerary.map((day) => (
                    <AccordionItem key={day.day} value={`day-${day.day}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-4 text-left">
                          <span className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                            {day.day}
                          </span>
                          <div>
                            <p className="font-semibold text-lg">{day.title}</p>
                            <p className="text-sm text-muted-foreground font-normal">
                              Day {day.day}
                            </p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-[4.5rem]">
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
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-background rounded-2xl border p-6 sticky top-24"
              >
                {/* Price */}
                <div className="text-center mb-6 pb-6 border-b">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-muted-foreground line-through text-lg">
                      ₹{formatPrice(foundPackage.originalPrice)}
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-sm">
                      {foundPackage.discount}% Off
                    </span>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-1">
                    ₹{formatPrice(foundPackage.currentPrice)}
                  </div>
                  <p className="text-muted-foreground text-sm">per person</p>
                </div>

                {/* Quick Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{foundPackage.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Destination</p>
                      <p className="font-medium">{foundDestination.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Best Time</p>
                      <p className="font-medium">Year Round</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Group Size</p>
                      <p className="font-medium">2-15 Persons</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Button className="w-full" size="lg" onClick={() => setIsModalOpen(true)}>
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" onClick={() => setIsModalOpen(true)}>
                    Get Custom Quote
                  </Button>
                  <a href="tel:+919550504544" className="block">
                    <Button variant="secondary" className="w-full" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t">
                  <div className="grid grid-cols-2 gap-4 text-center text-sm">
                    <div>
                      <div className="font-bold text-primary text-xl">500+</div>
                      <p className="text-muted-foreground">Happy Travelers</p>
                    </div>
                    <div>
                      <div className="font-bold text-primary text-xl">4.8★</div>
                      <p className="text-muted-foreground">Rating</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={foundPackage.name}
        destination={foundDestination.name}
      />
    </div>
  );
};

export default PackageDetail;
