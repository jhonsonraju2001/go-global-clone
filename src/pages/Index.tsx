import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import DestinationGrid from "@/components/DestinationGrid";
import PackageCarousel from "@/components/PackageCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  worldDestinations,
  indiaDestinations,
  indiaPackages,
  internationalPackages,
} from "@/data/destinations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Slider */}
        <HeroSlider />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Explore World */}
        <DestinationGrid
          title="Explore the World"
          destinations={worldDestinations}
          sectionId="explore-world"
        />
        
        {/* Experience India */}
        <DestinationGrid
          title="Experience the Wonders of India"
          destinations={indiaDestinations}
          sectionId="experience-india"
        />
        
        {/* India Packages */}
        <PackageCarousel
          title="Incredible India"
          subtitle="Popular Domestic Packages"
          packages={indiaPackages}
          sectionId="india-packages"
        />
        
        {/* Why Choose Us */}
        <FeaturesSection />
        
        {/* International Packages */}
        <PackageCarousel
          title="Dream Vacation Destinations"
          subtitle="Embark on the Ultimate Adventure"
          packages={internationalPackages}
          sectionId="international-packages"
        />
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
