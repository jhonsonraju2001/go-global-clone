import { DestinationData } from "./itineraries";

// Maldives Packages
export const maldivesData: DestinationData = {
  id: "maldives",
  name: "Maldives",
  tagline: "Paradise on Water",
  description: "Experience the ultimate tropical paradise with crystal-clear turquoise waters, pristine white-sand beaches, luxurious overwater villas, and vibrant coral reefs teeming with marine life.",
  heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "maldives-luxury",
      name: "Maldives Luxury Escape",
      duration: "5D/4N",
      originalPrice: 185000,
      currentPrice: 148000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=675&fit=crop",
      description: "Indulge in the ultimate Maldivian luxury experience with overwater villas, private beaches, world-class dining, and unforgettable sunset views over the Indian Ocean.",
      highlights: ["Overwater Villa Stay", "Sunset Dolphin Cruise", "Coral Reef Snorkeling", "Private Beach Dinner"],
      inclusions: ["4 Nights Overwater Villa", "All Meals (Full Board)", "Speedboat Airport Transfers", "Snorkeling Equipment", "Sunset Dolphin Cruise", "Guided Reef Tour"],
      exclusions: ["International Airfare", "Visa Fees", "Spa Treatments", "Scuba Diving", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Malé - Transfer to Paradise",
          description: "Arrive at Velana International Airport in Malé, the world's most scenic airport approach. A resort representative greets you with a traditional Maldivian welcome — a refreshing coconut drink and a fragrant flower garland. Board a luxury speedboat for a scenic 45-minute transfer to your resort island. As the boat cuts through turquoise lagoons, you'll see shades of blue you never knew existed. Arrive at your overwater villa, perched above a crystal-clear lagoon with a glass floor panel to watch marine life below. Spend the afternoon settling in — step down from your private deck directly into the warm ocean. In the evening, enjoy a welcome dinner at the resort's beachside restaurant with your feet in the sand, savoring fresh Maldivian lobster and sashimi as the sun sets in a blaze of pink and orange over the Indian Ocean.",
          highlights: ["Malé Airport Welcome", "Luxury Speedboat Transfer", "Overwater Villa Check-in", "Glass Floor Marine Viewing", "Private Deck Ocean Access", "Beachside Welcome Dinner"]
        },
        {
          day: 2,
          title: "Coral Reef Snorkeling & Island Exploration",
          description: "Wake up to the gentle sound of waves lapping beneath your villa. Enjoy a floating breakfast delivered to your private pool — a signature Maldivian experience with tropical fruits, fresh pastries, and eggs prepared to your liking. After breakfast, join the resort marine biologist for a guided snorkeling expedition to the house reef. The Maldives is home to over 2,000 species of fish and 200 species of coral. Swim alongside sea turtles, reef sharks, manta rays, and clouds of technicolor fish. After lunch at the underwater restaurant (with panoramic ocean views), take a guided tour of the local inhabited island to experience authentic Maldivian culture — visit the coral stone mosque, browse the lacquerwork shops, and chat with friendly locals. Return to the resort for a sunset yoga session on the beach, followed by a Maldivian-themed dinner with traditional dishes like Mas Huni (tuna with coconut), Garudhiya (fish broth), and Bis Keemiya (stuffed pastries).",
          highlights: ["Floating Pool Breakfast", "Guided Reef Snorkeling", "Sea Turtle Encounters", "Local Island Cultural Tour", "Sunset Beach Yoga", "Traditional Maldivian Dinner"]
        },
        {
          day: 3,
          title: "Dolphin Cruise & Water Sports Adventure",
          description: "Start the morning with a sunrise fishing trip — traditional Maldivian line fishing from a dhoni (traditional wooden boat). The resort chef will cook your catch for lunch! After a leisurely morning, the afternoon is dedicated to water sports. Try parasailing for bird's-eye views of the atoll, jet skiing across the lagoon, kayaking through mangrove channels, or stand-up paddleboarding over the crystal-clear shallows. For the adventurous, try a banana boat ride or wakeboarding. In the late afternoon, board a luxury yacht for the highlight of the trip — a sunset dolphin cruise. The Maldives is one of the best places in the world to see spinner dolphins, and watching pods of 50-100 dolphins leaping and spinning against a golden sunset is truly magical. Return to the resort for a special private beach dinner — a candlelit table set on the sand with a personal chef preparing a five-course meal under the stars.",
          highlights: ["Sunrise Line Fishing", "Chef Cooks Your Catch", "Parasailing Over Atoll", "Jet Skiing & Water Sports", "Sunset Dolphin Cruise", "Private Candlelit Beach Dinner"]
        },
        {
          day: 4,
          title: "Spa Day & Sandbank Picnic",
          description: "Today is for pure relaxation and romance. Begin with a couples' spa treatment in the overwater spa pavilion — the sound of waves beneath you as skilled therapists use traditional Maldivian techniques with coconut oil and local herbs. Choose from Balinese massage, hot stone therapy, or the signature coconut body scrub. After spa, board a private boat to a deserted sandbank — a tiny strip of white sand surrounded by nothing but turquoise ocean in every direction. Here, a champagne picnic lunch awaits with gourmet canapés, fresh seafood, and chilled drinks. Spend the afternoon sunbathing, snorkeling around the sandbank (the underwater visibility is extraordinary), or simply floating in the warm Indian Ocean. Return to the resort for your final evening. Enjoy a farewell dinner at the overwater restaurant, where the glass floor reveals reef sharks and rays gliding beneath your table.",
          highlights: ["Overwater Couples Spa", "Coconut Oil Traditional Massage", "Private Sandbank Excursion", "Champagne Picnic on Sand", "Pristine Snorkeling", "Farewell Overwater Dinner"]
        },
        {
          day: 5,
          title: "Final Morning & Departure",
          description: "Enjoy your last Maldivian sunrise from the villa deck — the sky transforms through shades of lavender, pink, and gold. Savor a final floating breakfast in your private pool, taking in every detail of this paradise. After check-out, the speedboat transfers you back to Malé Airport. If time permits, explore Malé city — visit the Old Friday Mosque (dating to 1658), the colorful local fish market, and the National Museum. Pick up Maldivian souvenirs — lacquerware, coconut oil products, and miniature dhoni boats. Board your flight home with a heart full of memories, a camera full of impossibly blue photos, and a promise to return to this paradise on Earth.",
          highlights: ["Final Sunrise from Villa", "Last Floating Breakfast", "Speedboat Transfer to Malé", "Malé City Tour (Optional)", "Souvenir Shopping", "Departure with Memories"]
        }
      ]
    },
    {
      id: "maldives-honeymoon",
      name: "Maldives Honeymoon Special",
      duration: "4D/3N",
      originalPrice: 145000,
      currentPrice: 116000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=675&fit=crop",
      description: "A romantic getaway designed exclusively for couples, featuring private dining, couples' spa, sunset cruises, and intimate moments in paradise.",
      highlights: ["Overwater Suite", "Couples Spa Package", "Private Sunset Cruise", "Romantic Beach Dinner"],
      inclusions: ["3 Nights Overwater Suite", "All Meals & Drinks", "Couples Spa Treatment", "Private Sunset Cruise", "Beach Dinner Setup", "Airport Transfers"],
      exclusions: ["International Airfare", "Visa Fees", "Additional Spa Treatments", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival - Romance Begins",
          description: "Arrive in Malé and transfer by seaplane to your luxury resort — the aerial views of the atolls are breathtaking, with rings of turquoise surrounding tiny green islands. Land on the resort's private lagoon and be whisked to your honeymoon suite by traditional dhoni. Your overwater suite features a private infinity pool, an outdoor bathtub overlooking the ocean, and a glass floor panel. Find a special honeymoon setup: rose petals on the bed, champagne on ice, and a handwritten welcome note. Spend the afternoon exploring your private paradise — swim in the lagoon, lounge on the sundeck, or simply stare at the endless shades of blue. Evening brings your first romantic experience: a sunset cocktail on the sandbank, followed by a private dinner on the beach with tiki torches, candles, and a dedicated butler serving a five-course meal as the stars emerge over the Indian Ocean.",
          highlights: ["Seaplane Transfer with Aerial Views", "Honeymoon Suite Setup", "Private Infinity Pool", "Rose Petal & Champagne Welcome", "Sunset Sandbank Cocktails", "Private Beach Dinner Under Stars"]
        },
        {
          day: 2,
          title: "Couples Adventure & Spa Bliss",
          description: "Begin the day with a floating breakfast in your private pool — a tray of tropical delights floating beside you as you soak in the infinity pool with ocean views. After breakfast, embark on a couples' snorkeling adventure to a nearby reef, guided by the resort marine biologist. Swim hand-in-hand alongside sea turtles and through clouds of tropical fish. For lunch, try the resort's unique underwater dining experience. The afternoon is devoted to the spa — a couples' treatment in the overwater spa pavilion includes a Maldivian sand scrub, aromatic oil massage, and flower bath. As the sun begins to set, board a private yacht for a sunset cruise with champagne and canapés, watching dolphins play in the golden light. Return to the resort for a themed Maldivian dinner with live traditional Bodu Beru drumming.",
          highlights: ["Floating Breakfast in Pool", "Couples Reef Snorkeling", "Underwater Restaurant Lunch", "Overwater Couples Spa", "Private Yacht Sunset Cruise", "Bodu Beru Cultural Dinner"]
        },
        {
          day: 3,
          title: "Sandbank Picnic & Stargazing",
          description: "Today offers a perfect blend of adventure and tranquility. Morning starts with sunrise yoga on the beach, followed by a breakfast with ocean views. Mid-morning, board a private boat to a deserted sandbank — a tiny patch of pristine white sand in the middle of the ocean, exclusively yours for the day. A gourmet picnic is set up with champagne, fresh seafood platters, and tropical cocktails. Spend hours snorkeling in the crystal-clear waters, sunbathing on the sand, or floating in the warm ocean. Return to the resort in the late afternoon for free time — explore the island on bicycles, visit the resort's coral nursery, or simply relax in your suite. The final evening is magical: a private stargazing experience with an astronomy guide on the beach, followed by a farewell dinner at the signature overwater restaurant with a specially curated tasting menu.",
          highlights: ["Sunrise Beach Yoga", "Private Sandbank Day", "Gourmet Ocean Picnic", "Crystal Clear Snorkeling", "Guided Stargazing on Beach", "Farewell Tasting Menu Dinner"]
        },
        {
          day: 4,
          title: "Last Moments in Paradise - Departure",
          description: "Cherish your final morning in the Maldives. Wake up naturally to the sound of waves and enjoy one last floating breakfast. Take a final swim in the lagoon, watching colorful fish dart beneath the glass floor of your suite. After a leisurely check-out with a special farewell gift from the resort, transfer by seaplane back to Malé, enjoying one last panoramic view of the impossibly blue atolls below. At Malé, if time allows, visit the bustling fish market and pick up Maldivian souvenirs — traditional lacquerware, coconut oil, and handcrafted jewelry. Depart with a treasure trove of romantic memories from the most beautiful islands on Earth.",
          highlights: ["Final Floating Breakfast", "Last Lagoon Swim", "Resort Farewell Gift", "Seaplane Panoramic Transfer", "Malé Market Visit", "Romantic Memories Departure"]
        }
      ]
    },
    {
      id: "maldives-adventure",
      name: "Maldives Adventure & Dive",
      duration: "6D/5N",
      originalPrice: 210000,
      currentPrice: 168000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&h=675&fit=crop",
      description: "For thrill-seekers and ocean lovers — experience world-class scuba diving, night snorkeling with manta rays, big game fishing, and underwater exploration.",
      highlights: ["Scuba Diving Certification", "Manta Ray Night Snorkel", "Big Game Fishing", "Submarine Excursion"],
      inclusions: ["5 Nights Beach Villa", "All Meals", "3 Guided Dive Sessions", "Snorkeling Equipment", "Fishing Trip", "Airport Transfers"],
      exclusions: ["International Airfare", "PADI Certification Fees", "Submarine Tour", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Reef Orientation",
          description: "Arrive at Malé and transfer to your resort by speedboat. Check into your beach villa with direct lagoon access. Afternoon orientation with the dive center — meet your dive instructor, get fitted for equipment, and do a pool session to refresh or learn basic scuba skills. Evening reef walk at low tide to identify marine species. Welcome dinner at the beach grill with freshly caught seafood, grilled lobster, and Maldivian curries under a canopy of stars.",
          highlights: ["Speedboat Resort Transfer", "Beach Villa Check-in", "Dive Center Orientation", "Pool Scuba Session", "Low Tide Reef Walk", "Beach Grill Welcome Dinner"]
        },
        {
          day: 2,
          title: "First Dive & Underwater Photography",
          description: "After breakfast, head to the dive center for your first open water dive at a nearby reef site. Descend into a world of extraordinary color — coral gardens teeming with angelfish, butterflyfish, moray eels, and sea turtles. Your instructor guides you through underwater communication and buoyancy control. Surface exhilarated and share stories over lunch. Afternoon session focuses on underwater photography — learn techniques for capturing marine life, coral formations, and the incredible visibility (often 30+ meters). Late afternoon free time to snorkel the house reef independently. Evening, join a sunset fishing trip on a traditional dhoni, catching tuna and grouper for tomorrow's lunch.",
          highlights: ["First Open Water Dive", "Coral Garden Exploration", "Sea Turtle Encounters", "Underwater Photography Lesson", "House Reef Snorkeling", "Traditional Dhoni Fishing"]
        },
        {
          day: 3,
          title: "Manta Ray Point & Night Snorkel",
          description: "Today is dedicated to the Maldives' most magnificent marine encounter — manta rays. After early breakfast, take a boat to a known manta ray cleaning station where these gentle giants (wingspan up to 5 meters) come to be cleaned by small wrasse fish. Snorkel or dive alongside these graceful creatures as they glide effortlessly through the water — a humbling, unforgettable experience. Lunch at the resort, then an afternoon of water sports: kayaking through the lagoon, stand-up paddleboarding, and jet skiing. The evening brings the most magical experience — a guided night snorkel with plankton-attracting lights. Watch manta rays perform underwater acrobatics as they feed on plankton drawn to the lights, their massive bodies swooping just meters from you in the dark ocean.",
          highlights: ["Manta Ray Cleaning Station", "Swimming with Mantas", "Lagoon Water Sports", "Jet Skiing Adventure", "Night Snorkeling Experience", "Manta Ray Feeding Spectacle"]
        },
        {
          day: 4,
          title: "Deep Dive & Big Game Fishing",
          description: "Advanced dive day! Morning dive at a deeper site (18-25 meters) to explore a shipwreck or channel dive where currents bring pelagic species — reef sharks, eagle rays, and schools of jackfish. The thrill of drifting along a channel wall with blue ocean below is unmatched. After a surface interval and lunch, board a deep-sea fishing charter for big game fishing. The Maldivian waters are rich with sailfish, yellowfin tuna, wahoo, and barracuda. Feel the adrenaline as a marlin takes your line! The crew will prepare sashimi from your catch right on the boat. Return to the resort for a BBQ dinner where the chef grills your day's catch to perfection.",
          highlights: ["Deep Water Dive (18-25m)", "Shipwreck/Channel Exploration", "Reef Shark Sightings", "Big Game Fishing Charter", "On-Boat Sashimi", "Fresh Catch BBQ Dinner"]
        },
        {
          day: 5,
          title: "Submarine Excursion & Farewell",
          description: "Optional morning submarine excursion (additional cost) — descend to 30+ meters in a tourist submarine to see the deep reef ecosystem without getting wet. Spot deep-water species, coral formations, and perhaps a whale shark. Alternatively, enjoy a final morning dive or snorkel at your favorite reef spot. Late morning spa session to soothe muscles after days of diving — a deep tissue massage works wonders. Afternoon at leisure — last swim, last sunbathe, last floating cocktail in the pool. Farewell dinner is a grand affair: a 7-course degustation menu at the overwater restaurant paired with wines, celebrating your Maldivian adventure.",
          highlights: ["Submarine Deep Dive (Optional)", "Deep Reef Ecosystem", "Final Reef Snorkel", "Post-Dive Spa Massage", "Leisure Pool Time", "7-Course Farewell Dinner"]
        },
        {
          day: 6,
          title: "Departure Day",
          description: "Final sunrise swim in the lagoon — say goodbye to the fish you've come to recognize over the week. Breakfast at the beach café, pack your dive log and underwater photos. Speedboat transfer to Malé Airport with a farewell gift from the dive team. Carry home a PADI logbook full of incredible dive stories, an underwater camera full of marine life photos, and memories of swimming with manta rays under the stars.",
          highlights: ["Final Lagoon Swim", "Beach Café Breakfast", "Dive Team Farewell", "Speedboat to Malé", "PADI Logbook Memories", "Departure"]
        }
      ]
    }
  ]
};

// Sri Lanka Packages
export const sriLankaData: DestinationData = {
  id: "sri-lanka",
  name: "Sri Lanka",
  tagline: "Pearl of the Indian Ocean",
  description: "Explore the enchanting island nation with ancient temples, misty tea plantations, pristine beaches, wildlife safaris, and a rich cultural tapestry spanning over 2,500 years of history.",
  heroImage: "https://images.unsplash.com/photo-1586613835721-5c1a0da667d2?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1586613835721-5c1a0da667d2?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1588598198461-e09e5d02fba7?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1580910365203-91ea9115a319?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1567606404443-2fffe2e0e92e?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1575405441716-0ab0e06bf9c0?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1578005176765-4e14c1033ffd?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "sri-lanka-classic",
      name: "Classic Sri Lanka Circuit",
      duration: "7D/6N",
      originalPrice: 89000,
      currentPrice: 71200,
      discount: 20,
      image: "https://images.unsplash.com/photo-1586613835721-5c1a0da667d2?w=1200&h=675&fit=crop",
      description: "A comprehensive tour covering Sri Lanka's cultural triangle, tea country, wildlife, and beaches — the perfect introduction to this incredible island.",
      highlights: ["Sigiriya Rock Fortress", "Kandy Temple of Tooth", "Ella Train Ride", "Yala Safari"],
      inclusions: ["6 Nights Hotels", "Daily Breakfast & Dinner", "AC Vehicle & Driver", "Entrance Fees", "Safari Jeep", "Airport Transfers"],
      exclusions: ["International Airfare", "Visa on Arrival", "Lunch", "Personal Expenses", "Tips"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Colombo - Transfer to Negombo",
          description: "Arrive at Bandaranaike International Airport and feel the warm tropical breeze of Sri Lanka welcome you. Your dedicated driver-guide meets you at arrivals with a traditional welcome of fresh king coconut water. Transfer to Negombo (15 mins from airport), a charming coastal town known for its fishing heritage. Check into your beachfront hotel and take a walk along the golden sand beach. Visit the bustling Negombo Fish Market — one of Sri Lanka's largest — where fishermen auction their colorful catch. Explore the Dutch Canal and St. Mary's Church, remnants of colonial heritage. Enjoy your first Sri Lankan dinner — a rice and curry spread with up to 12 different curries, sambols, and papadum, showcasing the island's incredible spice heritage.",
          highlights: ["Airport Welcome with Coconut Water", "Negombo Beach Walk", "Famous Fish Market Visit", "Dutch Colonial Heritage", "12-Curry Sri Lankan Dinner", "Beachfront Hotel Stay"]
        },
        {
          day: 2,
          title: "Sigiriya Rock Fortress & Dambulla Cave Temple",
          description: "After breakfast, drive to the Cultural Triangle (4 hours through lush countryside). First stop: Dambulla Cave Temple, a UNESCO World Heritage Site dating to the 1st century BC. Climb 350 steps to discover five caves containing 153 Buddha statues and vibrant ceiling murals spanning 2,100 square meters. Continue to Sigiriya — the legendary Lion Rock, an ancient fortress built atop a 200-meter volcanic plug by King Kashyapa in the 5th century. Climb the 1,200 steps past the world-famous Sigiriya Frescoes — paintings of celestial maidens that have survived 1,500 years. At the top, explore the ruins of the royal palace with its sophisticated water gardens and cisterns. The 360-degree view from the summit over emerald jungle and distant mountains is absolutely breathtaking. Descend and visit the Mirror Wall with ancient graffiti dating back to the 8th century. Evening at your hotel near Sigiriya.",
          highlights: ["Dambulla Cave Temple (UNESCO)", "153 Buddha Statues", "Sigiriya Lion Rock Climb", "1,500-Year-Old Frescoes", "Royal Palace Ruins", "360° Summit Panorama"]
        },
        {
          day: 3,
          title: "Kandy - Temple of the Tooth & Cultural Show",
          description: "Morning, visit Minneriya or Kaudulla National Park for an elephant gathering — during the dry season, up to 300 wild elephants congregate at the reservoir, one of Asia's greatest wildlife spectacles. After this incredible experience, drive to Kandy (3 hours), the last royal capital of Sri Lanka, nestled in misty hills around a beautiful lake. Visit a spice garden en route and learn about cinnamon, cardamom, and pepper. In Kandy, visit the sacred Temple of the Tooth Relic (Sri Dalada Maligawa), which houses a tooth of the Buddha — the most venerated relic in Sri Lanka. Attend the evening Puja ceremony with drummers, dancers, and chanting monks. After, enjoy a spectacular Kandyan Cultural Dance Show featuring fire-walking, plate-spinning, and the iconic Ves dance. Stroll around Kandy Lake in the cool mountain air.",
          highlights: ["Wild Elephant Gathering", "Spice Garden Visit", "Temple of the Tooth Relic", "Evening Puja Ceremony", "Kandyan Dance Show", "Kandy Lake Evening Walk"]
        },
        {
          day: 4,
          title: "Tea Country - Nuwara Eliya",
          description: "Drive to Nuwara Eliya (3 hours) through some of the most scenic mountain roads in Asia. The landscape transforms from tropical lowlands to emerald tea plantations carpeting every hillside. Stop at a tea factory to learn the art of Ceylon tea production — from plucking to processing to tasting. Try the 'Golden Tips' — among the world's most expensive teas. Nuwara Eliya, known as 'Little England,' was a British hill station with a decidedly English character — Tudor-style buildings, a golf course, and cool climate. Visit Hakgala Botanical Gardens with its collection of orchids and roses. Explore the colorful town with its vibrant market selling fresh strawberries, vegetables, and local crafts. Evening, visit Gregory Lake for a peaceful boat ride as mist rolls down from the surrounding mountains.",
          highlights: ["Scenic Mountain Drive", "Ceylon Tea Factory Tour", "Golden Tips Tasting", "Little England Exploration", "Hakgala Botanical Gardens", "Gregory Lake Boat Ride"]
        },
        {
          day: 5,
          title: "Ella - Train Ride & Nine Arches Bridge",
          description: "Today features one of the world's most scenic train journeys! Board the train from Nanu Oya to Ella (approximately 3 hours) — this iconic blue train winds through tea plantations, over dramatic bridges, through tunnels, and past waterfalls. Lean out the open doors for the ultimate photo experience as the train curves through the lush mountain landscape. Arrive in Ella, a laid-back mountain village beloved by travelers. Walk to the famous Nine Arches Bridge — an architectural marvel from the British colonial era, built entirely of stone, brick, and cement without steel. Watch the train cross this photogenic bridge set against a backdrop of jungle and tea estates. Visit Ravana Falls (25 meters), connected to the epic Ramayana legend. Hike to Little Adam's Peak (1 hour) for panoramic sunset views over Ella Gap and the distant southern plains.",
          highlights: ["Iconic Blue Train Journey", "Tea Plantation Panoramas", "Nine Arches Bridge Visit", "Ravana Falls Legend", "Little Adam's Peak Hike", "Ella Gap Sunset Views"]
        },
        {
          day: 6,
          title: "Yala National Park Safari",
          description: "Early morning departure for Yala National Park (3 hours), Sri Lanka's most famous wildlife sanctuary and one of the best places in the world to see leopards. Board an open-top safari jeep and enter the park at dawn when animals are most active. Yala has the highest density of leopards anywhere on Earth — your chances of spotting one are excellent. Watch for sloth bears, elephants, crocodiles, wild boar, spotted deer, and over 200 bird species including peacocks, eagles, and painted storks. The park's landscape is dramatic — thorny scrubland, lagoons, rocky outcrops, and golden beaches where the jungle meets the Indian Ocean. After the safari, continue to the southern coast. Check into your beach hotel in Mirissa or Unawatuna. Spend the evening on one of Sri Lanka's most beautiful beaches, watching surfers ride the waves as the sun sets.",
          highlights: ["Dawn Safari in Yala", "Leopard Spotting Capital", "Elephants & Sloth Bears", "200+ Bird Species", "Jungle Meets Ocean", "Southern Beach Evening"]
        },
        {
          day: 7,
          title: "Southern Coast & Departure",
          description: "Enjoy a final morning on the beach — swim in the warm Indian Ocean, watch stilt fishermen perch on their poles in the surf (a tradition unique to Sri Lanka), or visit the charming Galle Fort, a UNESCO World Heritage Site built by the Portuguese in the 16th century and expanded by the Dutch. Walk the fort walls with ocean views on both sides, explore boutique shops, art galleries, and cafes within the fort, and visit the iconic lighthouse. After lunch at a fort restaurant, drive to Colombo Airport (2.5 hours) for your departure flight. Stop at a roadside fruit stall to try wood apple, rambutan, and mangosteen — Sri Lanka's exotic tropical fruits. Depart with memories of ancient kingdoms, misty mountains, golden beaches, and the warmest hospitality in Asia.",
          highlights: ["Beach Morning Swim", "Traditional Stilt Fishermen", "Galle Fort UNESCO Walk", "Fort Boutique Shopping", "Exotic Fruit Tasting", "Departure with Memories"]
        }
      ]
    },
    {
      id: "sri-lanka-beaches",
      name: "Sri Lanka Beach & Heritage",
      duration: "5D/4N",
      originalPrice: 62000,
      currentPrice: 49600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1588598198461-e09e5d02fba7?w=1200&h=675&fit=crop",
      description: "Combine Sri Lanka's stunning southern beaches with the historic Galle Fort and whale watching in Mirissa for an unforgettable coastal experience.",
      highlights: ["Galle Fort Heritage Walk", "Mirissa Whale Watching", "Unawatuna Beach", "Turtle Hatchery"],
      inclusions: ["4 Nights Beach Hotels", "Daily Breakfast", "AC Vehicle", "Whale Watching Trip", "Galle Fort Tour", "Airport Transfers"],
      exclusions: ["International Airfare", "Visa", "Lunch & Dinner", "Water Sports", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival - Transfer to Southern Coast",
          description: "Arrive at Colombo Airport and drive along the scenic coastal highway to the southern coast (2.5 hours). The expressway offers glimpses of rural Sri Lanka — paddy fields, coconut plantations, and colorful Buddhist temples. Arrive at your beach hotel in Unawatuna, a crescent-shaped bay consistently ranked among Asia's best beaches. Check in and spend the afternoon on the golden sand beach, swimming in the calm turquoise waters protected by a natural reef. Snorkel right off the beach to see coral and tropical fish. As evening falls, walk to the famous Unawatuna Beach Road lined with restaurants and cafes. Enjoy dinner at a beachside restaurant — try the signature seafood platter with grilled prawns, calamari, and fish curry with coconut sambol.",
          highlights: ["Coastal Highway Drive", "Unawatuna Beach Arrival", "Calm Bay Swimming", "Beach Reef Snorkeling", "Beachside Seafood Dinner", "Tropical Sunset Views"]
        },
        {
          day: 2,
          title: "Galle Fort & Coastal Heritage",
          description: "After breakfast, visit the magnificent Galle Fort — a UNESCO World Heritage Site and one of the best-preserved colonial forts in Asia. Built by the Portuguese in 1588 and extensively fortified by the Dutch in the 17th century, the fort is a living community with boutique hotels, cafes, galleries, and shops within its ancient walls. Walk the ramparts for dramatic ocean views, visit the iconic white lighthouse (1938), explore the Dutch Reformed Church (1755), and browse the National Maritime Museum. The fort's cobblestoned streets are filled with colonial architecture, tropical trees, and a creative energy. After lunch inside the fort, visit the Sea Turtle Conservation Project at Kosgoda — see five species of sea turtles being rehabilitated and watch baby turtles before they're released into the ocean. Return to your hotel for a relaxing beach evening.",
          highlights: ["Galle Fort UNESCO Tour", "Colonial Rampart Walk", "Historic Lighthouse", "Maritime Museum", "Sea Turtle Conservation", "Baby Turtle Experience"]
        },
        {
          day: 3,
          title: "Mirissa Whale Watching",
          description: "Very early morning departure (5:30 AM) for Mirissa harbor — Sri Lanka's premier whale watching destination. Board a comfortable catamaran and head into the deep waters of the Indian Ocean. Between November and April, these waters host the largest animal on Earth — the blue whale. Spot sperm whales, fin whales, and pods of playful dolphins as your experienced captain navigates to known sighting areas. The moment a 30-meter blue whale surfaces and blows a 10-meter spout is unforgettable. Return to shore by late morning. Spend the afternoon at Mirissa Beach — a palm-fringed paradise with excellent surf. Climb Parrot Rock for panoramic views of the coast. Evening, visit the Mirissa night market for fresh grilled seafood prepared right before your eyes.",
          highlights: ["Dawn Whale Watching Trip", "Blue Whale Sightings", "Dolphin Pod Encounters", "Mirissa Beach Afternoon", "Parrot Rock Panorama", "Night Market Seafood"]
        },
        {
          day: 4,
          title: "Jungle Beach & Relaxation",
          description: "Today is for pure beach bliss. After breakfast, hike through a short jungle trail to reach the aptly named Jungle Beach — a hidden cove surrounded by thick vegetation with pristine turquoise water and excellent snorkeling. Spend the morning snorkeling over coral reefs teeming with tropical fish, sea turtles, and reef sharks. After returning, enjoy a traditional Ayurvedic massage at a local spa — Sri Lanka is renowned for its 3,000-year Ayurvedic tradition. Afternoon, try surfing at Weligama Bay (beginner-friendly waves) or simply lounge on the beach with a good book and fresh fruit juice. Final evening, enjoy a sunset dinner cruise along the coast — a perfect way to say goodbye to Sri Lanka's southern shores with cocktails, seafood, and the glow of the setting sun.",
          highlights: ["Jungle Beach Hike", "Hidden Cove Snorkeling", "Ayurvedic Spa Massage", "Weligama Surfing", "Sunset Dinner Cruise", "Coastal Golden Hour"]
        },
        {
          day: 5,
          title: "Stilt Fishermen & Departure",
          description: "Final morning in paradise. Watch the iconic stilt fishermen at dawn — a tradition unique to Sri Lanka where fishermen balance on wooden poles planted in the reef, casting their lines in the surf. This centuries-old technique is a photographer's dream in the golden morning light. Enjoy a leisurely breakfast, then drive to Colombo Airport via the scenic coastal road. Stop at Bentota for a quick visit to the Brief Garden — a beautiful estate garden created by renowned architect Geoffrey Bawa. Pick up last-minute souvenirs: Ceylon tea, cinnamon, batik fabrics, and traditional masks. Arrive at the airport for your departure flight, carrying memories of turquoise waters, ancient forts, gentle giants of the ocean, and the warm Sri Lankan smile.",
          highlights: ["Stilt Fishermen at Dawn", "Coastal Drive to Airport", "Brief Garden Visit", "Ceylon Tea Shopping", "Batik Fabric Souvenirs", "Warm Sri Lankan Farewell"]
        }
      ]
    }
  ]
};

// Nepal Packages
export const nepalData: DestinationData = {
  id: "nepal",
  name: "Nepal",
  tagline: "Roof of the World",
  description: "From the towering peaks of the Himalayas to ancient temple squares, Nepal offers an extraordinary blend of natural grandeur, spiritual depth, and adventure that captivates every traveler.",
  heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1585938389612-a552a28c6914?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1558799401-1dcba79834c2?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1526712318848-5f38e2740d44?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "nepal-classic",
      name: "Classic Nepal Discovery",
      duration: "7D/6N",
      originalPrice: 72000,
      currentPrice: 57600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=675&fit=crop",
      description: "Explore Nepal's cultural treasures and natural wonders — from Kathmandu's ancient temples to Pokhara's lakeside beauty and Chitwan's wildlife.",
      highlights: ["Kathmandu Durbar Square", "Everest Scenic Flight", "Pokhara Lakeside", "Chitwan Safari"],
      inclusions: ["6 Nights Hotels", "Daily Breakfast & Dinner", "AC Vehicle & Guide", "Scenic Flight", "Jungle Safari", "All Entrance Fees"],
      exclusions: ["International Airfare", "Visa on Arrival", "Lunch", "Personal Expenses", "Tips"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kathmandu - City of Temples",
          description: "Arrive at Tribhuvan International Airport with views of the Himalayan range on approach — if you're lucky, you'll spot Everest from the plane window. Your guide welcomes you with a traditional khata (silk scarf) and marigold garland. Transfer to your hotel in the Thamel district, Kathmandu's vibrant tourist hub. After freshening up, visit Kathmandu Durbar Square — a UNESCO World Heritage Site with stunning Newari architecture, ancient temples, and the Kumari Ghar (home of the Living Goddess Kumari). If fortunate, glimpse the young Kumari at her window. Explore the maze of narrow lanes surrounding the square, filled with shops selling thangka paintings, singing bowls, and pashmina shawls. Evening, enjoy your first Nepali meal — Dal Bhat (lentil soup with rice), momos (dumplings), and sel roti (sweet ring bread) at a traditional restaurant with live Nepali folk music.",
          highlights: ["Himalayan Arrival Views", "Traditional Khata Welcome", "Kathmandu Durbar Square (UNESCO)", "Living Goddess Kumari Visit", "Thamel Street Exploration", "Nepali Dal Bhat Dinner"]
        },
        {
          day: 2,
          title: "Swayambhunath, Pashupatinath & Boudhanath",
          description: "Full day exploring Kathmandu Valley's UNESCO treasures. Start at Swayambhunath (Monkey Temple) — climb 365 steps to this 2,500-year-old stupa perched on a hilltop. The all-seeing eyes of Buddha gaze in four directions, and mischievous monkeys play among prayer flags. Panoramic views of the entire Kathmandu Valley. Next, visit Pashupatinath Temple — Nepal's holiest Hindu shrine on the banks of the Bagmati River. Witness cremation ceremonies on the ghats (a profound cultural experience), explore the Sadhu (holy men) quarters, and see the intricately carved temple complex. Afternoon, visit Boudhanath Stupa — one of the largest spherical stupas in the world and the spiritual center of Tibetan Buddhism in Nepal. Walk the kora (circumambulation) with monks spinning prayer wheels, prayer flags fluttering, and the deep sound of chanting from surrounding monasteries. Evening free in Thamel for shopping and exploration.",
          highlights: ["Swayambhunath Monkey Temple", "365-Step Hilltop Climb", "Pashupatinath Sacred Cremations", "Sadhu Holy Men Encounter", "Boudhanath Giant Stupa", "Tibetan Monastery Chanting"]
        },
        {
          day: 3,
          title: "Everest Mountain Flight & Bhaktapur",
          description: "Early morning Everest scenic flight (1 hour) — a thrilling experience flying alongside the Himalayan range with views of Everest (8,849m), Lhotse, Makalu, Cho Oyu, and other 8,000-meter peaks. The captain invites each passenger to the cockpit for an unobstructed view! Return to Kathmandu for breakfast. Then drive to Bhaktapur (30 mins), the best-preserved medieval city in Nepal. This UNESCO World Heritage Site feels like stepping back in time — cobblestoned squares, intricately carved wooden windows, pottery workshops, and temples that survived centuries. Visit the 55-Window Palace, Nyatapola Temple (Nepal's tallest pagoda at 30 meters), and the Potter's Square where artisans shape clay using techniques unchanged for centuries. Try Bhaktapur's famous 'Juju Dhau' (King Curd), the creamiest yogurt in Nepal, served in clay pots. Return to Kathmandu evening.",
          highlights: ["Everest Scenic Flight", "Cockpit Himalayan Views", "8 of World's Tallest Peaks", "Bhaktapur Medieval City", "55-Window Palace & Nyatapola", "Famous Juju Dhau Yogurt"]
        },
        {
          day: 4,
          title: "Fly to Pokhara - Lakeside Paradise",
          description: "Morning flight to Pokhara (25 mins) with stunning mountain views. Pokhara is Nepal's adventure capital, set beside the serene Phewa Lake with the Annapurna Range as a dramatic backdrop. Check into your lakeside hotel with mountain views. After lunch, take a boat ride on Phewa Lake — row to the Tal Barahi Temple on an island in the center of the lake while the Annapurna massif reflects in the still waters. Visit the International Mountain Museum to learn about Himalayan mountaineering history, from Tenzing Norgay's historic Everest climb to modern expeditions. Walk along the colorful Lakeside strip with its cafes, bookshops, and outdoor gear stores. Evening, enjoy a lakeside dinner watching the sun set behind the Annapurna Range, painting the snow peaks in shades of pink and gold.",
          highlights: ["Scenic Flight to Pokhara", "Phewa Lake Boating", "Tal Barahi Island Temple", "Mountain Museum Visit", "Lakeside Strip Walk", "Annapurna Sunset Dinner"]
        },
        {
          day: 5,
          title: "Sarangkot Sunrise & Adventure Activities",
          description: "Pre-dawn drive to Sarangkot viewpoint (1,592m) for one of the world's most spectacular sunrises. Watch the first golden rays illuminate the Annapurna Range, Dhaulagiri, Manaslu, and the iconic Machhapuchhre (Fishtail Peak). The entire Himalayan panorama glows pink, then orange, then white in the morning sun — a photographer's paradise. Return for breakfast. The rest of the day is for adventure (optional activities): paragliding over Pokhara Valley with tandem pilots (30-60 min flight with mountain and lake views), zip-lining (one of the world's longest at 1.8 km), bungee jumping, or ultralight aircraft flight. For those preferring peace, visit the World Peace Pagoda — a white stupa on a hilltop across the lake with panoramic views. Evening boat ride on the lake and farewell Pokhara dinner.",
          highlights: ["Sarangkot Himalayan Sunrise", "Annapurna Dawn Panorama", "Paragliding Over Valley", "World Peace Pagoda Visit", "Adventure Sports Options", "Farewell Lakeside Dinner"]
        },
        {
          day: 6,
          title: "Chitwan National Park - Jungle Safari",
          description: "Drive to Chitwan National Park (5 hours through scenic river valleys), a UNESCO World Heritage Site and Nepal's premier wildlife destination. Check into your jungle lodge on the edge of the park. Afternoon, take a dugout canoe ride on the Rapti River — glide past basking gharial crocodiles (with their distinctive narrow snouts), marsh mugger crocodiles, and a rich variety of waterbirds. After the canoe ride, embark on a jeep safari into the park. Chitwan is home to the endangered one-horned rhinoceros (over 600 in the park), Bengal tigers, sloth bears, wild elephants, and over 500 bird species. As the sun sets over the jungle, return to your lodge for a special Tharu cultural performance — the indigenous Tharu people perform their traditional stick dance around a bonfire under the stars.",
          highlights: ["Scenic Drive to Chitwan", "Jungle Lodge Check-in", "Canoe Ride with Crocodiles", "Jeep Safari in Park", "One-Horned Rhino Search", "Tharu Cultural Bonfire Dance"]
        },
        {
          day: 7,
          title: "Morning Safari & Departure",
          description: "Early morning nature walk with a park naturalist through the buffer zone — the best time to spot wildlife is at dawn. Look for deer, monkeys, wild boar, and if lucky, rhinos grazing at the forest edge. Visit the Elephant Breeding Center to see baby elephants being raised — an adorable experience. After breakfast at the lodge, drive back to Kathmandu (5 hours) or take a short flight from Bharatpur. In Kathmandu, if time allows, do last-minute shopping in Thamel — bargain for singing bowls, prayer flags, Kukri knives, and hand-knitted woolens. Transfer to Tribhuvan Airport for your departure flight. As the plane takes off and the Himalayas appear one final time, carry with you the memories of ancient temples, soaring mountains, gentle giants, and the ever-smiling people of Nepal. Namaste!",
          highlights: ["Dawn Nature Walk", "Elephant Breeding Center", "Baby Elephants", "Return Drive to Kathmandu", "Thamel Souvenir Shopping", "Himalayan Farewell - Namaste!"]
        }
      ]
    },
    {
      id: "nepal-adventure",
      name: "Nepal Himalayan Adventure",
      duration: "5D/4N",
      originalPrice: 55000,
      currentPrice: 44000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1585938389612-a552a28c6914?w=1200&h=675&fit=crop",
      description: "An action-packed adventure combining Kathmandu's culture with Pokhara's adrenaline activities — paragliding, trekking, and mountain flights.",
      highlights: ["Everest Scenic Flight", "Pokhara Paragliding", "Annapurna Trekking", "Sarangkot Sunrise"],
      inclusions: ["4 Nights Hotels", "Daily Breakfast", "Domestic Flights", "Paragliding Session", "Mountain Flight", "All Transfers"],
      exclusions: ["International Airfare", "Visa", "Lunch & Dinner", "Extra Adventures", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Kathmandu Heritage",
          description: "Arrive at Kathmandu Airport and transfer to Thamel. After settling in, explore Kathmandu Durbar Square with its ornate temples and the Kumari's palace. Walk through the vibrant streets to Asan Tole — the oldest marketplace in Kathmandu, brimming with spices, incense, and fresh produce. Visit Swayambhunath (Monkey Temple) for sunset views over the valley with prayer flags fluttering against an orange sky. Evening dinner at a rooftop restaurant with views of the illuminated stupas and temples. Try momos, thukpa (noodle soup), and Nepali beer.",
          highlights: ["Kathmandu Durbar Square", "Asan Tole Market", "Swayambhunath Sunset", "Rooftop Temple Views", "Momo & Thukpa Dinner", "Thamel Evening Walk"]
        },
        {
          day: 2,
          title: "Everest Flight & Fly to Pokhara",
          description: "Ultra-early morning Everest scenic flight — soar alongside the Himalayan giants including Everest, Lhotse, and Makalu. Each passenger gets cockpit time for unobstructed views. Return for breakfast and pack for Pokhara. Take the scenic flight to Pokhara (25 mins) with mountain views throughout. Arrive at lakeside and check into your hotel with Annapurna views. Afternoon, explore Lakeside — rent a boat on Phewa Lake and row to the island temple. Visit Davis Falls (a waterfall that disappears underground) and the adjacent Gupteshwor Cave. Evening walk along the lakeside promenade, stopping at cafes for coffee and mountain views.",
          highlights: ["Everest Scenic Flight", "Cockpit Mountain Views", "Flight to Pokhara", "Phewa Lake Boating", "Davis Falls Underground", "Lakeside Café Evening"]
        },
        {
          day: 3,
          title: "Sarangkot Sunrise & Paragliding",
          description: "Pre-dawn drive to Sarangkot for the legendary Himalayan sunrise — Annapurna, Dhaulagiri, and Machhapuchhre (Fishtail) lit up in golden light. After this magical experience, return for breakfast and prepare for the day's highlight: tandem paragliding over Pokhara Valley! Launch from Sarangkot (1,592m) and soar like an eagle over Phewa Lake with the Annapurna Range as your backdrop. The 30-minute flight includes thermals where you spiral upward, and your pilot performs gentle aerobatics if you're brave. Land on the lakeside with an adrenaline rush. Afternoon, hike to the World Peace Pagoda for panoramic views. Evening farewell dinner at a traditional Nepali restaurant with cultural performances.",
          highlights: ["Sarangkot Dawn Panorama", "Golden Himalayan Sunrise", "Tandem Paragliding Flight", "Soaring Over Phewa Lake", "World Peace Pagoda Hike", "Cultural Farewell Dinner"]
        },
        {
          day: 4,
          title: "Australian Camp Trek",
          description: "Drive to Kande (1 hour) and begin the trek to Australian Camp (2,060m) — a moderate 2-hour uphill hike through rhododendron forests and terraced farmland. Australian Camp offers one of the most accessible and rewarding Himalayan viewpoints — a sweeping 180-degree panorama of the Annapurna Range, Dhaulagiri, Hiunchuli, and Machhapuchhre. The view is simply jaw-dropping. Have lunch at a teahouse while absorbing the scenery. Optional: continue to Pothana village for even closer mountain views. Descend back to Kande and drive to Pokhara. Evening at leisure — shop for trekking gear, thangka paintings, or handmade paper products. Last lakeside dinner watching the mountains turn pink at sunset.",
          highlights: ["Trek Through Rhododendron Forest", "Australian Camp Panorama", "180° Annapurna Views", "Teahouse Mountain Lunch", "Terraced Farmland Walk", "Final Pokhara Sunset"]
        },
        {
          day: 5,
          title: "Return to Kathmandu & Departure",
          description: "Morning flight back to Kathmandu with one last chance to photograph the mountains from the air. In Kathmandu, visit Boudhanath Stupa — walk the kora with monks, spin prayer wheels, and soak in the spiritual atmosphere. If time allows, visit Patan Durbar Square across the river — its metalwork temples and art galleries rival Kathmandu's square. Final shopping in Thamel for souvenirs: singing bowls, prayer flags, pashmina, and Nepali tea. Transfer to the airport for your departure flight. As the Himalayas fade into the clouds below, carry with you the thrill of paragliding over lakes, the serenity of mountain sunrises, and the warmth of Nepali hospitality. Namaste!",
          highlights: ["Scenic Flight to Kathmandu", "Boudhanath Stupa Kora", "Prayer Wheel Meditation", "Thamel Souvenir Shopping", "Singing Bowl Selection", "Himalayan Farewell"]
        }
      ]
    }
  ]
};

// Malaysia Packages
export const malaysiaData: DestinationData = {
  id: "malaysia",
  name: "Malaysia",
  tagline: "Truly Asia",
  description: "A multicultural melting pot where gleaming skyscrapers meet ancient rainforests, vibrant street food meets fine dining, and pristine islands meet bustling cities — Malaysia offers the best of Asia in one destination.",
  heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1609946860441-a86be2b2b11e?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1563991655280-cb95c90ca0e6?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1580077953072-bbc876fc6db0?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "malaysia-highlights",
      name: "Best of Malaysia",
      duration: "7D/6N",
      originalPrice: 78000,
      currentPrice: 62400,
      discount: 20,
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=675&fit=crop",
      description: "Experience the best of Malaysia — from KL's iconic towers and street food to Langkawi's pristine beaches and Penang's cultural heritage.",
      highlights: ["Petronas Twin Towers", "Langkawi Island", "Penang Street Art", "Batu Caves"],
      inclusions: ["6 Nights Hotels", "Daily Breakfast", "Domestic Flights", "AC Vehicle & Guide", "Island Hopping Tour", "All Entrance Fees"],
      exclusions: ["International Airfare", "Visa", "Lunch & Dinner", "Water Sports", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kuala Lumpur - City of Contrasts",
          description: "Arrive at KLIA and transfer to your hotel in the heart of KL. After freshening up, head to the iconic Petronas Twin Towers — at 452 meters, they were the world's tallest buildings until 2004. Visit the Skybridge on the 41st floor and the observation deck on the 86th for panoramic city views. Walk through the beautifully landscaped KLCC Park at the base with its stunning fountain show. Next, explore the vibrant Bukit Bintang area — KL's premier shopping and entertainment district. For dinner, experience Jalan Alor — KL's most famous street food lane. The entire street transforms into an open-air dining paradise at dusk with hundreds of stalls serving Chinese, Malay, and Indian delicacies. Must-try dishes: char kuey teow (stir-fried noodles), satay (grilled meat skewers), nasi lemak (coconut rice), and the legendary durian fruit if you're brave!",
          highlights: ["Petronas Twin Towers Visit", "Skybridge & 86th Floor Views", "KLCC Park Fountain Show", "Bukit Bintang Shopping", "Jalan Alor Street Food", "Char Kuey Teow & Satay Feast"]
        },
        {
          day: 2,
          title: "Batu Caves, Merdeka & Cultural KL",
          description: "Start with Batu Caves — a series of limestone caves and Hindu temples 13 km north of KL. Climb the 272 rainbow-colored steps to reach the Cathedral Cave with its 100-meter ceiling and ornate shrines. The massive 42.7-meter golden Murugan statue at the entrance is the world's tallest. Watch macaques play on the steps and explore the Dark Cave for a guided eco-tour. Return to KL for the National Mosque (Masjid Negara) — a stunning modernist mosque with a 73-meter minaret. Visit Merdeka Square, where Malaysian independence was declared in 1957, surrounded by colonial-era buildings including the Sultan Abdul Samad Building with its distinctive Moorish clock tower. Afternoon, explore Chinatown's Petaling Street — a bustling market with traditional Chinese medicine shops, temples, and the stunning Sri Mahamariamman Hindu Temple. Evening, dine at a traditional Malay restaurant trying rendang (slow-cooked coconut curry) and roti canai.",
          highlights: ["Batu Caves 272 Rainbow Steps", "World's Tallest Murugan Statue", "Dark Cave Eco-Tour", "National Mosque Visit", "Merdeka Square Heritage", "Chinatown & Petaling Street"]
        },
        {
          day: 3,
          title: "Fly to Langkawi - Island Paradise",
          description: "Morning flight to Langkawi (1 hour), an archipelago of 99 islands in the Andaman Sea. Known as the 'Jewel of Kedah,' Langkawi is a duty-free island paradise with pristine beaches, mangrove forests, and dramatic geological formations. Transfer to your beach resort and spend the afternoon on Pantai Cenang — Langkawi's most popular beach with powder-white sand and warm turquoise water. The beach is lined with restaurants, bars, and water sports operators. Try parasailing or jet skiing, or simply float in the calm waters. As the sun sets, walk along the beach to one of the seafood restaurants on stilts over the water. Enjoy a seafood feast — grilled tiger prawns, butter chilli crab, steamed fish in ginger soy — while watching the sun disappear behind the Andaman Sea islands.",
          highlights: ["Flight to Langkawi", "Pantai Cenang Beach", "Duty-Free Shopping", "Water Sports Adventure", "Overwater Seafood Restaurant", "Andaman Sea Sunset"]
        },
        {
          day: 4,
          title: "Langkawi Cable Car & Island Hopping",
          description: "Morning, ride the Langkawi SkyCab — one of the world's steepest cable cars, ascending 708 meters to the top of Gunung Machinchang. At the summit, walk across the Sky Bridge — a 125-meter curved pedestrian bridge suspended 660 meters above sea level with glass floor panels and panoramic views of the Andaman Sea, Thai islands, and lush jungle below. It's both thrilling and breathtaking. Descend and visit the Oriental Village for shopping. Afternoon, take an island-hopping boat tour visiting three islands: Pulau Dayang Bunting (Pregnant Maiden Lake — a freshwater lake surrounded by limestone cliffs where you can swim), Pulau Singa Besar (wildlife island with eagles, monkeys, and monitor lizards), and Pulau Beras Basah (white sand beach with crystal-clear swimming). The highlight: eagle feeding — watch brahminy kites swoop down to catch fish thrown by the boat captain.",
          highlights: ["SkyCab Cable Car Ride", "Sky Bridge Glass Walkway", "Panoramic Sea Views", "Pregnant Maiden Lake Swim", "Eagle Feeding Spectacle", "Three-Island Boat Tour"]
        },
        {
          day: 5,
          title: "Langkawi Mangrove & Fly to Penang",
          description: "Morning, take a mangrove kayaking tour through the Kilim Karst Geoforest Park — paddle through limestone caves, narrow channels, and ancient mangrove forests. Spot monitor lizards, kingfishers, brahminy kites, and horseshoe crabs. Visit a fish farm floating on the river to feed stingrays and nurse sharks. Stop at a bat cave to see thousands of fruit bats clinging to the ceiling. After lunch, fly to Penang (30 mins) — the food capital of Malaysia. Check into your hotel in George Town, a UNESCO World Heritage Site. Evening walking tour of George Town's famous street art — the interactive murals by Ernest Zacharevic (especially 'Children on a Bicycle' and 'Boy on a Motorbike') have become Instagram sensations. End with dinner at Gurney Drive Hawker Centre — Penang's legendary food court with the best char kuey teow, assam laksa, and cendol in Malaysia.",
          highlights: ["Mangrove Kayaking Adventure", "Limestone Cave Exploration", "Fish Farm & Shark Feeding", "Flight to Penang", "George Town Street Art Walk", "Gurney Drive Hawker Food"]
        },
        {
          day: 6,
          title: "Penang Heritage & Food Trail",
          description: "Full day in Penang — Malaysia's most culturally rich state. Start at Kek Lok Si Temple, the largest Buddhist temple in Southeast Asia, with its striking seven-story pagoda combining Chinese, Thai, and Burmese architectural styles and a massive 30-meter bronze Guanyin statue. Take the funicular railway up Penang Hill (833m) for cool breezes and panoramic views of George Town and the Strait of Malacca. Descend and explore George Town's heritage zone — the Clan Jetties (Chinese stilt villages on the water dating to the 19th century), Khoo Kongsi (an ornately carved Chinese clan temple), Little India with its flower garland vendors and banana leaf restaurants, and Armenian Street galleries. The real highlight is the food trail: try Penang assam laksa (voted 7th best food in the world by CNN), hokkien mee, pasembur, and nasi kandar at legendary local spots. Evening, visit the Penang night market for more food and souvenirs.",
          highlights: ["Kek Lok Si Temple Complex", "Penang Hill Funicular", "Clan Jetties Heritage Walk", "Khoo Kongsi Carved Temple", "CNN-Voted Assam Laksa", "Night Market Food Trail"]
        },
        {
          day: 7,
          title: "Penang Morning & Departure",
          description: "Final morning in Penang — visit the Pinang Peranakan Mansion, a stunning museum showcasing Straits Chinese (Peranakan/Baba-Nyonya) culture with over 1,000 antiques in a beautifully restored mansion. Learn about this unique community that blended Chinese and Malay cultures. Stop at a traditional kopitiam (coffee shop) for kaya toast (coconut jam on charcoal-grilled bread), soft-boiled eggs, and white coffee — a beloved Malaysian breakfast ritual. Last-minute shopping for Penang specialties: tau sar piah (bean paste biscuits), nutmeg products, and belacan (shrimp paste). Transfer to Penang Airport for your flight home via KL, or fly direct to your destination. Malaysia has shown you its incredible diversity — gleaming towers, ancient caves, island paradises, heritage streets, and above all, the most extraordinary food culture in Asia. Selamat jalan — safe journey!",
          highlights: ["Peranakan Mansion Museum", "Straits Chinese Heritage", "Traditional Kopitiam Breakfast", "Kaya Toast & White Coffee", "Penang Souvenir Shopping", "Malaysia Farewell - Selamat Jalan!"]
        }
      ]
    },
    {
      id: "malaysia-kl-langkawi",
      name: "KL & Langkawi Getaway",
      duration: "5D/4N",
      originalPrice: 52000,
      currentPrice: 41600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1508062878650-88b52897f298?w=1200&h=675&fit=crop",
      description: "The perfect short break combining Kuala Lumpur's urban excitement with Langkawi's tropical island relaxation.",
      highlights: ["Petronas Towers", "Batu Caves", "Langkawi Beaches", "Sky Bridge"],
      inclusions: ["4 Nights Hotels", "Daily Breakfast", "KL-Langkawi Flight", "Cable Car Tickets", "Airport Transfers", "Half-Day KL Tour"],
      exclusions: ["International Airfare", "Visa", "Lunch & Dinner", "Water Sports", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kuala Lumpur",
          description: "Arrive at KLIA and transfer to your KL hotel. Afternoon visit to the Petronas Twin Towers — ascend to the observation deck for sweeping city views. Explore KLCC Park with its choreographed fountain show and lush tropical gardens. Walk to Bukit Bintang for shopping at Pavilion KL and Lot 10. Evening, explore Jalan Alor street food lane — feast on satay, char kuey teow, wanton mee, and wash it down with fresh coconut water or teh tarik (pulled tea). The energy of KL at night — the neon lights, the sizzling woks, the mix of languages — is intoxicating.",
          highlights: ["Petronas Towers Observation Deck", "KLCC Fountain Show", "Bukit Bintang Shopping", "Jalan Alor Street Food", "Satay & Char Kuey Teow", "KL Night Energy"]
        },
        {
          day: 2,
          title: "Batu Caves & KL Culture",
          description: "Morning visit to Batu Caves — climb the iconic 272 rainbow steps to the cathedral cave temple. Marvel at the 42.7m golden Murugan statue. Visit Chinatown's Petaling Street market, Sri Mahamariamman Temple (ornate Hindu temple), and the historic Central Market for handicrafts. Afternoon, visit the Islamic Arts Museum Malaysia — the largest in Southeast Asia with stunning architecture and 7,000 artifacts. Explore the colorful Little India district for banana leaf rice lunch. Evening, take in the view from KL Tower (421m) rotating restaurant for a special dinner with 360-degree city views as KL's skyline sparkles below.",
          highlights: ["Batu Caves Rainbow Steps", "Golden Murugan Statue", "Petaling Street Market", "Islamic Arts Museum", "Little India Banana Leaf Rice", "KL Tower Rotating Dinner"]
        },
        {
          day: 3,
          title: "Fly to Langkawi - Beach Paradise",
          description: "Morning flight to Langkawi. Transfer to your beach resort on Pantai Cenang. Spend the day unwinding on the beach — the warm Andaman Sea, powder-white sand, and duty-free cocktails make for the perfect tropical day. Try jet skiing or banana boat rides in the afternoon. Visit the Underwater World aquarium with its walk-through tunnel surrounded by sharks and rays. Sunset at the beach with grilled seafood at a beachfront restaurant — butter garlic prawns, black pepper crab, and fresh fish in Thai chilli sauce.",
          highlights: ["Flight to Langkawi", "Pantai Cenang Beach Day", "Duty-Free Island Shopping", "Water Sports Fun", "Underwater World Aquarium", "Beachfront Seafood Sunset"]
        },
        {
          day: 4,
          title: "Cable Car, Sky Bridge & Mangroves",
          description: "Morning, ride the SkyCab to the summit of Gunung Machinchang. Walk across the spectacular Sky Bridge — 125 meters of curved walkway suspended 660 meters high with glass panels underfoot. Views stretch to Thailand on clear days. Descend to Oriental Village for shopping. Afternoon, mangrove boat tour through Kilim Geoforest Park — explore limestone caves, spot eagles and monitor lizards, visit a floating fish farm, and see a bat cave. Final evening, enjoy a sunset dinner cruise around the islands with barbecue, cocktails, and the golden Andaman Sea horizon.",
          highlights: ["SkyCab Summit Ride", "Sky Bridge Glass Walk", "Oriental Village Shopping", "Kilim Mangrove Boat Tour", "Eagle & Wildlife Spotting", "Sunset Dinner Cruise"]
        },
        {
          day: 5,
          title: "Island Morning & Departure",
          description: "Final morning at leisure — last swim in the Andaman Sea, walk on the beach, or visit the Langkawi Night Market (if morning market available). Pick up duty-free chocolates, alcohol, and perfumes as gifts. Transfer to Langkawi Airport for your flight home via KL or direct. Malaysia has offered you the perfect blend of urban sophistication and island paradise — the towers, the caves, the beaches, the food. Take home memories and the taste of char kuey teow lingering on your palate. Selamat jalan!",
          highlights: ["Final Beach Morning", "Duty-Free Shopping", "Last Andaman Sea Swim", "Airport Transfer", "Malaysian Memories", "Selamat Jalan Farewell"]
        }
      ]
    }
  ]
};
