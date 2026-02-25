import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DestinationPage from "@/pages/DestinationPage";
import PackageDetail from "@/pages/PackageDetail";
import ServicePage from "@/pages/ServicePage";
import Gallery from "@/pages/Gallery";
import Vehicles from "@/pages/Vehicles";
import NotFound from "@/pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations/:destination" element={<DestinationPage />} />
        <Route path="/packages/:packageId" element={<PackageDetail />} />
        <Route path="/services/:service" element={<ServicePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
