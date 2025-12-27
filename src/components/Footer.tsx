import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock } from "lucide-react";
import { motion } from "framer-motion";
import alisonLogo from "@/assets/alison-logo-white.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const indiaDestinations = [
    "Kashmir", "Kerala", "Ladakh", "Goa", "Rajasthan", 
    "Himachal Pradesh", "Hyderabad", "Andaman"
  ];

  const internationalDestinations = [
    "Dubai", "Singapore", "Thailand", "Bali", "Europe",
    "Switzerland", "Turkey", "Australia"
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <img src={alisonLogo} alt="Alison Holidays" className="h-16 w-auto mb-2" />
              <p className="text-lg font-bold text-primary">ALISON HOLIDAYS</p>
              <p className="text-xs text-background/50 tracking-wider">TURNING DREAMS INTO DESTINATIONS</p>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Alison Holidays is a premier tours & travel agency in Hyderabad, offering customized travel packages for domestic and international destinations with 99.9% visa success rate.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary">Popular Destinations</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <p className="text-xs text-background/50 mb-2 uppercase tracking-wider">India</p>
                <ul className="space-y-2">
                  {indiaDestinations.slice(0, 4).map((dest) => (
                    <li key={dest}>
                      <Link
                        to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-background/70 hover:text-primary transition-colors text-sm"
                      >
                        {dest}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs text-background/50 mb-2 uppercase tracking-wider">International</p>
                <ul className="space-y-2">
                  {internationalDestinations.slice(0, 4).map((dest) => (
                    <li key={dest}>
                      <Link
                        to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-background/70 hover:text-primary transition-colors text-sm"
                      >
                        {dest}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  3rd Floor, Shree Residency, Gachibowli, Hyderabad, Telangana 500032
                </span>
              </li>
              <li>
                <a
                  href="tel:+919550504544"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">+91 955 050 4544</span>
                </a>
              </li>
              <li>
              <a
                  href="mailto:info@alisonholidays.com"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">info@alisonholidays.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/70 text-sm">
                  <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2024 Alison Holidays. All rights reserved.</p>
          <p>
            Best Tours & Travel Agency in Hyderabad | 
            <span className="text-primary ml-1">99.9% Visa Success Rate</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
