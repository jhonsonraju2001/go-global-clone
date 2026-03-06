import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import {
  motion, AnimatePresence, useScroll, useTransform,
  useMotionValue, useSpring, useInView, useAnimationFrame
} from "framer-motion";
import {
  Car, Users, Snowflake, MapPin, ChevronRight, X, Check,
  Fuel, Luggage, Gauge, Shield, Zap, Award, Phone, Sparkles, ArrowRight, Star
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

const badgeGradients: Record<string, string> = {
  "Most Popular": "from-primary to-orange-400",
  "Best Seller": "from-amber-500 to-yellow-400",
  "New": "from-accent to-blue-400",
  "Ultra Luxury": "from-purple-600 to-violet-400",
  "Premium": "from-slate-700 to-slate-500",
  "Most Booked": "from-primary to-rose-400",
  "Best for Groups": "from-emerald-600 to-teal-400",
  "Flagship": "from-rose-600 to-pink-400",
};

// ── Word reveal animation ────────────────────────────────────────────
const WordReveal = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.7, delay: delay + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// ── Infinite marquee strip ───────────────────────────────────────────
const MARQUEE_ITEMS = ["HATCHBACK", "SEDAN", "SUV", "LUXURY", "TEMPO TRAVELLER", "MINI BUS", "LUXURY COACH", "INNOVA CRYSTA", "FORTUNER", "VELLFIRE"];

const Marquee = ({ reverse = false }) => {
  const x = useMotionValue(0);
  const speed = reverse ? 0.4 : -0.4;

  useAnimationFrame(() => {
    x.set(x.get() + speed);
    if (x.get() < -800) x.set(0);
    if (x.get() > 0) x.set(-800);
  });

  return (
    <div className="overflow-hidden py-3 border-y border-primary/20">
      <motion.div style={{ x }} className="flex gap-8 whitespace-nowrap w-max">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.25em] text-foreground/30">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// ── Magnetic 3D Card ────────────────────────────────────────────────
const MagneticCard = ({ vehicle, index, onClick }: { vehicle: Vehicle; index: number; onClick: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 400, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 400, damping: 25 });
  const shadowX = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const shadowY = useTransform(y, [-0.5, 0.5], [-20, 20]);
  const shimX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const shimY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  // Pre-compute all derived motion values at top level (no hooks in JSX)
  const boxShadow = useTransform(
    [shadowX, shadowY],
    ([sx, sy]: number[]) =>
      `${sx}px ${sy}px 40px hsl(var(--primary)/0.25), 0 4px 20px hsl(var(--foreground)/0.08)`
  );
  const shimmerBg = useTransform(
    [shimX, shimY],
    ([sx, sy]: string[]) =>
      `radial-gradient(circle at ${sx} ${sy}, hsl(var(--primary)/0.12) 0%, transparent 55%)`
  );
  const imgScale = useTransform(y, [-0.5, 0.5], [1.06, 1.0]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0); y.set(0);
    setIsHovered(false);
  }, [x, y]);

  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", boxShadow }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className="rounded-[24px] overflow-hidden bg-card border border-border h-full flex flex-col"
      >
        {/* Shimmer overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-20 rounded-[24px] transition-opacity duration-300"
          style={{ background: shimmerBg }}
        />

        {/* Image area */}
        <div className="relative overflow-hidden h-52 flex-shrink-0">
          <motion.img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
            style={{ scale: imgScale }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=450&fit=crop";
            }}
          />
          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Shimmer sweep */}
          <motion.div
            initial={{ x: "-100%", skewX: -15 }}
            whileHover={{ x: "250%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
          />

          {/* Type badge */}
          <div className="absolute top-3 left-3 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.07 + 0.3 }}
              className="bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/10"
            >
              {categoryIcons[vehicle.type] || "🚗"} {vehicle.type}
            </motion.div>
          </div>

          {/* Badge */}
          {vehicle.badge && (
            <div className="absolute top-3 right-3 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: -5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.07 + 0.4 }}
                className={`text-[10px] font-black px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${badgeGradients[vehicle.badge] || "from-primary to-orange-400"} shadow-lg`}
              >
                ✦ {vehicle.badge}
              </motion.div>
            </div>
          )}

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10">
            <motion.h3
              className="text-sm font-black text-white leading-tight"
              style={{ translateZ: 20 }}
            >
              {vehicle.name}
            </motion.h3>
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-2 text-white/60 text-[10px]">
                <span className="flex items-center gap-1"><Users className="w-2.5 h-2.5" />{vehicle.capacity}</span>
                <span className="flex items-center gap-1"><Snowflake className="w-2.5 h-2.5" />{vehicle.acType}</span>
              </div>
              <span className="text-primary font-black text-xs">{vehicle.priceRange}</span>
            </div>
          </div>

          {/* Hover CTA */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center z-30 bg-primary/20 backdrop-blur-[3px]"
              >
                <motion.div
                  initial={{ scale: 0.6, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.6, y: 15 }}
                  className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-black text-xs flex items-center gap-2 shadow-2xl"
                >
                  Explore <ChevronRight className="w-3.5 h-3.5" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card body */}
        <div className="p-4 flex-1 flex flex-col gap-3">
          <p className="text-muted-foreground text-[11px] line-clamp-2 leading-relaxed">{vehicle.description}</p>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-muted/60 rounded-xl p-2 flex items-center gap-1.5">
              <Fuel className="w-3 h-3 text-primary" />
              <span className="text-[10px] text-muted-foreground truncate">{vehicle.specs.fuel}</span>
            </div>
            <div className="bg-muted/60 rounded-xl p-2 flex items-center gap-1.5">
              <Luggage className="w-3 h-3 text-primary" />
              <span className="text-[10px] text-muted-foreground truncate">{vehicle.specs.luggage}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mt-auto">
            {vehicle.bestFor.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-md font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Vehicle Modal (bottom sheet) ──────────────────────────────────────
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl"
      >
        {/* Hero image */}
        <div className="relative h-64 sm:h-72 overflow-hidden sm:rounded-t-3xl rounded-t-3xl flex-shrink-0">
          <motion.img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=450&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 text-white transition z-10">
            <X className="w-4 h-4" />
          </button>
          {vehicle.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span className={`text-[10px] font-black px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${badgeGradients[vehicle.badge] || "from-primary to-orange-400"}`}>
                ✦ {vehicle.badge}
              </span>
            </div>
          )}
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-white/50 text-xs">{vehicle.type}</p>
                <h2 className="text-xl font-black text-white">{vehicle.name}</h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-white/60 text-xs"><Users className="w-3.5 h-3.5" />{vehicle.capacity}</span>
                  <span className="flex items-center gap-1 text-white/60 text-xs"><Snowflake className="w-3.5 h-3.5" />{vehicle.acType}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-[10px]">Starting from</p>
                <p className="text-white font-black text-lg">{vehicle.priceRange}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 space-y-5">
          <p className="text-muted-foreground text-sm leading-relaxed">{vehicle.description}</p>

          {/* Specs */}
          <div>
            <h3 className="font-black text-foreground mb-3 text-sm flex items-center gap-2">
              <Gauge className="w-4 h-4 text-primary" /> Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { icon: Fuel, label: "Fuel", value: vehicle.specs.fuel },
                { icon: Luggage, label: "Luggage", value: vehicle.specs.luggage },
                { icon: Car, label: "Doors", value: vehicle.specs.doors },
                { icon: Gauge, label: "Gearbox", value: vehicle.specs.transmission },
              ].map(({ icon: Icon, label, value }, i) => (
                <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                  className="bg-muted rounded-2xl p-3 text-center">
                  <Icon className="w-4 h-4 text-primary mx-auto mb-1" />
                  <p className="text-[10px] text-muted-foreground">{label}</p>
                  <p className="text-xs font-black text-foreground mt-0.5">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-black text-foreground mb-3 text-sm flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" /> Features
            </h3>
            <div className="grid grid-cols-2 gap-1.5">
              {vehicle.features.map((f, i) => (
                <motion.span key={f} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 rounded-xl px-3 py-2">
                  <Check className="w-3 h-3 text-primary flex-shrink-0" /> {f}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Best For */}
          <div>
            <h3 className="font-black text-foreground mb-3 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" /> Best For
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {vehicle.bestFor.map((b) => (
                <span key={b} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-bold">{b}</span>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-black text-foreground mb-3 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Available For
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {vehicle.destinations.map((d) => (
                <span key={d} className="text-xs bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 rounded-full font-medium">{d}</span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-2 pt-1">
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              href={`https://wa.me/919700650025?text=Hi! I'm interested in booking ${vehicle.name}.`}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-2xl font-black text-sm shadow-lg shadow-primary/30">
              <Zap className="w-4 h-4" /> Book on WhatsApp
            </motion.a>
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              href="tel:+919700650025"
              className="flex items-center justify-center gap-2 bg-muted text-foreground px-5 py-3.5 rounded-2xl font-black text-sm">
              <Phone className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Animated counter ─────────────────────────────────────────────────
const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = to / 45;
    const t = setInterval(() => {
      cur += step;
      if (cur >= to) { setCount(to); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 28);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
};

// ── Main Page ─────────────────────────────────────────────────────────
const Vehicles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const filteredVehicles = useMemo(() => {
    let r = vehicles;
    if (selectedCategory !== "All") r = r.filter((v) => v.type === selectedCategory);
    if (selectedDestination !== "All") {
      const ids = destinationVehicleMap[selectedDestination] || [];
      r = r.filter((v) => ids.includes(v.id));
    }
    return r;
  }, [selectedCategory, selectedDestination]);

  const stats = [
    { label: "Vehicle Types", value: 8, suffix: "+", icon: Car },
    { label: "Happy Travelers", value: 50, suffix: "K+", icon: Users },
    { label: "Destinations", value: 20, suffix: "+", icon: MapPin },
    { label: "Safety Rating", value: 5, suffix: "★", icon: Shield },
  ];

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-background overflow-x-hidden">

        {/* ══ CINEMATIC HERO ═══════════════════════════════════════════ */}
        <div ref={heroRef} className="relative h-screen overflow-hidden bg-black">

          {/* Parallax BG */}
          <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop&q=90"
              alt="Luxury car"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
          </motion.div>

          {/* Animated noise grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px",
            }}
          />

          {/* Glowing orbs */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], x: [0, 30, 0], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.3], x: [0, -20, 0], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px] pointer-events-none"
          />

          {/* Horizontal line accents */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left pointer-events-none"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[25%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left pointer-events-none"
          />

          {/* Hero content */}
          <motion.div
            style={{ y: textY, opacity }}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
          >
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 border border-primary/40 bg-primary/10 backdrop-blur-md text-primary px-4 py-1.5 rounded-full mb-8 text-[11px] font-black uppercase tracking-[0.2em]"
            >
              <Sparkles className="w-3 h-3" /> Premium Fleet 2025 <Sparkles className="w-3 h-3" />
            </motion.div>

            {/* Massive title with word reveal */}
            <div className="mb-6 leading-[0.9]">
              <div className="block text-[clamp(60px,12vw,130px)] font-black text-white tracking-tighter">
                <WordReveal text="OUR" delay={0.4} />
              </div>
              <div className="block text-[clamp(60px,12vw,130px)] font-black tracking-tighter" style={{ WebkitTextStroke: "2px hsl(var(--primary))", color: "transparent" }}>
                <WordReveal text="VEHICLE" delay={0.55} />
              </div>
              <div className="block text-[clamp(60px,12vw,130px)] font-black text-primary tracking-tighter">
                <WordReveal text="FLEET" delay={0.7} />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="text-white/50 text-base md:text-lg max-w-xl mb-12 leading-relaxed"
            >
              17+ premium vehicles — from city hatchbacks to flagship luxury coaches
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl"
            >
              {stats.map(({ label, value, suffix, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.06, y: -4 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center"
                >
                  <Icon className="w-4 h-4 text-primary mx-auto mb-2" />
                  <div className="text-white font-black text-2xl tabular-nums">
                    <Counter to={value} suffix={suffix} />
                  </div>
                  <div className="text-white/40 text-[10px] mt-0.5 uppercase tracking-wider">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll mouse indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="w-6 h-9 rounded-full border-2 border-white/25 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 bg-primary rounded-full" />
            </motion.div>
            <span className="text-white/30 text-[10px] uppercase tracking-widest">Scroll</span>
          </motion.div>
        </div>

        {/* ══ TICKER MARQUEE ═══════════════════════════════════════════ */}
        <div className="bg-background">
          <Marquee />
          <Marquee reverse />
        </div>

        {/* ══ CATEGORY FILTER ══════════════════════════════════════════ */}
        <section className="py-14 relative overflow-hidden">
          {/* Giant watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[20vw] font-black text-foreground/[0.025] whitespace-nowrap leading-none">FLEET</span>
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center mb-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-black text-xs uppercase tracking-[0.25em] mb-3"
              >
                ✦ Browse by Type ✦
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-foreground"
              >
                Choose Your <span className="text-primary">Ride</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
              {vehicleCategories.map((cat, i) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 260 }}
                  whileHover={{ scale: 1.07, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 overflow-hidden transition-colors duration-200 ${
                    selectedCategory === cat
                      ? "border-primary text-primary-foreground"
                      : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {selectedCategory === cat && (
                    <motion.div layoutId="catBg" className="absolute inset-0 bg-gradient-to-br from-primary to-orange-400" />
                  )}
                  <span className="relative z-10 text-xl">{categoryIcons[cat]}</span>
                  <span className="relative z-10 text-[10px] font-black leading-tight text-center">{cat}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ══ DESTINATION PILLS ════════════════════════════════════════ */}
        <section className="container-custom pb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-black text-foreground uppercase tracking-wider">Destination:</span>
            </div>
            {["All", ...allDestinations].map((dest) => (
              <motion.button
                key={dest}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setSelectedDestination(dest)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200 border ${
                  selectedDestination === dest
                    ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {dest === "All" ? "🌐 All" : dest}
              </motion.button>
            ))}
          </div>
        </section>

        {/* ══ VEHICLE GRID ═════════════════════════════════════════════ */}
        <section className="container-custom pb-24">
          {/* Results label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedDestination}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-orange-400 rounded-full" />
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Showing</p>
                <p className="font-black text-xl text-foreground leading-tight">
                  {filteredVehicles.length} Vehicle{filteredVehicles.length !== 1 ? "s" : ""}
                  {selectedCategory !== "All" && <span className="text-primary"> · {selectedCategory}</span>}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            {filteredVehicles.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  className="text-7xl mb-4 inline-block"
                >
                  🚗
                </motion.div>
                <p className="text-muted-foreground font-bold">No vehicles for this combination</p>
                <button
                  onClick={() => { setSelectedCategory("All"); setSelectedDestination("All"); }}
                  className="mt-4 text-primary text-sm font-black hover:underline"
                >
                  ← Clear filters
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredVehicles.map((vehicle, i) => (
                  <MagneticCard key={vehicle.id} vehicle={vehicle} index={i} onClick={() => setSelectedVehicle(vehicle)} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ══ CTA SECTION ══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-28 bg-black">
          {/* Conic gradient bg */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square opacity-10 pointer-events-none"
            style={{ background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), transparent, hsl(var(--primary)))" }}
          />
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"
          />

          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-xs font-black uppercase tracking-[0.25em] mb-4">✦ Custom Fleet ✦</p>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
                Need a<br /><span className="text-primary">Custom Fleet?</span>
              </h2>
              <p className="text-white/40 max-w-md mx-auto mb-10 text-sm leading-relaxed">
                Weddings, corporate convoys, multi-city tours — we handle any scale with 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px hsl(var(--primary)/0.6)" }}
                  whileTap={{ scale: 0.96 }}
                  href="https://wa.me/919700650025?text=Hi! I need a custom vehicle package."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-black text-sm shadow-2xl shadow-primary/40"
                >
                  <Zap className="w-4 h-4" /> Chat on WhatsApp <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.96 }}
                  href="tel:+919700650025"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-8 py-4 rounded-2xl font-black text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" /> +91 9700650025
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
