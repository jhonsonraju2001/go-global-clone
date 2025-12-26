export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface Package {
  id: string;
  name: string;
  location: string;
  image: string;
  duration: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  rating?: number;
  reviews?: number;
}

export const worldDestinations: Destination[] = [
  {
    id: "singapore",
    name: "Singapore",
    description: "Filled with diverse cultures & cities",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    link: "/destinations/singapore"
  },
  {
    id: "japan",
    name: "Japan",
    description: "Experience ancient history & culture",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    link: "/destinations/japan"
  },
  {
    id: "vietnam",
    name: "Vietnam",
    description: "Discover natural beauty & heritage",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
    link: "/destinations/vietnam"
  },
  {
    id: "bhutan",
    name: "Bhutan",
    description: "Land of happiness & monasteries",
    image: "https://images.unsplash.com/photo-1553856622-d1b352e24a63?w=800",
    link: "/destinations/bhutan"
  },
  {
    id: "france",
    name: "France",
    description: "Indulge in art, culture & cuisine",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    link: "/destinations/france"
  },
  {
    id: "usa",
    name: "USA",
    description: "Explore diverse landscapes & cities",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800",
    link: "/destinations/usa"
  },
  {
    id: "switzerland",
    name: "Switzerland",
    description: "Alpine beauty & serene landscapes",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
    link: "/destinations/switzerland"
  },
  {
    id: "dubai",
    name: "Dubai",
    description: "Luxury, adventure & modern marvels",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    link: "/destinations/dubai"
  }
];

export const indiaDestinations: Destination[] = [
  {
    id: "kashmir",
    name: "Kashmir",
    description: "Paradise on Earth with scenic valleys",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
    link: "/destinations/kashmir"
  },
  {
    id: "ladakh",
    name: "Ladakh",
    description: "High-altitude desert adventure",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    link: "/destinations/ladakh"
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    description: "Mountains, valleys & adventure",
    image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=800",
    link: "/destinations/himachal"
  },
  {
    id: "kerala",
    name: "Kerala",
    description: "God's own country with backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    link: "/destinations/kerala"
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    description: "Royal heritage & desert landscapes",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    link: "/destinations/rajasthan"
  },
  {
    id: "goa",
    name: "Goa",
    description: "Beaches, nightlife & Portuguese heritage",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=800",
    link: "/destinations/goa"
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    description: "City of Pearls & Biryani",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
    link: "/destinations/hyderabad"
  },
  {
    id: "andaman",
    name: "Andaman",
    description: "Pristine beaches & coral reefs",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    link: "/destinations/andaman"
  }
];

export const indiaPackages: Package[] = [
  {
    id: "kashmir-highlights",
    name: "Highlights of Kashmir",
    location: "Kashmir",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
    duration: "6D/5N",
    originalPrice: 32680,
    currentPrice: 27180,
    discount: 17
  },
  {
    id: "bhutan-group",
    name: "Worthy Bhutan Group",
    location: "Bhutan",
    image: "https://images.unsplash.com/photo-1553856622-d1b352e24a63?w=800",
    duration: "7D/6N",
    originalPrice: 78760,
    currentPrice: 69560,
    discount: 12
  },
  {
    id: "discover-kerala",
    name: "Discover Kerala",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    duration: "5D/4N",
    originalPrice: 24500,
    currentPrice: 19000,
    discount: 22
  },
  {
    id: "exploring-rajasthan",
    name: "Exploring Rajasthan",
    location: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    duration: "7D/6N",
    originalPrice: 63904,
    currentPrice: 49925,
    discount: 22
  },
  {
    id: "leh-ladakh",
    name: "Leh Ladakh Expedition",
    location: "Ladakh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    duration: "6D/5N",
    originalPrice: 38182,
    currentPrice: 21000,
    discount: 45
  },
  {
    id: "goa-weekend",
    name: "Goa Weekend",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871?w=800",
    duration: "3D/2N",
    originalPrice: 9000,
    currentPrice: 6499,
    discount: 28
  },
  {
    id: "meghalaya-mystic",
    name: "Mystic Meghalaya",
    location: "Meghalaya",
    image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=800",
    duration: "3N/4D",
    originalPrice: 38770,
    currentPrice: 24560,
    discount: 37
  },
  {
    id: "manali-exclusive",
    name: "Exclusive Manali",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=800",
    duration: "4N/5D",
    originalPrice: 17290,
    currentPrice: 12449,
    discount: 28
  }
];

export const internationalPackages: Package[] = [
  {
    id: "dubai-delight",
    name: "Dubai Delight",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    duration: "6N/7D",
    originalPrice: 102500,
    currentPrice: 82000,
    discount: 20
  },
  {
    id: "best-thailand",
    name: "Best of Thailand",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    duration: "6N/7D",
    originalPrice: 32500,
    currentPrice: 25000,
    discount: 23
  },
  {
    id: "best-bali",
    name: "Best of Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    duration: "5N/6D",
    originalPrice: 68750,
    currentPrice: 55000,
    discount: 20
  },
  {
    id: "european-extravaganza",
    name: "European Extravaganza",
    location: "Europe",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    duration: "12N/13D",
    originalPrice: 375000,
    currentPrice: 348999,
    discount: 7
  },
  {
    id: "ultimate-europe",
    name: "Ultimate Europe",
    location: "Europe",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
    duration: "13N/14D",
    originalPrice: 394999,
    currentPrice: 349999,
    discount: 11
  },
  {
    id: "swiss-france",
    name: "Best of Swiss & France",
    location: "Switzerland & France",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
    duration: "6N/7D",
    originalPrice: 169000,
    currentPrice: 130000,
    discount: 23
  },
  {
    id: "turkey-tour",
    name: "All of Turkey",
    location: "Turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
    duration: "8N/9D",
    originalPrice: 118300,
    currentPrice: 91000,
    discount: 23
  },
  {
    id: "australia-ultimate",
    name: "Ultimate Australia",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    duration: "9N/10D",
    originalPrice: 299999,
    currentPrice: 274999,
    discount: 8
  }
];

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920",
    title: "Experience Australia",
    subtitle: "Breathtaking Beauty",
    description: "FROM THE OUTBACK TO THE COAST"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920",
    title: "Discover Kerala",
    subtitle: "God's Own Country",
    description: "BACKWATERS, BEACHES & BEYOND"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1920",
    title: "Explore Kashmir",
    subtitle: "Paradise on Earth",
    description: "VALLEYS, LAKES & MOUNTAINS"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920",
    title: "Tour Europe",
    subtitle: "Old World Charm",
    description: "HISTORY, ART & CULTURE"
  }
];

export const stats = [
  { id: 1, value: "1,21,067", label: "Happy Guests", icon: "users" },
  { id: 2, value: "12,614", label: "Tour Packages", icon: "globe" },
  { id: 3, value: "82,648+", label: "Visas 99.9% Success", icon: "award" },
  { id: 4, value: "600+", label: "Group Tours", icon: "users" }
];
