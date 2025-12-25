import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
}

const InquiryModal = ({ isOpen, onClose, packageName }: InquiryModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", travelers: "", message: "" });
    setIsSubmitting(false);
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-primary p-6 text-center">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-white">
                  GO<span className="text-accent">GL</span>O<span className="text-white">BAL</span>
                </span>
              </div>
              <p className="text-white/80 text-sm">VACATIONS</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {packageName && (
                <p className="text-center text-muted-foreground text-sm mb-4">
                  Inquiry for: <span className="font-medium text-foreground">{packageName}</span>
                </p>
              )}

              <Input
                name="name"
                placeholder="Your name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="h-12"
              />

              <Input
                name="email"
                type="email"
                placeholder="Your email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-12"
              />

              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
                className="h-12"
              />

              <Input
                name="travelers"
                type="number"
                placeholder="Traveler Count*"
                value={formData.travelers}
                onChange={handleChange}
                required
                min="1"
                className="h-12"
              />

              <Textarea
                name="message"
                placeholder="Your message (optional)"
                value={formData.message}
                onChange={handleChange}
                rows={3}
              />

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-lg font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;
