import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import alisonLogo from "@/assets/alison-logo-white.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const indiaDestinations = [
    "Kashmir", "Ladakh", "Himachal Pradesh", "Kerala", "Rajasthan", 
    "Goa", "Meghalaya", "Andaman", "Sikkim", "Uttarakhand", "Hyderabad"
  ];

  const globalDestinations = [
    "Singapore", "Thailand", "Dubai", "Bali", "Europe", 
    "USA", "Switzerland", "France", "Turkey", "Australia"
  ];

  const otherServices = [
    "Visa Services", "Travel Insurance", "Forex Exchange", 
    "Hotel Booking", "Flight Booking", "Corporate Travel"
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-foreground text-background py-2 text-sm">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:+919550504544" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 955 050 4544</span>
            </a>
            <a href="mailto:info@alisonholidays.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@alisonholidays.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="https://wa.me/919550504544" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Whatsapp
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Youtube
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-md py-3">
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={alisonLogo} alt="Alison Holidays" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-primary">ALISON HOLIDAYS</div>
              <div className="text-[10px] text-muted-foreground tracking-wider">TURNING DREAMS INTO DESTINATIONS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="nav-link px-4">Home</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link bg-transparent">India</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-2 p-4 w-[400px]">
                      {indiaDestinations.map((dest) => (
                        <Link
                          key={dest}
                          to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          {dest}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link bg-transparent">Global</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-2 p-4 w-[400px]">
                      {globalDestinations.map((dest) => (
                        <Link
                          key={dest}
                          to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          {dest}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link bg-transparent">Other Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[300px]">
                      {otherServices.map((service) => (
                        <Link
                          key={service}
                          to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block p-2 rounded-lg hover:bg-muted transition-colors"
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="nav-link px-4">About Us</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="nav-link px-4">Contact Us</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blogs" className="nav-link px-4">Blogs</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 250 }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute right-0 top-full mt-2"
                  >
                    <input
                      type="text"
                      placeholder="Search packages..."
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t overflow-hidden"
            >
              <div className="container-custom py-4 space-y-4">
                <Link to="/" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <details className="group">
                  <summary className="flex items-center justify-between py-2 cursor-pointer hover:text-primary">
                    India <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 space-y-2 mt-2">
                    {indiaDestinations.map((dest) => (
                      <Link
                        key={dest}
                        to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block py-1 text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dest}
                      </Link>
                    ))}
                  </div>
                </details>
                <details className="group">
                  <summary className="flex items-center justify-between py-2 cursor-pointer hover:text-primary">
                    Global <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 space-y-2 mt-2">
                    {globalDestinations.map((dest) => (
                      <Link
                        key={dest}
                        to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block py-1 text-muted-foreground hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dest}
                      </Link>
                    ))}
                  </div>
                </details>
                <Link to="/about" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
                <Link to="/contact" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
                <Link to="/blogs" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  Blogs
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
