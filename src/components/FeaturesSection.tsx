import { motion } from "framer-motion";
import { Plane, Shield, Award, Clock, HeadphonesIcon, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "99.9% Visa Success",
    description: "Highest visa success rate in the industry with expert documentation support."
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "We promise the best prices with no hidden costs on all our packages."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your travel needs."
  },
  {
    icon: Globe,
    title: "1000+ Destinations",
    description: "Explore destinations across India and around the world."
  },
  {
    icon: Plane,
    title: "Customized Packages",
    description: "Tailor-made travel packages designed just for you."
  },
  {
    icon: Clock,
    title: "Hassle-Free Booking",
    description: "Quick and easy booking process with instant confirmation."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-2 block">Why Choose Us</span>
          <h2 className="section-title mb-4">Best Tours & Travel Agency in Hyderabad</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're seeking a romantic escape, a fun-filled family vacation, or a solo exploration of new destinations, we craft personalized itineraries designed to surpass your dreams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
