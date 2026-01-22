import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    rating: 5,
    text: "Amazing experience with Alison Holidays & Events! Our trip to Europe was perfectly planned. Every detail was taken care of, from flights to hotels to tours. Highly recommended!",
    trip: "Europe Tour"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    rating: 5,
    text: "The Kashmir trip organized by Alison Holidays was breathtaking. The team's attention to detail and customer service was exceptional. Will definitely book again!",
    trip: "Kashmir Tour"
  },
  {
    id: 3,
    name: "Anita Reddy",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    rating: 5,
    text: "Best travel agency in Hyderabad! Got my Dubai visa in just 3 days. The entire process was smooth and hassle-free. Thank you Alison Holidays team!",
    trip: "Dubai Tour"
  },
  {
    id: 4,
    name: "Suresh Babu",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    rating: 5,
    text: "Our family trip to Kerala was absolutely wonderful. The backwater houseboat experience was the highlight. Professional service throughout!",
    trip: "Kerala Tour"
  },
  {
    id: 5,
    name: "Meera Patel",
    location: "Ahmedabad",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    rating: 5,
    text: "Booked our honeymoon package to Bali through Alison Holidays & Events. Everything was perfect - from the resort to the private tours. Truly memorable experience!",
    trip: "Bali Honeymoon"
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    rating: 5,
    text: "Excellent service for our corporate team outing. The Alison team handled everything professionally. Will definitely recommend for corporate events!",
    trip: "Corporate Tour"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-2 block">Testimonials</span>
          <h2 className="section-title mb-4">What Our Guests Say</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-background shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10">
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-background shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl p-8 md:p-12 shadow-lg relative"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
              />
              
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-lg text-muted-foreground mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].location} | {testimonials[currentIndex].trip}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
