import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";

const googleReviews = [
  {
    id: 1,
    name: "Venkat Reddy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent service! Booked our family trip to Europe through Alison Holidays & Events. Everything was perfectly organized - from visa processing to hotel bookings. The team was very responsive and helpful throughout. Highly recommend for international tours!",
    location: "Hyderabad, India",
  },
  {
    id: 2,
    name: "Lakshmi Narayana",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    rating: 5,
    date: "1 month ago",
    text: "Best travel agency in Hyderabad! Got our Dubai visa approved in just 2 days. The prices are very competitive and the service is top-notch. The team went above and beyond to ensure our trip was memorable. Will definitely book again!",
    location: "Secunderabad, India",
  },
  {
    id: 3,
    name: "Ravi Teja",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    rating: 5,
    date: "3 weeks ago",
    text: "Amazing Kashmir trip organized by Alison Holidays! The houseboat experience was magical. All arrangements were perfect - from pickup to drop. Very professional team. Thank you for making our honeymoon special!",
    location: "Bangalore, India",
  },
  {
    id: 4,
    name: "Sreelatha Devi",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
    rating: 5,
    date: "1 month ago",
    text: "We booked a Bali honeymoon package and it exceeded all expectations! The resort was beautiful, private tours were well organized, and the Alison team was available 24/7 for any queries. Best decision ever!",
    location: "Hyderabad, India",
  },
  {
    id: 5,
    name: "Mohammed Azhar",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    rating: 5,
    date: "2 months ago",
    text: "Booked a corporate team outing through Alison Holidays & Events. 25 people, no hassles at all! Everything from transport to activities was perfectly coordinated. Great value for money. Highly professional team!",
    location: "Hyderabad, India",
  },
  {
    id: 6,
    name: "Padmaja Rani",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    rating: 5,
    date: "3 months ago",
    text: "The Kerala backwater tour was absolutely incredible! Alison Holidays took care of everything from start to finish. The houseboat was beautiful and the food was delicious. Can't wait to book our next trip with them!",
    location: "Chennai, India",
  },
];

const GoogleReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, googleReviews.length - itemsPerView);

  const next = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-8"
            />
            <span className="text-muted-foreground">Reviews</span>
          </div>
          <h2 className="section-title mb-4">What Our Customers Say on Google</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-lg">4.9</span>
            <span className="text-muted-foreground">(500+ reviews)</span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Navigation */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-background shadow-lg hover:bg-primary hover:text-white transition-all disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-background shadow-lg hover:bg-primary hover:text-white transition-all disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Reviews Container */}
          <div className="overflow-hidden mx-8">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView + 2)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {googleReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                >
                  <div className="bg-card rounded-2xl p-6 h-full border shadow-sm hover:shadow-md transition-shadow">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-4">
                      "{review.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{review.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {review.location}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/search?q=alison+holidays+hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            See all reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
