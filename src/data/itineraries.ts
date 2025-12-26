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

export const allDestinations: Record<string, DestinationData> = {
  kashmir: kashmirData,
  kerala: keralaData,
  dubai: dubaiData,
  europe: europeData,
  hyderabad: hyderabadData
};
