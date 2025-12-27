import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Must-Visit Destinations in Kashmir",
    excerpt: "Discover the breathtaking beauty of Kashmir with our curated list of must-visit destinations including Dal Lake, Gulmarg, and Pahalgam.",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
    author: "Travel Expert",
    date: "December 20, 2024",
    readTime: "5 min read",
    category: "Destinations"
  },
  {
    id: 2,
    title: "Complete Guide to Dubai Visa for Indians",
    excerpt: "Everything you need to know about Dubai visa requirements, processing time, and tips for a successful visa application.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    author: "Visa Expert",
    date: "December 18, 2024",
    readTime: "8 min read",
    category: "Visa Guide"
  },
  {
    id: 3,
    title: "Best Time to Visit Kerala Backwaters",
    excerpt: "Plan your Kerala trip at the perfect time. Learn about the best seasons for houseboat experiences and backwater cruises.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    author: "Travel Expert",
    date: "December 15, 2024",
    readTime: "4 min read",
    category: "Travel Tips"
  },
  {
    id: 4,
    title: "Europe on a Budget: Complete Travel Guide",
    excerpt: "Explore Europe without breaking the bank. Tips on affordable accommodations, transport, and hidden gems.",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    author: "Budget Travel Expert",
    date: "December 12, 2024",
    readTime: "10 min read",
    category: "Budget Travel"
  },
  {
    id: 5,
    title: "Hyderabad Food Trail: A Culinary Journey",
    excerpt: "Explore the legendary Nizami cuisine of Hyderabad. From biryani to haleem, discover the best food spots in the city.",
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=800",
    author: "Food Expert",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Food & Culture"
  },
  {
    id: 6,
    title: "Travel Insurance: Why You Need It",
    excerpt: "Understanding the importance of travel insurance and how to choose the right plan for your international trips.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    author: "Insurance Expert",
    date: "December 8, 2024",
    readTime: "5 min read",
    category: "Travel Tips"
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20">
        <div className="container-custom text-center text-primary-foreground">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Travel Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            Travel tips, destination guides, and inspiration for your next adventure
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-xl overflow-hidden shadow-lg border hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <Button variant="ghost" size="sm" className="gap-1 text-primary">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get the latest travel tips, exclusive deals, and destination guides delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blogs;
