import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Destination } from "@/data/destinations";

interface DestinationGridProps {
  title: string;
  destinations: Destination[];
  sectionId: string;
}

const DestinationGrid = ({ title, destinations, sectionId }: DestinationGridProps) => {
  return (
    <section id={sectionId} className="py-16 md:py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={destination.link} className="destination-card block h-64 md:h-72">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="destination-overlay">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold font-display mb-1"
                    whileHover={{ x: 5 }}
                  >
                    {destination.name}
                  </motion.h3>
                  <p className="text-sm text-white/80 mb-3">{destination.description}</p>
                  <span className="text-primary font-medium text-sm hover:underline">
                    View All Packages →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;
