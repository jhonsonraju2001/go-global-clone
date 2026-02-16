import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "919700650025";
  const message = "Hi! I'm interested in Alison Holidays & Events travel packages. Can you help me plan my trip?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-full right-0 mb-3 bg-white rounded-lg shadow-lg p-3 whitespace-nowrap"
          >
            <p className="text-sm font-medium text-foreground">Need Help? Chat with us!</p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float flex items-center justify-center"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
