import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Shield, Award, Users, Globe, Heart, Clock } from "lucide-react";
const About = () => {
  const values = [{
    icon: Shield,
    title: "Trust & Reliability",
    description: "We've built our reputation on trust, delivering what we promise every single time."
  }, {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every aspect of your travel experience."
  }, {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our top priority. We go above and beyond for our guests."
  }, {
    icon: Globe,
    title: "Global Reach",
    description: "With partners worldwide, we bring you the best experiences from every corner of the globe."
  }];
  return <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero */}
        <section className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920')"
      }}>
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">About Us</h1>
              <p className="text-xl text-white/80">Your Favourite Holiday Maker</p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                <span className="text-primary font-medium mb-2 block">Our Story</span>
                <h2 className="section-title mb-6">Best Tours & Travel Agency in Hyderabad</h2>
                <p className="text-muted-foreground mb-4">ALISON HOLIDAYS & EVENTS is a trusted travel agency and tour operator based in Abids, Hyderabad. Established to make travel planning easy and enjoyable, they offer customized domestic and international holiday packages, including flights, hotels, transport, sightseeing, and more. Their team focuses on personalized service, quality arrangements, and memorable experiences for every traveler</p>
                <p className="text-muted-foreground mb-4">
                  With over 1,21,000 happy guests and a 99.9% visa success rate, we've established ourselves as leaders in the travel industry. Our team of experienced travel experts works tirelessly to create personalized itineraries that exceed expectations.
                </p>
                <p className="text-muted-foreground">
                  Whether you're dreaming of the serene backwaters of Kerala, the majestic peaks of Kashmir, or the vibrant streets of Europe, we're here to turn your travel dreams into reality.
                </p>
              </motion.div>

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
            }} className="relative">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" alt="Go Global Vacations Team" className="rounded-2xl shadow-xl" />
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container-custom">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <span className="text-primary font-medium mb-2 block">Our Values</span>
              <h2 className="section-title">What We Stand For</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => <motion.div key={value.title} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-card p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-20 bg-foreground text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }}>
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">1,21,067+</div>
                <div className="text-white/70">Happy Guests</div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }}>
                <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">12,614</div>
                <div className="text-white/70">Tour Packages</div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="text-white/70">Visa Success</div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }}>
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-white/70">Customer Support</div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>;
};
export default About;