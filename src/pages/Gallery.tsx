import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Camera, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  location: string;
}

const galleryImages: GalleryImage[] = [
  // Alison Holidays Office & Team
  { id: 1, src: "https://lh3.googleusercontent.com/p/AF1QipPITxn4st1o6msbgsg3kdnr-uBG86qa9LEvuaud=w800-h600-k-no", title: "Alison Holidays Office", category: "Office & Team", location: "Hyderabad, India" },
  { id: 2, src: "https://lh3.googleusercontent.com/p/AF1QipObnulN12Fbz1DQvsS159Mm6D3Y8sF2eOaoHiOJ=w800-h600-k-no", title: "Our Travel Experts", category: "Office & Team", location: "Hyderabad, India" },
  { id: 3, src: "https://lh3.googleusercontent.com/p/AF1QipPHBzP1G1E9b52qVDHPxrdGn1SHEaZSL4pjdJhe=w800-h600-k-no", title: "Team at Work", category: "Office & Team", location: "Hyderabad, India" },
  { id: 4, src: "https://lh3.googleusercontent.com/p/AF1QipOWI0Ywu0G-a3KwaWGzSERzc7pxmqjvgkZK_y23=w800-h600-k-no", title: "Client Meeting", category: "Office & Team", location: "Hyderabad, India" },
  // Destinations
  { id: 5, src: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1200&h=675&fit=crop", title: "Kashmir Paradise", category: "Destinations", location: "Kashmir, India" },
  { id: 6, src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=675&fit=crop", title: "Dubai Skyline", category: "Destinations", location: "Dubai, UAE" },
  { id: 7, src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=675&fit=crop", title: "Kerala Backwaters", category: "Destinations", location: "Kerala, India" },
  { id: 8, src: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200&h=675&fit=crop", title: "Rajasthan Heritage", category: "Destinations", location: "Rajasthan, India" },
  { id: 9, src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=675&fit=crop", title: "Taj Mahal Sunrise", category: "Destinations", location: "Agra, India" },
  { id: 10, src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=675&fit=crop", title: "Bali Temples", category: "Destinations", location: "Bali, Indonesia" },
  { id: 23, src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=675&fit=crop", title: "Ladakh Mountains", category: "Destinations", location: "Ladakh, India" },
  { id: 24, src: "https://images.unsplash.com/photo-1590123575668-53235cfe28ef?w=1200&h=675&fit=crop", title: "Goa Beaches", category: "Destinations", location: "Goa, India" },
  { id: 25, src: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&h=675&fit=crop", title: "Singapore Skyline", category: "Destinations", location: "Singapore" },
  { id: 26, src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=675&fit=crop", title: "Thailand Temples", category: "Destinations", location: "Thailand" },
  { id: 27, src: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&h=675&fit=crop", title: "Himachal Valley", category: "Destinations", location: "Himachal Pradesh" },
  { id: 28, src: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=1200&h=675&fit=crop", title: "Andaman Waters", category: "Destinations", location: "Andaman Islands" },
  // Events
  { id: 11, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=675&fit=crop", title: "Corporate Event", category: "Events", location: "Hyderabad, India" },
  { id: 12, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=675&fit=crop", title: "Grand Celebration", category: "Events", location: "Hyderabad, India" },
  { id: 13, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=675&fit=crop", title: "Outdoor Festival", category: "Events", location: "Goa, India" },
  { id: 14, src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=675&fit=crop", title: "Luxury Wedding Setup", category: "Events", location: "Udaipur, India" },
  // Group Tours
  { id: 15, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=675&fit=crop", title: "Road Trip Adventures", category: "Group Tours", location: "Ladakh, India" },
  { id: 16, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=675&fit=crop", title: "Lake Expedition", category: "Group Tours", location: "Switzerland" },
  { id: 17, src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1200&h=675&fit=crop", title: "Mountain Trekking", category: "Group Tours", location: "Himachal Pradesh" },
  { id: 18, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=675&fit=crop", title: "Beach Getaway", category: "Group Tours", location: "Andaman Islands" },
  { id: 29, src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&h=675&fit=crop", title: "Desert Safari Group", category: "Group Tours", location: "Rajasthan, India" },
  { id: 30, src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&h=675&fit=crop", title: "Camping Adventure", category: "Group Tours", location: "Uttarakhand, India" },
  // Experiences
  { id: 19, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=675&fit=crop", title: "Sunset Valley", category: "Experiences", location: "Meghalaya, India" },
  { id: 20, src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=675&fit=crop", title: "Waterfall Bliss", category: "Experiences", location: "Sikkim, India" },
  { id: 21, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=675&fit=crop", title: "Misty Mountains", category: "Experiences", location: "Munnar, Kerala" },
  { id: 22, src: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=675&fit=crop", title: "Tropical Paradise", category: "Experiences", location: "Thailand" },
  { id: 31, src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=675&fit=crop", title: "Sunrise Houseboat", category: "Experiences", location: "Kerala, India" },
  { id: 32, src: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1200&h=675&fit=crop", title: "Northern Lights", category: "Experiences", location: "Europe" },
  // Vehicles
  { id: 33, src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=675&fit=crop", title: "Toyota Innova Crysta", category: "Vehicles", location: "Fleet" },
  { id: 34, src: "https://images.unsplash.com/photo-1625231334168-efdb040d09cd?w=1200&h=675&fit=crop", title: "Toyota Fortuner", category: "Vehicles", location: "Fleet" },
  { id: 35, src: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=1200&h=675&fit=crop", title: "Mahindra XUV700", category: "Vehicles", location: "Fleet" },
  { id: 36, src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&h=675&fit=crop", title: "Swift Dzire", category: "Vehicles", location: "Fleet" },
  { id: 37, src: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=1200&h=675&fit=crop", title: "Tempo Traveller", category: "Vehicles", location: "Fleet" },
  { id: 38, src: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1200&h=675&fit=crop", title: "Luxury Coach", category: "Vehicles", location: "Fleet" },
];

const categories = ["All", "Office & Team", "Destinations", "Events", "Group Tours", "Experiences", "Vehicles"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop')" }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 mb-6"
              >
                <Camera className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground">Our Journey in Pictures</span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 font-serif">
                Gallery
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                Explore breathtaking moments from our holidays, events & adventures
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-background sticky top-[108px] z-30 border-b">
          <div className="container-custom">
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Masonry Gallery Grid */}
        <section className="py-12 bg-background">
          <div className="container-custom">
            <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      layout: { duration: 0.4 },
                    }}
                    className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden"
                    onClick={() => setSelectedImage(image)}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full object-cover rounded-xl"
                      style={{ height: index % 3 === 0 ? "350px" : index % 3 === 1 ? "250px" : "300px" }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 rounded-xl"
                    >
                      <div className="space-y-1">
                        <h3 className="text-background font-semibold text-lg">{image.title}</h3>
                        <div className="flex items-center gap-1 text-background/80 text-sm">
                          <MapPin className="w-3 h-3" />
                          {image.location}
                        </div>
                        <span className="inline-block bg-primary/80 text-primary-foreground text-xs px-2 py-0.5 rounded-full mt-1">
                          {image.category}
                        </span>
                      </div>
                      <motion.div
                        className="absolute top-4 right-4"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                      >
                        <ZoomIn className="w-6 h-6 text-background" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-md p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-6 right-6 text-background hover:text-primary transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-8 h-8" />
              </motion.button>
              <motion.div
                className="relative max-w-5xl max-h-[85vh] w-full"
                initial={{ scale: 0.7, opacity: 0, rotateX: 15 }}
                animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                exit={{ scale: 0.7, opacity: 0, rotateX: -15 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src.replace("w=800", "w=1600").replace("h=600", "h=1200")}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 to-transparent p-6 rounded-b-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-background text-2xl font-bold">{selectedImage.title}</h3>
                  <div className="flex items-center gap-2 text-background/80 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedImage.location}</span>
                    <span className="ml-2 bg-primary/80 text-primary-foreground text-xs px-3 py-1 rounded-full">
                      {selectedImage.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Gallery;
