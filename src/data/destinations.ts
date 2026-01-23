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
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&h=600&fit=crop",
    link: "/destinations/singapore"
  },
  {
    id: "japan",
    name: "Japan",
    description: "Experience ancient history & culture",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop",
    link: "/destinations/japan"
  },
  {
    id: "vietnam",
    name: "Vietnam",
    description: "Discover natural beauty & heritage",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop",
    link: "/destinations/vietnam"
  },
  {
    id: "bhutan",
    name: "Bhutan",
    description: "Land of happiness & monasteries",
    image: "https://images.unsplash.com/photo-1609766857326-18a217692f37?w=800&h=600&fit=crop",
    link: "/destinations/bhutan"
  },
  {
    id: "france",
    name: "France",
    description: "Indulge in art, culture & cuisine",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop",
    link: "/destinations/france"
  },
  {
    id: "usa",
    name: "USA",
    description: "Explore diverse landscapes & cities",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
    link: "/destinations/usa"
  },
  {
    id: "switzerland",
    name: "Switzerland",
    description: "Alpine beauty & serene landscapes",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
    link: "/destinations/switzerland"
  },
  {
    id: "dubai",
    name: "Dubai",
    description: "Luxury, adventure & modern marvels",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    link: "/destinations/dubai"
  }
];

export const indiaDestinations: Destination[] = [
  {
    id: "kashmir",
    name: "Kashmir",
    description: "Paradise on Earth with scenic valleys",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&h=600&fit=crop",
    link: "/destinations/kashmir"
  },
  {
    id: "ladakh",
    name: "Ladakh",
    description: "High-altitude desert adventure",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    link: "/destinations/ladakh"
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    description: "Mountains, valleys & adventure",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    link: "/destinations/himachal"
  },
  {
    id: "kerala",
    name: "Kerala",
    description: "God's own country with backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
    link: "/destinations/kerala"
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    description: "Royal heritage & desert landscapes",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
    link: "/destinations/rajasthan"
  },
  {
    id: "goa",
    name: "Goa",
    description: "Beaches, nightlife & Portuguese heritage",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    link: "/destinations/goa"
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    description: "City of Pearls & Biryani",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    link: "/destinations/hyderabad"
  },
  {
    id: "andaman",
    name: "Andaman",
    description: "Pristine beaches & coral reefs",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    link: "/destinations/andaman"
  }
];

export const indiaPackages: Package[] = [
  {
    id: "kashmir-highlights",
    name: "Highlights of Kashmir",
    location: "Kashmir",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&h=600&fit=crop",
    duration: "6D/5N",
    originalPrice: 32680,
    currentPrice: 27180,
    discount: 17,
    rating: 4.9,
    reviews: 234
  },
  {
    id: "bhutan-group",
    name: "Worthy Bhutan Group",
    location: "Bhutan",
    image: "https://images.unsplash.com/photo-1609766857326-18a217692f37?w=800&h=600&fit=crop",
    duration: "7D/6N",
    originalPrice: 78760,
    currentPrice: 69560,
    discount: 12,
    rating: 4.8,
    reviews: 156
  },
  {
    id: "discover-kerala",
    name: "Discover Kerala",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
    duration: "5D/4N",
    originalPrice: 24500,
    currentPrice: 19000,
    discount: 22,
    rating: 4.7,
    reviews: 312
  },
  {
    id: "exploring-rajasthan",
    name: "Exploring Rajasthan",
    location: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
    duration: "7D/6N",
    originalPrice: 63904,
    currentPrice: 49925,
    discount: 22,
    rating: 4.9,
    reviews: 445
  },
  {
    id: "leh-ladakh",
    name: "Leh Ladakh Expedition",
    location: "Ladakh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    duration: "6D/5N",
    originalPrice: 38182,
    currentPrice: 21000,
    discount: 45,
    rating: 4.8,
    reviews: 289
  },
  {
    id: "goa-weekend",
    name: "Goa Weekend Getaway",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    duration: "3D/2N",
    originalPrice: 9000,
    currentPrice: 6499,
    discount: 28,
    rating: 4.6,
    reviews: 567
  },
  {
    id: "meghalaya-mystic",
    name: "Mystic Meghalaya",
    location: "Meghalaya",
    image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=800&h=600&fit=crop",
    duration: "3N/4D",
    originalPrice: 38770,
    currentPrice: 24560,
    discount: 37,
    rating: 4.9,
    reviews: 123
  },
  {
    id: "manali-exclusive",
    name: "Exclusive Manali",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=800&h=600&fit=crop",
    duration: "4N/5D",
    originalPrice: 17290,
    currentPrice: 12449,
    discount: 28,
    rating: 4.7,
    reviews: 398
  }
];

export const internationalPackages: Package[] = [
  {
    id: "dubai-delight",
    name: "Dubai Delight",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    duration: "6N/7D",
    originalPrice: 102500,
    currentPrice: 82000,
    discount: 20,
    rating: 4.9,
    reviews: 456
  },
  {
    id: "best-thailand",
    name: "Best of Thailand",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    duration: "6N/7D",
    originalPrice: 32500,
    currentPrice: 25000,
    discount: 23,
    rating: 4.8,
    reviews: 678
  },
  {
    id: "best-bali",
    name: "Best of Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    duration: "5N/6D",
    originalPrice: 68750,
    currentPrice: 55000,
    discount: 20,
    rating: 4.9,
    reviews: 523
  },
  {
    id: "european-extravaganza",
    name: "European Extravaganza",
    location: "Europe",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop",
    duration: "12N/13D",
    originalPrice: 375000,
    currentPrice: 348999,
    discount: 7,
    rating: 4.9,
    reviews: 234
  },
  {
    id: "ultimate-europe",
    name: "Ultimate Europe",
    location: "Europe",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
    duration: "13N/14D",
    originalPrice: 394999,
    currentPrice: 349999,
    discount: 11,
    rating: 4.8,
    reviews: 189
  },
  {
    id: "swiss-france",
    name: "Best of Swiss & France",
    location: "Switzerland & France",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
    duration: "6N/7D",
    originalPrice: 169000,
    currentPrice: 130000,
    discount: 23,
    rating: 4.9,
    reviews: 312
  },
  {
    id: "turkey-tour",
    name: "All of Turkey",
    location: "Turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
    duration: "8N/9D",
    originalPrice: 118300,
    currentPrice: 91000,
    discount: 23,
    rating: 4.8,
    reviews: 267
  },
  {
    id: "australia-ultimate",
    name: "Ultimate Australia",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=600&fit=crop",
    duration: "9N/10D",
    originalPrice: 299999,
    currentPrice: 274999,
    discount: 8,
    rating: 4.9,
    reviews: 145
  }
];

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920&h=1080&fit=crop",
    title: "Discover Hyderabad",
    subtitle: "City of Pearls",
    description: "HERITAGE, BIRYANI & BEYOND"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1920&h=1080&fit=crop",
    title: "Explore Kashmir",
    subtitle: "Paradise on Earth",
    description: "VALLEYS, LAKES & MOUNTAINS"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&h=1080&fit=crop",
    title: "Discover Kerala",
    subtitle: "God's Own Country",
    description: "BACKWATERS, BEACHES & BEYOND"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop",
    title: "Experience Dubai",
    subtitle: "City of Dreams",
    description: "LUXURY, ADVENTURE & MODERN MARVELS"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&h=1080&fit=crop",
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
