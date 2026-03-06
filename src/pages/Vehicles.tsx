import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import {
  motion, AnimatePresence, useScroll, useTransform,
  useMotionValue, useSpring, useInView
} from "framer-motion";
import {
  Car, Users, Snowflake, Star, MapPin, ChevronRight, X, Check,
  Fuel, Luggage, Gauge, Shield, Zap, Award, Phone, Sparkles, ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { vehicles, vehicleCategories, destinationVehicleMap, type Vehicle } from "@/data/vehicles";

const allDestinations = Object.keys(destinationVehicleMap).sort();

const categoryIcons: Record<string, string> = {
  All: "🚗", Hatchback: "🚙", Sedan: "🚕", SUV: "🛻",
  Luxury: "✨", "Tempo Traveller": "🚐", "Mini Bus": "🚌", "Luxury Coach": "🚎",
};

const badgeColors: Record<string, string> = {
  "Most Popular": "from-primary to-orange-400",
  "Best Seller": "from-amber-500 to-yellow-400",
  "New": "from-accent to-blue-400",
  "Ultra Luxury": "from-purple-600 to-violet-400",
  "Premium": "from-slate-700 to-slate-500",
  "Most Booked": "from-primary to-rose-400",
  "Best for Groups": "from-emerald-600 to-teal-400",
  "Flagship": "from-rose-600 to-pink-400",
};

// ── 3D Tilt Card Hook ─────────────────────────────────────────────────────────
const useTilt = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glowBg = useTransform(
    [glowX, glowY],
    ([gx, gy]: number[]) => `radial-gradient(circle at ${gx}% ${gy}%, hsl(var(--primary)/0.18) 0%, transparent 60%)`
  );

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [x, y]);

  const onMouseLeave = useCallback(() => {
    x.set(0); y.set(0);
  }, [x, y]);

  return { ref, rotateX, rotateY, glowBg, onMouseMove, onMouseLeave };
};

// ── Glitch Text Component ─────────────────────────────────────────────────────
const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={glitching ? "opacity-0" : "opacity-100"} style={{ transition: "opacity 0.05s" }}>
        {text}
      </span>
      {glitching && (
        <>
          <span className="absolute inset-0 text-primary" style={{ clipPath: "inset(20% 0 60% 0)", transform: "translateX(-4px)" }}>
            {text}
          </span>
          <span className="absolute inset-0 text-accent" style={{ clipPath: "inset(60% 0 20% 0)", transform: "translateX(4px)" }}>
            {text}
          </span>
        </>
      )}
    </span>
  );
};

// ── Animated Counter ─────────────────────────────────────────────────────────
const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// ── 3D Vehicle Card ────────────────────────────────────────────────────────────
const VehicleCard = ({ vehicle, index, onClick }: { vehicle: Vehicle; index: number; onClick: () => void }) => {
  const { ref, rotateX, rotateY, glowBg, onMouseMove, onMouseLeave } = useTilt();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ delay: index * 0.06, duration: 0.5, type: "spring", stiffness: 120, damping: 18 }}
      style={{ perspective: 1000 }}
      className="cursor-pointer group"
      onClick={onClick}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative h-full"
      >
        {/* Glow spotlight on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10"
          style={{ background: glowBg }}
        />

        <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-border h-full flex flex-col">
          {/* Image */}
          <div className="relative overflow-hidden h-52">
            <motion.img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1449965408869-ebd13bc7b0b6?w=800&h=450&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />

            {/* Shimmer sweep on hover */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileHover={{ x: "200%", opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Type chip */}
            <div className="absolute top-3 left-3 z-20">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-background/90 backdrop-blur-md text-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow"
              >
                {categoryIcons[vehicle.type] || "🚗"} {vehicle.type}
              </motion.span>
            </div>

            {/* Badge */}
            {vehicle.badge && (
              <div className="absolute top-3 right-3 z-20">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full text-white bg-gradient-to-r ${badgeColors[vehicle.badge] || "from-primary to-orange-400"} shadow-lg`}>
                  {vehicle.badge}
                </span>
              </div>
            )}

            {/* Bottom vehicle info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-base font-bold text-background leading-tight">{vehicle.name}</h3>
              <div className="flex items-center gap-3 text-background/70 text-xs mt-1">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" />{vehicle.capacity}</span>
                <span className="flex items-center gap-1"><Snowflake className="w-3 h-3" />{vehicle.acType}</span>
                <span className="ml-auto font-semibold text-background">{vehicle.priceRange}</span>
              </div>
            </div>

            {/* Hover CTA overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-primary/25 backdrop-blur-[2px] flex items-center justify-center z-30"
            >
              <motion.span
                initial={{ scale: 0.8, y: 10 }}
                whileHover={{ scale: 1, y: 0 }}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-xl text-sm"
              >
                View Details <ChevronRight className="w-4 h-4" />
              </motion.span>
            </motion.div>
          </div>

          {/* Body */}
          <div className="p-4 flex-1 flex flex-col gap-3">
            <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">{vehicle.description}</p>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-muted/80 rounded-xl p-2 flex items-center gap-1.5">
                <Fuel className="w-3 h-3 text-primary flex-shrink-0" />
                <span className="text-xs text-muted-foreground truncate">{vehicle.specs.fuel}</span>
              </div>
              <div className="bg-muted/80 rounded-xl p-2 flex items-center gap-1.5">
                <Luggage className="w-3 h-3 text-primary flex-shrink-0" />
                <span className="text-xs text-muted-foreground truncate">{vehicle.specs.luggage}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {vehicle.bestFor.slice(0, 3).map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-lg font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Vehicle Modal ─────────────────────────────────────────────────────────────
const VehicleModal = ({ vehicle, onClose }: { vehicle: Vehicle; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-foreground/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl max-h-[95vh] overflow-y-auto shadow-2xl"
      >
        {/* Hero */}
        <div className="relative h-64 sm:h-72 overflow-hidden sm:rounded-t-3xl rounded-t-3xl">
          <motion.img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1449965408869-ebd13bc7b0b6?w=800&h=450&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors shadow-lg z-10"
          >
            <X className="w-4 h-4" />
          </button>

          {vehicle.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full text-white bg-gradient-to-r ${badgeColors[vehicle.badge] || "from-primary to-orange-400"}`}>
                ⭐ {vehicle.badge}
              </span>
            </div>
          )}

          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-background/60 text-xs mb-0.5">{vehicle.type}</p>
                <h2 className="text-2xl font-bold text-background">{vehicle.name}</h2>
                <div className="flex items-center gap-4 mt-1">
                  <span className="flex items-center gap-1.5 text-background/80 text-sm"><Users className="w-4 h-4" />{vehicle.capacity}</span>
                  <span className="flex items-center gap-1.5 text-background/80 text-sm"><Snowflake className="w-4 h-4" />{vehicle.acType}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-background/60 text-xs">Starting from</p>
                <p className="text-background font-bold text-xl">{vehicle.priceRange}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <p className="text-muted-foreground leading-relaxed text-sm">{vehicle.description}</p>

          {/* Specs */}
          <div>
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm">
              <Gauge className="w-4 h-4 text-primary" /> Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { icon: Fuel, label: "Fuel", value: vehicle.specs.fuel },
                { icon: Luggage, label: "Luggage", value: vehicle.specs.luggage },
                { icon: Car, label: "Doors", value: vehicle.specs.doors },
                { icon: Gauge, label: "Gearbox", value: vehicle.specs.transmission },
              ].map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="bg-muted rounded-2xl p-3 text-center"
                >
                  <Icon className="w-4 h-4 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-xs font-semibold text-foreground mt-0.5">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 text-primary" /> Features & Amenities
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {vehicle.features.map((f, i) => (
                <motion.span
                  key={f}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.04 }}
                  className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 rounded-xl px-3 py-2"
                >
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {f}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Best For */}
          <div>
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm">
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

          {/* Destinations */}
          <div>
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm">
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

          {/* CTAs */}
          <div className="flex gap-3 pt-1">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/919700650025?text=Hi! I'm interested in booking ${vehicle.name} for my trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-2xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30 text-sm"
            >
              <Zap className="w-4 h-4" /> Book on WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919700650025"
              className="flex items-center justify-center gap-2 bg-muted text-foreground px-5 py-3.5 rounded-2xl font-semibold hover:bg-muted/70 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" /> Call
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Floating Particles ─────────────────────────────────────────────────────────
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/40"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
        animate={{
          y: [0, -30, 0],
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// ── Main Page ─────────────────────────────────────────────────────────────────
const Vehicles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

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
    { icon: Car, label: "Vehicle Types", value: 8, suffix: "+" },
    { icon: Users, label: "Happy Travelers", value: 50, suffix: "K+" },
    { icon: MapPin, label: "Destinations", value: 20, suffix: "+" },
    { icon: Shield, label: "Safety Rating", value: 5, suffix: "★" },
  ];

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background overflow-x-hidden">

        {/* ── HERO ─────────────────────────────────────────── */}
        <div ref={heroRef} className="relative h-screen overflow-hidden">
          <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 origin-center">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop"
              alt="Vehicle fleet"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
          </motion.div>

          {/* Floating particles */}
          <FloatingParticles />

          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(hsl(var(--primary)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Glowing orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none"
          />

          <motion.div
            style={{ opacity: heroOpacity, y: titleY }}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
          >
            {/* Animated icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 180, delay: 0.2 }}
              whileHover={{ rotate: 10 }}
              className="w-20 h-20 rounded-2xl bg-primary/30 backdrop-blur-md border border-primary/40 flex items-center justify-center mb-6 shadow-2xl shadow-primary/50"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Car className="w-10 h-10 text-primary" />
              </motion.div>
            </motion.div>

            {/* Pill tag */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-5 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase tracking-widest">Premium Fleet 2025</span>
              <Sparkles className="w-3.5 h-3.5" />
            </motion.div>

            {/* Glitch title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-black text-background leading-none mb-4 tracking-tight"
            >
              Our{" "}
              <GlitchText text="Vehicle" className="text-primary" />
              <br />
              <span className="text-background/80">Fleet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-background/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            >
              17+ premium vehicles — from city hatchbacks to flagship luxury coaches, for every journey
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
            >
              {stats.map(({ icon: Icon, label, value, suffix }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-background/10 backdrop-blur-md border border-background/20 rounded-2xl px-5 py-4 text-center cursor-default"
                >
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-background font-black text-2xl tabular-nums">
                    <Counter to={value} suffix={suffix} />
                  </div>
                  <div className="text-background/60 text-xs mt-0.5">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-background/40 text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-5 h-8 rounded-full border-2 border-background/30 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-2 bg-primary rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── CATEGORY FILTER ────────────────────────────────── */}
        <section className="py-14 bg-muted/20 relative overflow-hidden">
          {/* Background text watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[200px] font-black text-foreground/[0.02] whitespace-nowrap">VEHICLES</span>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full"
              >
                Browse by Type
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3 mb-2">
                Choose Your
                <span className="text-primary"> Ride</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto text-sm">From compact city cars to flagship luxury coaches</p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {vehicleCategories.map((cat, i) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl text-center transition-all duration-300 border-2 overflow-hidden ${
                    selectedCategory === cat
                      ? "border-primary text-primary-foreground shadow-xl shadow-primary/30"
                      : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:shadow-lg"
                  }`}
                >
                  {selectedCategory === cat && (
                    <motion.div
                      layoutId="categoryBg"
                      className="absolute inset-0 bg-gradient-to-br from-primary to-orange-400 -z-10"
                    />
                  )}
                  <motion.span
                    animate={selectedCategory === cat ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.4 }}
                    className="text-2xl"
                  >
                    {categoryIcons[cat] || "🚗"}
                  </motion.span>
                  <span className="text-xs font-bold leading-tight">{cat}</span>
                  {selectedCategory === cat && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-white/70"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESTINATION FILTER ────────────────────────────── */}
        <section className="container-custom py-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 flex-wrap"
          >
            <div className="flex items-center gap-1.5 mr-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-foreground">Destination:</span>
            </div>
            {["All", ...allDestinations].map((dest) => (
              <motion.button
                key={dest}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDestination(dest)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  selectedDestination === dest
                    ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {dest === "All" ? "🌐 All" : dest}
              </motion.button>
            ))}
          </motion.div>
        </section>

        {/* ── VEHICLE GRID ──────────────────────────────────── */}
        <section className="container-custom pb-20">
          <div className="flex items-center justify-between mb-8">
            <motion.div
              key={`${selectedCategory}-${selectedDestination}`}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-orange-400 rounded-full" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Results</p>
                <p className="font-black text-xl text-foreground">
                  {filteredVehicles.length} Vehicle{filteredVehicles.length !== 1 ? "s" : ""}
                  {selectedCategory !== "All" && <span className="text-primary"> · {selectedCategory}</span>}
                </p>
              </div>
            </motion.div>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredVehicles.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-24"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="text-7xl mb-4"
                >🚗</motion.div>
                <p className="text-muted-foreground text-lg font-medium">No vehicles for this combination</p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSelectedDestination("All"); }}
                  className="mt-4 text-primary hover:underline text-sm font-semibold"
                >
                  ← Clear filters
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

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-24">
          {/* Animated background */}
          <div className="absolute inset-0 bg-foreground">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-5"
              style={{
                backgroundImage: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))"
              }}
            />
          </div>
          <FloatingParticles />

          {/* Orbs */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], x: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/30 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"
          />

          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-6xl mb-5 inline-block"
              >
                🚀
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black text-background mb-4 leading-tight">
                Need a Custom<br />
                <span className="text-primary">Fleet?</span>
              </h2>
              <p className="text-background/60 max-w-lg mx-auto mb-10 text-base">
                Weddings, corporate convoys, multi-city tours — we handle any scale with dedicated 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px hsl(var(--primary)/0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/919700650025?text=Hi! I need a custom vehicle package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold text-base shadow-2xl shadow-primary/30"
                >
                  <Zap className="w-5 h-5" /> Chat on WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:+919700650025"
                  className="inline-flex items-center gap-2 bg-background/10 border border-background/20 backdrop-blur-sm text-background px-8 py-4 rounded-2xl font-bold text-base hover:bg-background/20 transition-colors"
                >
                  <Phone className="w-5 h-5" /> +91 9700650025
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modal */}
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
