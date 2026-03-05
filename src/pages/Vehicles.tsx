import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Car, Users, Snowflake, Star, MapPin, ChevronRight, X, Check,
  Fuel, Luggage, Gauge, Shield, Zap, Award, Phone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { vehicles, vehicleCategories, destinationVehicleMap, type Vehicle } from "@/data/vehicles";

const allDestinations = Object.keys(destinationVehicleMap).sort();

const categoryIcons: Record<string, string> = {
  All: "🚗",
  Hatchback: "🚙",
  Sedan: "🚕",
  SUV: "🛻",
  Luxury: "✨",
  "Tempo Traveller": "🚐",
  "Mini Bus": "🚌",
  "Luxury Coach": "🚎",
};

const badgeColors: Record<string, string> = {
  "Most Popular": "bg-primary text-primary-foreground",
  "Best Seller": "bg-amber-500 text-white",
  "New": "bg-accent text-accent-foreground",
  "Ultra Luxury": "bg-purple-600 text-white",
  "Premium": "bg-slate-800 text-white",
  "Most Booked": "bg-primary text-primary-foreground",
  "Best for Groups": "bg-emerald-600 text-white",
  "Flagship": "bg-rose-600 text-white",
};

const VehicleCard = ({ vehicle, index, onClick }: { vehicle: Vehicle; index: number; onClick: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.85 }}
    transition={{ delay: index * 0.07, duration: 0.5, type: "spring", stiffness: 100 }}
    whileHover={{ y: -10 }}
    onClick={onClick}
    className="group cursor-pointer relative"
  >
    <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1449965408869-ebd13bc7b0b6?w=800&h=450&fit=crop";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        {/* Type badge top-left */}
        <div className="absolute top-4 left-4">
          <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span>{categoryIcons[vehicle.type] || "🚗"}</span>
            {vehicle.type}
          </span>
        </div>

        {/* Special badge top-right */}
        {vehicle.badge && (
          <div className="absolute top-4 right-4">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${badgeColors[vehicle.badge] || "bg-primary text-primary-foreground"}`}>
              {vehicle.badge}
            </span>
          </div>
        )}

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-lg font-bold text-background leading-tight">{vehicle.name}</h3>
              <div className="flex items-center gap-3 text-background/80 text-xs mt-1">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" />{vehicle.capacity}</span>
                <span className="flex items-center gap-1"><Snowflake className="w-3 h-3" />{vehicle.acType}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-background text-xs opacity-70">Starting</div>
              <div className="text-background font-bold text-sm">{vehicle.priceRange}</div>
            </div>
          </div>
        </div>

        {/* Hover CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
            View Details <ChevronRight className="w-4 h-4" />
          </span>
        </motion.div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col gap-3">
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{vehicle.description}</p>

        {/* Specs row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-muted rounded-xl p-2.5 flex items-center gap-2">
            <Fuel className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-xs text-muted-foreground truncate">{vehicle.specs.fuel}</span>
          </div>
          <div className="bg-muted rounded-xl p-2.5 flex items-center gap-2">
            <Luggage className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-xs text-muted-foreground truncate">{vehicle.specs.luggage}</span>
          </div>
        </div>

        {/* Best for tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {vehicle.bestFor.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-lg font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const VehicleModal = ({ vehicle, onClose }: { vehicle: Vehicle; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-md"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.85, opacity: 0, y: 30 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
    >
      {/* Hero image */}
      <div className="relative h-72 overflow-hidden rounded-t-3xl">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1449965408869-ebd13bc7b0b6?w=800&h=450&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>
        {vehicle.badge && (
          <div className="absolute top-4 left-4">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${badgeColors[vehicle.badge] || "bg-primary text-primary-foreground"}`}>
              ⭐ {vehicle.badge}
            </span>
          </div>
        )}
        <div className="absolute bottom-5 left-6 right-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-background/70 text-sm">{vehicle.type}</span>
              <h2 className="text-2xl font-bold text-background">{vehicle.name}</h2>
              <div className="flex items-center gap-4 text-background/80 text-sm mt-1">
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{vehicle.capacity}</span>
                <span className="flex items-center gap-1.5"><Snowflake className="w-4 h-4" />{vehicle.acType}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-background/60 text-xs">Starting from</div>
              <div className="text-background font-bold text-xl">{vehicle.priceRange}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>

        {/* Specs grid */}
        <div>
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Gauge className="w-4 h-4 text-primary" /> Specifications
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Fuel, label: "Fuel", value: vehicle.specs.fuel },
              { icon: Luggage, label: "Luggage", value: vehicle.specs.luggage },
              { icon: Car, label: "Doors", value: vehicle.specs.doors },
              { icon: Gauge, label: "Gearbox", value: vehicle.specs.transmission },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-muted rounded-2xl p-3 text-center">
                <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="text-sm font-semibold text-foreground">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" /> Features & Amenities
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {vehicle.features.map((f) => (
              <span key={f} className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-xl px-3 py-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0" /> {f}
              </span>
            ))}
          </div>
        </div>

        {/* Available Destinations */}
        <div>
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" /> Available For
          </h3>
          <div className="flex flex-wrap gap-2">
            {vehicle.destinations.map((d) => (
              <span key={d} className="text-xs bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 rounded-full font-medium">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Best For */}
        <div>
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" /> Best For
          </h3>
          <div className="flex flex-wrap gap-2">
            {vehicle.bestFor.map((b) => (
              <span key={b} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 pt-2">
          <a
            href={`https://wa.me/919700650025?text=Hi! I'm interested in booking ${vehicle.name} for my trip.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-2xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            <Zap className="w-4 h-4" /> Book on WhatsApp
          </a>
          <a
            href="tel:+919700650025"
            className="flex items-center justify-center gap-2 bg-muted text-foreground px-6 py-3.5 rounded-2xl font-semibold hover:bg-muted/70 transition-colors"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

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
    if (selectedCategory !== "All") result = result.filter((v) => v.type === selectedCategory);
    if (selectedDestination !== "All") {
      const ids = destinationVehicleMap[selectedDestination] || [];
      result = result.filter((v) => ids.includes(v.id));
    }
    return result;
  }, [selectedCategory, selectedDestination]);

  const stats = [
    { icon: Car, label: "Vehicle Types", value: "8+" },
    { icon: Users, label: "Happy Travelers", value: "50K+" },
    { icon: MapPin, label: "Destinations", value: "20+" },
    { icon: Shield, label: "Safety Rating", value: "5★" },
  ];

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background">

        {/* ── HERO ─────────────────────────────────────────── */}
        <div ref={heroRef} className="relative h-[75vh] overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1449965408869-ebd13bc7b0b6?w=1920&h=1080&fit=crop"
              alt="Fleet of vehicles"
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
            {/* Animated colored orbs */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </motion.div>

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 rounded-full bg-primary/30 backdrop-blur-sm border border-primary/40 flex items-center justify-center mb-6 shadow-2xl shadow-primary/40"
            >
              <Car className="w-12 h-12 text-primary-foreground" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 bg-primary/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary/30"
            >
              Premium Fleet
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-background mb-4 leading-tight"
            >
              Our Vehicle Fleet
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-background/80 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              From hatchbacks to luxury coaches — 17+ premium vehicles for every destination, group size & budget
            </motion.p>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            >
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-2xl px-5 py-4 text-center">
                  <Icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <div className="text-background font-bold text-xl">{value}</div>
                  <div className="text-background/60 text-xs">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── CATEGORY SHOWCASE ─────────────────────────────── */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Browse by Category</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Choose the right vehicle for your journey — from compact city cars to flagship luxury coaches</p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {vehicleCategories.map((cat, i) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl text-center transition-all duration-300 border-2 ${
                    selectedCategory === cat
                      ? "bg-primary border-primary text-primary-foreground shadow-xl shadow-primary/30"
                      : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <span className="text-2xl">{categoryIcons[cat] || "🚗"}</span>
                  <span className="text-xs font-semibold leading-tight">{cat}</span>
                  {selectedCategory === cat && (
                    <motion.div
                      layoutId="categoryActive"
                      className="absolute inset-0 rounded-2xl bg-primary -z-10"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESTINATION FILTER ────────────────────────────── */}
        <section className="container-custom py-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 flex-wrap"
          >
            <div className="flex items-center gap-2 mr-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-foreground">Filter by destination:</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDestination("All")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                selectedDestination === "All"
                  ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border-border text-muted-foreground hover:border-primary/50"
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
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                  selectedDestination === dest
                    ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {dest}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* ── VEHICLE GRID ──────────────────────────────────── */}
        <section className="container-custom pb-16">
          <div className="flex items-center justify-between mb-6">
            <motion.h3
              key={`${selectedCategory}-${selectedDestination}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg font-bold text-foreground"
            >
              {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? "s" : ""} available
              {selectedCategory !== "All" ? ` · ${selectedCategory}` : ""}
              {selectedDestination !== "All" ? ` · ${selectedDestination}` : ""}
            </motion.h3>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredVehicles.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <div className="text-6xl mb-4">🚗</div>
                <p className="text-muted-foreground text-lg font-medium">No vehicles match this combination.</p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSelectedDestination("All"); }}
                  className="mt-4 text-primary hover:underline text-sm"
                >
                  Clear all filters
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle, index) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    index={index}
                    onClick={() => setSelectedVehicle(vehicle)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── CTA SECTION ───────────────────────────────────── */}
        <section className="relative overflow-hidden bg-foreground text-background py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Need a Custom Fleet Arrangement?</h2>
              <p className="text-background/70 max-w-xl mx-auto mb-10 text-lg">
                Weddings, corporate convoys, multi-city tours — we handle all scales with dedicated support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919700650025?text=Hi! I need a custom vehicle package for my trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-primary/30 text-lg"
                >
                  <Zap className="w-5 h-5" /> Chat on WhatsApp
                </a>
                <a
                  href="tel:+919700650025"
                  className="inline-flex items-center gap-2 bg-background/10 border border-background/20 backdrop-blur-sm text-background px-8 py-4 rounded-2xl font-bold hover:bg-background/20 transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" /> +91 9700650025
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── VEHICLE DETAIL MODAL ──────────────────────────── */}
        <AnimatePresence>
          {selectedVehicle && (
            <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </PageTransition>
  );
};

export default Vehicles;
