import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FileText, Shield, Banknote, Hotel, Plane, Briefcase, 
  CheckCircle, ArrowRight, Phone, Mail, Star
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

interface ServiceData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  heroImage: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "visa-services": {
    id: "visa-services",
    name: "Visa Services",
    tagline: "99.9% Visa Success Rate",
    description: "Get your visa approved with our expert assistance. We handle all types of visas including Tourist, Business, Student, and Work visas for all countries.",
    icon: FileText,
    heroImage: "https://images.unsplash.com/photo-1569396116180-90a04ab84df5?w=1920",
    features: [
      "Tourist Visa Processing",
      "Business Visa Assistance",
      "Student Visa Support",
      "Work Visa Guidance",
      "Express Visa Services",
      "Visa Extension Help"
    ],
    benefits: [
      { title: "Expert Guidance", description: "Our visa experts guide you through every step of the application process" },
      { title: "Document Review", description: "Thorough review of all documents to ensure complete and accurate applications" },
      { title: "High Success Rate", description: "99.9% visa approval rate with our professional assistance" },
      { title: "Quick Processing", description: "Fast-track processing for urgent visa requirements" }
    ],
    process: [
      { step: 1, title: "Consultation", description: "Free consultation to understand your visa requirements" },
      { step: 2, title: "Document Collection", description: "We guide you on required documents and collect them" },
      { step: 3, title: "Application Filing", description: "Our experts file your visa application accurately" },
      { step: 4, title: "Tracking & Updates", description: "Regular updates until visa is approved and delivered" }
    ]
  },
  "travel-insurance": {
    id: "travel-insurance",
    name: "Travel Insurance",
    tagline: "Travel with Peace of Mind",
    description: "Comprehensive travel insurance plans covering medical emergencies, trip cancellations, lost baggage, and more. Travel worry-free with our reliable coverage.",
    icon: Shield,
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920",
    features: [
      "Medical Emergency Coverage",
      "Trip Cancellation Protection",
      "Lost Baggage Compensation",
      "Flight Delay Coverage",
      "Personal Accident Cover",
      "24/7 Emergency Assistance"
    ],
    benefits: [
      { title: "Comprehensive Coverage", description: "Protection against all travel-related emergencies and mishaps" },
      { title: "Cashless Claims", description: "Hassle-free cashless claim settlement at network hospitals" },
      { title: "Global Coverage", description: "Insurance valid worldwide with 24/7 support" },
      { title: "Affordable Premiums", description: "Best rates from top insurance providers" }
    ],
    process: [
      { step: 1, title: "Choose Plan", description: "Select from our range of travel insurance plans" },
      { step: 2, title: "Get Quote", description: "Get instant quotes from multiple providers" },
      { step: 3, title: "Quick Purchase", description: "Complete purchase online in minutes" },
      { step: 4, title: "Instant Policy", description: "Receive policy documents instantly via email" }
    ]
  },
  "forex-exchange": {
    id: "forex-exchange",
    name: "Forex Exchange",
    tagline: "Best Exchange Rates Guaranteed",
    description: "Get the best foreign exchange rates for all major currencies. We offer forex cards, currency notes, and wire transfers at competitive rates.",
    icon: Banknote,
    heroImage: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1920",
    features: [
      "Currency Exchange",
      "Forex Travel Cards",
      "Wire Transfers",
      "Multi-Currency Cards",
      "Rate Lock Facility",
      "Doorstep Delivery"
    ],
    benefits: [
      { title: "Best Rates", description: "Competitive exchange rates better than banks" },
      { title: "Zero Hidden Charges", description: "Transparent pricing with no hidden fees" },
      { title: "Multiple Options", description: "Cash, cards, and wire transfers available" },
      { title: "Quick Service", description: "Same-day currency exchange and delivery" }
    ],
    process: [
      { step: 1, title: "Check Rates", description: "Get live exchange rates for your currency" },
      { step: 2, title: "Place Order", description: "Book your forex order online or at our office" },
      { step: 3, title: "Submit Documents", description: "Provide KYC documents as per RBI guidelines" },
      { step: 4, title: "Get Currency", description: "Collect currency or get doorstep delivery" }
    ]
  },
  "hotel-booking": {
    id: "hotel-booking",
    name: "Hotel Booking",
    tagline: "Best Hotels at Best Prices",
    description: "Book from our curated collection of hotels worldwide. From budget stays to luxury resorts, we have accommodations for every preference and budget.",
    icon: Hotel,
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920",
    features: [
      "Worldwide Hotel Network",
      "Best Price Guarantee",
      "Free Cancellation Options",
      "Verified Reviews",
      "Exclusive Deals",
      "24/7 Support"
    ],
    benefits: [
      { title: "Wide Selection", description: "Access to 500,000+ hotels globally" },
      { title: "Best Prices", description: "Price match guarantee on all bookings" },
      { title: "Flexible Booking", description: "Free cancellation on most bookings" },
      { title: "Exclusive Perks", description: "Free upgrades and amenities for our customers" }
    ],
    process: [
      { step: 1, title: "Search Hotels", description: "Tell us your destination and travel dates" },
      { step: 2, title: "Compare Options", description: "Compare hotels based on price, location, and reviews" },
      { step: 3, title: "Book Instantly", description: "Secure your booking with instant confirmation" },
      { step: 4, title: "Travel Happy", description: "Enjoy your stay with our 24/7 support" }
    ]
  },
  "flight-booking": {
    id: "flight-booking",
    name: "Flight Booking",
    tagline: "Fly Smart, Save More",
    description: "Book domestic and international flights at the best prices. We search across airlines to find you the perfect flight with the best deals.",
    icon: Plane,
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920",
    features: [
      "Domestic & International Flights",
      "Best Fare Finder",
      "Flexible Date Search",
      "Multi-City Booking",
      "Web Check-in Assistance",
      "Airport Meet & Greet"
    ],
    benefits: [
      { title: "Lowest Fares", description: "Access to exclusive airfares and deals" },
      { title: "All Airlines", description: "Compare fares across all major airlines" },
      { title: "Easy Booking", description: "Simple booking process with instant confirmation" },
      { title: "Travel Support", description: "Complete assistance from booking to boarding" }
    ],
    process: [
      { step: 1, title: "Search Flights", description: "Enter your travel details and preferences" },
      { step: 2, title: "Compare Fares", description: "Compare options across airlines and times" },
      { step: 3, title: "Book & Pay", description: "Secure booking with multiple payment options" },
      { step: 4, title: "Fly Away", description: "Receive e-ticket and travel hassle-free" }
    ]
  },
  "corporate-travel": {
    id: "corporate-travel",
    name: "Corporate Travel",
    tagline: "Streamlined Business Travel Solutions",
    description: "Complete corporate travel management for businesses. We handle everything from flights and hotels to meetings and events, ensuring seamless business travel.",
    icon: Briefcase,
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920",
    features: [
      "Corporate Flight Bookings",
      "Hotel Negotiations",
      "MICE Services",
      "Travel Policy Compliance",
      "Expense Management",
      "24/7 Dedicated Support"
    ],
    benefits: [
      { title: "Cost Savings", description: "Negotiated corporate rates saving up to 30%" },
      { title: "Policy Compliance", description: "Bookings aligned with your travel policy" },
      { title: "Centralized Billing", description: "Consolidated invoicing and reporting" },
      { title: "Dedicated Manager", description: "Personal account manager for your company" }
    ],
    process: [
      { step: 1, title: "Consultation", description: "Understand your corporate travel needs" },
      { step: 2, title: "Setup Account", description: "Create your corporate travel account" },
      { step: 3, title: "Book & Travel", description: "Employees book through our portal" },
      { step: 4, title: "Report & Optimize", description: "Monthly reports and cost optimization" }
    ]
  }
};

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();
  const serviceData = service ? servicesData[service] : null;

  if (!serviceData) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = serviceData.icon;

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceData.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <IconComponent className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {serviceData.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary font-medium"
          >
            {serviceData.tagline}
          </motion.p>
        </div>
      </section>

      {/* Description & Features */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">About This Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {serviceData.description}
              </p>
              <Button size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                Get in Touch
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 bg-muted rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional services
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
              >
                <Star className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple and straightforward process
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {serviceData.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < serviceData.process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-3 w-6 h-6 text-muted-foreground" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us help you with your {serviceData.name.toLowerCase()}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="w-4 h-4" />
                +91 955 050 4544
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Mail className="w-4 h-4" />
                info@alisonholidays.com
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
    </PageTransition>
  );
};

export default ServicePage;
