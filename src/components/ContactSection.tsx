import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setIsSubmitting(false);
  };
  return <section className="py-16 md:py-20 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <span className="text-primary font-medium mb-2 block">Get In Touch</span>
            <h2 className="section-title mb-6">Let's Plan Your Dream Vacation</h2>
            <p className="text-muted-foreground mb-8">
              Ready to explore the world? Contact us today and let our travel experts create the perfect itinerary for you. We're here to make your travel dreams come true!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground text-sm">
                    Abids, Hyderabad, Telangana 500001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <a href="tel:+919550504544" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 9550504544</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <a href="mailto:info@alisonholidays.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    info@alisonholidays.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Input placeholder="Your Name *" required className="h-12" />
                <Input type="email" placeholder="Your Email *" required className="h-12" />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Input type="tel" placeholder="Phone Number *" required className="h-12" />
                <Input placeholder="Destination" className="h-12" />
              </div>

              <Textarea placeholder="Tell us about your dream trip..." rows={4} className="mb-6" />

              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;