import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TeamSection from "@/components/TeamSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import { motion } from "framer-motion";
import { Shield, Award, Users, Globe, Heart, Clock, CheckCircle, Target, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We've built our reputation on trust, delivering what we promise every single time."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of your travel experience."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond for our guests."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With partners worldwide, we bring you the best experiences from every corner of the globe."
    }
  ];

  const whyChooseUs = [
    "99.9% Visa Success Rate - Highest in Hyderabad",
    "1,21,000+ Happy Travelers Served",
    "24/7 Customer Support",
    "Customized Itineraries for Every Budget",
    "Best Price Guarantee with No Hidden Costs",
    "10+ Years of Industry Experience",
    "Partnerships with Top Hotels & Airlines",
    "Expert Travel Consultants"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920')"
        }}>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/60" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl text-white"
              >
                <span className="text-primary font-medium mb-4 block">About Alison Holidays & Events</span>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Your Favourite Holiday Maker</h1>
                <p className="text-xl text-white/80 mb-8">
                  Turning dreams into destinations since 2014. We are Hyderabad's most trusted travel partner for domestic and international tours.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Plan Your Trip
                    </Button>
                  </Link>
                  <a href="tel:+919550504544">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                      Call Us Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-medium mb-2 block">Our Story</span>
                <h2 className="section-title mb-6">Best Tours & Travel Agency in Hyderabad</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>ALISON HOLIDAYS & EVENTS</strong> is a trusted travel agency and tour operator based in Abids, Hyderabad. 
                  Established in 2014, we have been making travel planning easy and enjoyable for thousands of families, couples, and corporate groups.
                </p>
                <p className="text-muted-foreground mb-4">
                  We offer customized domestic and international holiday packages, including flights, hotels, transport, sightseeing, and more. 
                  Our team focuses on personalized service, quality arrangements, and memorable experiences for every traveler.
                </p>
                <p className="text-muted-foreground mb-6">
                  With over 1,21,000 happy guests and a 99.9% visa success rate, we've established ourselves as leaders in the travel industry. 
                  Our team of experienced travel experts works tirelessly to create personalized itineraries that exceed expectations.
                </p>
                <p className="text-muted-foreground">
                  Whether you're dreaming of the serene backwaters of Kerala, the majestic peaks of Kashmir, or the vibrant streets of Europe, 
                  we're here to turn your travel dreams into reality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" 
                  alt="Alison Holidays & Events Team" 
                  className="rounded-2xl shadow-xl" 
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background p-8 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To make world-class travel experiences accessible to everyone by providing exceptional service, 
                  competitive pricing, and personalized itineraries that create lifelong memories. We aim to be 
                  the most trusted travel partner for every journey.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background p-8 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become India's leading travel agency, known for innovation, reliability, and customer satisfaction. 
                  We envision a world where travel brings people closer together and creates understanding across cultures.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium mb-2 block">Why Choose Us</span>
              <h2 className="section-title">Your Trusted Travel Partner</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium mb-2 block">Our Values</span>
              <h2 className="section-title">What We Stand For</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-20 bg-foreground text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">1,21,067+</div>
                <div className="text-white/70">Happy Guests</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">12,614</div>
                <div className="text-white/70">Tour Packages</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="text-white/70">Visa Success</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-white/70">Customer Support</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Google Reviews */}
        <GoogleReviewsSection />

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Let us help you plan the perfect vacation. From visa processing to custom itineraries, 
                we handle everything so you can focus on creating memories.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="secondary">
                    Get Free Quote
                  </Button>
                </Link>
                <a href="tel:+919550504544">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Call +91 9550504544
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
