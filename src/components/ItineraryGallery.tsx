import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryImage {
  url: string;
  caption: string;
  day?: number;
}

interface ItineraryGalleryProps {
  destinationId: string;
  packageId: string;
}

// Gallery images mapped by destination and package
const galleryImages: Record<string, Record<string, GalleryImage[]>> = {
  kashmir: {
    "kashmir-highlights": [
      { url: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&h=600&fit=crop", caption: "Dal Lake Shikara Ride", day: 1 },
      { url: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&h=600&fit=crop", caption: "Gulmarg Gondola", day: 2 },
      { url: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&h=600&fit=crop", caption: "Pahalgam Valley", day: 3 },
      { url: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800&h=600&fit=crop", caption: "Betaab Valley", day: 4 },
      { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop", caption: "Mughal Gardens", day: 5 },
      { url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop", caption: "Srinagar Houseboats", day: 6 },
    ],
    "kashmir-honeymoon": [
      { url: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&h=600&fit=crop", caption: "Romantic Houseboat Stay", day: 1 },
      { url: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&h=600&fit=crop", caption: "Shikara at Sunset", day: 2 },
      { url: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800&h=600&fit=crop", caption: "Snow-Capped Mountains", day: 3 },
      { url: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&h=600&fit=crop", caption: "Pahalgam Riverside", day: 4 },
    ],
    "kashmir-adventure": [
      { url: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&h=600&fit=crop", caption: "Trek Through Valleys", day: 1 },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", caption: "Alpine Meadows", day: 2 },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop", caption: "Mountain Passes", day: 3 },
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop", caption: "High Altitude Lakes", day: 4 },
    ],
  },
  kerala: {
    "kerala-backwaters": [
      { url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop", caption: "Alleppey Backwaters", day: 1 },
      { url: "https://images.unsplash.com/photo-1609340757608-0f8b4a1ac4a5?w=800&h=600&fit=crop", caption: "Houseboat Cruise", day: 2 },
      { url: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&h=600&fit=crop", caption: "Munnar Tea Gardens", day: 3 },
      { url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", caption: "Thekkady Wildlife", day: 4 },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b2?w=800&h=600&fit=crop", caption: "Kovalam Beach", day: 5 },
    ],
    "kerala-ayurveda": [
      { url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop", caption: "Ayurvedic Spa", day: 1 },
      { url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop", caption: "Peaceful Backwaters", day: 2 },
      { url: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&h=600&fit=crop", caption: "Wellness Retreat", day: 3 },
    ],
    "kerala-wildlife": [
      { url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", caption: "Periyar Wildlife", day: 1 },
      { url: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop", caption: "Elephant Safari", day: 2 },
      { url: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b2?w=800&h=600&fit=crop", caption: "Bamboo Rafting", day: 3 },
    ],
  },
  ladakh: {
    "ladakh-explorer": [
      { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop", caption: "Pangong Lake", day: 1 },
      { url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&h=600&fit=crop", caption: "Khardung La Pass", day: 2 },
      { url: "https://images.unsplash.com/photo-1574177556859-1362f72ed6f9?w=800&h=600&fit=crop", caption: "Nubra Valley", day: 3 },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", caption: "Leh Palace", day: 4 },
    ],
    "ladakh-bike": [
      { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", caption: "Royal Enfield Adventure", day: 1 },
      { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop", caption: "Pangong Lakeside", day: 2 },
      { url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&h=600&fit=crop", caption: "High Altitude Passes", day: 3 },
    ],
    "ladakh-monasteries": [
      { url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&h=600&fit=crop", caption: "Thiksey Monastery", day: 1 },
      { url: "https://images.unsplash.com/photo-1574177556859-1362f72ed6f9?w=800&h=600&fit=crop", caption: "Hemis Monastery", day: 2 },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", caption: "Diskit Buddha", day: 3 },
    ],
    "ladakh-photography": [
      { url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop", caption: "Pangong Blue Hour", day: 1 },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop", caption: "Mountain Landscapes", day: 2 },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", caption: "Monastery Architecture", day: 3 },
    ],
  },
  himachal: {
    "himachal-hills": [
      { url: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&h=600&fit=crop", caption: "Shimla Mall Road", day: 1 },
      { url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop", caption: "Manali Valley", day: 2 },
      { url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", caption: "Solang Valley", day: 3 },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", caption: "Rohtang Pass", day: 4 },
    ],
    "himachal-adventure": [
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop", caption: "River Rafting", day: 1 },
      { url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop", caption: "Paragliding", day: 2 },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", caption: "Trekking Adventures", day: 3 },
    ],
    "himachal-honeymoon": [
      { url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop", caption: "Romantic Shimla", day: 1 },
      { url: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&h=600&fit=crop", caption: "Manali Snow", day: 2 },
      { url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", caption: "Kullu Valley", day: 3 },
    ],
  },
  goa: {
    "goa-beaches": [
      { url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop", caption: "Calangute Beach", day: 1 },
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop", caption: "Baga Beach Sunset", day: 2 },
      { url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&h=600&fit=crop", caption: "Old Goa Churches", day: 3 },
      { url: "https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800&h=600&fit=crop", caption: "Beach Parties", day: 4 },
    ],
    "goa-heritage": [
      { url: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&h=600&fit=crop", caption: "Basilica of Bom Jesus", day: 1 },
      { url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop", caption: "Fort Aguada", day: 2 },
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop", caption: "Fontainhas Latin Quarter", day: 3 },
    ],
  },
  rajasthan: {
    "rajasthan-royal": [
      { url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop", caption: "Jaipur Pink City", day: 1 },
      { url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop", caption: "Amber Fort", day: 2 },
      { url: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&h=600&fit=crop", caption: "Udaipur Lake Palace", day: 3 },
      { url: "https://images.unsplash.com/photo-1568097657681-cf09d0e09bde?w=800&h=600&fit=crop", caption: "Jaisalmer Desert", day: 4 },
      { url: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop", caption: "Jodhpur Blue City", day: 5 },
    ],
    "rajasthan-desert": [
      { url: "https://images.unsplash.com/photo-1568097657681-cf09d0e09bde?w=800&h=600&fit=crop", caption: "Desert Safari", day: 1 },
      { url: "https://images.unsplash.com/photo-1545126178-862cdb469409?w=800&h=600&fit=crop", caption: "Camel Ride", day: 2 },
      { url: "https://images.unsplash.com/photo-1568097657681-cf09d0e09bde?w=800&h=600&fit=crop", caption: "Desert Camping", day: 3 },
    ],
  },
  dubai: {
    "dubai-luxury": [
      { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop", caption: "Burj Khalifa", day: 1 },
      { url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop", caption: "Dubai Marina", day: 2 },
      { url: "https://images.unsplash.com/photo-1583202702468-e58e4e5d9efe?w=800&h=600&fit=crop", caption: "Palm Jumeirah", day: 3 },
      { url: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=600&fit=crop", caption: "Desert Safari", day: 4 },
    ],
    "dubai-adventure": [
      { url: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=600&fit=crop", caption: "Dune Bashing", day: 1 },
      { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop", caption: "Skydiving Dubai", day: 2 },
      { url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=600&fit=crop", caption: "Jet Ski Adventure", day: 3 },
    ],
  },
  singapore: {
    "singapore-explorer": [
      { url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop", caption: "Marina Bay Sands", day: 1 },
      { url: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=800&h=600&fit=crop", caption: "Gardens by the Bay", day: 2 },
      { url: "https://images.unsplash.com/photo-1533310266094-8898a03807dd?w=800&h=600&fit=crop", caption: "Sentosa Island", day: 3 },
      { url: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&h=600&fit=crop", caption: "Universal Studios", day: 4 },
    ],
    "singapore-family": [
      { url: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&h=600&fit=crop", caption: "Universal Studios", day: 1 },
      { url: "https://images.unsplash.com/photo-1533310266094-8898a03807dd?w=800&h=600&fit=crop", caption: "Sentosa Fun", day: 2 },
      { url: "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=800&h=600&fit=crop", caption: "Singapore Zoo", day: 3 },
    ],
  },
  thailand: {
    "thailand-adventure": [
      { url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop", caption: "Bangkok Temples", day: 1 },
      { url: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&h=600&fit=crop", caption: "Phuket Beaches", day: 2 },
      { url: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&h=600&fit=crop", caption: "Phi Phi Islands", day: 3 },
      { url: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop", caption: "Thai Markets", day: 4 },
    ],
    "thailand-beaches": [
      { url: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&h=600&fit=crop", caption: "Phuket Paradise", day: 1 },
      { url: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&h=600&fit=crop", caption: "Maya Bay", day: 2 },
      { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop", caption: "Krabi Limestone", day: 3 },
    ],
  },
  europe: {
    "europe-highlights": [
      { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop", caption: "Paris Eiffel Tower", day: 1 },
      { url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop", caption: "Swiss Alps", day: 2 },
      { url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop", caption: "Venice Canals", day: 3 },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop", caption: "Amsterdam Canals", day: 4 },
    ],
    "europe-romantic": [
      { url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop", caption: "Paris Romance", day: 1 },
      { url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop", caption: "Venice Gondola", day: 2 },
      { url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop", caption: "Swiss Countryside", day: 3 },
    ],
  },
};

// Default images if no specific gallery exists
const defaultGalleryImages: GalleryImage[] = [
  { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop", caption: "Scenic Views", day: 1 },
  { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", caption: "Mountain Adventure", day: 2 },
  { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop", caption: "Natural Beauty", day: 3 },
];

const ItineraryGallery = ({ destinationId, packageId }: ItineraryGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = galleryImages[destinationId]?.[packageId] || defaultGalleryImages;

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="bg-background rounded-2xl border p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[4/3]"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        {image.day && (
                          <span className="text-xs bg-primary px-2 py-0.5 rounded-full mb-1 inline-block">
                            Day {image.day}
                          </span>
                        )}
                        <p className="font-medium text-sm">{image.caption}</p>
                      </div>
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-6" />
          <CarouselNext className="-right-4 md:-right-6" />
        </Carousel>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentImage].url.replace("800x600", "1200x900")}
                alt={images[currentImage].caption}
                className="max-h-[85vh] w-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <div className="flex items-center justify-between text-white">
                  <div>
                    {images[currentImage].day && (
                      <span className="text-sm bg-primary px-3 py-1 rounded-full mr-2">
                        Day {images[currentImage].day}
                      </span>
                    )}
                    <span className="text-lg font-medium">{images[currentImage].caption}</span>
                  </div>
                  <span className="text-sm text-white/70">
                    {currentImage + 1} / {images.length}
                  </span>
                </div>
              </div>
            </motion.div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ItineraryGallery;
