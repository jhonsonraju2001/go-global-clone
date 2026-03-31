import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const indiaDestinations = ["Kashmir", "Ladakh", "Himachal Pradesh", "Kerala", "Rajasthan", "Goa", "Meghalaya", "Andaman", "Sikkim", "Uttarakhand", "Hyderabad"];
  const globalDestinations = ["Singapore", "Thailand", "Dubai", "Bali", "Europe", "USA", "Switzerland", "France", "Turkey", "Australia"];
  const otherServices = ["Vehicles", "Visa Services", "Travel Insurance", "Forex Exchange", "Hotel Booking", "Flight Booking", "Corporate Travel"];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-foreground text-background py-1.5 text-sm">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:+919700650025" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 9700650025</span>
            </a>
            <a href="mailto:info@alisonholidays.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">info@alisonholidays.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="https://www.facebook.com/alisonholidays" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a>
            <a href="https://www.instagram.com/alisonholidays" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
            <a href="https://wa.me/919700650025" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Whatsapp</a>
            <a href="https://www.youtube.com/@alisonholidays" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Youtube</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-md">
        <div className="container-custom flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              alt="Alison Holidays & Events"
              className="h-10 w-auto"
              src="/lovable-uploads/cadcc361-4f3c-4944-9502-08349f05a174.png"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-primary leading-tight">ALISON HOLIDAYS & EVENTS</div>
              <div className="text-[9px] text-muted-foreground tracking-[0.2em] italic">TURNING DREAMS INTO DESTINATIONS</div>
            </div>
          </Link>

          {/* Desktop Navigation - all items aligned on same baseline */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-0">
                <NavigationMenuItem>
                  <Link to="/" className="inline-flex items-center h-10 px-4 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">Home</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">India</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-2 p-4 w-[400px]">
                      {indiaDestinations.map(dest => (
                        <Link key={dest} to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`} className="block p-2 rounded-lg hover:bg-muted transition-colors text-sm">
                          {dest}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">Global</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-2 p-4 w-[400px]">
                      {globalDestinations.map(dest => (
                        <Link key={dest} to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`} className="block p-2 rounded-lg hover:bg-muted transition-colors text-sm">
                          {dest}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">Other Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[300px]">
                      {otherServices.map(service => {
                        const isVehicles = service === "Vehicles";
                        const to = isVehicles ? "/vehicles" : `/services/${service.toLowerCase().replace(/\s+/g, "-")}`;
                        return (
                          <Link key={service} to={to} className={`block p-2 rounded-lg hover:bg-muted transition-colors text-sm ${isVehicles ? "font-semibold text-primary bg-primary/5 border border-primary/20" : ""}`}>
                            {isVehicles ? "🚗 " : ""}{service}
                          </Link>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className="inline-flex items-center h-10 px-4 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">About Us</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="inline-flex items-center h-10 px-4 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">Contact Us</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/gallery" className="inline-flex items-center h-10 px-4 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">Gallery</Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/vehicles" className="inline-flex items-center h-10 px-4 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap">Vehicles</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search */}
            <div className="relative ml-2">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-muted rounded-full transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 250 }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute right-0 top-full mt-2"
                  >
                    <input type="text" placeholder="Search packages..." className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors">
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
                <Link to="/" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <details className="group">
                  <summary className="flex items-center justify-between py-2 cursor-pointer hover:text-primary">
                    India <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 space-y-2 mt-2">
                    {indiaDestinations.map(dest => (
                      <Link key={dest} to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`} className="block py-1 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
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
                    {globalDestinations.map(dest => (
                      <Link key={dest} to={`/destinations/${dest.toLowerCase().replace(/\s+/g, "-")}`} className="block py-1 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                        {dest}
                      </Link>
                    ))}
                  </div>
                </details>
                <details className="group">
                  <summary className="flex items-center justify-between py-2 cursor-pointer hover:text-primary">
                    Other Services <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 space-y-2 mt-2">
                    {otherServices.map(service => (
                      <Link key={service} to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`} className="block py-1 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                        {service}
                      </Link>
                    ))}
                  </div>
                </details>
                <Link to="/about" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link to="/contact" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                <Link to="/gallery" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                <Link to="/vehicles" className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Vehicles</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
