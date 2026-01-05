export interface Itinerary {
  day: number;
  title: string;
  description: string;
  highlights: string[];
}

export interface DestinationPackage {
  id: string;
  name: string;
  duration: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: Itinerary[];
}

export interface DestinationData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  bannerImages: string[];
  packages: DestinationPackage[];
}

// Kashmir Packages
export const kashmirData: DestinationData = {
  id: "kashmir",
  name: "Kashmir",
  tagline: "Paradise on Earth",
  description: "Discover the breathtaking beauty of Kashmir with its pristine valleys, snow-capped mountains, serene lakes, and rich cultural heritage. Experience the warmth of Kashmiri hospitality and create memories that last a lifetime.",
  heroImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
    "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800"
  ],
  packages: [
    {
      id: "kashmir-highlights",
      name: "Highlights of Kashmir",
      duration: "6D/5N",
      originalPrice: 32680,
      currentPrice: 27180,
      discount: 17,
      image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
      description: "Experience the best of Kashmir with visits to Srinagar, Gulmarg, Pahalgam, and Sonmarg.",
      highlights: ["Shikara Ride on Dal Lake", "Gondola Ride in Gulmarg", "Betaab Valley Visit", "Mughal Gardens Tour"],
      inclusions: ["5 Nights Accommodation", "Daily Breakfast & Dinner", "AC Vehicle", "Sightseeing as per itinerary", "Airport Transfers"],
      exclusions: ["Airfare", "Personal Expenses", "Travel Insurance", "Tips & Gratuities"],
      itinerary: [
        { day: 1, title: "Arrival in Srinagar", description: "Arrive at Srinagar Airport. Transfer to houseboat on Dal Lake. Evening Shikara ride.", highlights: ["Airport Pickup", "Houseboat Check-in", "Shikara Ride"] },
        { day: 2, title: "Srinagar - Gulmarg", description: "Drive to Gulmarg, the 'Meadow of Flowers'. Enjoy Gondola ride to Kongdoori and Apharwat Peak.", highlights: ["Gondola Ride Phase 1 & 2", "Snow Activities", "Scenic Views"] },
        { day: 3, title: "Gulmarg - Pahalgam", description: "Drive to Pahalgam via Saffron fields. Visit Betaab Valley and Aru Valley.", highlights: ["Betaab Valley", "Aru Valley", "Lidder River"] },
        { day: 4, title: "Pahalgam Exploration", description: "Full day exploration of Pahalgam. Visit Chandanwari and Baisaran Valley.", highlights: ["Chandanwari", "Baisaran Valley", "Local Markets"] },
        { day: 5, title: "Pahalgam - Srinagar", description: "Return to Srinagar. Visit Mughal Gardens - Nishat Bagh, Shalimar Bagh, and Chashme Shahi.", highlights: ["Nishat Bagh", "Shalimar Bagh", "Chashme Shahi", "Local Shopping"] },
        { day: 6, title: "Departure", description: "Transfer to Srinagar Airport for departure.", highlights: ["Airport Drop", "Fond Memories"] }
      ]
    },
    {
      id: "kashmir-honeymoon",
      name: "Romantic Kashmir Honeymoon",
      duration: "7D/6N",
      originalPrice: 45000,
      currentPrice: 38500,
      discount: 14,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      description: "Perfect honeymoon getaway with romantic houseboat stays and scenic destinations.",
      highlights: ["2 Nights Houseboat Stay", "Romantic Shikara Ride", "Candlelight Dinner", "Private Tours"],
      inclusions: ["6 Nights Accommodation", "All Meals", "Private AC Vehicle", "Honeymoon Cake", "Flower Decoration"],
      exclusions: ["Airfare", "Personal Expenses", "Adventure Activities"],
      itinerary: [
        { day: 1, title: "Arrival & Romance", description: "Arrive Srinagar. Special houseboat welcome with flowers and cake.", highlights: ["Romantic Welcome", "Houseboat Stay", "Sunset Shikara"] },
        { day: 2, title: "Srinagar Sightseeing", description: "Visit Mughal Gardens and local handicraft centers.", highlights: ["Mughal Gardens", "Handicraft Shopping", "Couple Photos"] },
        { day: 3, title: "Gulmarg Adventure", description: "Day trip to Gulmarg with Gondola ride.", highlights: ["Gondola Ride", "Snow Play", "Mountain Views"] },
        { day: 4, title: "Pahalgam Journey", description: "Drive to Pahalgam, the Valley of Shepherds.", highlights: ["Scenic Drive", "Aru Valley", "Riverside Walk"] },
        { day: 5, title: "Pahalgam Romance", description: "Private picnic at Betaab Valley.", highlights: ["Private Picnic", "Photography", "Nature Walks"] },
        { day: 6, title: "Back to Srinagar", description: "Return to Srinagar houseboat. Candlelight dinner.", highlights: ["Candlelight Dinner", "Shikara Ride", "Stargazing"] },
        { day: 7, title: "Departure", description: "Fond farewell and airport transfer.", highlights: ["Departure", "Sweet Memories"] }
      ]
    },
    {
      id: "kashmir-adventure",
      name: "Kashmir Adventure Trek",
      duration: "8D/7N",
      originalPrice: 52000,
      currentPrice: 44200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800",
      description: "Adventure-packed Kashmir tour with trekking, camping, and thrilling activities.",
      highlights: ["Kashmir Great Lakes Trek", "Camping Under Stars", "River Rafting", "Mountain Biking"],
      inclusions: ["7 Nights Accommodation", "All Meals", "Trekking Equipment", "Guide & Porter", "Permits"],
      exclusions: ["Airfare", "Personal Gear", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival in Srinagar", description: "Arrive and acclimatize. Evening briefing.", highlights: ["Arrival", "Briefing", "Equipment Check"] },
        { day: 2, title: "Trek Start", description: "Drive to Sonamarg. Begin trek to Nichnai.", highlights: ["Sonamarg", "Trek Begin", "Campsite"] },
        { day: 3, title: "Nichnai to Vishansar", description: "Trek through alpine meadows to Vishansar Lake.", highlights: ["Alpine Meadows", "Vishansar Lake", "Camping"] },
        { day: 4, title: "Vishansar to Gadsar", description: "Cross Gadsar Pass to reach Gadsar Lake.", highlights: ["Gadsar Pass", "High Altitude Trek", "Lake Views"] },
        { day: 5, title: "Gadsar to Satsar", description: "Trek to the beautiful Satsar Lakes.", highlights: ["Seven Lakes", "Photography", "Wildlife"] },
        { day: 6, title: "Satsar to Gangabal", description: "Reach the pristine Gangabal Lake.", highlights: ["Gangabal Lake", "Mt Harmukh Views", "Final Camp"] },
        { day: 7, title: "Descent to Naranag", description: "Trek down to Naranag. Drive to Srinagar.", highlights: ["Descent", "Ancient Temple", "Hotel Stay"] },
        { day: 8, title: "Departure", description: "Morning free. Airport transfer.", highlights: ["Departure", "Memories"] }
      ]
    },
    {
      id: "kashmir-winter-wonderland",
      name: "Kashmir Winter Wonderland",
      duration: "5D/4N",
      originalPrice: 35000,
      currentPrice: 29750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
      description: "Experience magical winter in Kashmir with skiing, snow activities, and frozen landscapes.",
      highlights: ["Skiing in Gulmarg", "Frozen Dal Lake", "Snow Adventures", "Hot Kahwa by Fire"],
      inclusions: ["4 Nights Accommodation", "All Meals", "Snow Gear", "Skiing Lessons", "Transfers"],
      exclusions: ["Airfare", "Personal Expenses", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Arrival in Winter Paradise", description: "Arrive Srinagar. Experience frozen Dal Lake.", highlights: ["Frozen Lake Walk", "Hot Kahwa", "Snow Photos"] },
        { day: 2, title: "Gulmarg Skiing", description: "Full day skiing and snow activities in Gulmarg.", highlights: ["Skiing Lessons", "Gondola Ride", "Snow Play"] },
        { day: 3, title: "More Snow Fun", description: "Advanced skiing or snowboarding. Evening bonfire.", highlights: ["Advanced Slopes", "Snowboarding", "Bonfire"] },
        { day: 4, title: "Pahalgam Snow", description: "Drive to snowy Pahalgam for sledge rides.", highlights: ["Sledge Rides", "Frozen Waterfalls", "Warm Cuisine"] },
        { day: 5, title: "Departure", description: "Transfer to airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "kashmir-family-delight",
      name: "Kashmir Family Delight",
      duration: "6D/5N",
      originalPrice: 48000,
      currentPrice: 40800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      description: "Perfect family vacation with kid-friendly activities and comfortable stays.",
      highlights: ["Pony Rides", "Shikara Fun", "Apple Orchards", "Cultural Shows"],
      inclusions: ["5 Nights Family Rooms", "All Meals", "Kid-Friendly Activities", "Private Vehicle", "Guide"],
      exclusions: ["Airfare", "Personal Expenses", "Shopping"],
      itinerary: [
        { day: 1, title: "Welcome to Kashmir", description: "Arrive Srinagar. Shikara ride for the whole family.", highlights: ["Family Shikara Ride", "Houseboat Tour", "Local Snacks"] },
        { day: 2, title: "Gulmarg Fun", description: "Gondola ride and pony rides for kids.", highlights: ["Pony Rides", "Snow Play", "Gondola Adventure"] },
        { day: 3, title: "Pahalgam Adventure", description: "Visit valleys with horse riding for kids.", highlights: ["Betaab Valley", "Horse Riding", "River Picnic"] },
        { day: 4, title: "Sonmarg Day Trip", description: "Visit the beautiful meadow of gold.", highlights: ["Thajiwas Glacier", "Pony Ride to Glacier", "Picnic Lunch"] },
        { day: 5, title: "Srinagar Exploration", description: "Gardens, handicraft tour, and cultural show.", highlights: ["Mughal Gardens", "Papier-Mâché Workshop", "Cultural Show"] },
        { day: 6, title: "Departure", description: "Shopping for souvenirs and departure.", highlights: ["Souvenir Shopping", "Departure"] }
      ]
    }
  ]
};

// Kerala Packages
export const keralaData: DestinationData = {
  id: "kerala",
  name: "Kerala",
  tagline: "God's Own Country",
  description: "Experience the magic of Kerala with its serene backwaters, lush tea gardens, pristine beaches, and rich cultural heritage. Discover Ayurvedic wellness and taste the flavors of authentic Malabar cuisine.",
  heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800",
    "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800"
  ],
  packages: [
    {
      id: "kerala-backwaters",
      name: "Kerala Backwater Bliss",
      duration: "5D/4N",
      originalPrice: 28500,
      currentPrice: 23800,
      discount: 16,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      description: "Cruise through the serene backwaters of Alleppey on a traditional houseboat.",
      highlights: ["Houseboat Stay", "Kathakali Show", "Ayurvedic Spa", "Tea Garden Visit"],
      inclusions: ["4 Nights Accommodation", "All Meals on Houseboat", "AC Vehicle", "Sightseeing"],
      exclusions: ["Airfare", "Personal Expenses", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Arrival in Cochin", description: "Arrive at Cochin Airport. Visit Fort Kochi, Chinese Fishing Nets, and St. Francis Church.", highlights: ["Fort Kochi", "Chinese Fishing Nets", "Jewish Synagogue"] },
        { day: 2, title: "Cochin to Munnar", description: "Drive to Munnar through scenic tea plantations. Visit tea museum.", highlights: ["Tea Gardens", "Mattupetty Dam", "Echo Point"] },
        { day: 3, title: "Munnar to Thekkady", description: "Visit Eravikulam National Park. Drive to Thekkady.", highlights: ["Eravikulam", "Spice Plantation", "Periyar Lake"] },
        { day: 4, title: "Thekkady to Alleppey", description: "Board houseboat at Alleppey. Cruise through backwaters.", highlights: ["Houseboat Cruise", "Village Views", "Sunset Cruise"] },
        { day: 5, title: "Departure", description: "Disembark houseboat. Transfer to Cochin Airport.", highlights: ["Morning Cruise", "Departure"] }
      ]
    },
    {
      id: "kerala-complete",
      name: "Complete Kerala",
      duration: "7D/6N",
      originalPrice: 42000,
      currentPrice: 35700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800",
      description: "Comprehensive Kerala tour covering all major attractions from hills to beaches.",
      highlights: ["Munnar Hills", "Periyar Wildlife", "Alleppey Backwaters", "Kovalam Beach"],
      inclusions: ["6 Nights Accommodation", "Daily Breakfast", "AC Vehicle", "All Sightseeing"],
      exclusions: ["Airfare", "Lunch & Dinner", "Boat Rides"],
      itinerary: [
        { day: 1, title: "Cochin Arrival", description: "Explore Cochin - Fort Kochi, Chinese Nets, Mattancherry Palace.", highlights: ["Fort Kochi", "Mattancherry", "Kathakali Show"] },
        { day: 2, title: "Cochin to Munnar", description: "Scenic drive to Munnar. Visit Cheeyappara Waterfalls.", highlights: ["Waterfalls", "Spice Gardens", "Tea Estates"] },
        { day: 3, title: "Munnar Sightseeing", description: "Full day Munnar exploration.", highlights: ["Eravikulam", "Top Station", "Photo Point"] },
        { day: 4, title: "Munnar to Thekkady", description: "Drive to Thekkady. Evening spice plantation tour.", highlights: ["Periyar", "Spice Walk", "Tribal Dance"] },
        { day: 5, title: "Thekkady to Alleppey", description: "Houseboat cruise in Alleppey backwaters.", highlights: ["Houseboat", "Backwater Cruise", "Local Life"] },
        { day: 6, title: "Alleppey to Kovalam", description: "Drive to Kovalam Beach. Evening at leisure.", highlights: ["Beach Walk", "Lighthouse", "Sunset"] },
        { day: 7, title: "Departure", description: "Transfer to Trivandrum Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "kerala-ayurveda",
      name: "Kerala Ayurveda Retreat",
      duration: "6D/5N",
      originalPrice: 55000,
      currentPrice: 46750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800",
      description: "Rejuvenating Ayurvedic wellness retreat with traditional treatments and yoga.",
      highlights: ["Ayurvedic Treatments", "Daily Yoga", "Meditation Sessions", "Organic Cuisine"],
      inclusions: ["5 Nights Resort Stay", "All Ayurvedic Treatments", "Yoga & Meditation", "All Meals"],
      exclusions: ["Airfare", "Personal Expenses", "Additional Treatments"],
      itinerary: [
        { day: 1, title: "Arrival & Consultation", description: "Arrive at resort. Doctor consultation and treatment planning.", highlights: ["Welcome", "Consultation", "Diet Planning"] },
        { day: 2, title: "Panchakarma Begin", description: "Start Ayurvedic treatments. Morning yoga session.", highlights: ["Abhyanga", "Yoga", "Meditation"] },
        { day: 3, title: "Deep Detox", description: "Continue treatments with detox therapies.", highlights: ["Shirodhara", "Steam Bath", "Nature Walk"] },
        { day: 4, title: "Rejuvenation", description: "Rejuvenation therapies and relaxation.", highlights: ["Pizhichil", "Herbal Bath", "Cooking Class"] },
        { day: 5, title: "Wellness Continue", description: "Final treatments and wellness activities.", highlights: ["Treatments", "Beach Visit", "Sunset Meditation"] },
        { day: 6, title: "Departure", description: "Final consultation and departure.", highlights: ["Consultation", "Farewell"] }
      ]
    },
    {
      id: "kerala-honeymoon",
      name: "Kerala Honeymoon Special",
      duration: "6D/5N",
      originalPrice: 52000,
      currentPrice: 44200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      description: "Romantic Kerala honeymoon with private houseboat, candlelight dinners, and couple spa.",
      highlights: ["Private Houseboat", "Candlelight Dinners", "Couple Spa", "Romantic Settings"],
      inclusions: ["5 Nights Premium Stay", "All Meals", "Private Transfers", "Couple Activities"],
      exclusions: ["Airfare", "Personal Shopping", "Optional Tours"],
      itinerary: [
        { day: 1, title: "Romantic Arrival", description: "Arrive Cochin. Flower-decorated room and welcome dinner.", highlights: ["Romantic Welcome", "Candlelight Dinner", "Fort Kochi Walk"] },
        { day: 2, title: "Munnar Romance", description: "Drive to Munnar. Private tea estate visit.", highlights: ["Scenic Drive", "Private Tea Tasting", "Mountain Views"] },
        { day: 3, title: "Love in the Hills", description: "Private picnic and couple photoshoot.", highlights: ["Private Picnic", "Photoshoot", "Sunset Point"] },
        { day: 4, title: "Houseboat Romance", description: "Private houseboat experience with chef.", highlights: ["Private Houseboat", "Candlelight Dinner on Boat", "Stargazing"] },
        { day: 5, title: "Beach Bliss", description: "Kovalam beach. Couple spa and beach dinner.", highlights: ["Couple Ayurvedic Spa", "Beach Walk", "Seafood Dinner"] },
        { day: 6, title: "Departure", description: "Farewell with sweet memories.", highlights: ["Departure"] }
      ]
    },
    {
      id: "kerala-wildlife",
      name: "Kerala Wildlife Safari",
      duration: "5D/4N",
      originalPrice: 32000,
      currentPrice: 27200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800",
      description: "Wildlife adventure in Kerala's best sanctuaries and national parks.",
      highlights: ["Periyar Tiger Reserve", "Elephant Safari", "Bird Watching", "Nature Camps"],
      inclusions: ["4 Nights Accommodation", "All Meals", "Safari Permits", "Naturalist Guide"],
      exclusions: ["Airfare", "Personal Expenses", "Camera Fees"],
      itinerary: [
        { day: 1, title: "Arrival Thekkady", description: "Arrive and transfer to Thekkady wildlife resort.", highlights: ["Resort Check-in", "Nature Walk", "Wildlife Documentary"] },
        { day: 2, title: "Periyar Safari", description: "Morning boat safari on Periyar Lake. Evening bamboo rafting.", highlights: ["Boat Safari", "Elephant Sighting", "Bamboo Rafting"] },
        { day: 3, title: "Nature Trails", description: "Guided jungle trek and spice plantation visit.", highlights: ["Jungle Trek", "Wildlife Spotting", "Spice Plantation"] },
        { day: 4, title: "Kumarakom Birds", description: "Visit Kumarakom Bird Sanctuary. Evening backwater cruise.", highlights: ["Bird Watching", "Migratory Birds", "Backwater Cruise"] },
        { day: 5, title: "Departure", description: "Transfer to Cochin Airport.", highlights: ["Departure"] }
      ]
    }
  ]
};

// Ladakh Packages
export const ladakhData: DestinationData = {
  id: "ladakh",
  name: "Ladakh",
  tagline: "Land of High Passes",
  description: "Experience the breathtaking landscapes of Ladakh - from the pristine Pangong Lake to the rugged Nubra Valley. Discover ancient monasteries, high mountain passes, and the unique Ladakhi culture.",
  heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
  ],
  packages: [
    {
      id: "ladakh-adventure",
      name: "Ladakh Adventure",
      duration: "7D/6N",
      originalPrice: 45000,
      currentPrice: 38250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Ultimate Ladakh adventure covering Leh, Nubra Valley, and Pangong Lake.",
      highlights: ["Pangong Lake", "Nubra Valley", "Khardung La", "Monasteries"],
      inclusions: ["6 Nights Accommodation", "All Meals", "Permits", "Sightseeing"],
      exclusions: ["Airfare", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival in Leh", description: "Arrive at Leh Airport. Rest and acclimatize.", highlights: ["Airport Pickup", "Acclimatization", "Light Walk"] },
        { day: 2, title: "Leh Local Sightseeing", description: "Visit Shanti Stupa, Leh Palace, and local markets.", highlights: ["Shanti Stupa", "Leh Palace", "Local Market"] },
        { day: 3, title: "Leh to Nubra Valley", description: "Drive to Nubra via Khardung La pass.", highlights: ["Khardung La", "Diskit Monastery", "Sand Dunes"] },
        { day: 4, title: "Nubra to Pangong", description: "Drive to Pangong Lake via Shyok route.", highlights: ["Scenic Drive", "Pangong Lake", "Sunset at Lake"] },
        { day: 5, title: "Pangong to Leh", description: "Return to Leh via Chang La pass.", highlights: ["Chang La", "Hemis Monastery", "Thiksey"] },
        { day: 6, title: "Sham Valley Tour", description: "Visit Magnetic Hill, Sangam, and Alchi Monastery.", highlights: ["Magnetic Hill", "Sangam Point", "Alchi"] },
        { day: 7, title: "Departure", description: "Transfer to Leh Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "ladakh-bike-expedition",
      name: "Ladakh Bike Expedition",
      duration: "9D/8N",
      originalPrice: 65000,
      currentPrice: 55250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
      description: "Epic bike expedition through the world's highest motorable roads.",
      highlights: ["Royal Enfield Bikes", "Khardung La", "Tanglang La", "Magnetic Hill"],
      inclusions: ["8 Nights Accommodation", "All Meals", "Bike with Fuel", "Mechanic Support", "Permits"],
      exclusions: ["Airfare", "Gear", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival & Acclimatization", description: "Arrive Leh. Rest and bike allocation.", highlights: ["Bike Handover", "Test Ride", "Route Briefing"] },
        { day: 2, title: "Leh Exploration", description: "Easy ride to local monasteries.", highlights: ["Shanti Stupa", "Thiksey", "Hemis"] },
        { day: 3, title: "Leh to Nubra", description: "Ride over Khardung La to Nubra Valley.", highlights: ["Khardung La 18380ft", "Diskit", "Hunder Dunes"] },
        { day: 4, title: "Nubra to Pangong", description: "Ride through Shyok Valley to Pangong.", highlights: ["Shyok Route", "Pangong Lake", "Lakeside Stay"] },
        { day: 5, title: "Pangong to Hanle", description: "Remote ride to Hanle via Chushul.", highlights: ["Chang La", "Chushul", "Hanle Observatory"] },
        { day: 6, title: "Hanle to Tso Moriri", description: "Ride to the pristine Tso Moriri Lake.", highlights: ["Remote Trails", "Tso Moriri", "Wild Camping"] },
        { day: 7, title: "Tso Moriri to Leh", description: "Ride back via More Plains and Tanglang La.", highlights: ["More Plains", "Tanglang La", "Upshi"] },
        { day: 8, title: "Buffer Day", description: "Rest day or explore Leh markets.", highlights: ["Shopping", "Cafe Hopping", "Photography"] },
        { day: 9, title: "Departure", description: "Return bikes and airport transfer.", highlights: ["Departure"] }
      ]
    },
    {
      id: "ladakh-monasteries",
      name: "Ladakh Monastery Trail",
      duration: "6D/5N",
      originalPrice: 38000,
      currentPrice: 32300,
      discount: 15,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Spiritual journey through ancient Buddhist monasteries of Ladakh.",
      highlights: ["Hemis Monastery", "Thiksey", "Diskit", "Alchi"],
      inclusions: ["5 Nights Accommodation", "All Meals", "Permits", "Expert Guide"],
      exclusions: ["Airfare", "Photography Fees", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival Leh", description: "Arrive and acclimatize. Visit Shanti Stupa.", highlights: ["Shanti Stupa", "Sunset Views", "Rest"] },
        { day: 2, title: "Central Ladakh Monasteries", description: "Visit Thiksey, Hemis, and Stok Palace.", highlights: ["Thiksey Morning Prayer", "Hemis", "Stok Museum"] },
        { day: 3, title: "Sham Valley Monasteries", description: "Explore Likir, Alchi, and Lamayuru.", highlights: ["Likir", "Alchi Murals", "Lamayuru Moonland"] },
        { day: 4, title: "Nubra Monastery Tour", description: "Cross Khardung La. Visit Diskit and Samstanling.", highlights: ["Diskit Buddha", "Samstanling", "Monastery Stay"] },
        { day: 5, title: "Return to Leh", description: "Return via monasteries. Evening meditation session.", highlights: ["Meditation", "Local Interaction", "Cultural Evening"] },
        { day: 6, title: "Departure", description: "Early morning departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "ladakh-photography",
      name: "Ladakh Photography Tour",
      duration: "8D/7N",
      originalPrice: 72000,
      currentPrice: 61200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Photography expedition capturing Ladakh's stunning landscapes and culture.",
      highlights: ["Golden Hour Shoots", "Monastery Photography", "Landscape Sessions", "Astrophotography"],
      inclusions: ["7 Nights Accommodation", "All Meals", "Photography Guide", "Best Viewpoints", "Permits"],
      exclusions: ["Airfare", "Camera Gear", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival & Sunset Shoot", description: "Arrive Leh. Evening shoot at Shanti Stupa.", highlights: ["Sunset Photography", "Cityscape", "Acclimatization"] },
        { day: 2, title: "Monastery Light", description: "Sunrise at Thiksey. Hemis afternoon.", highlights: ["Thiksey Sunrise", "Monk Portraits", "Hemis Architecture"] },
        { day: 3, title: "Nubra Landscapes", description: "Drive to Nubra. Dune photography.", highlights: ["Khardung La Shots", "Sand Dunes", "Camel Shots"] },
        { day: 4, title: "Pangong Magic", description: "Drive to Pangong. Sunset and blue hour.", highlights: ["Lake Reflections", "Color Changes", "Milky Way"] },
        { day: 5, title: "Pangong Sunrise", description: "Early morning shoot. Drive to Leh.", highlights: ["Sunrise Shoot", "Landscape Shots", "Chang La Views"] },
        { day: 6, title: "Sham Valley", description: "Photography in Sham Valley monasteries.", highlights: ["Alchi Murals", "Lamayuru Moonland", "Sangam Point"] },
        { day: 7, title: "Local Life", description: "Street photography and cultural shots.", highlights: ["Market Scenes", "Local Portraits", "Cultural Events"] },
        { day: 8, title: "Departure", description: "Sunrise shoot and departure.", highlights: ["Final Shoot", "Departure"] }
      ]
    },
    {
      id: "ladakh-tso-moriri",
      name: "Ladakh Tso Moriri Explorer",
      duration: "8D/7N",
      originalPrice: 55000,
      currentPrice: 46750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
      description: "Explore the hidden gem Tso Moriri and remote regions of Changthang.",
      highlights: ["Tso Moriri Lake", "Changthang Plateau", "Nomadic Tribes", "Wildlife"],
      inclusions: ["7 Nights Accommodation", "All Meals", "4x4 Vehicle", "Permits", "Camping Gear"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Leh", description: "Arrive and rest for acclimatization.", highlights: ["Rest", "Light Walk", "Briefing"] },
        { day: 2, title: "Leh Sightseeing", description: "Explore Leh Palace and monasteries.", highlights: ["Leh Palace", "Shanti Stupa", "Market"] },
        { day: 3, title: "Leh to Tso Moriri", description: "Drive via Chumathang to Tso Moriri.", highlights: ["Chumathang Hot Springs", "Mahe Bridge", "Korzok Village"] },
        { day: 4, title: "Tso Moriri Exploration", description: "Full day at the pristine lake.", highlights: ["Lake Walk", "Korzok Monastery", "Wildlife Spotting"] },
        { day: 5, title: "Tso Moriri to Pangong", description: "Cross Changthang to reach Pangong.", highlights: ["Changthang Plateau", "Wild Ass", "Pangong Lake"] },
        { day: 6, title: "Pangong to Nubra", description: "Drive to Nubra via Shyok.", highlights: ["Shyok Valley", "Diskit", "Sand Dunes"] },
        { day: 7, title: "Nubra to Leh", description: "Return via Khardung La.", highlights: ["Khardung La", "North Pullu", "Leh Market"] },
        { day: 8, title: "Departure", description: "Airport transfer.", highlights: ["Departure"] }
      ]
    }
  ]
};

// Himachal Pradesh Packages
export const himachalData: DestinationData = {
  id: "himachal-pradesh",
  name: "Himachal Pradesh",
  tagline: "Dev Bhoomi - Land of Gods",
  description: "Explore the majestic hills of Himachal Pradesh - from the colonial charm of Shimla to the adventure hub Manali, spiritual Dharamshala to serene Dalhousie.",
  heroImage: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800",
    "https://images.unsplash.com/photo-1591018653367-067fd14a5616?w=800"
  ],
  packages: [
    {
      id: "himachal-highlights",
      name: "Himachal Highlights",
      duration: "6D/5N",
      originalPrice: 28000,
      currentPrice: 23800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
      description: "Best of Himachal covering Shimla, Kullu, and Manali.",
      highlights: ["Mall Road Shimla", "Rohtang Pass", "Solang Valley", "Hadimba Temple"],
      inclusions: ["5 Nights Accommodation", "Breakfast", "Transfers", "Sightseeing"],
      exclusions: ["Airfare", "Lunch & Dinner", "Activities"],
      itinerary: [
        { day: 1, title: "Arrival in Shimla", description: "Arrive at Chandigarh, drive to Shimla.", highlights: ["Mall Road", "Ridge", "Evening Walk"] },
        { day: 2, title: "Shimla Sightseeing", description: "Visit Kufri, Green Valley, and Christ Church.", highlights: ["Kufri", "Green Valley", "Christ Church"] },
        { day: 3, title: "Shimla to Manali", description: "Scenic drive to Manali via Kullu Valley.", highlights: ["Kullu Valley", "Naggar Castle", "Vaishno Devi Temple"] },
        { day: 4, title: "Manali Local", description: "Visit Hadimba Temple, Vashisht, and Mall Road.", highlights: ["Hadimba Temple", "Vashisht", "Old Manali"] },
        { day: 5, title: "Solang Valley", description: "Excursion to Solang Valley for adventure activities.", highlights: ["Solang Valley", "Paragliding", "Snow Activities"] },
        { day: 6, title: "Departure", description: "Drive back to Chandigarh for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "himachal-honeymoon",
      name: "Himachal Honeymoon Special",
      duration: "7D/6N",
      originalPrice: 42000,
      currentPrice: 35700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800",
      description: "Romantic honeymoon covering Shimla, Manali, and Dharamshala.",
      highlights: ["Scenic Drives", "Private Cabins", "Candlelight Dinners", "Couple Activities"],
      inclusions: ["6 Nights Premium Stay", "All Meals", "Private Transfers", "Romantic Setups"],
      exclusions: ["Airfare", "Personal Shopping", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Romantic Arrival", description: "Arrive Chandigarh. Drive to Shimla with decorated room.", highlights: ["Flower Decoration", "Welcome Cake", "Evening Mall Road"] },
        { day: 2, title: "Shimla Romance", description: "Toy train ride and scenic walks.", highlights: ["Toy Train", "Kufri", "Private Dinner"] },
        { day: 3, title: "Shimla to Manali", description: "Scenic drive through Kullu Valley.", highlights: ["Kullu Shawl Shopping", "River Views", "Manali Welcome"] },
        { day: 4, title: "Manali Adventure", description: "Solang Valley adventures together.", highlights: ["Paragliding", "Snow Fun", "Hot Chocolate"] },
        { day: 5, title: "Manali Exploration", description: "Private tour of Old Manali and temples.", highlights: ["Hadimba Temple", "Old Manali Cafes", "Riverside Walk"] },
        { day: 6, title: "Dharamshala", description: "Drive to Dharamshala. Visit Dalai Lama Temple.", highlights: ["Dalai Lama Temple", "Bhagsu Falls", "Sunset Point"] },
        { day: 7, title: "Departure", description: "Drive to Chandigarh for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "himachal-spiti-valley",
      name: "Spiti Valley Expedition",
      duration: "9D/8N",
      originalPrice: 55000,
      currentPrice: 46750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1591018653367-067fd14a5616?w=800",
      description: "Epic journey through the cold desert of Spiti Valley.",
      highlights: ["Key Monastery", "Chandratal Lake", "Kunzum Pass", "Kaza"],
      inclusions: ["8 Nights Accommodation", "All Meals", "4x4 Vehicle", "Permits"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Shimla", description: "Arrive Chandigarh. Drive to Shimla.", highlights: ["Shimla Check-in", "Mall Road", "Preparation"] },
        { day: 2, title: "Shimla to Sarahan", description: "Drive to Sarahan via Narkanda.", highlights: ["Narkanda", "Bhimakali Temple", "Apple Orchards"] },
        { day: 3, title: "Sarahan to Sangla", description: "Enter Kinnaur valley. Reach Sangla.", highlights: ["Kinnaur Views", "Kamru Fort", "Sangla Valley"] },
        { day: 4, title: "Sangla to Tabo", description: "Cross into Spiti. Visit Tabo Monastery.", highlights: ["Nako Lake", "Tabo Monastery", "1000-Year History"] },
        { day: 5, title: "Tabo to Kaza", description: "Arrive at Spiti's headquarters.", highlights: ["Dhankar Monastery", "Pin Valley", "Kaza Town"] },
        { day: 6, title: "Kaza Exploration", description: "Visit Key, Kibber, and Hikkim.", highlights: ["Key Monastery", "Kibber Village", "Highest Post Office"] },
        { day: 7, title: "Kaza to Chandratal", description: "Drive to the Moon Lake.", highlights: ["Kunzum Pass", "Chandratal Lake", "Camping"] },
        { day: 8, title: "Chandratal to Manali", description: "Cross Rohtang and reach Manali.", highlights: ["Rohtang Pass", "Scenic Drive", "Manali"] },
        { day: 9, title: "Departure", description: "Drive to Chandigarh for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "himachal-dharamshala",
      name: "Dharamshala McLeodganj Retreat",
      duration: "5D/4N",
      originalPrice: 22000,
      currentPrice: 18700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
      description: "Spiritual retreat in the abode of Dalai Lama with treks and meditation.",
      highlights: ["Dalai Lama Temple", "Triund Trek", "Tibetan Culture", "Bhagsu Falls"],
      inclusions: ["4 Nights Accommodation", "Breakfast", "Transfers", "Trek Guide"],
      exclusions: ["Airfare", "Lunch & Dinner", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival McLeodganj", description: "Arrive and explore local markets.", highlights: ["Tibetan Market", "Dalai Lama Temple", "Sunset Point"] },
        { day: 2, title: "Triund Trek", description: "Trek to Triund for panoramic views.", highlights: ["Triund Trek", "Himalayan Views", "Camping Optional"] },
        { day: 3, title: "Dharamkot & Bhagsu", description: "Visit Dharamkot and Bhagsu Falls.", highlights: ["Bhagsu Falls", "Shiva Cafe", "Meditation Class"] },
        { day: 4, title: "Kangra Valley", description: "Visit Kangra Fort and Tea Gardens.", highlights: ["Kangra Fort", "Tea Gardens", "Chamunda Temple"] },
        { day: 5, title: "Departure", description: "Drive to Dharamshala Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "himachal-adventure",
      name: "Himachal Adventure Special",
      duration: "7D/6N",
      originalPrice: 48000,
      currentPrice: 40800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800",
      description: "Action-packed adventure tour with trekking, rafting, and paragliding.",
      highlights: ["River Rafting", "Paragliding", "Trekking", "Camping"],
      inclusions: ["6 Nights Accommodation", "All Meals", "All Activities", "Equipment", "Guides"],
      exclusions: ["Airfare", "Personal Gear", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Kullu", description: "Arrive and prepare for adventure.", highlights: ["Briefing", "Equipment Check", "Light Trek"] },
        { day: 2, title: "River Rafting", description: "White water rafting on Beas River.", highlights: ["Rafting Grade 2-3", "Beach Games", "Riverside Camping"] },
        { day: 3, title: "Paragliding", description: "Fly like a bird in Solang Valley.", highlights: ["Tandem Paragliding", "Video Recording", "Snow Activities"] },
        { day: 4, title: "Trek Day 1", description: "Begin Beas Kund Trek.", highlights: ["Trek Start", "Alpine Meadows", "Base Camp"] },
        { day: 5, title: "Trek Day 2", description: "Reach Beas Kund and return.", highlights: ["Beas Kund Lake", "Source of Beas", "Descent"] },
        { day: 6, title: "Zorbing & Relaxation", description: "Zorbing and relaxation activities.", highlights: ["Zorbing", "ATV Ride", "Hot Springs"] },
        { day: 7, title: "Departure", description: "Drive to Chandigarh.", highlights: ["Departure"] }
      ]
    }
  ]
};

// Rajasthan Packages
export const rajasthanData: DestinationData = {
  id: "rajasthan",
  name: "Rajasthan",
  tagline: "Land of Kings",
  description: "Discover the royal heritage of Rajasthan - magnificent forts, opulent palaces, colorful bazaars, and the golden desert. Experience the grandeur of Indian royalty.",
  heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800"
  ],
  packages: [
    {
      id: "rajasthan-royal",
      name: "Royal Rajasthan",
      duration: "7D/6N",
      originalPrice: 42000,
      currentPrice: 35700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      description: "Royal tour covering Jaipur, Jodhpur, and Udaipur.",
      highlights: ["Amber Fort", "Mehrangarh Fort", "City Palace Udaipur", "Desert Safari"],
      inclusions: ["6 Nights Heritage Hotels", "Breakfast", "All Transfers", "Sightseeing"],
      exclusions: ["Airfare", "Lunch & Dinner", "Entry Fees"],
      itinerary: [
        { day: 1, title: "Arrival in Jaipur", description: "Arrive at Jaipur. Evening Chokhi Dhani visit.", highlights: ["Airport Pickup", "Chokhi Dhani", "Rajasthani Dinner"] },
        { day: 2, title: "Jaipur Sightseeing", description: "Visit Amber Fort, Hawa Mahal, and City Palace.", highlights: ["Amber Fort", "Hawa Mahal", "City Palace"] },
        { day: 3, title: "Jaipur to Jodhpur", description: "Drive to Jodhpur. Visit Mehrangarh Fort.", highlights: ["Mehrangarh Fort", "Jaswant Thada", "Blue City Walk"] },
        { day: 4, title: "Jodhpur to Jaisalmer", description: "Drive to Jaisalmer. Desert camp experience.", highlights: ["Desert Safari", "Sunset Dunes", "Desert Camp"] },
        { day: 5, title: "Jaisalmer to Udaipur", description: "Visit Jaisalmer Fort. Drive to Udaipur.", highlights: ["Jaisalmer Fort", "Patwon Haveli", "Scenic Drive"] },
        { day: 6, title: "Udaipur Sightseeing", description: "Visit City Palace and Lake Pichola boat ride.", highlights: ["City Palace", "Lake Pichola", "Jagdish Temple"] },
        { day: 7, title: "Departure", description: "Transfer to Udaipur Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "rajasthan-golden-triangle",
      name: "Golden Triangle with Rajasthan",
      duration: "8D/7N",
      originalPrice: 48000,
      currentPrice: 40800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
      description: "Classic Golden Triangle extended with Rajasthan's heritage cities.",
      highlights: ["Taj Mahal", "Amber Fort", "Qutub Minar", "Pushkar"],
      inclusions: ["7 Nights Hotels", "Breakfast", "AC Vehicle", "Monument Entry", "Guide"],
      exclusions: ["Airfare", "Lunch & Dinner", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Delhi", description: "Arrive Delhi. Old and New Delhi tour.", highlights: ["Red Fort", "Jama Masjid", "India Gate"] },
        { day: 2, title: "Delhi to Agra", description: "Drive to Agra. Visit Taj Mahal at sunset.", highlights: ["Taj Mahal Sunset", "Agra Fort", "Mehtab Bagh"] },
        { day: 3, title: "Agra to Jaipur", description: "Drive to Jaipur via Fatehpur Sikri.", highlights: ["Fatehpur Sikri", "Abhaneri Stepwell", "Jaipur Arrival"] },
        { day: 4, title: "Jaipur Sightseeing", description: "Full day Jaipur exploration.", highlights: ["Amber Fort", "City Palace", "Hawa Mahal"] },
        { day: 5, title: "Jaipur to Pushkar", description: "Drive to holy Pushkar. Evening Ganga Aarti.", highlights: ["Pushkar Lake", "Brahma Temple", "Aarti Ceremony"] },
        { day: 6, title: "Pushkar to Jodhpur", description: "Drive to Blue City Jodhpur.", highlights: ["Mehrangarh Fort", "Blue City Walk", "Local Markets"] },
        { day: 7, title: "Jodhpur Exploration", description: "Full day Jodhpur sightseeing.", highlights: ["Umaid Bhawan", "Jaswant Thada", "Clock Tower"] },
        { day: 8, title: "Departure", description: "Transfer to Jodhpur Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "rajasthan-desert-adventure",
      name: "Rajasthan Desert Adventure",
      duration: "6D/5N",
      originalPrice: 38000,
      currentPrice: 32300,
      discount: 15,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
      description: "Desert adventure through Jaisalmer and Bikaner with camel safaris.",
      highlights: ["Camel Safari", "Desert Camping", "Sam Sand Dunes", "Bikaner Fort"],
      inclusions: ["5 Nights Accommodation", "All Meals", "Desert Safari", "Camp Stay"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Jaisalmer", description: "Arrive and explore Golden City.", highlights: ["Jaisalmer Fort", "Patwon Haveli", "Sunset Point"] },
        { day: 2, title: "Desert Safari", description: "Full day camel safari to Sam Dunes.", highlights: ["Camel Safari", "Village Visits", "Cultural Evening"] },
        { day: 3, title: "Desert Camping", description: "Explore Khuri dunes. Night at desert camp.", highlights: ["Khuri Dunes", "Star Gazing", "Folk Music"] },
        { day: 4, title: "Jaisalmer to Bikaner", description: "Drive to Bikaner. Visit Karni Mata.", highlights: ["Karni Mata Temple", "Junagarh Fort", "Camel Farm"] },
        { day: 5, title: "Bikaner Exploration", description: "Full day Bikaner sightseeing.", highlights: ["Junagarh Fort", "Lalgarh Palace", "Local Markets"] },
        { day: 6, title: "Departure", description: "Transfer to Bikaner Station/Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "rajasthan-heritage-haveli",
      name: "Rajasthan Heritage Haveli Tour",
      duration: "9D/8N",
      originalPrice: 65000,
      currentPrice: 55250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      description: "Luxury heritage tour staying in converted palaces and havelis.",
      highlights: ["Heritage Palace Stays", "Royal Experiences", "Private Tours", "Cultural Evenings"],
      inclusions: ["8 Nights Heritage Hotels", "All Meals", "Private Transfers", "Cultural Programs"],
      exclusions: ["Airfare", "Personal Expenses", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Arrival Jaipur Palace", description: "Arrive at heritage palace hotel.", highlights: ["Palace Welcome", "Royal Dinner", "Cultural Show"] },
        { day: 2, title: "Royal Jaipur", description: "Private tour of Jaipur with elephant ride.", highlights: ["Elephant Ride", "Amber Fort", "Private Dining"] },
        { day: 3, title: "Jaipur to Jodhpur", description: "Heritage drive to Jodhpur haveli.", highlights: ["Scenic Route", "Haveli Check-in", "Blue City Tour"] },
        { day: 4, title: "Jodhpur Royalty", description: "Mehrangarh Fort and Umaid Bhawan.", highlights: ["Private Fort Tour", "Umaid Bhawan", "High Tea"] },
        { day: 5, title: "Jodhpur to Jaisalmer", description: "Desert drive to Jaisalmer haveli.", highlights: ["Desert Views", "Haveli Stay", "Fort Visit"] },
        { day: 6, title: "Jaisalmer Experience", description: "Private desert safari and camp dinner.", highlights: ["Private Safari", "Sunset Dunes", "Royal Camp Dinner"] },
        { day: 7, title: "Jaisalmer to Udaipur", description: "Long drive to Lake City.", highlights: ["Scenic Drive", "Ranakpur Temples", "Lake Palace View"] },
        { day: 8, title: "Udaipur Romance", description: "Private boat and palace tours.", highlights: ["Private Boat Ride", "City Palace", "Sunset Dinner"] },
        { day: 9, title: "Departure", description: "Royal farewell and airport transfer.", highlights: ["Departure"] }
      ]
    },
    {
      id: "rajasthan-weekend",
      name: "Rajasthan Weekend Escape",
      duration: "3D/2N",
      originalPrice: 18000,
      currentPrice: 15300,
      discount: 15,
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
      description: "Quick weekend getaway to the Pink City Jaipur.",
      highlights: ["Amber Fort", "Hawa Mahal", "Local Cuisine", "Shopping"],
      inclusions: ["2 Nights Hotel", "Breakfast", "AC Vehicle", "Sightseeing"],
      exclusions: ["Airfare", "Lunch & Dinner", "Entry Fees"],
      itinerary: [
        { day: 1, title: "Arrival & Heritage", description: "Arrive Jaipur. Visit Amber Fort and Jal Mahal.", highlights: ["Amber Fort", "Jal Mahal", "Evening Markets"] },
        { day: 2, title: "Pink City Tour", description: "Full day city exploration.", highlights: ["City Palace", "Hawa Mahal", "Jantar Mantar", "Shopping"] },
        { day: 3, title: "Departure", description: "Morning Nahargarh Fort visit and departure.", highlights: ["Nahargarh Fort", "City Views", "Departure"] }
      ]
    }
  ]
};

// Goa Packages
export const goaData: DestinationData = {
  id: "goa",
  name: "Goa",
  tagline: "Sun, Sand & Celebrations",
  description: "Experience the vibrant culture of Goa - pristine beaches, Portuguese heritage, thrilling water sports, and legendary nightlife. The perfect beach destination.",
  heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    "https://images.unsplash.com/photo-1516370873344-fb769e10f1f6?w=800"
  ],
  packages: [
    {
      id: "goa-beach-holiday",
      name: "Goa Beach Holiday",
      duration: "4D/3N",
      originalPrice: 18000,
      currentPrice: 15300,
      discount: 15,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      description: "Perfect beach getaway covering North and South Goa beaches.",
      highlights: ["Beach Hopping", "Water Sports", "Old Goa Churches", "Cruise"],
      inclusions: ["3 Nights Beach Resort", "Breakfast", "North & South Goa Tour", "Cruise"],
      exclusions: ["Airfare", "Lunch & Dinner", "Water Sports"],
      itinerary: [
        { day: 1, title: "Arrival in Goa", description: "Arrive at Goa Airport. Transfer to beach resort.", highlights: ["Beach Resort", "Beach Walk", "Sunset"] },
        { day: 2, title: "North Goa Tour", description: "Visit Calangute, Baga, Aguada Fort, and Chapora.", highlights: ["Baga Beach", "Aguada Fort", "Chapora Fort"] },
        { day: 3, title: "South Goa & Cruise", description: "Explore South Goa beaches. Evening cruise on Mandovi.", highlights: ["Colva Beach", "Old Goa Churches", "Mandovi Cruise"] },
        { day: 4, title: "Departure", description: "Free morning. Transfer to airport.", highlights: ["Shopping", "Departure"] }
      ]
    },
    {
      id: "goa-adventure",
      name: "Goa Adventure Package",
      duration: "5D/4N",
      originalPrice: 28000,
      currentPrice: 23800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      description: "Action-packed Goa adventure with water sports and island hopping.",
      highlights: ["Scuba Diving", "Parasailing", "Island Trips", "Jet Ski"],
      inclusions: ["4 Nights Resort", "Breakfast", "All Water Sports", "Island Tour"],
      exclusions: ["Airfare", "Lunch & Dinner", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival & Beach", description: "Arrive and hit the beach for evening activities.", highlights: ["Beach Check-in", "Sunset Sports", "Night Market"] },
        { day: 2, title: "Water Sports Galore", description: "Full day water sports at Baga.", highlights: ["Parasailing", "Jet Ski", "Banana Boat", "Bumper Ride"] },
        { day: 3, title: "Scuba Adventure", description: "Scuba diving experience at Grande Island.", highlights: ["Scuba Diving", "Snorkeling", "Underwater Photos"] },
        { day: 4, title: "Island Hopping", description: "Explore Bat Island and Honeymoon Beach.", highlights: ["Boat Ride", "Island Beaches", "Fishing"] },
        { day: 5, title: "Departure", description: "Morning beach time and departure.", highlights: ["Beach Time", "Departure"] }
      ]
    },
    {
      id: "goa-honeymoon",
      name: "Goa Romantic Honeymoon",
      duration: "5D/4N",
      originalPrice: 35000,
      currentPrice: 29750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1516370873344-fb769e10f1f6?w=800",
      description: "Romantic Goa honeymoon with beach candlelight dinners and private experiences.",
      highlights: ["Beach Candlelight Dinner", "Couple Spa", "Private Cruise", "Wine Tasting"],
      inclusions: ["4 Nights Premium Resort", "All Meals", "Romantic Setups", "Private Transfers"],
      exclusions: ["Airfare", "Personal Shopping", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Romantic Welcome", description: "Arrive to flower-decorated room and beach dinner.", highlights: ["Flower Decoration", "Beach Candlelight Dinner", "Sunset Walk"] },
        { day: 2, title: "Beach Romance", description: "Private beach cabana and couple spa.", highlights: ["Private Cabana", "Couple Spa", "Wine Tasting"] },
        { day: 3, title: "Island Escape", description: "Private boat to secluded beach.", highlights: ["Private Boat", "Secluded Beach", "Picnic Lunch"] },
        { day: 4, title: "Heritage & Culture", description: "Old Goa visit and sunset cruise.", highlights: ["Portuguese Churches", "Sunset Cruise", "Dance Party"] },
        { day: 5, title: "Departure", description: "Leisurely checkout and departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "goa-party",
      name: "Goa Party Package",
      duration: "4D/3N",
      originalPrice: 22000,
      currentPrice: 18700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      description: "Ultimate party experience with beach clubs, casinos, and nightlife.",
      highlights: ["Beach Clubs", "Casino Night", "Pool Parties", "Nightlife Tour"],
      inclusions: ["3 Nights Party Resort", "Breakfast", "Club Entries", "Casino Chips"],
      exclusions: ["Airfare", "Drinks & Food at Clubs", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Party Begins", description: "Arrive and hit Tito's Lane.", highlights: ["Beach Party", "Tito's Lane", "Night Clubs"] },
        { day: 2, title: "Pool & Casino", description: "Day pool party. Evening casino experience.", highlights: ["Pool Party", "Casino Night", "Lucky Draw"] },
        { day: 3, title: "Beach Club Hopping", description: "Visit famous beach clubs.", highlights: ["Curlies", "W Hotel Beach", "Sunset Parties"] },
        { day: 4, title: "Departure", description: "Recovery breakfast and departure.", highlights: ["Brunch", "Departure"] }
      ]
    },
    {
      id: "goa-heritage",
      name: "Goa Heritage & Culture",
      duration: "4D/3N",
      originalPrice: 20000,
      currentPrice: 17000,
      discount: 15,
      image: "https://images.unsplash.com/photo-1516370873344-fb769e10f1f6?w=800",
      description: "Discover Portuguese heritage, spice plantations, and Goan culture.",
      highlights: ["Old Goa Churches", "Spice Plantation", "Fontainhas", "Goan Cuisine"],
      inclusions: ["3 Nights Heritage Hotel", "All Meals", "Guided Tours", "Cooking Class"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { day: 1, title: "Old Goa Heritage", description: "Explore UNESCO World Heritage churches.", highlights: ["Se Cathedral", "Basilica Bom Jesus", "Church of St. Francis"] },
        { day: 2, title: "Spice & Culture", description: "Spice plantation tour and cooking class.", highlights: ["Spice Plantation", "Elephant Bath", "Goan Cooking Class"] },
        { day: 3, title: "Fontainhas Walk", description: "Latin Quarter walk and local food trail.", highlights: ["Fontainhas", "Portuguese Houses", "Bebinca Tasting"] },
        { day: 4, title: "Departure", description: "Visit Reis Magos Fort and departure.", highlights: ["Reis Magos Fort", "Art Gallery", "Departure"] }
      ]
    }
  ]
};

// Meghalaya Packages
export const meghalayaData: DestinationData = {
  id: "meghalaya",
  name: "Meghalaya",
  tagline: "Abode of Clouds",
  description: "Explore the mystical northeast - living root bridges, crystal-clear rivers, stunning waterfalls, and unique Khasi culture in India's wettest state.",
  heroImage: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800"
  ],
  packages: [
    {
      id: "meghalaya-classic",
      name: "Meghalaya Classic Tour",
      duration: "6D/5N",
      originalPrice: 35000,
      currentPrice: 29750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800",
      description: "Complete Meghalaya experience with waterfalls, caves, and root bridges.",
      highlights: ["Living Root Bridge", "Nohkalikai Falls", "Dawki River", "Mawsmai Cave"],
      inclusions: ["5 Nights Accommodation", "All Meals", "Transfers", "Sightseeing", "Permits"],
      exclusions: ["Airfare", "Personal Expenses", "Camera Fees"],
      itinerary: [
        { day: 1, title: "Arrival Guwahati", description: "Arrive Guwahati. Drive to Shillong.", highlights: ["Guwahati Pickup", "Umiam Lake", "Shillong Evening"] },
        { day: 2, title: "Shillong Exploration", description: "Visit Don Bosco Museum and local attractions.", highlights: ["Don Bosco Museum", "Ward's Lake", "Police Bazaar"] },
        { day: 3, title: "Cherrapunji Day", description: "Explore the wettest place on Earth.", highlights: ["Nohkalikai Falls", "Mawsmai Cave", "Seven Sisters Falls"] },
        { day: 4, title: "Living Root Bridge", description: "Trek to the famous Double Decker Root Bridge.", highlights: ["Root Bridge Trek", "Rainbow Falls", "Local Cuisine"] },
        { day: 5, title: "Dawki & Mawlynnong", description: "Crystal clear Dawki River and Asia's cleanest village.", highlights: ["Dawki Boating", "Mawlynnong Village", "Bangladesh Border"] },
        { day: 6, title: "Departure", description: "Drive to Guwahati for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "meghalaya-adventure",
      name: "Meghalaya Adventure Trek",
      duration: "7D/6N",
      originalPrice: 42000,
      currentPrice: 35700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Adventurous trekking through root bridges and hidden waterfalls.",
      highlights: ["Multiple Root Bridges", "Cave Exploration", "Cliff Jumping", "Village Homestays"],
      inclusions: ["6 Nights Accommodation", "All Meals", "Trek Guide", "Equipment", "Permits"],
      exclusions: ["Airfare", "Personal Gear", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival & Acclimatize", description: "Arrive Guwahati. Drive to Shillong.", highlights: ["Arrival", "Shillong Check-in", "Light Walk"] },
        { day: 2, title: "Laitlum Grand Canyon", description: "Trek through the Grand Canyon of Meghalaya.", highlights: ["Laitlum Canyon", "Rasong Village", "Panoramic Views"] },
        { day: 3, title: "Root Bridge Trek 1", description: "Trek to Double Decker Living Root Bridge.", highlights: ["3500 Steps", "Double Decker", "Natural Pool Swim"] },
        { day: 4, title: "Nongriat Exploration", description: "Explore hidden falls and Rainbow Bridge.", highlights: ["Rainbow Falls", "Cliff Jumping", "Village Life"] },
        { day: 5, title: "Mawryngkhang Trek", description: "Bamboo bridge and King of Caves trek.", highlights: ["Bamboo Sky Bridge", "Krang Suri Falls", "Cave Walk"] },
        { day: 6, title: "Caving Adventure", description: "Explore caves of Meghalaya.", highlights: ["Mawsmai Cave", "Krem Puri Cave", "Caving Experience"] },
        { day: 7, title: "Departure", description: "Return to Guwahati.", highlights: ["Departure"] }
      ]
    },
    {
      id: "meghalaya-photography",
      name: "Meghalaya Photography Tour",
      duration: "6D/5N",
      originalPrice: 48000,
      currentPrice: 40800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      description: "Capture the stunning landscapes and unique culture of Meghalaya.",
      highlights: ["Golden Hour Shoots", "Waterfall Long Exposure", "Root Bridge Photography", "Tribal Portraits"],
      inclusions: ["5 Nights Accommodation", "All Meals", "Photography Guide", "Model Permissions"],
      exclusions: ["Airfare", "Camera Gear", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival & Sunset", description: "Arrive and sunset shoot at Umiam Lake.", highlights: ["Umiam Lake Sunset", "Cloud Formations", "Blue Hour"] },
        { day: 2, title: "Cherrapunji Waterfalls", description: "Photograph the dramatic waterfalls.", highlights: ["Nohkalikai Falls", "Long Exposure", "Misty Landscapes"] },
        { day: 3, title: "Root Bridge", description: "Early morning root bridge photography.", highlights: ["Morning Light", "Double Decker", "Tribal Portraits"] },
        { day: 4, title: "Dawki Magic", description: "Crystal clear river photography.", highlights: ["Dawki River", "Underwater Shots", "Boat Reflections"] },
        { day: 5, title: "Village Life", description: "Document Khasi village life.", highlights: ["Mawlynnong", "Daily Life", "Cultural Portraits"] },
        { day: 6, title: "Departure", description: "Final shots and departure.", highlights: ["Morning Shots", "Departure"] }
      ]
    },
    {
      id: "meghalaya-shnongpdeng",
      name: "Meghalaya River Camping",
      duration: "5D/4N",
      originalPrice: 32000,
      currentPrice: 27200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800",
      description: "River camping and water activities at Shnongpdeng.",
      highlights: ["River Camping", "Kayaking", "Cliff Jumping", "Snorkeling"],
      inclusions: ["4 Nights Camping/Homestay", "All Meals", "Water Activities", "Equipment"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Shillong", description: "Arrive and evening at leisure.", highlights: ["Shillong Check-in", "Police Bazaar", "Local Food"] },
        { day: 2, title: "To Shnongpdeng", description: "Drive to campsite on Umngot River.", highlights: ["Scenic Drive", "Camp Setup", "Evening Swim"] },
        { day: 3, title: "River Adventures", description: "Full day water activities.", highlights: ["Kayaking", "Snorkeling", "Cliff Jumping"] },
        { day: 4, title: "Dawki & Border", description: "Boating at Dawki and Bangladesh border.", highlights: ["Glass Bottom Boat", "Border View", "Photography"] },
        { day: 5, title: "Departure", description: "Return to Guwahati.", highlights: ["Departure"] }
      ]
    },
    {
      id: "meghalaya-weekend",
      name: "Meghalaya Weekend Getaway",
      duration: "3D/2N",
      originalPrice: 18000,
      currentPrice: 15300,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Quick weekend escape to the Scotland of the East.",
      highlights: ["Shillong City", "Elephant Falls", "Local Markets"],
      inclusions: ["2 Nights Hotel", "Breakfast", "Transfers", "Local Sightseeing"],
      exclusions: ["Airfare", "Lunch & Dinner", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival Shillong", description: "Arrive and explore Shillong city.", highlights: ["Ward's Lake", "Don Bosco Museum", "Cafe Hopping"] },
        { day: 2, title: "Cherrapunji Day", description: "Day trip to Cherrapunji.", highlights: ["Nohkalikai Falls", "Mawsmai Cave", "Eco Park"] },
        { day: 3, title: "Departure", description: "Elephant Falls visit and departure.", highlights: ["Elephant Falls", "Shopping", "Departure"] }
      ]
    }
  ]
};

// Andaman Packages
export const andamanData: DestinationData = {
  id: "andaman",
  name: "Andaman",
  tagline: "Emerald Isles of India",
  description: "Discover pristine beaches, world-class scuba diving, and WWII history in the Andaman Islands. Crystal clear waters and untouched beauty await.",
  heroImage: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800"
  ],
  packages: [
    {
      id: "andaman-island-hopping",
      name: "Andaman Island Hopping",
      duration: "6D/5N",
      originalPrice: 42000,
      currentPrice: 35700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800",
      description: "Complete Andaman tour covering Port Blair, Havelock, and Neil Island.",
      highlights: ["Radhanagar Beach", "Cellular Jail", "Scuba Diving", "Glass Bottom Boat"],
      inclusions: ["5 Nights Accommodation", "All Meals", "Ferry Tickets", "Sightseeing"],
      exclusions: ["Airfare", "Water Sports", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival Port Blair", description: "Arrive and visit Cellular Jail. Evening Sound & Light Show.", highlights: ["Airport Pickup", "Cellular Jail", "Light & Sound Show"] },
        { day: 2, title: "Port Blair to Havelock", description: "Ferry to Havelock Island. Visit Radhanagar Beach.", highlights: ["Ferry Cruise", "Radhanagar Beach", "Sunset"] },
        { day: 3, title: "Havelock Activities", description: "Water sports and beach exploration.", highlights: ["Elephant Beach", "Snorkeling", "Kayaking"] },
        { day: 4, title: "Havelock to Neil", description: "Ferry to Neil Island. Natural Bridge.", highlights: ["Neil Island", "Natural Bridge", "Laxmanpur Beach"] },
        { day: 5, title: "Neil to Port Blair", description: "Return to Port Blair. Local sightseeing.", highlights: ["Ferry Return", "Corbyn's Cove", "Museums"] },
        { day: 6, title: "Departure", description: "Transfer to Port Blair Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "andaman-scuba",
      name: "Andaman Scuba Adventure",
      duration: "5D/4N",
      originalPrice: 55000,
      currentPrice: 46750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800",
      description: "Ultimate scuba diving experience in crystal clear Andaman waters.",
      highlights: ["Certified Scuba Dives", "Multiple Dive Sites", "Underwater Photography", "Marine Life"],
      inclusions: ["4 Nights Accommodation", "All Meals", "3 Certified Dives", "Equipment", "PADI Certificate"],
      exclusions: ["Airfare", "Personal Expenses", "Extra Dives"],
      itinerary: [
        { day: 1, title: "Arrival & Theory", description: "Arrive Havelock. Pool training session.", highlights: ["Pool Training", "Theory Class", "Equipment Intro"] },
        { day: 2, title: "First Open Water Dive", description: "First dive experience at Aquarium site.", highlights: ["Open Water Dive", "Coral Reef", "Fish Spotting"] },
        { day: 3, title: "Deep Dive", description: "Deeper dives at Lighthouse and Seduction.", highlights: ["Deep Dive", "Wall Dive", "Underwater Photos"] },
        { day: 4, title: "Final Certification", description: "Complete certification dives.", highlights: ["Certification", "Barracuda Beach", "Celebration"] },
        { day: 5, title: "Departure", description: "Return to Port Blair for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "andaman-honeymoon",
      name: "Andaman Romantic Escape",
      duration: "6D/5N",
      originalPrice: 58000,
      currentPrice: 49300,
      discount: 15,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Romantic island honeymoon with private beach experiences.",
      highlights: ["Private Beach Dinner", "Luxury Resort", "Couple Snorkeling", "Sunset Cruise"],
      inclusions: ["5 Nights Premium Resort", "All Meals", "Private Transfers", "Romantic Setups"],
      exclusions: ["Airfare", "Personal Shopping", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Romantic Arrival", description: "Arrive with flower welcome. Beach dinner.", highlights: ["Flower Welcome", "Beach Candlelight Dinner", "Moonlight Walk"] },
        { day: 2, title: "Private Island", description: "Private boat to Ross Island.", highlights: ["Private Boat", "Ross Island", "Picnic Lunch"] },
        { day: 3, title: "Havelock Romance", description: "Ferry to Havelock. Radhanagar sunset.", highlights: ["Luxury Ferry", "Beach Cabana", "Sunset Cocktails"] },
        { day: 4, title: "Water Fun", description: "Couple snorkeling and kayaking.", highlights: ["Couple Snorkeling", "Kayaking", "Beach Photography"] },
        { day: 5, title: "Relaxation", description: "Spa day and sunset cruise.", highlights: ["Couple Spa", "Sunset Cruise", "Dinner on Deck"] },
        { day: 6, title: "Departure", description: "Fond farewell and departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "andaman-adventure",
      name: "Andaman Adventure Package",
      duration: "7D/6N",
      originalPrice: 48000,
      currentPrice: 40800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800",
      description: "Adventure-packed tour with water sports, trekking, and camping.",
      highlights: ["Sea Walking", "Jet Ski", "Island Camping", "Night Kayaking"],
      inclusions: ["6 Nights Accommodation", "All Meals", "All Adventure Activities", "Equipment"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Adventure", description: "Arrive and evening water sports.", highlights: ["Jet Ski", "Parasailing", "Beach BBQ"] },
        { day: 2, title: "Underwater Walk", description: "Sea walking experience at North Bay.", highlights: ["Sea Walking", "Glass Bottom Boat", "Coral Viewing"] },
        { day: 3, title: "Havelock Sports", description: "Elephant Beach adventure activities.", highlights: ["Snorkeling", "Banana Boat", "Speed Boat"] },
        { day: 4, title: "Island Camping", description: "Camp at Neil Island beach.", highlights: ["Beach Camping", "Bonfire", "Stargazing"] },
        { day: 5, title: "Night Kayaking", description: "Bioluminescent kayaking experience.", highlights: ["Night Kayaking", "Bioluminescence", "Beach Walk"] },
        { day: 6, title: "Trek & Explore", description: "Mangrove trek and bird watching.", highlights: ["Mangrove Trek", "Bird Watching", "Kayak Tours"] },
        { day: 7, title: "Departure", description: "Return to Port Blair.", highlights: ["Departure"] }
      ]
    },
    {
      id: "andaman-weekend",
      name: "Andaman Quick Escape",
      duration: "4D/3N",
      originalPrice: 28000,
      currentPrice: 23800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800",
      description: "Quick island getaway covering best of Andaman.",
      highlights: ["Cellular Jail", "Havelock Beach", "Snorkeling", "Island Views"],
      inclusions: ["3 Nights Accommodation", "Breakfast", "Ferry Tickets", "Basic Sightseeing"],
      exclusions: ["Airfare", "Lunch & Dinner", "Water Sports"],
      itinerary: [
        { day: 1, title: "Arrival", description: "Arrive Port Blair. City tour.", highlights: ["Cellular Jail", "Corbyn's Cove", "Light Show"] },
        { day: 2, title: "Havelock Island", description: "Day trip to Havelock Island.", highlights: ["Ferry Ride", "Radhanagar Beach", "Snorkeling"] },
        { day: 3, title: "Island Exploration", description: "North Bay and Ross Island.", highlights: ["North Bay", "Ross Island", "Water Activities"] },
        { day: 4, title: "Departure", description: "Morning free. Departure.", highlights: ["Shopping", "Departure"] }
      ]
    }
  ]
};

// Sikkim Packages
export const sikkimData: DestinationData = {
  id: "sikkim",
  name: "Sikkim",
  tagline: "Small But Beautiful",
  description: "Discover the hidden kingdom of Sikkim with stunning views of Kanchenjunga, ancient monasteries, and diverse flora. A pristine Himalayan paradise.",
  heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
  ],
  packages: [
    {
      id: "sikkim-gangtok-darjeeling",
      name: "Sikkim Gangtok Darjeeling",
      duration: "7D/6N",
      originalPrice: 38000,
      currentPrice: 32300,
      discount: 15,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
      description: "Complete tour covering Gangtok, Tsomgo Lake, and Darjeeling.",
      highlights: ["Tsomgo Lake", "Nathula Pass", "Tiger Hill", "Tea Gardens"],
      inclusions: ["6 Nights Accommodation", "All Meals", "Permits", "Sightseeing"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Bagdogra", description: "Arrive and drive to Gangtok.", highlights: ["Bagdogra Pickup", "Scenic Drive", "Gangtok Check-in"] },
        { day: 2, title: "Gangtok Sightseeing", description: "Local sightseeing including monasteries.", highlights: ["Rumtek Monastery", "Do Drul Chorten", "Handicraft Center"] },
        { day: 3, title: "Tsomgo & Nathula", description: "Visit frozen lake and India-China border.", highlights: ["Tsomgo Lake", "Nathula Pass", "Baba Harbhajan Temple"] },
        { day: 4, title: "Gangtok to Pelling", description: "Drive to Pelling with Kanchenjunga views.", highlights: ["Ravangla Buddha Park", "Pelling Views", "Sunset Point"] },
        { day: 5, title: "Pelling Exploration", description: "Visit Pemayangtse and Khecheopalri Lake.", highlights: ["Pemayangtse Monastery", "Khecheopalri Lake", "Skywalk"] },
        { day: 6, title: "Pelling to Darjeeling", description: "Drive to Queen of Hills.", highlights: ["Darjeeling Arrival", "Mall Road", "Toy Train View"] },
        { day: 7, title: "Darjeeling & Departure", description: "Tiger Hill sunrise and departure.", highlights: ["Tiger Hill Sunrise", "Batasia Loop", "Departure"] }
      ]
    },
    {
      id: "sikkim-north",
      name: "North Sikkim Explorer",
      duration: "6D/5N",
      originalPrice: 42000,
      currentPrice: 35700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
      description: "Explore the remote and stunning North Sikkim.",
      highlights: ["Lachung", "Yumthang Valley", "Zero Point", "Gurudongmar Lake"],
      inclusions: ["5 Nights Accommodation", "All Meals", "Permits", "4x4 Vehicle"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Gangtok", description: "Arrive and rest.", highlights: ["Gangtok Check-in", "MG Marg Evening", "Local Food"] },
        { day: 2, title: "Gangtok to Lachung", description: "Drive through stunning mountain scenery.", highlights: ["Waterfalls", "Seven Sisters Falls", "Lachung Valley"] },
        { day: 3, title: "Yumthang & Zero Point", description: "Visit Valley of Flowers and Zero Point.", highlights: ["Yumthang Valley", "Zero Point 15000ft", "Hot Springs"] },
        { day: 4, title: "Lachung to Lachen", description: "Drive to Lachen for Gurudongmar expedition.", highlights: ["Scenic Drive", "Lachen Village", "Early Rest"] },
        { day: 5, title: "Gurudongmar Lake", description: "Early morning trip to sacred lake.", highlights: ["Gurudongmar Lake", "Kala Patthar", "Return Gangtok"] },
        { day: 6, title: "Departure", description: "Transfer to Bagdogra Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "sikkim-adventure",
      name: "Sikkim Adventure Trek",
      duration: "8D/7N",
      originalPrice: 52000,
      currentPrice: 44200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Trekking adventure through Sikkim's pristine trails.",
      highlights: ["Goechala Trek", "Kanchenjunga Views", "Dzongri", "Mountain Camping"],
      inclusions: ["7 Nights Accommodation", "All Meals", "Trek Equipment", "Guide & Porter", "Permits"],
      exclusions: ["Airfare", "Personal Trekking Gear", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival & Preparation", description: "Arrive Yuksom. Trek briefing.", highlights: ["Yuksom Check-in", "Trek Briefing", "Equipment Check"] },
        { day: 2, title: "Trek Day 1", description: "Trek from Yuksom to Sachen.", highlights: ["Trek Start", "Forest Trail", "Sachen Camp"] },
        { day: 3, title: "Trek Day 2", description: "Trek to Tshoka via Bakhim.", highlights: ["Rhododendron Forest", "Bakhim", "Tshoka Camp"] },
        { day: 4, title: "Trek Day 3", description: "Trek to Dzongri.", highlights: ["Alpine Meadows", "Dzongri Peak View", "Acclimatization"] },
        { day: 5, title: "Dzongri Top", description: "Early morning Dzongri Top. Trek to Thansing.", highlights: ["Sunrise at Dzongri Top", "Kanchenjunga View", "Thansing"] },
        { day: 6, title: "Goechala", description: "Pre-dawn trek to Goechala viewpoint.", highlights: ["Goechala Viewpoint", "Kanchenjunga Close-up", "Samiti Lake"] },
        { day: 7, title: "Descent", description: "Long descent back to Yuksom.", highlights: ["Rapid Descent", "Yuksom Arrival", "Celebration"] },
        { day: 8, title: "Departure", description: "Drive to Bagdogra for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "sikkim-monastery",
      name: "Sikkim Monastery Trail",
      duration: "5D/4N",
      originalPrice: 28000,
      currentPrice: 23800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
      description: "Spiritual journey through ancient Buddhist monasteries of Sikkim.",
      highlights: ["Rumtek Monastery", "Pemayangtse", "Enchey Monastery", "Prayer Sessions"],
      inclusions: ["4 Nights Accommodation", "All Meals", "Permits", "Expert Guide"],
      exclusions: ["Airfare", "Photography Fees", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival Gangtok", description: "Arrive and visit Enchey Monastery.", highlights: ["Enchey Monastery", "Do Drul Chorten", "Evening Prayers"] },
        { day: 2, title: "Rumtek Day", description: "Full day at Rumtek Monastery.", highlights: ["Rumtek Monastery", "Golden Stupa", "Dharma Centre"] },
        { day: 3, title: "Gangtok to Pelling", description: "Drive to Pelling. Visit Rabdentse ruins.", highlights: ["Rabdentse Ruins", "Pelling Arrival", "Sunset Point"] },
        { day: 4, title: "Pemayangtse & Lakes", description: "Visit Pemayangtse and sacred lake.", highlights: ["Pemayangtse Monastery", "Khecheopalri Lake", "Wishes at Lake"] },
        { day: 5, title: "Departure", description: "Sangachoeling and departure.", highlights: ["Sangachoeling", "Departure"] }
      ]
    },
    {
      id: "sikkim-short-break",
      name: "Sikkim Short Break",
      duration: "4D/3N",
      originalPrice: 22000,
      currentPrice: 18700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
      description: "Quick Sikkim getaway covering Gangtok highlights.",
      highlights: ["Gangtok City", "Tsomgo Lake", "Ropeway", "MG Marg"],
      inclusions: ["3 Nights Accommodation", "Breakfast", "Transfers", "Sightseeing"],
      exclusions: ["Airfare", "Lunch & Dinner", "Nathula Permit"],
      itinerary: [
        { day: 1, title: "Arrival Gangtok", description: "Arrive and MG Marg evening.", highlights: ["Gangtok Check-in", "MG Marg", "Local Food"] },
        { day: 2, title: "Tsomgo Lake", description: "Full day Tsomgo Lake excursion.", highlights: ["Tsomgo Lake", "Yak Ride", "Baba Mandir"] },
        { day: 3, title: "Gangtok Sightseeing", description: "City tour and ropeway.", highlights: ["Ropeway", "Hanuman Tok", "Flower Exhibition"] },
        { day: 4, title: "Departure", description: "Morning free and departure.", highlights: ["Shopping", "Departure"] }
      ]
    }
  ]
};

// Uttarakhand Packages
export const uttarakhandData: DestinationData = {
  id: "uttarakhand",
  name: "Uttarakhand",
  tagline: "Land of Gods",
  description: "Explore the divine land of Uttarakhand - sacred temples, adventure sports, pristine valleys, and majestic Himalayan peaks. Spiritual seekers and adventure lovers alike find their calling here.",
  heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800"
  ],
  packages: [
    {
      id: "uttarakhand-char-dham",
      name: "Char Dham Yatra",
      duration: "11D/10N",
      originalPrice: 65000,
      currentPrice: 55250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Sacred pilgrimage to all four Dhams - Yamunotri, Gangotri, Kedarnath, and Badrinath.",
      highlights: ["All Four Dhams", "VIP Darshan", "Helicopter Option", "Expert Pandit"],
      inclusions: ["10 Nights Accommodation", "All Meals", "Transfers", "Puja Arrangements", "Guide"],
      exclusions: ["Airfare", "Helicopter Tickets", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival Haridwar", description: "Arrive Delhi/Dehradun. Transfer to Haridwar.", highlights: ["Haridwar", "Ganga Aarti", "Rest"] },
        { day: 2, title: "Haridwar to Barkot", description: "Drive to Barkot via Dehradun.", highlights: ["Scenic Drive", "Mussoorie View", "Barkot Stay"] },
        { day: 3, title: "Yamunotri Darshan", description: "Trek to Yamunotri Temple.", highlights: ["Yamunotri Temple", "Divya Shila", "Hot Springs"] },
        { day: 4, title: "Barkot to Uttarkashi", description: "Drive to Uttarkashi.", highlights: ["Uttarkashi", "Vishwanath Temple", "Rest"] },
        { day: 5, title: "Gangotri Darshan", description: "Visit Gangotri Temple.", highlights: ["Gangotri Temple", "Ganga Origin", "Holy Dip"] },
        { day: 6, title: "Uttarkashi to Guptkashi", description: "Long drive to Guptkashi.", highlights: ["Tehri Lake View", "Guptkashi", "Ardh Nareshwar Temple"] },
        { day: 7, title: "Kedarnath Darshan", description: "Trek/Helicopter to Kedarnath.", highlights: ["Kedarnath Temple", "Adi Shankaracharya Samadhi", "Night at Temple"] },
        { day: 8, title: "Kedarnath to Badrinath", description: "Return from Kedarnath. Drive towards Badrinath.", highlights: ["Descent", "Joshimath Stay", "Preparation"] },
        { day: 9, title: "Badrinath Darshan", description: "Visit Badrinath Temple.", highlights: ["Badrinath Temple", "Mana Village", "Vasudhara Falls"] },
        { day: 10, title: "Badrinath to Rishikesh", description: "Return drive to Rishikesh.", highlights: ["Scenic Return", "Rishikesh Ganga Aarti", "Celebration"] },
        { day: 11, title: "Departure", description: "Transfer to Dehradun/Delhi.", highlights: ["Departure"] }
      ]
    },
    {
      id: "uttarakhand-nainital-mussoorie",
      name: "Nainital Mussoorie Tour",
      duration: "6D/5N",
      originalPrice: 28000,
      currentPrice: 23800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
      description: "Hill station hopping covering the Queen of Hills and Lake District.",
      highlights: ["Naini Lake", "Mall Road", "Kempty Falls", "Snow View Point"],
      inclusions: ["5 Nights Accommodation", "Breakfast", "Transfers", "Sightseeing"],
      exclusions: ["Airfare", "Lunch & Dinner", "Boating"],
      itinerary: [
        { day: 1, title: "Arrival Nainital", description: "Arrive Delhi. Drive to Nainital.", highlights: ["Naini Lake", "Evening Walk", "Mall Road"] },
        { day: 2, title: "Nainital Sightseeing", description: "Full day Nainital exploration.", highlights: ["Snow View Point", "Naina Devi Temple", "Cave Garden"] },
        { day: 3, title: "Nainital Lakes", description: "Visit Bhimtal, Sattal, and Naukuchiatal.", highlights: ["Bhimtal", "Sattal", "Butterfly Museum"] },
        { day: 4, title: "Nainital to Mussoorie", description: "Scenic drive to Mussoorie.", highlights: ["Corbett View", "Mussoorie Arrival", "Evening Mall Road"] },
        { day: 5, title: "Mussoorie Exploration", description: "Full day Mussoorie tour.", highlights: ["Kempty Falls", "Gun Hill", "Company Garden"] },
        { day: 6, title: "Departure", description: "Drive to Delhi for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "uttarakhand-adventure",
      name: "Uttarakhand Adventure Package",
      duration: "7D/6N",
      originalPrice: 42000,
      currentPrice: 35700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800",
      description: "Action-packed adventure in Rishikesh and Auli.",
      highlights: ["River Rafting", "Bungee Jumping", "Skiing", "Camping"],
      inclusions: ["6 Nights Accommodation", "All Meals", "Adventure Activities", "Equipment"],
      exclusions: ["Airfare", "Personal Gear", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Rishikesh", description: "Arrive and riverside camping setup.", highlights: ["Rishikesh Arrival", "Beach Camping", "Bonfire"] },
        { day: 2, title: "Rafting Adventure", description: "White water rafting on Ganga.", highlights: ["Rafting 26km", "Cliff Jumping", "Beach Games"] },
        { day: 3, title: "Extreme Sports", description: "Bungee jumping and flying fox.", highlights: ["Bungee Jumping", "Flying Fox", "Giant Swing"] },
        { day: 4, title: "Rishikesh to Auli", description: "Drive to Auli ski resort.", highlights: ["Scenic Drive", "Joshimath", "Auli Cable Car"] },
        { day: 5, title: "Skiing Day", description: "Full day skiing in Auli.", highlights: ["Skiing Lessons", "Slopes", "Mountain Views"] },
        { day: 6, title: "Auli Exploration", description: "Trekking and snow activities.", highlights: ["Gorson Bugyal", "Snow Trek", "Photography"] },
        { day: 7, title: "Departure", description: "Return to Dehradun for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "uttarakhand-valley-of-flowers",
      name: "Valley of Flowers Trek",
      duration: "7D/6N",
      originalPrice: 32000,
      currentPrice: 27200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Trek to the UNESCO World Heritage Valley of Flowers.",
      highlights: ["Valley of Flowers", "Hemkund Sahib", "Alpine Meadows", "Rare Flora"],
      inclusions: ["6 Nights Accommodation", "All Meals", "Trek Guide", "Permits"],
      exclusions: ["Airfare", "Personal Gear", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival Haridwar", description: "Arrive and drive to Joshimath.", highlights: ["Haridwar", "Scenic Drive", "Joshimath Stay"] },
        { day: 2, title: "Joshimath to Ghangaria", description: "Drive to Govindghat. Trek to Ghangaria.", highlights: ["Govindghat", "Trek Start", "Ghangaria Camp"] },
        { day: 3, title: "Valley of Flowers", description: "Full day exploring the valley.", highlights: ["Flower Valley", "300+ Species", "Photography"] },
        { day: 4, title: "Hemkund Sahib", description: "Trek to sacred Hemkund Sahib.", highlights: ["Hemkund Lake", "Gurudwara", "Spiritual Experience"] },
        { day: 5, title: "Valley Day 2", description: "Return to Valley of Flowers.", highlights: ["Different Route", "More Flowers", "Wildlife Spotting"] },
        { day: 6, title: "Ghangaria to Joshimath", description: "Trek down and drive to Joshimath.", highlights: ["Descent", "Rest", "Local Market"] },
        { day: 7, title: "Departure", description: "Drive to Haridwar for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "uttarakhand-rishikesh-yoga",
      name: "Rishikesh Yoga Retreat",
      duration: "5D/4N",
      originalPrice: 25000,
      currentPrice: 21250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
      description: "Spiritual yoga retreat in the Yoga Capital of the World.",
      highlights: ["Daily Yoga", "Meditation", "Ganga Aarti", "Ayurvedic Food"],
      inclusions: ["4 Nights Ashram Stay", "All Sattvic Meals", "Yoga Sessions", "Meditation Classes"],
      exclusions: ["Airfare", "Personal Expenses", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Arrival & Introduction", description: "Arrive Rishikesh. Ashram welcome.", highlights: ["Ashram Check-in", "Introduction", "Evening Aarti"] },
        { day: 2, title: "Yoga Begins", description: "Full yoga schedule starts.", highlights: ["Morning Yoga", "Pranayama", "Philosophy Class"] },
        { day: 3, title: "Deep Practice", description: "Intensive yoga and meditation.", highlights: ["Advanced Asanas", "Meditation", "Sound Healing"] },
        { day: 4, title: "Spiritual Exploration", description: "Temple visits and evening practices.", highlights: ["Beatles Ashram", "Temple Visit", "Ganga Aarti"] },
        { day: 5, title: "Departure", description: "Sunrise yoga and departure.", highlights: ["Sunrise Session", "Farewell", "Departure"] }
      ]
    }
  ]
};

// Hyderabad Packages
export const hyderabadData: DestinationData = {
  id: "hyderabad",
  name: "Hyderabad",
  tagline: "City of Pearls & Biryani",
  description: "Explore the royal heritage of Hyderabad - from magnificent Charminar to the grand Golconda Fort, delicious Nizami cuisine to the world-famous Hyderabadi pearls. Experience the perfect blend of history and modernity.",
  heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=800"
  ],
  packages: [
    {
      id: "hyderabad-heritage",
      name: "Hyderabad Heritage Tour",
      duration: "3D/2N",
      originalPrice: 15000,
      currentPrice: 12750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
      description: "Discover the royal heritage of Nizam's Hyderabad with historic monuments and authentic cuisine.",
      highlights: ["Charminar", "Golconda Fort", "Salar Jung Museum", "Pearl Shopping"],
      inclusions: ["2 Nights Hotel", "Daily Breakfast", "AC Vehicle", "Monument Entry Fees", "Guide"],
      exclusions: ["Airfare", "Lunch & Dinner", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Old City Exploration", description: "Visit Charminar, Mecca Masjid, and Laad Bazaar for pearl shopping.", highlights: ["Charminar", "Mecca Masjid", "Laad Bazaar", "Pearl Shopping"] },
        { day: 2, title: "Golconda & Museums", description: "Morning visit to Golconda Fort. Afternoon at Salar Jung Museum.", highlights: ["Golconda Fort", "Sound & Light Show", "Salar Jung Museum", "Chowmahalla Palace"] },
        { day: 3, title: "Modern Hyderabad", description: "Visit Ramoji Film City or Hussain Sagar. Departure.", highlights: ["Ramoji Film City", "Hussain Sagar", "Tank Bund", "Departure"] }
      ]
    },
    {
      id: "hyderabad-complete",
      name: "Complete Hyderabad Experience",
      duration: "4D/3N",
      originalPrice: 22000,
      currentPrice: 18700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Comprehensive Hyderabad tour covering heritage, culture, entertainment, and culinary delights.",
      highlights: ["Ramoji Film City", "Nehru Zoo", "Birla Temple", "Food Tour"],
      inclusions: ["3 Nights Hotel", "All Breakfasts", "AC Vehicle", "All Entry Fees", "Food Tour"],
      exclusions: ["Airfare", "Optional Activities", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "Heritage Walk", description: "Charminar, Laad Bazaar, Mecca Masjid, and Chowmahalla Palace.", highlights: ["Charminar", "Laad Bazaar Bangles", "Mecca Masjid", "Chowmahalla Palace"] },
        { day: 2, title: "Golconda & Culture", description: "Golconda Fort, Qutub Shahi Tombs, and evening sound & light show.", highlights: ["Golconda Fort", "Qutub Shahi Tombs", "Taramati Baradari", "Sound & Light Show"] },
        { day: 3, title: "Entertainment Day", description: "Full day at Ramoji Film City - world's largest film studio complex.", highlights: ["Ramoji Film City", "Film Sets", "Adventure Zone", "Live Shows"] },
        { day: 4, title: "Museums & Departure", description: "Salar Jung Museum, Birla Mandir, and departure.", highlights: ["Salar Jung Museum", "Birla Mandir", "Hussain Sagar", "Departure"] }
      ]
    },
    {
      id: "hyderabad-foodie",
      name: "Hyderabad Foodie Trail",
      duration: "3D/2N",
      originalPrice: 18000,
      currentPrice: 15300,
      discount: 15,
      image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=800",
      description: "A gastronomic journey through Hyderabad's legendary Nizami cuisine and street food.",
      highlights: ["Biryani Trail", "Street Food Tour", "Irani Chai", "Sweet Shops"],
      inclusions: ["2 Nights Hotel", "All Food Tastings", "Expert Food Guide", "AC Vehicle"],
      exclusions: ["Airfare", "Shopping", "Alcohol"],
      itinerary: [
        { day: 1, title: "Biryani & Breakfast", description: "Start with legendary Hyderabadi breakfast. Lunch at iconic Biryani spots.", highlights: ["Irani Chai & Osmania Biscuits", "Paradise Biryani", "Shah Ghouse", "Bawarchi"] },
        { day: 2, title: "Street Food Safari", description: "Old City street food tour - from kebabs to sweets.", highlights: ["Pista House Haleem", "Shadab Kebabs", "Nimrah Irani Chai", "Old City Street Food"] },
        { day: 3, title: "Royal Feast", description: "Cooking class and farewell Nizami thali lunch.", highlights: ["Cooking Class", "Nizami Cuisine", "Sweet Shops", "Departure"] }
      ]
    },
    {
      id: "hyderabad-weekend",
      name: "Hyderabad Weekend Getaway",
      duration: "2D/1N",
      originalPrice: 8500,
      currentPrice: 7225,
      discount: 15,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
      description: "Quick weekend escape to explore Hyderabad's top attractions.",
      highlights: ["Charminar", "Golconda Fort", "Local Food", "Shopping"],
      inclusions: ["1 Night Hotel", "Breakfast", "AC Vehicle", "Monument Entry"],
      exclusions: ["Airfare", "Meals except breakfast", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Heritage & Food", description: "Charminar, Laad Bazaar shopping, lunch at Paradise, Golconda Fort.", highlights: ["Charminar", "Pearl Shopping", "Biryani Lunch", "Golconda Fort"] },
        { day: 2, title: "Museums & Departure", description: "Salar Jung Museum, Hussain Sagar, departure.", highlights: ["Salar Jung Museum", "Buddha Statue", "Departure"] }
      ]
    },
    {
      id: "hyderabad-family",
      name: "Hyderabad Family Fun",
      duration: "5D/4N",
      originalPrice: 35000,
      currentPrice: 29750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      description: "Perfect family vacation with theme parks, zoo, and kid-friendly attractions.",
      highlights: ["Ramoji Film City", "Snow World", "Nehru Zoo", "Ocean Park"],
      inclusions: ["4 Nights Hotel", "Breakfast", "All Entry Tickets", "AC Vehicle"],
      exclusions: ["Airfare", "Lunch & Dinner", "Optional Rides"],
      itinerary: [
        { day: 1, title: "Arrival & City Tour", description: "Arrive Hyderabad. Visit Hussain Sagar and Lumbini Park.", highlights: ["Hussain Sagar", "Boat Ride to Buddha", "Lumbini Park", "NTR Gardens"] },
        { day: 2, title: "Theme Park Day", description: "Full day at Ramoji Film City with all attractions.", highlights: ["Ramoji Film City", "Bahubali Set", "Adventure Zone", "Live Shows"] },
        { day: 3, title: "Wildlife & Snow", description: "Morning at Nehru Zoological Park. Afternoon at Snow World.", highlights: ["Nehru Zoo", "Safari", "Snow World", "Ice Sculptures"] },
        { day: 4, title: "Heritage & Fun", description: "Charminar, Golconda Fort, and Ocean Park.", highlights: ["Charminar", "Golconda Fort", "Ocean Park", "Water Rides"] },
        { day: 5, title: "Shopping & Departure", description: "Shopping at GVK One Mall. Departure.", highlights: ["Shopping", "Departure"] }
      ]
    }
  ]
};

// Dubai Packages
export const dubaiData: DestinationData = {
  id: "dubai",
  name: "Dubai",
  tagline: "City of Dreams",
  description: "Experience the glitz and glamour of Dubai - from towering skyscrapers to golden deserts, luxury shopping to thrilling adventures. Discover a city where the future meets tradition.",
  heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800",
    "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800"
  ],
  packages: [
    {
      id: "dubai-delights",
      name: "Dubai Delights",
      duration: "5D/4N",
      originalPrice: 85000,
      currentPrice: 72250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      description: "Experience the best of Dubai with city tours, desert safari, and world-class attractions.",
      highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Dhow Cruise"],
      inclusions: ["4 Nights Hotel", "Daily Breakfast", "Airport Transfers", "City Tour", "Desert Safari"],
      exclusions: ["Airfare", "Visa", "Lunch & Dinner", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Arrival in Dubai", description: "Arrive at Dubai Airport. Transfer to hotel. Evening at leisure.", highlights: ["Airport Pickup", "Hotel Check-in", "Marina Walk"] },
        { day: 2, title: "Dubai City Tour", description: "Full day city tour - Old Dubai, New Dubai, Burj Khalifa.", highlights: ["Dubai Creek", "Gold Souk", "Burj Khalifa 124th Floor"] },
        { day: 3, title: "Desert Safari", description: "Afternoon Desert Safari with BBQ dinner and entertainment.", highlights: ["Dune Bashing", "Camel Ride", "BBQ Dinner", "Belly Dance"] },
        { day: 4, title: "Free Day & Dhow Cruise", description: "Day free for shopping. Evening Dhow Cruise with dinner.", highlights: ["Dubai Mall", "Shopping", "Dhow Cruise Dinner"] },
        { day: 5, title: "Departure", description: "Transfer to Dubai Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "dubai-luxury",
      name: "Luxury Dubai Experience",
      duration: "6D/5N",
      originalPrice: 145000,
      currentPrice: 123250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800",
      description: "Ultimate luxury Dubai experience with premium hotels, exclusive tours, and VIP access.",
      highlights: ["5-Star Hotels", "Private Tours", "Helicopter Tour", "At the Top Burj Khalifa SKY"],
      inclusions: ["5 Nights Luxury Hotel", "All Meals", "Private Transfers", "VIP Access to Attractions"],
      exclusions: ["Airfare", "Visa", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "VIP Arrival", description: "Arrive Dubai. VIP airport transfer. Luxury hotel check-in.", highlights: ["VIP Transfer", "Premium Hotel", "Welcome Dinner"] },
        { day: 2, title: "Private City Tour", description: "Private guided tour of Dubai landmarks.", highlights: ["Burj Al Arab", "Palm Jumeirah", "Dubai Frame"] },
        { day: 3, title: "Helicopter Experience", description: "Morning helicopter tour. Afternoon at leisure.", highlights: ["Helicopter Tour", "Spa Session", "Fine Dining"] },
        { day: 4, title: "Abu Dhabi Day Trip", description: "Full day Abu Dhabi tour with Louvre Museum.", highlights: ["Grand Mosque", "Louvre Abu Dhabi", "Emirates Palace"] },
        { day: 5, title: "Luxury Desert", description: "Private desert camp with gourmet dining.", highlights: ["Private Safari", "Stargazing", "Gourmet Dinner"] },
        { day: 6, title: "Departure", description: "Leisurely breakfast. VIP airport transfer.", highlights: ["Departure"] }
      ]
    },
    {
      id: "dubai-adventure",
      name: "Dubai Adventure Package",
      duration: "5D/4N",
      originalPrice: 95000,
      currentPrice: 80750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800",
      description: "Action-packed Dubai adventure with theme parks, water sports, and desert activities.",
      highlights: ["IMG Worlds", "Skydiving Option", "Jet Ski", "Dune Buggy"],
      inclusions: ["4 Nights Hotel", "Breakfast", "Theme Park Tickets", "Desert Activities"],
      exclusions: ["Airfare", "Visa", "Optional Adventures", "Meals"],
      itinerary: [
        { day: 1, title: "Arrival & Marina", description: "Arrive Dubai. Evening JBR Beach and Marina walk.", highlights: ["Arrival", "Marina Walk", "Beach Time"] },
        { day: 2, title: "Theme Park Day", description: "Full day at IMG Worlds of Adventure.", highlights: ["IMG Worlds", "Marvel Zone", "Cartoon Network Zone"] },
        { day: 3, title: "Water Sports", description: "Morning Jet Ski and water sports at Palm.", highlights: ["Jet Ski", "Banana Boat", "Parasailing"] },
        { day: 4, title: "Desert Adventures", description: "Dune buggy and sandboarding. Evening camp.", highlights: ["Dune Buggy", "Sandboarding", "Quad Biking"] },
        { day: 5, title: "Departure", description: "Free time for shopping. Airport transfer.", highlights: ["Shopping", "Departure"] }
      ]
    },
    {
      id: "dubai-family",
      name: "Dubai Family Fun",
      duration: "6D/5N",
      originalPrice: 125000,
      currentPrice: 106250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      description: "Perfect family vacation with theme parks, aquarium, and kid-friendly activities.",
      highlights: ["Legoland", "Aquaventure", "Dubai Aquarium", "Global Village"],
      inclusions: ["5 Nights Family Hotel", "Breakfast", "Theme Park Tickets", "Transfers"],
      exclusions: ["Airfare", "Visa", "Meals except breakfast"],
      itinerary: [
        { day: 1, title: "Family Arrival", description: "Arrive Dubai. Evening at Dubai Fountain show.", highlights: ["Hotel Check-in", "Dubai Fountain", "Dubai Mall Walk"] },
        { day: 2, title: "Legoland Adventure", description: "Full day at Legoland Dubai.", highlights: ["Legoland", "Miniland", "Lego Factory Tour"] },
        { day: 3, title: "Aquaventure & Aquarium", description: "Water park fun and underwater world.", highlights: ["Aquaventure", "Lost Chambers", "Dubai Aquarium"] },
        { day: 4, title: "Desert Family Safari", description: "Family-friendly desert experience.", highlights: ["Camel Ride", "Sandboarding", "BBQ Dinner"] },
        { day: 5, title: "Global Village", description: "Evening at Global Village theme park.", highlights: ["Global Village", "Cultural Pavilions", "Street Food"] },
        { day: 6, title: "Departure", description: "Morning free. Airport transfer.", highlights: ["Departure"] }
      ]
    },
    {
      id: "dubai-honeymoon",
      name: "Dubai Romantic Honeymoon",
      duration: "5D/4N",
      originalPrice: 135000,
      currentPrice: 114750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800",
      description: "Romantic Dubai honeymoon with luxury stays, private dinners, and couple experiences.",
      highlights: ["Burj Al Arab Dinner", "Private Yacht", "Desert Romance", "Couple Spa"],
      inclusions: ["4 Nights Luxury Hotel", "All Meals", "Private Transfers", "Romantic Setups"],
      exclusions: ["Airfare", "Visa", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "Romantic Welcome", description: "Arrive to flower-decorated room. Private dinner.", highlights: ["Romantic Room Setup", "Private Dinner", "City Lights Tour"] },
        { day: 2, title: "Luxury Experiences", description: "Burj Khalifa SKY lounge. Burj Al Arab dinner.", highlights: ["Burj Khalifa SKY", "Burj Al Arab Dinner", "Dubai Fountain View"] },
        { day: 3, title: "Yacht & Beach", description: "Private yacht cruise. Beach club experience.", highlights: ["Private Yacht", "Beach Club", "Sunset Cruise"] },
        { day: 4, title: "Desert Romance", description: "Private desert camp with starlit dinner.", highlights: ["Private Safari", "Stargazing", "Candlelight Dinner"] },
        { day: 5, title: "Departure", description: "Couple spa and departure.", highlights: ["Couple Spa", "Departure"] }
      ]
    }
  ]
};

// Singapore Packages
export const singaporeData: DestinationData = {
  id: "singapore",
  name: "Singapore",
  tagline: "The Lion City",
  description: "Experience the perfect blend of cultures in Singapore - futuristic gardens, world-class attractions, amazing food, and endless shopping. A city that never disappoints.",
  heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800",
    "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800"
  ],
  packages: [
    {
      id: "singapore-delight",
      name: "Singapore Delight",
      duration: "5D/4N",
      originalPrice: 65000,
      currentPrice: 55250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
      description: "Complete Singapore experience with Universal Studios and Sentosa.",
      highlights: ["Marina Bay Sands", "Universal Studios", "Sentosa Island", "Gardens by the Bay"],
      inclusions: ["4 Nights Hotel", "Breakfast", "Airport Transfers", "City Tour", "USS Tickets"],
      exclusions: ["Airfare", "Visa", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Arrival Singapore", description: "Arrive Changi Airport. Night Safari experience.", highlights: ["Airport Transfer", "Night Safari", "Hotel Check-in"] },
        { day: 2, title: "City Tour", description: "Half day city tour. Evening Marina Bay Sands.", highlights: ["Merlion Park", "Chinatown", "Marina Bay Sands"] },
        { day: 3, title: "Sentosa Island", description: "Full day Sentosa with Universal Studios.", highlights: ["Universal Studios", "Cable Car", "Wings of Time"] },
        { day: 4, title: "Gardens & Shopping", description: "Gardens by the Bay and Orchard Road shopping.", highlights: ["Gardens by the Bay", "Cloud Forest", "Shopping"] },
        { day: 5, title: "Departure", description: "Free time. Transfer to airport.", highlights: ["Last Minute Shopping", "Departure"] }
      ]
    },
    {
      id: "singapore-family",
      name: "Singapore Family Package",
      duration: "6D/5N",
      originalPrice: 95000,
      currentPrice: 80750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800",
      description: "Ultimate family vacation with theme parks and kid-friendly attractions.",
      highlights: ["Universal Studios", "S.E.A. Aquarium", "Legoland", "Zoo"],
      inclusions: ["5 Nights Family Hotel", "Breakfast", "All Theme Park Tickets", "Transfers"],
      exclusions: ["Airfare", "Visa", "Meals except breakfast"],
      itinerary: [
        { day: 1, title: "Family Arrival", description: "Arrive and evening at Gardens by the Bay.", highlights: ["Gardens by the Bay", "Supertree Grove", "Light Show"] },
        { day: 2, title: "Universal Studios", description: "Full day at Universal Studios Singapore.", highlights: ["USS", "All Rides", "Character Meet"] },
        { day: 3, title: "Singapore Zoo", description: "Day at Singapore Zoo and River Safari.", highlights: ["Singapore Zoo", "River Safari", "Rainforest Lumina"] },
        { day: 4, title: "Legoland Day", description: "Day trip to Legoland Malaysia.", highlights: ["Legoland", "Water Park", "All Rides"] },
        { day: 5, title: "Sentosa Fun", description: "S.E.A. Aquarium and beach activities.", highlights: ["S.E.A. Aquarium", "Beach", "Cable Car"] },
        { day: 6, title: "Departure", description: "Morning free and departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "singapore-honeymoon",
      name: "Singapore Romantic Escape",
      duration: "5D/4N",
      originalPrice: 85000,
      currentPrice: 72250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800",
      description: "Romantic Singapore honeymoon with luxury experiences.",
      highlights: ["Marina Bay Sands Stay", "Private Dinner", "Couple Spa", "Sunset Cruise"],
      inclusions: ["4 Nights Luxury Hotel", "All Meals", "Private Transfers", "Romantic Experiences"],
      exclusions: ["Airfare", "Visa", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "Romantic Arrival", description: "Arrive to decorated room. Marina Bay Sands.", highlights: ["MBS Check-in", "Infinity Pool", "Private Dinner"] },
        { day: 2, title: "Gardens Romance", description: "Gardens by the Bay private tour.", highlights: ["Private Garden Tour", "Flower Dome", "Supertree Dinner"] },
        { day: 3, title: "Sentosa Day", description: "Beach activities and sunset at Tanjong.", highlights: ["Beach Club", "Sunset at Tanjong", "Candlelight Dinner"] },
        { day: 4, title: "Cruise & Spa", description: "Sunset cruise and couple spa.", highlights: ["Sunset Cruise", "Couple Spa", "River Walk Dinner"] },
        { day: 5, title: "Departure", description: "Leisurely departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "singapore-cruise",
      name: "Singapore with Cruise",
      duration: "7D/6N",
      originalPrice: 125000,
      currentPrice: 106250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
      description: "Singapore city experience combined with 2-night cruise.",
      highlights: ["City Tour", "Universal Studios", "2 Night Cruise", "Malaysia Port"],
      inclusions: ["4 Nights Hotel", "2 Nights Cruise", "All Meals on Cruise", "Transfers"],
      exclusions: ["Airfare", "Visa", "Port Excursions"],
      itinerary: [
        { day: 1, title: "Arrival", description: "Arrive Singapore. City orientation.", highlights: ["Arrival", "Marina Bay Walk", "Merlion Park"] },
        { day: 2, title: "City Tour", description: "Full day Singapore city tour.", highlights: ["City Tour", "Gardens by the Bay", "Clarke Quay"] },
        { day: 3, title: "Universal Studios", description: "Full day at USS.", highlights: ["Universal Studios", "All Rides", "Sentosa"] },
        { day: 4, title: "Cruise Embarkation", description: "Board cruise ship for 2-night cruise.", highlights: ["Cruise Check-in", "Ship Exploration", "Dinner on Board"] },
        { day: 5, title: "Port of Call", description: "Explore Malaysian port or ship activities.", highlights: ["Port Exploration", "Ship Activities", "Entertainment"] },
        { day: 6, title: "Return to Singapore", description: "Disembark and free time.", highlights: ["Disembark", "Shopping", "Rest"] },
        { day: 7, title: "Departure", description: "Airport transfer.", highlights: ["Departure"] }
      ]
    },
    {
      id: "singapore-weekend",
      name: "Singapore Weekend Getaway",
      duration: "4D/3N",
      originalPrice: 55000,
      currentPrice: 46750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800",
      description: "Quick Singapore escape with highlights.",
      highlights: ["Merlion", "Gardens by the Bay", "Sentosa", "Shopping"],
      inclusions: ["3 Nights Hotel", "Breakfast", "Transfers", "City Tour"],
      exclusions: ["Airfare", "Visa", "Theme Park Tickets"],
      itinerary: [
        { day: 1, title: "Arrival", description: "Arrive and evening city exploration.", highlights: ["Marina Bay Sands View", "Gardens Light Show", "Clarke Quay"] },
        { day: 2, title: "City Highlights", description: "Full day city tour and shopping.", highlights: ["Merlion", "Chinatown", "Orchard Road"] },
        { day: 3, title: "Sentosa Day", description: "Day at Sentosa Island.", highlights: ["Beach", "Cable Car", "Wings of Time"] },
        { day: 4, title: "Departure", description: "Morning free and departure.", highlights: ["Shopping", "Departure"] }
      ]
    }
  ]
};

// Thailand Packages
export const thailandData: DestinationData = {
  id: "thailand",
  name: "Thailand",
  tagline: "Land of Smiles",
  description: "Discover the magic of Thailand - from Bangkok's temples and nightlife to Pattaya's beaches and Phuket's islands. Experience Thai hospitality at its best.",
  heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
    "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800",
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800"
  ],
  packages: [
    {
      id: "thailand-tour",
      name: "Amazing Thailand",
      duration: "6D/5N",
      originalPrice: 55000,
      currentPrice: 46750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
      description: "Complete Thailand tour covering Bangkok and Pattaya.",
      highlights: ["Grand Palace", "Coral Island", "Safari World", "Alcazar Show"],
      inclusions: ["5 Nights Hotel", "Breakfast", "Transfers", "Island Tour", "City Tour"],
      exclusions: ["Airfare", "Visa", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Arrival Bangkok", description: "Arrive Bangkok. Transfer to Pattaya.", highlights: ["Airport Pickup", "Pattaya Transfer", "Walking Street"] },
        { day: 2, title: "Coral Island", description: "Full day Coral Island tour with water sports.", highlights: ["Coral Island", "Parasailing", "Banana Boat"] },
        { day: 3, title: "Pattaya City", description: "Nong Nooch Garden and Alcazar Show.", highlights: ["Nong Nooch Garden", "Art in Paradise", "Alcazar Show"] },
        { day: 4, title: "Pattaya to Bangkok", description: "Drive to Bangkok. Safari World visit.", highlights: ["Safari World", "Marine Park", "Hotel Check-in"] },
        { day: 5, title: "Bangkok City", description: "Temple tour and shopping.", highlights: ["Grand Palace", "Wat Pho", "MBK Shopping"] },
        { day: 6, title: "Departure", description: "Transfer to Bangkok Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "thailand-phuket",
      name: "Thailand with Phuket",
      duration: "7D/6N",
      originalPrice: 72000,
      currentPrice: 61200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800",
      description: "Bangkok and Phuket island paradise experience.",
      highlights: ["Phi Phi Islands", "James Bond Island", "Patong Beach", "Temples"],
      inclusions: ["6 Nights Hotel", "Breakfast", "Transfers", "Island Tours"],
      exclusions: ["Airfare", "Visa", "Meals except breakfast"],
      itinerary: [
        { day: 1, title: "Arrival Bangkok", description: "Arrive and city exploration.", highlights: ["Arrival", "Asiatique", "Dinner Cruise"] },
        { day: 2, title: "Bangkok Temples", description: "Temple and palace tour.", highlights: ["Grand Palace", "Wat Arun", "Wat Pho"] },
        { day: 3, title: "Fly to Phuket", description: "Morning flight to Phuket.", highlights: ["Flight", "Patong Beach", "Bangla Road"] },
        { day: 4, title: "Phi Phi Islands", description: "Full day Phi Phi island tour.", highlights: ["Phi Phi Islands", "Maya Bay", "Snorkeling"] },
        { day: 5, title: "James Bond Island", description: "Phang Nga Bay tour.", highlights: ["James Bond Island", "Canoeing", "Sea Cave"] },
        { day: 6, title: "Beach Day", description: "Free day at Phuket beaches.", highlights: ["Beach Time", "Thai Massage", "Shopping"] },
        { day: 7, title: "Departure", description: "Transfer to airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "thailand-honeymoon",
      name: "Thailand Honeymoon Special",
      duration: "7D/6N",
      originalPrice: 85000,
      currentPrice: 72250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
      description: "Romantic Thailand honeymoon in Phuket and Krabi.",
      highlights: ["Private Beaches", "Island Hopping", "Couple Spa", "Sunset Dinner"],
      inclusions: ["6 Nights Luxury Resort", "All Meals", "Private Transfers", "Romantic Setups"],
      exclusions: ["Airfare", "Visa", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "Romantic Arrival", description: "Arrive Phuket. Decorated room welcome.", highlights: ["Flower Welcome", "Sunset Dinner", "Beach Walk"] },
        { day: 2, title: "Private Island", description: "Private speedboat to secluded islands.", highlights: ["Private Speedboat", "Island Picnic", "Snorkeling"] },
        { day: 3, title: "Spa Day", description: "Full day couple spa retreat.", highlights: ["Couple Spa", "Thai Massage", "Pool Time"] },
        { day: 4, title: "Phuket to Krabi", description: "Ferry to Krabi. Sunset at Railay.", highlights: ["Ferry Ride", "Railay Beach", "Rock Climbing View"] },
        { day: 5, title: "4 Islands Tour", description: "Private 4 islands tour.", highlights: ["4 Islands", "Private Boat", "Beach Picnic"] },
        { day: 6, title: "Ao Nang Romance", description: "Free day and sunset cruise.", highlights: ["Beach Day", "Sunset Cruise", "Candlelight Dinner"] },
        { day: 7, title: "Departure", description: "Transfer to Krabi Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "thailand-adventure",
      name: "Thailand Adventure Package",
      duration: "6D/5N",
      originalPrice: 65000,
      currentPrice: 55250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
      description: "Adventure-packed Thailand tour with water sports and jungle activities.",
      highlights: ["Scuba Diving", "Jungle Trek", "White Water Rafting", "Elephant Sanctuary"],
      inclusions: ["5 Nights Adventure Resort", "All Meals", "All Activities", "Equipment"],
      exclusions: ["Airfare", "Visa", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival Phuket", description: "Arrive and water sports introduction.", highlights: ["Arrival", "Beach Sports", "Briefing"] },
        { day: 2, title: "Scuba Adventure", description: "Full day scuba diving experience.", highlights: ["Scuba Diving", "Coral Reefs", "Underwater Photos"] },
        { day: 3, title: "Jungle Day", description: "Jungle trekking and elephant sanctuary.", highlights: ["Jungle Trek", "Elephant Sanctuary", "Cooking Class"] },
        { day: 4, title: "Island Adventure", description: "Island hopping with cliff jumping.", highlights: ["Speed Boat", "Cliff Jumping", "Cave Exploration"] },
        { day: 5, title: "Rafting", description: "White water rafting and ATV.", highlights: ["White Water Rafting", "ATV Ride", "Zip Lining"] },
        { day: 6, title: "Departure", description: "Morning beach time and departure.", highlights: ["Beach Time", "Departure"] }
      ]
    },
    {
      id: "thailand-budget",
      name: "Thailand Budget Tour",
      duration: "5D/4N",
      originalPrice: 35000,
      currentPrice: 29750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800",
      description: "Affordable Thailand experience with best highlights.",
      highlights: ["Grand Palace", "Floating Market", "Pattaya Beach", "Night Market"],
      inclusions: ["4 Nights Budget Hotel", "Breakfast", "Transfers", "Basic Tours"],
      exclusions: ["Airfare", "Visa", "Meals except breakfast", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Arrival Bangkok", description: "Arrive and explore Khao San Road.", highlights: ["Arrival", "Khao San Road", "Street Food"] },
        { day: 2, title: "Bangkok Highlights", description: "Temple tour and floating market.", highlights: ["Grand Palace", "Floating Market", "Chatuchak Market"] },
        { day: 3, title: "Pattaya Trip", description: "Day trip to Pattaya.", highlights: ["Pattaya Beach", "Walking Street", "Night Market"] },
        { day: 4, title: "Bangkok Shopping", description: "Free day for shopping and exploring.", highlights: ["MBK", "Pratunam", "Night Market"] },
        { day: 5, title: "Departure", description: "Airport transfer.", highlights: ["Departure"] }
      ]
    }
  ]
};

// Bali Packages
export const baliData: DestinationData = {
  id: "bali",
  name: "Bali",
  tagline: "Island of Gods",
  description: "Experience the mystical beauty of Bali - ancient temples, rice terraces, volcanic mountains, and pristine beaches. The perfect tropical paradise.",
  heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800",
    "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800"
  ],
  packages: [
    {
      id: "bali-bliss",
      name: "Bali Bliss",
      duration: "6D/5N",
      originalPrice: 72000,
      currentPrice: 61200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      description: "Complete Bali experience with temples, beaches, and culture.",
      highlights: ["Tanah Lot Temple", "Ubud Rice Terraces", "Kintamani", "Water Sports"],
      inclusions: ["5 Nights Resort", "Breakfast", "Transfers", "Tours", "Water Sports"],
      exclusions: ["Airfare", "Visa on Arrival", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Arrival Bali", description: "Arrive Ngurah Rai Airport. Transfer to hotel.", highlights: ["Airport Pickup", "Seminyak Beach", "Welcome Dinner"] },
        { day: 2, title: "South Bali", description: "Uluwatu Temple and Kecak Dance at sunset.", highlights: ["Uluwatu Temple", "Padang Beach", "Kecak Dance"] },
        { day: 3, title: "Ubud & Kintamani", description: "Rice terraces, Monkey Forest, and volcano views.", highlights: ["Tegallalang Rice Terraces", "Monkey Forest", "Kintamani"] },
        { day: 4, title: "Water Sports", description: "Full day at Tanjung Benoa for water activities.", highlights: ["Jet Ski", "Parasailing", "Banana Boat"] },
        { day: 5, title: "Tanah Lot", description: "Visit Tanah Lot Temple and spa session.", highlights: ["Tanah Lot Temple", "Balinese Spa", "Shopping"] },
        { day: 6, title: "Departure", description: "Transfer to airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "bali-honeymoon",
      name: "Bali Romantic Honeymoon",
      duration: "7D/6N",
      originalPrice: 95000,
      currentPrice: 80750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800",
      description: "Romantic Bali honeymoon with private pool villas and couple experiences.",
      highlights: ["Private Pool Villa", "Floating Breakfast", "Couple Spa", "Sunset Dinner"],
      inclusions: ["6 Nights Private Villa", "All Meals", "Private Transfers", "Romantic Setups"],
      exclusions: ["Airfare", "Visa", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "Paradise Welcome", description: "Arrive to flower-decorated villa.", highlights: ["Private Villa", "Floating Breakfast Setup", "Romantic Dinner"] },
        { day: 2, title: "Ubud Romance", description: "Private tour of Ubud's romantic spots.", highlights: ["Swing Photoshoot", "Rice Terrace Walk", "Private Dinner"] },
        { day: 3, title: "Spa Day", description: "Full day Balinese spa experience.", highlights: ["Couple Spa", "Flower Bath", "Traditional Massage"] },
        { day: 4, title: "Beach Day", description: "Private beach club experience.", highlights: ["Beach Club", "Sunset Cocktails", "Candlelight Dinner"] },
        { day: 5, title: "Temple & Sunset", description: "Tanah Lot sunset experience.", highlights: ["Tanah Lot", "Private Dinner at Temple View", "Romance"] },
        { day: 6, title: "Nusa Penida", description: "Private day trip to Nusa Penida.", highlights: ["Private Boat", "Kelingking Beach", "Crystal Bay"] },
        { day: 7, title: "Departure", description: "Floating breakfast and departure.", highlights: ["Floating Breakfast", "Departure"] }
      ]
    },
    {
      id: "bali-adventure",
      name: "Bali Adventure Package",
      duration: "6D/5N",
      originalPrice: 75000,
      currentPrice: 63750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800",
      description: "Adventure-filled Bali with rafting, trekking, and water activities.",
      highlights: ["White Water Rafting", "Mt. Batur Sunrise", "Waterfall Trek", "Diving"],
      inclusions: ["5 Nights Resort", "Breakfast", "All Adventures", "Equipment"],
      exclusions: ["Airfare", "Visa", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Arrival & Beach", description: "Arrive and beach sports introduction.", highlights: ["Arrival", "Surfing Lesson", "Beach Games"] },
        { day: 2, title: "Rafting Adventure", description: "White water rafting on Ayung River.", highlights: ["Ayung Rafting", "Jungle Views", "Waterfall Swim"] },
        { day: 3, title: "Mt. Batur Sunrise", description: "Early trek for sunrise at Mt. Batur.", highlights: ["Sunrise Trek", "Volcanic Views", "Hot Springs"] },
        { day: 4, title: "Waterfall Chase", description: "Trek to hidden waterfalls.", highlights: ["Sekumpul Waterfalls", "Banyumala", "Natural Pools"] },
        { day: 5, title: "Island Diving", description: "Scuba diving at Nusa Penida.", highlights: ["Scuba Diving", "Manta Rays", "Crystal Bay"] },
        { day: 6, title: "Departure", description: "Morning surf and departure.", highlights: ["Morning Surf", "Departure"] }
      ]
    },
    {
      id: "bali-family",
      name: "Bali Family Fun",
      duration: "6D/5N",
      originalPrice: 85000,
      currentPrice: 72250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      description: "Perfect family vacation with kid-friendly activities and resorts.",
      highlights: ["Waterbom", "Safari Park", "Monkey Forest", "Beach Activities"],
      inclusions: ["5 Nights Family Resort", "Breakfast", "Transfers", "Activity Tickets"],
      exclusions: ["Airfare", "Visa", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Family Arrival", description: "Arrive and resort fun.", highlights: ["Resort Check-in", "Pool Time", "Kids Club"] },
        { day: 2, title: "Waterbom Day", description: "Full day at Waterbom water park.", highlights: ["Waterbom Park", "All Slides", "Lazy River"] },
        { day: 3, title: "Safari Adventure", description: "Bali Safari and Marine Park.", highlights: ["Safari Ride", "Animal Shows", "Night Safari"] },
        { day: 4, title: "Ubud Fun", description: "Monkey Forest and rice terrace walk.", highlights: ["Monkey Forest", "Swing", "Chocolate Factory"] },
        { day: 5, title: "Beach Day", description: "Beach activities and sunset.", highlights: ["Beach Games", "Sandcastle", "Sunset BBQ"] },
        { day: 6, title: "Departure", description: "Morning pool and departure.", highlights: ["Pool Time", "Departure"] }
      ]
    },
    {
      id: "bali-weekend",
      name: "Bali Quick Escape",
      duration: "4D/3N",
      originalPrice: 45000,
      currentPrice: 38250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800",
      description: "Quick Bali getaway with best highlights.",
      highlights: ["Beach", "Temple", "Rice Terrace", "Spa"],
      inclusions: ["3 Nights Hotel", "Breakfast", "Transfers", "Half Day Tour"],
      exclusions: ["Airfare", "Visa", "Meals except breakfast"],
      itinerary: [
        { day: 1, title: "Arrival", description: "Arrive and beach evening.", highlights: ["Arrival", "Seminyak Beach", "Sunset"] },
        { day: 2, title: "Bali Highlights", description: "Rice terrace and temple tour.", highlights: ["Tegallalang", "Ubud", "Tanah Lot Sunset"] },
        { day: 3, title: "Beach & Spa", description: "Beach time and Balinese spa.", highlights: ["Beach", "Spa Session", "Shopping"] },
        { day: 4, title: "Departure", description: "Morning free and departure.", highlights: ["Departure"] }
      ]
    }
  ]
};

// Europe Packages
export const europeData: DestinationData = {
  id: "europe",
  name: "Europe",
  tagline: "Old World Charm",
  description: "Discover the enchanting beauty of Europe - from romantic Paris to historic Rome, scenic Switzerland to vibrant Amsterdam. Experience rich culture, stunning architecture, and unforgettable experiences.",
  heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
    "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800"
  ],
  packages: [
    {
      id: "europe-highlights",
      name: "European Highlights",
      duration: "10D/9N",
      originalPrice: 285000,
      currentPrice: 256500,
      discount: 10,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
      description: "Best of Europe tour covering Paris, Switzerland, and Italy.",
      highlights: ["Eiffel Tower", "Swiss Alps", "Venice Gondola", "Vatican City"],
      inclusions: ["9 Nights Hotels", "Daily Breakfast", "Coach Travel", "Guided Tours", "Schengen Visa Assistance"],
      exclusions: ["Airfare", "Visa Fee", "Lunch & Dinner", "Tips"],
      itinerary: [
        { day: 1, title: "Arrive Paris", description: "Arrive in Paris. Hotel check-in. Evening Seine River Cruise.", highlights: ["Airport Pickup", "Seine Cruise", "Paris by Night"] },
        { day: 2, title: "Paris Exploration", description: "Full day Paris tour - Eiffel Tower, Louvre, Champs-Élysées.", highlights: ["Eiffel Tower", "Louvre Museum", "Arc de Triomphe"] },
        { day: 3, title: "Paris to Lucerne", description: "Train to Lucerne, Switzerland. Evening at leisure.", highlights: ["TGV Train", "Lake Lucerne", "Chapel Bridge"] },
        { day: 4, title: "Mt. Titlis Excursion", description: "Day trip to Mt. Titlis with cable car ride.", highlights: ["Mt. Titlis", "Ice Flyer", "Glacier Park"] },
        { day: 5, title: "Lucerne to Milan", description: "Scenic drive to Milan. Visit Duomo Cathedral.", highlights: ["Scenic Drive", "Milan Duomo", "Galleria Vittorio"] },
        { day: 6, title: "Venice Day Trip", description: "Full day in Venice with Gondola ride.", highlights: ["St. Mark's Square", "Gondola Ride", "Rialto Bridge"] },
        { day: 7, title: "Milan to Rome", description: "High-speed train to Rome. Evening Colosseum view.", highlights: ["Fast Train", "Colosseum", "Trevi Fountain"] },
        { day: 8, title: "Vatican & Rome", description: "Vatican City tour and Rome sightseeing.", highlights: ["Vatican Museum", "Sistine Chapel", "Spanish Steps"] },
        { day: 9, title: "Rome Free Day", description: "Free day for shopping and exploration.", highlights: ["Shopping", "Local Cuisine", "Roman Nightlife"] },
        { day: 10, title: "Departure", description: "Transfer to Rome Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "swiss-splendor",
      name: "Swiss Splendor",
      duration: "7D/6N",
      originalPrice: 195000,
      currentPrice: 165750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
      description: "Complete Switzerland tour with scenic train journeys and alpine adventures.",
      highlights: ["Jungfraujoch", "Glacier Express", "Lake Geneva", "Interlaken"],
      inclusions: ["6 Nights Hotels", "All Breakfasts", "Swiss Pass", "Mountain Excursions"],
      exclusions: ["Airfare", "Visa", "Lunches & Dinners"],
      itinerary: [
        { day: 1, title: "Arrive Zurich", description: "Arrive Zurich. City tour and Lake Zurich visit.", highlights: ["Zurich City", "Lake Zurich", "Old Town"] },
        { day: 2, title: "Zurich to Lucerne", description: "Train to Lucerne. Mt. Pilatus excursion.", highlights: ["Mt. Pilatus", "Dragon Ride", "Lake Lucerne"] },
        { day: 3, title: "Interlaken", description: "Scenic drive to Interlaken. Adventure activities.", highlights: ["Interlaken", "Paragliding Option", "Lake Brienz"] },
        { day: 4, title: "Jungfraujoch", description: "Excursion to Top of Europe - Jungfraujoch.", highlights: ["Jungfraujoch", "Ice Palace", "Sphinx Observatory"] },
        { day: 5, title: "Glacier Express", description: "Scenic Glacier Express journey to Zermatt.", highlights: ["Glacier Express", "Alpine Views", "Zermatt"] },
        { day: 6, title: "Matterhorn & Geneva", description: "Matterhorn views. Travel to Geneva.", highlights: ["Matterhorn", "Geneva", "Jet d'Eau"] },
        { day: 7, title: "Departure", description: "Transfer to Geneva Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "italy-romance",
      name: "Romantic Italy",
      duration: "8D/7N",
      originalPrice: 225000,
      currentPrice: 191250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
      description: "Romantic Italian journey through Rome, Florence, and Venice.",
      highlights: ["Colosseum", "Tuscan Countryside", "Venice Canals", "Amalfi Coast"],
      inclusions: ["7 Nights Hotels", "Daily Breakfast", "Train Tickets", "Guided Tours"],
      exclusions: ["Airfare", "Visa", "Optional Activities", "Meals"],
      itinerary: [
        { day: 1, title: "Arrive Rome", description: "Arrive Rome. Evening Trevi Fountain and Spanish Steps.", highlights: ["Arrival", "Trevi Fountain", "Spanish Steps"] },
        { day: 2, title: "Ancient Rome", description: "Colosseum, Roman Forum, and Vatican tour.", highlights: ["Colosseum", "Vatican", "Sistine Chapel"] },
        { day: 3, title: "Amalfi Coast", description: "Day trip to Amalfi Coast - Positano and Ravello.", highlights: ["Positano", "Amalfi", "Ravello"] },
        { day: 4, title: "Rome to Florence", description: "Train to Florence. Evening Ponte Vecchio walk.", highlights: ["Florence", "Ponte Vecchio", "Piazza della Signoria"] },
        { day: 5, title: "Florence & Tuscany", description: "Uffizi Gallery and Tuscan wine tour.", highlights: ["Uffizi Gallery", "Chianti", "Wine Tasting"] },
        { day: 6, title: "Florence to Venice", description: "Train to Venice. Grand Canal cruise.", highlights: ["Venice", "Grand Canal", "Sunset Views"] },
        { day: 7, title: "Venice Romance", description: "St. Mark's, Doge's Palace, and Gondola ride.", highlights: ["St. Mark's", "Gondola", "Murano Island"] },
        { day: 8, title: "Departure", description: "Transfer to Venice Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "europe-grand-tour",
      name: "Grand European Tour",
      duration: "14D/13N",
      originalPrice: 385000,
      currentPrice: 346500,
      discount: 10,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
      description: "Ultimate Europe tour covering 8 countries in 14 days.",
      highlights: ["Paris", "Amsterdam", "Brussels", "Frankfurt", "Switzerland", "Italy", "Austria", "Prague"],
      inclusions: ["13 Nights Hotels", "All Breakfasts", "Deluxe Coach", "Expert Guide", "Visa Assistance"],
      exclusions: ["Airfare", "Visa Fee", "Optional Tours", "Meals"],
      itinerary: [
        { day: 1, title: "Paris Arrival", description: "Arrive Paris. City orientation.", highlights: ["Paris Check-in", "Montmartre", "Welcome Dinner"] },
        { day: 2, title: "Paris Full Day", description: "Complete Paris exploration.", highlights: ["Eiffel Tower", "Louvre", "Notre Dame Area"] },
        { day: 3, title: "Brussels & Amsterdam", description: "Visit Brussels. Continue to Amsterdam.", highlights: ["Grand Place", "Manneken Pis", "Amsterdam Canals"] },
        { day: 4, title: "Amsterdam", description: "Full day Amsterdam tour.", highlights: ["Anne Frank House", "Rijksmuseum", "Canal Cruise"] },
        { day: 5, title: "Cologne & Frankfurt", description: "Cologne Cathedral. Evening Frankfurt.", highlights: ["Cologne Cathedral", "Rhine Views", "Frankfurt"] },
        { day: 6, title: "Rhine Valley", description: "Scenic Rhine Valley cruise.", highlights: ["Rhine Cruise", "Castle Views", "Wine Tasting"] },
        { day: 7, title: "Swiss Alps", description: "Enter Switzerland. Lucerne evening.", highlights: ["Swiss Border", "Lake Lucerne", "Chapel Bridge"] },
        { day: 8, title: "Jungfraujoch", description: "Top of Europe excursion.", highlights: ["Jungfraujoch", "Ice Palace", "Alpine Views"] },
        { day: 9, title: "Swiss to Italy", description: "Scenic drive to Milan/Venice.", highlights: ["Alpine Drive", "Italian Border", "Venice Arrival"] },
        { day: 10, title: "Venice Full Day", description: "Complete Venice experience.", highlights: ["St. Mark's", "Gondola", "Murano Glass"] },
        { day: 11, title: "Venice to Vienna", description: "Train to Vienna.", highlights: ["Scenic Train", "Vienna Arrival", "Evening Walk"] },
        { day: 12, title: "Vienna", description: "Imperial Vienna tour.", highlights: ["Schönbrunn Palace", "Ring Road", "Opera House"] },
        { day: 13, title: "Prague", description: "Day trip to Prague.", highlights: ["Charles Bridge", "Old Town", "Prague Castle"] },
        { day: 14, title: "Departure", description: "Transfer to Vienna Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "scandinavia-tour",
      name: "Scandinavian Wonders",
      duration: "10D/9N",
      originalPrice: 295000,
      currentPrice: 265500,
      discount: 10,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
      description: "Explore the Nordic countries - Norway, Sweden, Denmark, and Finland.",
      highlights: ["Norwegian Fjords", "Northern Lights", "Stockholm", "Copenhagen"],
      inclusions: ["9 Nights Hotels", "All Breakfasts", "Fjord Cruise", "Nordic Trains"],
      exclusions: ["Airfare", "Visa", "Optional Activities", "Meals"],
      itinerary: [
        { day: 1, title: "Copenhagen Arrival", description: "Arrive Copenhagen. City walk.", highlights: ["Little Mermaid", "Nyhavn", "Tivoli Gardens"] },
        { day: 2, title: "Copenhagen Full Day", description: "Complete Copenhagen tour.", highlights: ["Rosenborg Castle", "Amalienborg", "Canal Tour"] },
        { day: 3, title: "To Oslo", description: "Train to Oslo.", highlights: ["Scenic Train", "Oslo Arrival", "Karl Johan Gate"] },
        { day: 4, title: "Oslo & Fjords", description: "Oslo tour and fjord intro.", highlights: ["Viking Museum", "Vigeland Park", "Opera House"] },
        { day: 5, title: "Bergen", description: "Train to Bergen. Bryggen walk.", highlights: ["Scenic Railway", "Bryggen Wharf", "Fish Market"] },
        { day: 6, title: "Fjord Cruise", description: "Full day fjord experience.", highlights: ["Hardangerfjord", "Sognefjord", "Waterfalls"] },
        { day: 7, title: "To Stockholm", description: "Fly to Stockholm.", highlights: ["Stockholm Arrival", "Gamla Stan", "Evening Walk"] },
        { day: 8, title: "Stockholm", description: "Full day Stockholm tour.", highlights: ["Vasa Museum", "Royal Palace", "ABBA Museum"] },
        { day: 9, title: "Helsinki Day Trip", description: "Ferry to Helsinki.", highlights: ["Helsinki Cathedral", "Suomenlinna", "Market Square"] },
        { day: 10, title: "Departure", description: "Fly out from Stockholm.", highlights: ["Departure"] }
      ]
    }
  ]
};

// USA Packages
export const usaData: DestinationData = {
  id: "usa",
  name: "USA",
  tagline: "Land of Dreams",
  description: "Experience the United States - from iconic New York to sunny California, majestic National Parks to thrilling theme parks. A land of endless possibilities.",
  heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800"
  ],
  packages: [
    {
      id: "usa-east-coast",
      name: "USA East Coast Classic",
      duration: "10D/9N",
      originalPrice: 295000,
      currentPrice: 265500,
      discount: 10,
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800",
      description: "Classic East Coast tour - New York, Washington DC, and Niagara Falls.",
      highlights: ["Statue of Liberty", "White House", "Niagara Falls", "Times Square"],
      inclusions: ["9 Nights Hotels", "Daily Breakfast", "Transfers", "City Tours", "Visa Assistance"],
      exclusions: ["Airfare", "Visa Fee", "Lunch & Dinner", "Tips"],
      itinerary: [
        { day: 1, title: "New York Arrival", description: "Arrive JFK. Times Square evening.", highlights: ["JFK Pickup", "Times Square", "Broadway Area"] },
        { day: 2, title: "NYC Landmarks", description: "Statue of Liberty and Lower Manhattan.", highlights: ["Statue of Liberty", "Ellis Island", "Wall Street"] },
        { day: 3, title: "NYC Exploration", description: "Empire State, Central Park, and museums.", highlights: ["Empire State", "Central Park", "Metropolitan Museum"] },
        { day: 4, title: "To Washington DC", description: "Train to capital. Evening monuments.", highlights: ["Amtrak", "Washington Monument", "Lincoln Memorial by Night"] },
        { day: 5, title: "DC Full Day", description: "Smithsonian and Capitol tour.", highlights: ["Smithsonian Museums", "Capitol Building", "White House View"] },
        { day: 6, title: "DC to Philadelphia", description: "Visit Philadelphia landmarks.", highlights: ["Liberty Bell", "Independence Hall", "Philly Cheesesteak"] },
        { day: 7, title: "To Niagara", description: "Drive to Niagara Falls.", highlights: ["Scenic Drive", "Niagara Arrival", "Falls View Dinner"] },
        { day: 8, title: "Niagara Falls", description: "Full Niagara experience.", highlights: ["Maid of the Mist", "Cave of Winds", "Illumination Show"] },
        { day: 9, title: "Back to NYC", description: "Return drive to New York.", highlights: ["Scenic Return", "Last Minute Shopping", "Farewell Dinner"] },
        { day: 10, title: "Departure", description: "Transfer to airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "usa-west-coast",
      name: "California Dreaming",
      duration: "9D/8N",
      originalPrice: 275000,
      currentPrice: 247500,
      discount: 10,
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
      description: "West Coast adventure - Los Angeles, San Francisco, and Las Vegas.",
      highlights: ["Hollywood", "Golden Gate", "Las Vegas Strip", "Grand Canyon"],
      inclusions: ["8 Nights Hotels", "Breakfast", "Transfers", "City Tours", "Vegas Show"],
      exclusions: ["Airfare", "Visa", "Meals except breakfast"],
      itinerary: [
        { day: 1, title: "Los Angeles Arrival", description: "Arrive LAX. Santa Monica evening.", highlights: ["LAX Pickup", "Santa Monica Pier", "Venice Beach"] },
        { day: 2, title: "Hollywood Day", description: "Universal Studios full day.", highlights: ["Universal Studios", "Studio Tour", "Harry Potter World"] },
        { day: 3, title: "LA Sightseeing", description: "Hollywood Walk and Beverly Hills.", highlights: ["Walk of Fame", "Beverly Hills", "Rodeo Drive"] },
        { day: 4, title: "LA to Las Vegas", description: "Drive to Las Vegas.", highlights: ["Desert Drive", "Vegas Arrival", "Strip Walk"] },
        { day: 5, title: "Grand Canyon", description: "Day trip to Grand Canyon.", highlights: ["South Rim", "Canyon Views", "Sunset Point"] },
        { day: 6, title: "Vegas Free Day", description: "Casinos and shows.", highlights: ["Casino Time", "Vegas Shows", "Nightlife"] },
        { day: 7, title: "To San Francisco", description: "Fly to San Francisco.", highlights: ["Flight", "Fisherman's Wharf", "Pier 39"] },
        { day: 8, title: "San Francisco", description: "Full day SF exploration.", highlights: ["Golden Gate", "Alcatraz", "Cable Car"] },
        { day: 9, title: "Departure", description: "Transfer to SFO Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "usa-theme-parks",
      name: "USA Theme Park Special",
      duration: "8D/7N",
      originalPrice: 225000,
      currentPrice: 191250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Theme park adventure - Orlando's magical world.",
      highlights: ["Walt Disney World", "Universal Studios", "SeaWorld", "Kennedy Space"],
      inclusions: ["7 Nights Hotel", "Breakfast", "All Park Tickets", "Transfers"],
      exclusions: ["Airfare", "Visa", "Meals except breakfast"],
      itinerary: [
        { day: 1, title: "Orlando Arrival", description: "Arrive and resort check-in.", highlights: ["Orlando Arrival", "Resort Check-in", "Disney Springs"] },
        { day: 2, title: "Magic Kingdom", description: "Full day at Magic Kingdom.", highlights: ["Magic Kingdom", "Classic Rides", "Fireworks"] },
        { day: 3, title: "Epcot & Hollywood", description: "Epcot morning, Hollywood Studios evening.", highlights: ["Epcot World", "Hollywood Studios", "Star Wars"] },
        { day: 4, title: "Animal Kingdom", description: "Safari and Avatar world.", highlights: ["Animal Kingdom", "Pandora", "Safari Ride"] },
        { day: 5, title: "Universal Studios", description: "Universal and Islands of Adventure.", highlights: ["Universal", "Harry Potter", "Jurassic World"] },
        { day: 6, title: "SeaWorld", description: "Marine park experience.", highlights: ["SeaWorld", "Aquatica", "Marine Shows"] },
        { day: 7, title: "Kennedy Space", description: "NASA Kennedy Space Center.", highlights: ["Space Center", "Rocket Garden", "Shuttle Experience"] },
        { day: 8, title: "Departure", description: "Transfer to Orlando Airport.", highlights: ["Departure"] }
      ]
    },
    {
      id: "usa-national-parks",
      name: "USA National Parks Tour",
      duration: "10D/9N",
      originalPrice: 285000,
      currentPrice: 256500,
      discount: 10,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Nature's wonders - Grand Canyon, Yellowstone, and more.",
      highlights: ["Grand Canyon", "Yellowstone", "Monument Valley", "Antelope Canyon"],
      inclusions: ["9 Nights Hotels/Lodges", "Breakfast", "4x4 Transfers", "Park Entry"],
      exclusions: ["Airfare", "Visa", "Meals except breakfast"],
      itinerary: [
        { day: 1, title: "Las Vegas Arrival", description: "Arrive and orientation.", highlights: ["Vegas Arrival", "Trip Briefing", "Evening Walk"] },
        { day: 2, title: "To Grand Canyon", description: "Drive to South Rim.", highlights: ["Desert Drive", "Grand Canyon", "Sunset Views"] },
        { day: 3, title: "Grand Canyon", description: "Full day exploration.", highlights: ["Rim Trail", "Viewpoints", "Sunset Point"] },
        { day: 4, title: "Monument Valley", description: "Drive to Monument Valley.", highlights: ["Navajo Nation", "Monument Valley", "Jeep Tour"] },
        { day: 5, title: "Antelope Canyon", description: "Slot canyon experience.", highlights: ["Antelope Canyon", "Horseshoe Bend", "Photography"] },
        { day: 6, title: "Zion National Park", description: "Explore Zion's beauty.", highlights: ["Angels Landing", "The Narrows", "Scenic Drive"] },
        { day: 7, title: "Bryce Canyon", description: "Visit Bryce Canyon.", highlights: ["Hoodoos", "Sunrise Point", "Rim Walk"] },
        { day: 8, title: "To Salt Lake", description: "Drive to Salt Lake City.", highlights: ["Scenic Drive", "Salt Lake City", "Temple Square"] },
        { day: 9, title: "Yellowstone Intro", description: "Enter Yellowstone.", highlights: ["Old Faithful", "Geysers", "Wildlife Spotting"] },
        { day: 10, title: "Departure", description: "Fly from Jackson Hole.", highlights: ["Departure"] }
      ]
    },
    {
      id: "usa-honeymoon",
      name: "USA Romantic Escape",
      duration: "9D/8N",
      originalPrice: 345000,
      currentPrice: 293250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800",
      description: "Romantic USA honeymoon - New York, San Francisco, and Hawaii.",
      highlights: ["Broadway Show", "Golden Gate", "Hawaii Beaches", "Helicopter Tour"],
      inclusions: ["8 Nights Luxury Hotels", "All Meals", "Private Transfers", "Romantic Experiences"],
      exclusions: ["Airfare", "Visa", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "NYC Romance", description: "Arrive to decorated suite.", highlights: ["Luxury Suite", "Central Park Walk", "Romantic Dinner"] },
        { day: 2, title: "NYC Experience", description: "Private city tour and Broadway.", highlights: ["Private Tour", "Empire State Sunset", "Broadway Show"] },
        { day: 3, title: "To San Francisco", description: "Fly to San Francisco.", highlights: ["Flight", "Fisherman's Wharf", "Seafood Dinner"] },
        { day: 4, title: "SF Romance", description: "Private wine country tour.", highlights: ["Napa Valley", "Wine Tasting", "Vineyard Dinner"] },
        { day: 5, title: "To Hawaii", description: "Fly to Maui.", highlights: ["Flight", "Beach Resort", "Sunset Cocktails"] },
        { day: 6, title: "Maui Beach", description: "Private beach day.", highlights: ["Private Beach", "Snorkeling", "Beach Dinner"] },
        { day: 7, title: "Helicopter Tour", description: "Scenic helicopter experience.", highlights: ["Helicopter Tour", "Volcano Views", "Waterfalls"] },
        { day: 8, title: "Relaxation", description: "Spa day and luau dinner.", highlights: ["Couple Spa", "Luau Dinner", "Hawaiian Music"] },
        { day: 9, title: "Departure", description: "Farewell and departure.", highlights: ["Lei Farewell", "Departure"] }
      ]
    }
  ]
};

// Switzerland Packages
export const switzerlandData: DestinationData = {
  id: "switzerland",
  name: "Switzerland",
  tagline: "Heaven on Earth",
  description: "Experience the pristine beauty of Switzerland - majestic Alps, crystal-clear lakes, charming villages, and world-class chocolate and cheese. A true Alpine paradise.",
  heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
    "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
  ],
  packages: [
    {
      id: "swiss-complete",
      name: "Complete Switzerland",
      duration: "8D/7N",
      originalPrice: 225000,
      currentPrice: 191250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
      description: "Complete Switzerland experience with all major destinations.",
      highlights: ["Jungfraujoch", "Matterhorn", "Lake Geneva", "Glacier Express"],
      inclusions: ["7 Nights Hotels", "All Breakfasts", "Swiss Pass", "Mountain Excursions"],
      exclusions: ["Airfare", "Visa", "Lunches & Dinners"],
      itinerary: [
        { day: 1, title: "Zurich Arrival", description: "Arrive and explore Zurich.", highlights: ["Zurich Airport", "Old Town", "Lake Zurich"] },
        { day: 2, title: "Lucerne Day", description: "Day in Lucerne with Mt. Pilatus.", highlights: ["Chapel Bridge", "Mt. Pilatus", "Lion Monument"] },
        { day: 3, title: "To Interlaken", description: "Train to Interlaken.", highlights: ["Scenic Train", "Interlaken", "Adventure Options"] },
        { day: 4, title: "Jungfraujoch", description: "Top of Europe excursion.", highlights: ["Jungfraujoch", "Ice Palace", "Sphinx Observatory"] },
        { day: 5, title: "Glacier Express", description: "Iconic train to Zermatt.", highlights: ["Glacier Express", "Alpine Views", "Zermatt Arrival"] },
        { day: 6, title: "Matterhorn Day", description: "Gornergrat and Matterhorn views.", highlights: ["Gornergrat", "Matterhorn", "Alpine Town"] },
        { day: 7, title: "To Geneva", description: "Train to Geneva.", highlights: ["Scenic Route", "Lake Geneva", "Jet d'Eau"] },
        { day: 8, title: "Departure", description: "Geneva departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "swiss-adventure",
      name: "Swiss Alpine Adventure",
      duration: "7D/6N",
      originalPrice: 195000,
      currentPrice: 165750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800",
      description: "Adventure-focused Switzerland tour with outdoor activities.",
      highlights: ["Paragliding", "Skiing/Hiking", "Bungee Jumping", "Glacier Walks"],
      inclusions: ["6 Nights Hotels", "Breakfast", "All Activities", "Equipment", "Guides"],
      exclusions: ["Airfare", "Visa", "Personal Expenses"],
      itinerary: [
        { day: 1, title: "Zurich to Interlaken", description: "Arrive and transfer to adventure hub.", highlights: ["Interlaken Arrival", "Activity Briefing", "Town Exploration"] },
        { day: 2, title: "Paragliding Day", description: "Tandem paragliding experience.", highlights: ["Paragliding", "Alpine Views", "Lake Landing"] },
        { day: 3, title: "Jungfraujoch", description: "Top of Europe and snow activities.", highlights: ["Jungfraujoch", "Snow Hiking", "Ice Fun"] },
        { day: 4, title: "Canyoning", description: "Canyoning adventure.", highlights: ["Canyoning", "Waterfall Jumps", "Natural Pools"] },
        { day: 5, title: "Zermatt Adventure", description: "Matterhorn views and hiking.", highlights: ["Zermatt", "Alpine Hiking", "Matterhorn Views"] },
        { day: 6, title: "Glacier Walk", description: "Guided glacier experience.", highlights: ["Glacier Walk", "Ice Caves", "Alpine Photography"] },
        { day: 7, title: "Departure", description: "Transfer to Geneva.", highlights: ["Departure"] }
      ]
    },
    {
      id: "swiss-honeymoon",
      name: "Swiss Romantic Escape",
      duration: "7D/6N",
      originalPrice: 275000,
      currentPrice: 233750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      description: "Romantic Switzerland honeymoon with luxury experiences.",
      highlights: ["Private Cabins", "Scenic Trains", "Candlelight Dinners", "Couple Spa"],
      inclusions: ["6 Nights Luxury Hotels", "All Meals", "Private Transfers", "Romantic Setups"],
      exclusions: ["Airfare", "Visa", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "Romantic Arrival", description: "Arrive Zurich. Private transfer to Lucerne.", highlights: ["Private Transfer", "Lake View Room", "Welcome Dinner"] },
        { day: 2, title: "Lucerne Romance", description: "Boat cruise and mountain sunset.", highlights: ["Private Boat", "Mt. Rigi Sunset", "Candlelight Dinner"] },
        { day: 3, title: "To Interlaken", description: "First class train to Interlaken.", highlights: ["Scenic Train", "Luxury Hotel", "Couple Spa"] },
        { day: 4, title: "Jungfraujoch", description: "Private Top of Europe experience.", highlights: ["Private Guide", "Jungfraujoch", "Fondue Dinner"] },
        { day: 5, title: "Glacier Express", description: "Iconic train journey.", highlights: ["First Class", "Glacier Express", "Zermatt Arrival"] },
        { day: 6, title: "Matterhorn Romance", description: "Gornergrat and mountain dinner.", highlights: ["Matterhorn Sunrise", "Spa Day", "Mountain Restaurant Dinner"] },
        { day: 7, title: "Departure", description: "Leisurely departure.", highlights: ["Breakfast", "Departure"] }
      ]
    },
    {
      id: "swiss-family",
      name: "Swiss Family Fun",
      duration: "7D/6N",
      originalPrice: 235000,
      currentPrice: 199750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800",
      description: "Family-friendly Switzerland with kid-friendly activities.",
      highlights: ["Chocolate Factory", "Swiss Transport Museum", "Easy Hikes", "Train Rides"],
      inclusions: ["6 Nights Family Hotels", "Breakfast", "Swiss Pass", "Activity Tickets"],
      exclusions: ["Airfare", "Visa", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Zurich Arrival", description: "Arrive and explore kid-friendly Zurich.", highlights: ["Zoo Zurich", "Chocolate Store", "Lake Walk"] },
        { day: 2, title: "Lucerne Fun", description: "Transport Museum and lake activities.", highlights: ["Swiss Transport Museum", "Boat Ride", "Old Town"] },
        { day: 3, title: "Mt. Pilatus", description: "Cogwheel train adventure.", highlights: ["Cogwheel Railway", "Mt. Pilatus", "Dragon Path"] },
        { day: 4, title: "Interlaken", description: "Adventure activities for family.", highlights: ["Trotti Bike", "Easy Hikes", "Lake Boat"] },
        { day: 5, title: "Jungfraujoch", description: "Top of Europe experience.", highlights: ["Train Ride", "Snow Fun", "Ice Palace"] },
        { day: 6, title: "Gruyères Day", description: "Cheese and chocolate factory.", highlights: ["Cheese Factory", "Chocolate Factory", "Castle Visit"] },
        { day: 7, title: "Departure", description: "Geneva departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "swiss-winter",
      name: "Swiss Winter Wonderland",
      duration: "6D/5N",
      originalPrice: 185000,
      currentPrice: 157250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800",
      description: "Winter skiing and snow activities in Swiss Alps.",
      highlights: ["Skiing", "Snowboarding", "Winter Trains", "Cozy Chalets"],
      inclusions: ["5 Nights Hotels", "Breakfast", "Ski Pass", "Equipment Rental"],
      exclusions: ["Airfare", "Visa", "Ski Lessons"],
      itinerary: [
        { day: 1, title: "Zurich to Zermatt", description: "Arrive and transfer to ski resort.", highlights: ["Scenic Transfer", "Zermatt Check-in", "Equipment Fitting"] },
        { day: 2, title: "Skiing Day 1", description: "Full day on Matterhorn slopes.", highlights: ["Skiing", "Alpine Views", "Après-Ski"] },
        { day: 3, title: "Skiing Day 2", description: "Explore different pistes.", highlights: ["Advanced Slopes", "Snowboarding Option", "Mountain Lunch"] },
        { day: 4, title: "Glacier Paradise", description: "Matterhorn Glacier Paradise visit.", highlights: ["Glacier Palace", "Highest Viewpoint", "Snow Park"] },
        { day: 5, title: "Free Ski Day", description: "Ski or explore Zermatt.", highlights: ["Skiing", "Village Walk", "Spa Option"] },
        { day: 6, title: "Departure", description: "Transfer to Geneva.", highlights: ["Departure"] }
      ]
    }
  ]
};

// France Packages
export const franceData: DestinationData = {
  id: "france",
  name: "France",
  tagline: "Art, Culture & Romance",
  description: "Experience the elegance of France - from romantic Paris to the lavender fields of Provence, charming Loire Valley to the glamorous Riviera. Bon voyage!",
  heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    "https://images.unsplash.com/photo-1533929736562-7c335c1c0a5d?w=800"
  ],
  packages: [
    {
      id: "france-paris-special",
      name: "Paris Special",
      duration: "5D/4N",
      originalPrice: 145000,
      currentPrice: 123250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
      description: "Complete Paris experience with all iconic attractions.",
      highlights: ["Eiffel Tower", "Louvre Museum", "Versailles", "Seine Cruise"],
      inclusions: ["4 Nights Hotel", "Breakfast", "City Tour", "Museum Passes", "Transfers"],
      exclusions: ["Airfare", "Visa", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Paris Arrival", description: "Arrive and Eiffel Tower evening.", highlights: ["CDG Pickup", "Eiffel Tower Night", "Seine Walk"] },
        { day: 2, title: "Paris Highlights", description: "Louvre and city landmarks.", highlights: ["Louvre Museum", "Notre Dame Area", "Latin Quarter"] },
        { day: 3, title: "Versailles Day", description: "Full day Palace of Versailles.", highlights: ["Versailles Palace", "Gardens", "Trianon"] },
        { day: 4, title: "Paris Exploration", description: "Montmartre and shopping.", highlights: ["Sacré-Cœur", "Montmartre", "Champs-Élysées Shopping"] },
        { day: 5, title: "Departure", description: "Seine cruise and departure.", highlights: ["Seine Cruise", "Departure"] }
      ]
    },
    {
      id: "france-complete",
      name: "Complete France Tour",
      duration: "10D/9N",
      originalPrice: 285000,
      currentPrice: 256500,
      discount: 10,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      description: "Complete France experience - Paris, Loire, Provence, and Riviera.",
      highlights: ["Paris Icons", "Loire Castles", "Provence Lavender", "Nice Beaches"],
      inclusions: ["9 Nights Hotels", "Breakfast", "TGV Trains", "Castle Entries", "Tours"],
      exclusions: ["Airfare", "Visa", "Meals except breakfast"],
      itinerary: [
        { day: 1, title: "Paris Arrival", description: "Arrive Paris. City orientation.", highlights: ["CDG Pickup", "Champs-Élysées", "Arc de Triomphe"] },
        { day: 2, title: "Paris Full Day", description: "Complete Paris landmarks.", highlights: ["Eiffel Tower", "Louvre", "Musée d'Orsay"] },
        { day: 3, title: "Versailles", description: "Palace and gardens.", highlights: ["Versailles", "Marie Antoinette Estate", "Gardens"] },
        { day: 4, title: "Loire Valley", description: "TGV to Loire. Castle tour.", highlights: ["Chambord", "Chenonceau", "Wine Tasting"] },
        { day: 5, title: "Loire Exploration", description: "More castles and villages.", highlights: ["Amboise", "Villandry Gardens", "Local Markets"] },
        { day: 6, title: "To Provence", description: "TGV to Avignon.", highlights: ["TGV South", "Avignon Arrival", "Pope's Palace"] },
        { day: 7, title: "Provence Day", description: "Lavender fields and villages.", highlights: ["Luberon Villages", "Lavender Fields", "Local Markets"] },
        { day: 8, title: "To Nice", description: "Train to French Riviera.", highlights: ["Coastal Train", "Nice Arrival", "Promenade Walk"] },
        { day: 9, title: "Riviera", description: "Nice, Monaco, and Cannes.", highlights: ["Monaco", "Monte Carlo", "Cannes"] },
        { day: 10, title: "Departure", description: "Nice departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "france-honeymoon",
      name: "France Romantic Escape",
      duration: "8D/7N",
      originalPrice: 345000,
      currentPrice: 293250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1533929736562-7c335c1c0a5d?w=800",
      description: "Most romantic France honeymoon with Paris and Provence.",
      highlights: ["Eiffel Tower Dinner", "Loire Castle Stay", "Provence Balloon", "Private Tours"],
      inclusions: ["7 Nights Luxury Hotels", "All Meals", "Private Transfers", "Romantic Experiences"],
      exclusions: ["Airfare", "Visa", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "Paris Romance", description: "Arrive to decorated suite.", highlights: ["Flower Suite", "Seine Sunset Cruise", "Champagne"] },
        { day: 2, title: "Paris Love", description: "Private Paris tour.", highlights: ["Private Tour", "Eiffel Lunch", "Montmartre Evening"] },
        { day: 3, title: "Eiffel Dinner", description: "Special Eiffel Tower dinner.", highlights: ["Shopping", "Spa", "Eiffel Tower Dinner"] },
        { day: 4, title: "Loire Castle", description: "Stay in a real castle.", highlights: ["Castle Hotel", "Gardens", "Royal Dinner"] },
        { day: 5, title: "To Provence", description: "Private transfer to Provence.", highlights: ["Scenic Drive", "Lavender Stop", "Boutique Hotel"] },
        { day: 6, title: "Hot Air Balloon", description: "Balloon over lavender fields.", highlights: ["Hot Air Balloon", "Champagne", "Romantic Dinner"] },
        { day: 7, title: "Provence Day", description: "Village exploration.", highlights: ["Luberon Villages", "Cooking Class", "Sunset Picnic"] },
        { day: 8, title: "Departure", description: "Marseille departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "france-wine",
      name: "France Wine Tour",
      duration: "7D/6N",
      originalPrice: 225000,
      currentPrice: 191250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      description: "Wine lover's France tour through Bordeaux, Burgundy, and Champagne.",
      highlights: ["Champagne Houses", "Bordeaux Châteaux", "Burgundy Vineyards", "Wine Tastings"],
      inclusions: ["6 Nights Hotels", "Breakfast", "Wine Tours", "Tastings", "Transfers"],
      exclusions: ["Airfare", "Visa", "Wine Purchases"],
      itinerary: [
        { day: 1, title: "Paris to Champagne", description: "Arrive and drive to Champagne.", highlights: ["Champagne Arrival", "Moët & Chandon", "Champagne Dinner"] },
        { day: 2, title: "Champagne Day", description: "Full Champagne exploration.", highlights: ["Veuve Clicquot", "Reims Cathedral", "Tastings"] },
        { day: 3, title: "To Burgundy", description: "Drive to Burgundy wine country.", highlights: ["Dijon", "Beaune", "Wine Auction House"] },
        { day: 4, title: "Burgundy Wines", description: "Grand Cru vineyard visits.", highlights: ["Vineyard Tours", "Wine Tastings", "Local Cuisine"] },
        { day: 5, title: "To Bordeaux", description: "TGV to Bordeaux.", highlights: ["TGV Ride", "Bordeaux City", "Wine Bar Dinner"] },
        { day: 6, title: "Bordeaux Châteaux", description: "Médoc and Saint-Émilion.", highlights: ["Médoc", "Saint-Émilion", "Grand Cru Tastings"] },
        { day: 7, title: "Departure", description: "Bordeaux departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "france-riviera",
      name: "French Riviera Escape",
      duration: "6D/5N",
      originalPrice: 195000,
      currentPrice: 165750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1533929736562-7c335c1c0a5d?w=800",
      description: "Glamorous French Riviera experience - Nice, Monaco, Cannes.",
      highlights: ["Nice Beaches", "Monaco Casino", "Cannes Croisette", "St. Tropez"],
      inclusions: ["5 Nights Luxury Hotel", "Breakfast", "Transfers", "Tours"],
      exclusions: ["Airfare", "Visa", "Casino Money", "Meals"],
      itinerary: [
        { day: 1, title: "Nice Arrival", description: "Arrive Nice. Promenade evening.", highlights: ["Nice Arrival", "Promenade des Anglais", "Old Town Dinner"] },
        { day: 2, title: "Nice Exploration", description: "Nice full day tour.", highlights: ["Old Nice", "Cours Saleya Market", "Castle Hill"] },
        { day: 3, title: "Monaco Day", description: "Day trip to Monaco.", highlights: ["Monte Carlo Casino", "Prince's Palace", "Oceanographic Museum"] },
        { day: 4, title: "Cannes & St. Tropez", description: "Riviera glamour day.", highlights: ["Cannes Croisette", "Film Festival Palace", "St. Tropez"] },
        { day: 5, title: "Beach Day", description: "Relaxation on Riviera beaches.", highlights: ["Beach Clubs", "Water Sports", "Sunset Dinner"] },
        { day: 6, title: "Departure", description: "Nice departure.", highlights: ["Departure"] }
      ]
    }
  ]
};

// Turkey Packages
export const turkeyData: DestinationData = {
  id: "turkey",
  name: "Turkey",
  tagline: "Where East Meets West",
  description: "Discover Turkey - where ancient civilizations meet modern culture. From Istanbul's mosques to Cappadocia's fairy chimneys, Turkish Riviera to ancient ruins.",
  heroImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800",
    "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?w=800",
    "https://images.unsplash.com/photo-1532763303805-529d595877c5?w=800"
  ],
  packages: [
    {
      id: "turkey-highlights",
      name: "Turkey Highlights",
      duration: "8D/7N",
      originalPrice: 145000,
      currentPrice: 123250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800",
      description: "Complete Turkey tour - Istanbul, Cappadocia, and Pamukkale.",
      highlights: ["Blue Mosque", "Hot Air Balloon", "Pamukkale Travertines", "Grand Bazaar"],
      inclusions: ["7 Nights Hotels", "Breakfast", "Domestic Flights", "Tours", "Transfers"],
      exclusions: ["International Airfare", "Visa", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Istanbul Arrival", description: "Arrive and explore Sultanahmet.", highlights: ["Istanbul Arrival", "Sultanahmet", "Welcome Dinner"] },
        { day: 2, title: "Istanbul Classic", description: "Full day Istanbul landmarks.", highlights: ["Blue Mosque", "Hagia Sophia", "Topkapi Palace"] },
        { day: 3, title: "Bosphorus", description: "Bosphorus cruise and bazaars.", highlights: ["Bosphorus Cruise", "Grand Bazaar", "Spice Bazaar"] },
        { day: 4, title: "To Cappadocia", description: "Fly to magical Cappadocia.", highlights: ["Flight", "Goreme Check-in", "Sunset Point"] },
        { day: 5, title: "Cappadocia", description: "Hot air balloon and exploration.", highlights: ["Hot Air Balloon", "Fairy Chimneys", "Underground City"] },
        { day: 6, title: "To Pamukkale", description: "Drive to Pamukkale.", highlights: ["Scenic Drive", "Konya Stop", "Pamukkale Arrival"] },
        { day: 7, title: "Pamukkale", description: "Travertines and Hierapolis.", highlights: ["Cotton Castle", "Ancient Hierapolis", "Thermal Pools"] },
        { day: 8, title: "Departure", description: "Fly to Istanbul for departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "turkey-cappadocia",
      name: "Cappadocia Special",
      duration: "4D/3N",
      originalPrice: 75000,
      currentPrice: 63750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?w=800",
      description: "Focused Cappadocia experience with hot air balloon.",
      highlights: ["Hot Air Balloon", "Cave Hotels", "Underground City", "Valley Hikes"],
      inclusions: ["3 Nights Cave Hotel", "Breakfast", "Balloon Ride", "Tours", "Transfers"],
      exclusions: ["Airfare", "Lunch & Dinner", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Arrival", description: "Arrive Cappadocia. Sunset views.", highlights: ["Airport Pickup", "Cave Hotel", "Sunset Viewpoint"] },
        { day: 2, title: "Balloon & North", description: "Early balloon ride. North Cappadocia tour.", highlights: ["Hot Air Balloon", "Goreme Museum", "Fairy Chimneys"] },
        { day: 3, title: "South Tour", description: "Underground city and valleys.", highlights: ["Derinkuyu City", "Pigeon Valley", "Pottery Demo"] },
        { day: 4, title: "Departure", description: "Morning free. Airport transfer.", highlights: ["Souvenir Shopping", "Departure"] }
      ]
    },
    {
      id: "turkey-honeymoon",
      name: "Turkey Romantic Escape",
      duration: "8D/7N",
      originalPrice: 195000,
      currentPrice: 165750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1532763303805-529d595877c5?w=800",
      description: "Romantic Turkey honeymoon with luxury experiences.",
      highlights: ["Private Balloon", "Cave Suite", "Bosphorus Dinner", "Turkish Hammam"],
      inclusions: ["7 Nights Luxury Hotels", "All Meals", "Private Tours", "Romantic Setups"],
      exclusions: ["Airfare", "Visa", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "Istanbul Romance", description: "Arrive to Bosphorus view suite.", highlights: ["Luxury Hotel", "Bosphorus View", "Romantic Dinner"] },
        { day: 2, title: "Istanbul Love", description: "Private city tour.", highlights: ["Private Guide", "Hidden Gems", "Rooftop Dinner"] },
        { day: 3, title: "Bosphorus Cruise", description: "Private yacht experience.", highlights: ["Private Yacht", "Sunset Cruise", "On-board Dinner"] },
        { day: 4, title: "To Cappadocia", description: "Fly to cave hotel.", highlights: ["Flight", "Cave Suite", "Pool Time"] },
        { day: 5, title: "Private Balloon", description: "VIP balloon experience.", highlights: ["Private Balloon", "Champagne", "Couples Photos"] },
        { day: 6, title: "Cappadocia Day", description: "Private exploration.", highlights: ["Valley Walk", "Turkish Bath", "Candle Dinner"] },
        { day: 7, title: "Bodrum Beach", description: "Fly to Turkish Riviera.", highlights: ["Bodrum", "Beach Resort", "Sunset Dinner"] },
        { day: 8, title: "Departure", description: "Beach morning and departure.", highlights: ["Beach", "Departure"] }
      ]
    },
    {
      id: "turkey-aegean",
      name: "Turkey Aegean Coast",
      duration: "7D/6N",
      originalPrice: 135000,
      currentPrice: 114750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800",
      description: "Ancient ruins and beaches of Turkey's Aegean coast.",
      highlights: ["Ephesus", "Bodrum", "Pamukkale", "Turkish Beaches"],
      inclusions: ["6 Nights Hotels", "Breakfast", "Tours", "Transfers"],
      exclusions: ["Airfare", "Lunch & Dinner", "Optional Activities"],
      itinerary: [
        { day: 1, title: "Izmir Arrival", description: "Arrive Izmir.", highlights: ["Izmir Arrival", "Kordon Walk", "Seafood Dinner"] },
        { day: 2, title: "Ephesus", description: "Ancient Ephesus exploration.", highlights: ["Ephesus Ruins", "Library of Celsus", "House of Virgin Mary"] },
        { day: 3, title: "Pamukkale", description: "Cotton castle travertines.", highlights: ["Pamukkale", "Hierapolis", "Antique Pool"] },
        { day: 4, title: "To Bodrum", description: "Drive to Bodrum.", highlights: ["Scenic Drive", "Bodrum Castle", "Marina Walk"] },
        { day: 5, title: "Bodrum Beach", description: "Beach and water activities.", highlights: ["Beach Day", "Boat Trip", "Nightlife"] },
        { day: 6, title: "Greek Islands", description: "Optional day trip to Greek island.", highlights: ["Kos Island Option", "Beach Time", "Farewell Dinner"] },
        { day: 7, title: "Departure", description: "Bodrum departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "turkey-adventure",
      name: "Turkey Adventure Tour",
      duration: "9D/8N",
      originalPrice: 165000,
      currentPrice: 140250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?w=800",
      description: "Adventure-packed Turkey with trekking and outdoor activities.",
      highlights: ["Lycian Way Trek", "Paragliding", "Canyon Rafting", "Mountain Biking"],
      inclusions: ["8 Nights Hotels", "Breakfast", "All Activities", "Equipment", "Guides"],
      exclusions: ["Airfare", "Personal Gear", "Tips"],
      itinerary: [
        { day: 1, title: "Antalya Arrival", description: "Arrive and briefing.", highlights: ["Antalya Arrival", "Old Town", "Briefing"] },
        { day: 2, title: "Lycian Way Day 1", description: "Begin coastal trek.", highlights: ["Trek Start", "Coastal Views", "Ancient Ruins"] },
        { day: 3, title: "Lycian Way Day 2", description: "Continue trekking.", highlights: ["Mountain Trail", "Villages", "Swimming Stop"] },
        { day: 4, title: "Olympos", description: "Reach Olympos. Evening flames.", highlights: ["Olympos Ruins", "Chimera Flames", "Beach Camp"] },
        { day: 5, title: "Paragliding", description: "Ölüdeniz paragliding.", highlights: ["Drive to Fethiye", "Paragliding", "Blue Lagoon"] },
        { day: 6, title: "Canyoning", description: "Saklikent Canyon adventure.", highlights: ["Saklikent Canyon", "River Walk", "Mud Baths"] },
        { day: 7, title: "Cappadocia", description: "Fly to Cappadocia.", highlights: ["Flight", "ATV Ride", "Sunset Valleys"] },
        { day: 8, title: "Balloon & Bike", description: "Balloon and mountain biking.", highlights: ["Hot Air Balloon", "Mountain Biking", "Underground City"] },
        { day: 9, title: "Departure", description: "Departure from Cappadocia.", highlights: ["Departure"] }
      ]
    }
  ]
};

// Australia Packages
export const australiaData: DestinationData = {
  id: "australia",
  name: "Australia",
  tagline: "Land Down Under",
  description: "Experience Australia - from the iconic Sydney Opera House to the Great Barrier Reef, stunning Uluru to vibrant Melbourne. An adventure like no other.",
  heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920",
  bannerImages: [
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
    "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
    "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=800"
  ],
  packages: [
    {
      id: "australia-highlights",
      name: "Australia Highlights",
      duration: "10D/9N",
      originalPrice: 385000,
      currentPrice: 346500,
      discount: 10,
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
      description: "Best of Australia - Sydney, Melbourne, and Great Barrier Reef.",
      highlights: ["Sydney Opera House", "Great Barrier Reef", "Great Ocean Road", "Harbour Bridge"],
      inclusions: ["9 Nights Hotels", "Breakfast", "Domestic Flights", "Tours", "Transfers"],
      exclusions: ["International Airfare", "Visa", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Sydney Arrival", description: "Arrive Sydney. Harbour views.", highlights: ["Sydney Arrival", "Harbour Walk", "Opera House View"] },
        { day: 2, title: "Sydney Day", description: "Full day Sydney exploration.", highlights: ["Opera House Tour", "Harbour Bridge", "Bondi Beach"] },
        { day: 3, title: "Blue Mountains", description: "Day trip to Blue Mountains.", highlights: ["Three Sisters", "Scenic Railway", "Rainforest Walk"] },
        { day: 4, title: "To Cairns", description: "Fly to Cairns.", highlights: ["Flight", "Cairns Arrival", "Esplanade Walk"] },
        { day: 5, title: "Great Barrier Reef", description: "Full day reef experience.", highlights: ["Reef Cruise", "Snorkeling", "Coral Views"] },
        { day: 6, title: "Rainforest Day", description: "Daintree Rainforest exploration.", highlights: ["Daintree", "Cape Tribulation", "Wildlife Spotting"] },
        { day: 7, title: "To Melbourne", description: "Fly to Melbourne.", highlights: ["Flight", "Melbourne Lanes", "Evening Dining"] },
        { day: 8, title: "Melbourne City", description: "Full day Melbourne tour.", highlights: ["Federation Square", "Street Art", "Markets"] },
        { day: 9, title: "Great Ocean Road", description: "Iconic coastal drive.", highlights: ["Great Ocean Road", "12 Apostles", "Koalas"] },
        { day: 10, title: "Departure", description: "Melbourne departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "australia-wildlife",
      name: "Australia Wildlife Adventure",
      duration: "9D/8N",
      originalPrice: 345000,
      currentPrice: 293250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
      description: "Wildlife-focused tour - kangaroos, koalas, and unique Aussie animals.",
      highlights: ["Kangaroo Island", "Koala Encounters", "Whale Watching", "Wildlife Sanctuaries"],
      inclusions: ["8 Nights Hotels", "Breakfast", "Wildlife Tours", "Domestic Flights"],
      exclusions: ["International Airfare", "Visa", "Meals except breakfast"],
      itinerary: [
        { day: 1, title: "Adelaide Arrival", description: "Arrive and orientation.", highlights: ["Adelaide Arrival", "City Tour", "Wine Region"] },
        { day: 2, title: "Kangaroo Island", description: "Ferry to Kangaroo Island.", highlights: ["Ferry Ride", "Seal Colony", "Kangaroo Spotting"] },
        { day: 3, title: "Island Wildlife", description: "Full wildlife exploration.", highlights: ["Koala Walk", "Echidnas", "Remarkable Rocks"] },
        { day: 4, title: "To Sydney", description: "Return and fly to Sydney.", highlights: ["Return", "Sydney Flight", "Evening Walk"] },
        { day: 5, title: "Taronga Zoo", description: "Sydney zoo and wildlife park.", highlights: ["Taronga Zoo", "Featherdale Park", "Koala Photos"] },
        { day: 6, title: "To Cairns", description: "Fly to tropical north.", highlights: ["Flight", "Wildlife Night Walk", "Nature Tour"] },
        { day: 7, title: "Reef & Wildlife", description: "Reef wildlife experience.", highlights: ["Reef Snorkeling", "Sea Turtles", "Tropical Fish"] },
        { day: 8, title: "Crocodile Safari", description: "Crocodile and wildlife cruise.", highlights: ["Crocodile Cruise", "Bird Watching", "Mangroves"] },
        { day: 9, title: "Departure", description: "Cairns departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "australia-uluru",
      name: "Australia Outback Explorer",
      duration: "8D/7N",
      originalPrice: 325000,
      currentPrice: 276250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=800",
      description: "Outback adventure featuring Uluru and Red Centre.",
      highlights: ["Uluru Sunrise", "Kata Tjuta", "Field of Light", "Kings Canyon"],
      inclusions: ["7 Nights Hotels", "Breakfast", "Outback Tours", "Domestic Flights"],
      exclusions: ["International Airfare", "Visa", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Sydney Arrival", description: "Arrive Sydney.", highlights: ["Sydney Arrival", "Harbour Walk", "Welcome Dinner"] },
        { day: 2, title: "Sydney Day", description: "Sydney highlights tour.", highlights: ["Opera House", "Harbour Cruise", "Bondi Beach"] },
        { day: 3, title: "To Uluru", description: "Fly to Ayers Rock.", highlights: ["Outback Flight", "Uluru Sunset", "Field of Light"] },
        { day: 4, title: "Uluru Sunrise", description: "Sacred rock at sunrise.", highlights: ["Uluru Sunrise", "Base Walk", "Cultural Centre"] },
        { day: 5, title: "Kata Tjuta", description: "Valley of the Winds.", highlights: ["Kata Tjuta", "Valley Walk", "Sunset Views"] },
        { day: 6, title: "Kings Canyon", description: "Kings Canyon rim walk.", highlights: ["Kings Canyon", "Rim Walk", "Garden of Eden"] },
        { day: 7, title: "To Melbourne", description: "Fly to Melbourne.", highlights: ["Flight", "Melbourne Lanes", "Final Dinner"] },
        { day: 8, title: "Departure", description: "Melbourne departure.", highlights: ["Departure"] }
      ]
    },
    {
      id: "australia-honeymoon",
      name: "Australia Romantic Escape",
      duration: "10D/9N",
      originalPrice: 495000,
      currentPrice: 420750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
      description: "Romantic Australia honeymoon with luxury experiences.",
      highlights: ["Harbour Suite", "Private Reef Tour", "Uluru Dinner", "Wine Country"],
      inclusions: ["9 Nights Luxury Hotels", "All Meals", "Private Tours", "Romantic Experiences"],
      exclusions: ["International Airfare", "Visa", "Personal Shopping"],
      itinerary: [
        { day: 1, title: "Sydney Romance", description: "Arrive to harbour view suite.", highlights: ["Luxury Suite", "Champagne Welcome", "Opera House Dinner"] },
        { day: 2, title: "Sydney Love", description: "Private harbour experience.", highlights: ["Private Yacht", "Bondi Walk", "Cliff Top Dinner"] },
        { day: 3, title: "Hunter Valley", description: "Wine country romance.", highlights: ["Wine Tasting", "Vineyard Lunch", "Hot Air Balloon"] },
        { day: 4, title: "To Cairns", description: "Fly to tropical paradise.", highlights: ["Flight", "Beach Resort", "Sunset Cocktails"] },
        { day: 5, title: "Private Reef", description: "Private reef experience.", highlights: ["Private Boat", "Snorkeling", "Beach Picnic"] },
        { day: 6, title: "Rainforest Spa", description: "Spa in the rainforest.", highlights: ["Daintree Lodge", "Couples Spa", "Nature Walk"] },
        { day: 7, title: "To Uluru", description: "Fly to the Red Centre.", highlights: ["Flight", "Desert Resort", "Sunset Viewing"] },
        { day: 8, title: "Uluru Experience", description: "Private Uluru experience.", highlights: ["Private Tour", "Sounds of Silence Dinner", "Star Gazing"] },
        { day: 9, title: "To Melbourne", description: "Fly to Melbourne.", highlights: ["Flight", "Great Ocean Road", "Farewell Dinner"] },
        { day: 10, title: "Departure", description: "Departure from Melbourne.", highlights: ["Departure"] }
      ]
    },
    {
      id: "australia-family",
      name: "Australia Family Adventure",
      duration: "10D/9N",
      originalPrice: 425000,
      currentPrice: 361250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
      description: "Family-friendly Australia with theme parks and wildlife.",
      highlights: ["Theme Parks", "Zoo Encounters", "Beach Fun", "Reef Snorkeling"],
      inclusions: ["9 Nights Family Hotels", "Breakfast", "Theme Park Tickets", "Family Tours"],
      exclusions: ["International Airfare", "Visa", "Lunch & Dinner"],
      itinerary: [
        { day: 1, title: "Sydney Arrival", description: "Arrive and settle in.", highlights: ["Sydney Arrival", "Darling Harbour", "Family Dinner"] },
        { day: 2, title: "Sydney Fun", description: "Family activities in Sydney.", highlights: ["Taronga Zoo", "Harbour Bridge Climb", "Luna Park"] },
        { day: 3, title: "Blue Mountains", description: "Nature day for families.", highlights: ["Scenic World", "Wildlife Park", "Bush Walk"] },
        { day: 4, title: "To Gold Coast", description: "Fly to theme park capital.", highlights: ["Flight", "Surfers Paradise", "Beach Time"] },
        { day: 5, title: "Dreamworld", description: "Full day at Dreamworld.", highlights: ["Dreamworld", "All Rides", "Tiger Island"] },
        { day: 6, title: "Movie World", description: "Warner Bros experience.", highlights: ["Movie World", "Character Meet", "Stunt Shows"] },
        { day: 7, title: "To Cairns", description: "Fly to reef country.", highlights: ["Flight", "Cairns Lagoon", "Night Markets"] },
        { day: 8, title: "Reef Adventure", description: "Great Barrier Reef.", highlights: ["Reef Trip", "Glass Bottom Boat", "Snorkeling"] },
        { day: 9, title: "Rainforest", description: "Rainforest exploration.", highlights: ["Kuranda Railway", "Butterfly Sanctuary", "Army Duck"] },
        { day: 10, title: "Departure", description: "Cairns departure.", highlights: ["Departure"] }
      ]
    }
  ]
};

export const allDestinations: Record<string, DestinationData> = {
  kashmir: kashmirData,
  kerala: keralaData,
  ladakh: ladakhData,
  "himachal-pradesh": himachalData,
  rajasthan: rajasthanData,
  goa: goaData,
  meghalaya: meghalayaData,
  andaman: andamanData,
  sikkim: sikkimData,
  uttarakhand: uttarakhandData,
  hyderabad: hyderabadData,
  dubai: dubaiData,
  singapore: singaporeData,
  thailand: thailandData,
  bali: baliData,
  europe: europeData,
  usa: usaData,
  switzerland: switzerlandData,
  france: franceData,
  turkey: turkeyData,
  australia: australiaData
};
