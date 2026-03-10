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
  },
  {
    id: "thailand",
    name: "Thailand",
    description: "Temples, beaches & vibrant culture",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    link: "/destinations/thailand"
  },
  {
    id: "bali",
    name: "Bali",
    description: "Island of Gods & tropical paradise",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    link: "/destinations/bali"
  },
  {
    id: "turkey",
    name: "Turkey",
    description: "Where East meets West in splendor",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
    link: "/destinations/turkey"
  },
  {
    id: "australia",
    name: "Australia",
    description: "Reef, outback & coastal wonders",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=600&fit=crop",
    link: "/destinations/australia"
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
    image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=800&h=600&fit=crop",
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
    id: "meghalaya",
    name: "Meghalaya",
    description: "Living root bridges & crystal rivers",
    image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=800&h=600&fit=crop",
    link: "/destinations/meghalaya"
  },
  {
    id: "andaman",
    name: "Andaman",
    description: "Pristine beaches & coral reefs",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    link: "/destinations/andaman"
  },
  {
    id: "sikkim",
    name: "Sikkim",
    description: "Hidden Himalayan kingdom & monasteries",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    link: "/destinations/sikkim"
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    description: "City of Pearls, Charminar & Biryani",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
    link: "/destinations/hyderabad"
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
    id: "bhutan-happiness",
    name: "Kingdom of Happiness",
    location: "Bhutan",
    image: "https://images.unsplash.com/photo-1609766857326-18a217692f37?w=800&h=600&fit=crop",
    duration: "7D/6N",
    originalPrice: 125000,
    currentPrice: 100000,
    discount: 20,
    rating: 4.8,
    reviews: 156
  },
  {
    id: "kerala-backwaters",
    name: "Kerala Backwater Bliss",
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
    id: "rajasthan-royal",
    name: "Royal Rajasthan Tour",
    location: "Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop",
    duration: "8D/7N",
    originalPrice: 63904,
    currentPrice: 49925,
    discount: 22,
    rating: 4.9,
    reviews: 445
  },
  {
    id: "hyderabad-heritage",
    name: "Hyderabad Heritage Experience",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
    duration: "4D/3N",
    originalPrice: 22000,
    currentPrice: 17600,
    discount: 20,
    rating: 4.8,
    reviews: 312
  },
  {
    id: "hyderabad-srisailam-3day",
    name: "Hyderabad + Srisailam Tour",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
    duration: "3D/2N",
    originalPrice: 14500,
    currentPrice: 11600,
    discount: 20,
    rating: 4.7,
    reviews: 198
  },
  {
    id: "ladakh-adventure",
    name: "Ladakh Adventure",
    location: "Ladakh",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    duration: "7D/6N",
    originalPrice: 38182,
    currentPrice: 21000,
    discount: 45,
    rating: 4.8,
    reviews: 289
  },
  {
    id: "goa-beaches",
    name: "Goa Beach Paradise",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
    duration: "5D/4N",
    originalPrice: 24000,
    currentPrice: 19200,
    discount: 20,
    rating: 4.6,
    reviews: 567
  },
  {
    id: "meghalaya-mystic",
    name: "Mystic Meghalaya Explorer",
    location: "Meghalaya",
    image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=800&h=600&fit=crop",
    duration: "6D/5N",
    originalPrice: 38770,
    currentPrice: 24560,
    discount: 37,
    rating: 4.9,
    reviews: 123
  },
  {
    id: "himachal-highlights",
    name: "Himachal Highlights",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?w=800&h=600&fit=crop",
    duration: "6D/5N",
    originalPrice: 17290,
    currentPrice: 12449,
    discount: 28,
    rating: 4.7,
    reviews: 398
  },
  {
    id: "andaman-island-hopping",
    name: "Andaman Island Paradise",
    location: "Andaman",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    duration: "6D/5N",
    originalPrice: 45000,
    currentPrice: 36000,
    discount: 20,
    rating: 4.8,
    reviews: 198
  },
  {
    id: "sikkim-classic",
    name: "Classic Sikkim Discovery",
    location: "Sikkim",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    duration: "7D/6N",
    originalPrice: 42000,
    currentPrice: 33600,
    discount: 20,
    rating: 4.9,
    reviews: 167
  }
];

export const internationalPackages: Package[] = [
  {
    id: "dubai-luxury",
    name: "Dubai Luxury Experience",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    duration: "6D/5N",
    originalPrice: 102500,
    currentPrice: 82000,
    discount: 20,
    rating: 4.9,
    reviews: 456
  },
  {
    id: "thailand-adventure",
    name: "Thailand Explorer",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    duration: "7D/6N",
    originalPrice: 32500,
    currentPrice: 25000,
    discount: 23,
    rating: 4.8,
    reviews: 678
  },
  {
    id: "bali-essence",
    name: "Essence of Bali",
    location: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    duration: "6D/5N",
    originalPrice: 68750,
    currentPrice: 55000,
    discount: 20,
    rating: 4.9,
    reviews: 523
  },
  {
    id: "europe-highlights",
    name: "Europe Highlights Tour",
    location: "Europe",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop",
    duration: "10D/9N",
    originalPrice: 375000,
    currentPrice: 348999,
    discount: 7,
    rating: 4.9,
    reviews: 234
  },
  {
    id: "swiss-highlights",
    name: "Swiss Alpine Journey",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
    duration: "7D/6N",
    originalPrice: 169000,
    currentPrice: 135200,
    discount: 20,
    rating: 4.9,
    reviews: 312
  },
  {
    id: "turkey-highlights",
    name: "Best of Turkey",
    location: "Turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
    duration: "9D/8N",
    originalPrice: 118300,
    currentPrice: 91000,
    discount: 23,
    rating: 4.8,
    reviews: 267
  },
  {
    id: "australia-explorer",
    name: "Australia Explorer",
    location: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=600&fit=crop",
    duration: "10D/9N",
    originalPrice: 299999,
    currentPrice: 274999,
    discount: 8,
    rating: 4.9,
    reviews: 145
  },
  {
    id: "japan-classic",
    name: "Classic Japan Journey",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop",
    duration: "10D/9N",
    originalPrice: 225000,
    currentPrice: 180000,
    discount: 20,
    rating: 4.8,
    reviews: 289
  },
  {
    id: "vietnam-discovery",
    name: "Vietnam Discovery",
    location: "Vietnam",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=600&fit=crop",
    duration: "10D/9N",
    originalPrice: 95000,
    currentPrice: 76000,
    discount: 20,
    rating: 4.7,
    reviews: 198
  },
  {
    id: "france-romance",
    name: "Romantic France",
    location: "France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop",
    duration: "8D/7N",
    originalPrice: 175000,
    currentPrice: 140000,
    discount: 20,
    rating: 4.9,
    reviews: 234
  },
  {
    id: "usa-highlights",
    name: "American Dream",
    location: "USA",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
    duration: "12D/11N",
    originalPrice: 325000,
    currentPrice: 260000,
    discount: 20,
    rating: 4.8,
    reviews: 178
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
