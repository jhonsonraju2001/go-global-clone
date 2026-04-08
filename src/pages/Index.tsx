import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import DestinationGrid from "@/components/DestinationGrid";
import PackageCarousel from "@/components/PackageCarousel";
import PackageSearch from "@/components/PackageSearch";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CompareButton from "@/components/CompareButton";
import MobileBottomBar from "@/components/MobileBottomBar";
import PageTransition from "@/components/PageTransition";
import {
  worldDestinations,
  indiaDestinations,
  indiaPackages,
  internationalPackages,
} from "@/data/destinations";

const Index = () => {
  return (
    <PageTransition>
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
          
          {/* Package Search & Filter */}
          <PackageSearch />
          
          {/* India Packages Carousel */}
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

          {/* Google Reviews */}
          <GoogleReviewsSection />
          
          {/* Contact Section */}
          <ContactSection />
        </main>
        
        <Footer />
        
        {/* WhatsApp Floating Button - hidden on mobile where bottom bar shows */}
        <WhatsAppButton />

        {/* Compare Button */}
        <CompareButton />

        {/* Mobile Bottom Action Bar */}
        <MobileBottomBar />
      </div>
    </PageTransition>
  );
};

export default Index;
