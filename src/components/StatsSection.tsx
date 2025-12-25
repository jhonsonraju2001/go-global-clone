import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award, UsersRound } from "lucide-react";
import { stats } from "@/data/destinations";

const iconMap: { [key: string]: React.ReactNode } = {
  users: <Users className="w-12 h-12" />,
  globe: <Globe className="w-12 h-12" />,
  award: <Award className="w-12 h-12" />,
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-r from-foreground via-foreground/95 to-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card text-white"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                className="flex justify-center mb-4 text-primary"
              >
                {stat.icon === "users" && index === 0 && <Users className="w-12 h-12" />}
                {stat.icon === "globe" && <Globe className="w-12 h-12" />}
                {stat.icon === "award" && <Award className="w-12 h-12" />}
                {stat.icon === "users" && index === 3 && <UsersRound className="w-12 h-12" />}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="text-2xl md:text-3xl font-bold mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
