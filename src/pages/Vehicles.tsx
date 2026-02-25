import { useState, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Car, Users, Snowflake, Star, MapPin, ChevronRight, X, Check, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { vehicles, vehicleCategories, destinationVehicleMap, type Vehicle } from "@/data/vehicles";

const allDestinations = Object.keys(destinationVehicleMap).sort();

const Vehicles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const filteredVehicles = useMemo(() => {
    let result = vehicles;
    if (selectedCategory !== "All") {
      result = result.filter((v) => v.type === selectedCategory);
    }
    if (selectedDestination !== "All") {
      const vehicleIds = destinationVehicleMap[selectedDestination] || [];
      result = result.filter((v) => vehicleIds.includes(v.id));
    }
    return result;
  }, [selectedCategory, selectedDestination]);

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <div ref={heroRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1449965408869-ebd13bc7b0b6?w=1920&h=1080&fit=crop"
              alt="Fleet of vehicles"
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
          </motion.div>
          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-6"
            >
              <Car className="w-10 h-10 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-background mb-4"
            >
              Our Vehicle Fleet
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-background/80 text-lg md:text-xl max-w-2xl"
            >
              From sedans to luxury coaches — travel in comfort across every destination
            </motion.p>
          </motion.div>
        </div>

        {/* Filters */}
        <section className="container-custom py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Category Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Vehicle Type</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {vehicleCategories.map((cat) => (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Destination Filter */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Destination</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDestination("All")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDestination === "All"
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  All Destinations
                </motion.button>
                {allDestinations.map((dest) => (
                  <motion.button
                    key={dest}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDestination(dest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedDestination === dest
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {dest}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Vehicle Grid */}
        <section className="container-custom pb-20">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <Car className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">No vehicles available for this combination.</p>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    layout
                    initial={{ opacity: 0, y: 40, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.08, duration: 0.5, type: "spring" }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 border border-border"
                  >
                    <div className="relative overflow-hidden h-52">
                      <motion.img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                          {vehicle.type}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                          {vehicle.priceRange}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                        <span className="text-background text-sm font-medium flex items-center gap-1">
                          View Details <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-foreground mb-1">{vehicle.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" /> {vehicle.capacity}
                        </span>
                        <span className="flex items-center gap-1">
                          <Snowflake className="w-4 h-4" /> {vehicle.acType}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2">{vehicle.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {vehicle.bestFor.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Vehicle Package?</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Contact us for customized fleet arrangements for weddings, corporate events, or multi-city tours.
              </p>
              <a
                href="https://wa.me/919700650025?text=Hi! I'm interested in booking a vehicle."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Get a Quote on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* Vehicle Detail Modal */}
        <AnimatePresence>
          {selectedVehicle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/70 backdrop-blur-sm"
              onClick={() => setSelectedVehicle(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full">
                      {selectedVehicle.type}
                    </span>
                    <span className="bg-background text-foreground text-sm font-bold px-4 py-2 rounded-full">
                      {selectedVehicle.priceRange}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{selectedVehicle.name}</h2>
                    <div className="flex items-center gap-4 text-muted-foreground mt-2">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {selectedVehicle.capacity}</span>
                      <span className="flex items-center gap-1"><Snowflake className="w-4 h-4" /> {selectedVehicle.acType}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{selectedVehicle.description}</p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" /> Features
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedVehicle.features.map((f) => (
                        <span key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" /> Available Destinations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedVehicle.destinations.map((d) => (
                        <span key={d} className="text-xs bg-accent text-accent-foreground px-3 py-1.5 rounded-full">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Best For</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedVehicle.bestFor.map((b) => (
                        <span key={b} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919700650025?text=Hi! I'm interested in booking ${selectedVehicle.name} for my trip.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    Book This Vehicle
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </PageTransition>
  );
};

export default Vehicles;
