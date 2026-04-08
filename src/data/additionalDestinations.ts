import { DestinationData } from "./itineraries";

// Meghalaya Packages
export const meghalayaData: DestinationData = {
  id: "meghalaya",
  name: "Meghalaya",
  tagline: "Abode of Clouds",
  description: "Discover the enchanting land of clouds with its living root bridges, crystal-clear rivers, stunning waterfalls, and unique Khasi culture in India's wettest region.",
  heroImage: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "meghalaya-mystic",
      name: "Mystic Meghalaya Explorer",
      duration: "6D/5N",
      originalPrice: 38770,
      currentPrice: 24560,
      discount: 37,
      image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=1200&h=675&fit=crop",
      description: "Journey through the mystical land of clouds, exploring living root bridges, Asia's cleanest village, stunning waterfalls, and the unique matrilineal Khasi culture.",
      highlights: ["Living Root Bridges", "Dawki Crystal River", "Mawlynnong Cleanest Village", "Seven Sisters Falls"],
      inclusions: ["5 Nights Accommodation", "Daily Breakfast & Dinner", "AC Vehicle for Transfers", "Expert Local Guide", "Trekking to Root Bridges", "All Permits"],
      exclusions: ["Airfare", "Lunch", "Personal Expenses", "Camera Fees", "Adventure Activities"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Shillong - Scotland of the East",
          description: "Arrive at Lokpriya Gopinath Bordoloi International Airport, Guwahati (Assam) and drive to Shillong (100 km, approx. 3 hours), the capital of Meghalaya. The journey takes you through the picturesque Khasi Hills, crossing the iconic Umiam Lake (also called Barapani). Stop at the viewpoint for your first breathtaking glimpse of the lake with its island dotted waters against a backdrop of pine-clad hills. Continue to Shillong, a hill station established by the British as their headquarters. Named after the local deity 'U Shyllong,' it retains a colonial charm mixed with vibrant Khasi culture. Check into your hotel and freshen up. Evening, explore Police Bazaar, the bustling heart of Shillong, filled with shops, eateries, and local life. Try local Khasi cuisine - Jadoh (rice cooked with pork), Doh Khlieh (pork salad), and Tungrymbai (fermented soybean curry). The cool mountain air and friendly locals welcome you to the Abode of Clouds.",
          highlights: ["Guwahati Airport Pickup", "Umiam Lake Scenic Stop", "Pine-Clad Hills Drive", "Shillong Hotel Check-in", "Police Bazaar Evening Walk", "First Khasi Cuisine Experience"]
        },
        {
          day: 2,
          title: "Cherrapunji - Land of Waterfalls",
          description: "After early breakfast, drive to Cherrapunji (54 km, approx. 2 hours), officially called Sohra - one of the wettest places on Earth! The journey passes through stunning cloud-covered hills with viewpoints at every turn. First stop: Mawkdok Dympep Valley View Point, offering dramatic views of the valley below with waterfalls cascading down sheer cliffs. Visit the awe-inspiring Seven Sisters Falls (Nohsngithiang Falls) - one of India's tallest plunges at 315 meters, named for seven streams that appear during monsoon. Continue to Nohkalikai Falls - at 340 meters, India's tallest plunge waterfall! The view from the canyon rim is vertigo-inducing as the falls plummet into a blue-green pool far below. Explore Mawsmai Cave, a fascinating limestone cave system with stalactites and stalagmites. Overnight stay in Cherrapunji to experience the misty nights of this incredible place.",
          highlights: ["Drive to Wettest Place on Earth", "Mawkdok Valley Viewpoint", "Seven Sisters Falls (315m)", "Nohkalikai Falls - India's Tallest", "Mawsmai Cave Exploration", "Misty Cherrapunji Night"]
        },
        {
          day: 3,
          title: "Double Decker Living Root Bridge Trek",
          description: "Today's highlight is the famous Double Decker Living Root Bridge - a UNESCO World Heritage tentative site and Meghalaya's most iconic attraction. These extraordinary bridges are not built but grown over 15-20 years by training the aerial roots of the Ficus elastica tree across rivers. After early breakfast, drive to Tyrna village (the trailhead). Begin the 3,500-step descent into the valley - approximately 3 km down, taking about 2 hours. The trail passes through lush subtropical rainforest with the sound of streams and birdsong. Arriving at Nongriat village, you'll see the remarkable Double Decker Root Bridge - two living bridges stacked one above the other! The lower bridge spans 50 meters. Wade in the natural pool beneath the bridges - the water is crystal clear. Enjoy a packed lunch in this natural paradise. The climb back is challenging but rewarding. Return to Cherrapunji exhausted but exhilarated.",
          highlights: ["3,500 Steps into Valley", "Subtropical Rainforest Trek", "Double Decker Living Root Bridge", "UNESCO Tentative Heritage Site", "Crystal Pool Swimming", "Challenging Return Climb"]
        },
        {
          day: 4,
          title: "Mawlynnong & Dawki Crystal River",
          description: "Drive to Mawlynnong (85 km, approx. 3 hours), awarded 'Cleanest Village in Asia' by Discover India magazine. This remarkable village showcases the Khasi people's commitment to cleanliness and community. Bamboo dustbins line spotless paths, flowers bloom in every corner, and traditional houses gleam. Climb the Sky Walk - a bamboo platform built around a tree offering panoramic views of Bangladesh plains. Walk to the nearby single root bridge. Continue to Dawki (17 km) on the India-Bangladesh border, famous for the Umngot River - so crystal clear that boats appear to float in mid-air! Take a boat ride on this impossibly transparent water, seeing the riverbed clearly at depths of 15-20 feet. This is one of the most photographed spots in Northeast India. The border crossing is visible from the river. Return to Shillong (90 km) in the evening for overnight stay.",
          highlights: ["Asia's Cleanest Village Tour", "Sky Walk Tree Platform", "Single Root Bridge Visit", "Dawki Crystal River Boat Ride", "Boats Floating on Air Views", "India-Bangladesh Border Views"]
        },
        {
          day: 5,
          title: "Shillong City & Khasi Culture",
          description: "Explore Shillong and immerse in Khasi culture. Visit the Don Bosco Centre for Indigenous Cultures - a 7-story museum dedicated to Northeast Indian tribal cultures with stunning artifacts, photos, and skywalk views. Drive to Shillong Peak (1,965m), the highest point in the city, offering 360-degree views on clear days - you can see Bangladesh! Visit the Elephant Falls, a picturesque three-tiered waterfall named by the British after an elephant-shaped rock (now destroyed). Explore Lady Hydari Park, a Japanese-style garden with a mini zoo. In the afternoon, visit the Ward's Lake in the city center for a boat ride. Walk through the local markets to see traditional Khasi dress, jewelry, and handicrafts. Evening, attend a local cultural performance if available, or explore the café culture that Shillong is famous for - this city is India's 'Rock Capital' with a thriving live music scene.",
          highlights: ["Don Bosco Museum - 7 Floors", "Shillong Peak Panorama", "Elephant Falls Three Tiers", "Lady Hydari Park Visit", "Ward's Lake Boat Ride", "Shillong Rock Music Scene"]
        },
        {
          day: 6,
          title: "Departure - Clouds to Remember",
          description: "Enjoy a leisurely breakfast in Shillong. If time permits, visit the Bara Bazaar - Shillong's oldest market where Khasi women run the trading (reflecting the matrilineal society). Pick up local products - orange blossom honey, black rice, Naga chillies, handwoven shawls, and cane/bamboo crafts. Drive to Guwahati Airport (100 km, approx. 3 hours), passing once more through the scenic Khasi Hills. As you leave the Abode of Clouds, you carry memories of living bridges that defy engineering, rivers so clear they seem unreal, waterfalls that thundered with monsoon power, and the warmest hospitality of the Khasi people. Meghalaya has shown you that nature and humans can live in harmony. Ka ktah sa ju ne (Goodbye in Khasi) - until you return to these magical hills!",
          highlights: ["Shillong Final Breakfast", "Bara Bazaar Local Products", "Orange Honey & Black Rice", "Scenic Drive to Guwahati", "Abode of Clouds Memories", "Ka ktah sa ju ne - Farewell"]
        }
      ]
    },
    {
      id: "meghalaya-adventure",
      name: "Meghalaya Adventure Trek",
      duration: "7D/6N",
      originalPrice: 45000,
      currentPrice: 36000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&h=675&fit=crop",
      description: "For the adventurous traveler - multi-day trek through living root bridges, caving expeditions, and village homestays in Meghalaya's remote Khasi Hills.",
      highlights: ["Rainbow Falls Trek", "Multiple Root Bridges", "Village Homestays", "Cave Exploration"],
      inclusions: ["6 Nights Accommodation (Hotels & Homestays)", "All Meals", "Trek Guide & Porters", "Caving Equipment", "All Permits"],
      exclusions: ["Airfare", "Personal Trekking Gear", "Tips", "Travel Insurance"],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Trek Briefing",
          description: "Arrive at Guwahati and transfer to Shillong. After settling in, attend a detailed trek briefing about the challenging days ahead. The Double Decker and Rainbow Falls trek is one of India's most rewarding but demanding trails, requiring good fitness. Meet your experienced Khasi guide who knows every village and root bridge on the route. Equipment check - ensure you have proper trekking shoes, rain gear (it can rain any day), and waterproof bags for valuables. Light dinner and early rest. Your adventure into the heart of Meghalaya's living bridges begins tomorrow at dawn.",
          highlights: ["Guwahati to Shillong Transfer", "Detailed Trek Briefing", "Meet Khasi Expert Guide", "Equipment Check", "Rain Gear Preparation", "Early Rest for Dawn Start"]
        },
        {
          day: 2,
          title: "Shillong to Tyrna to Nongriat",
          description: "Early drive to Tyrna village (75 km, approx. 2.5 hours), the gateway to the living root bridges. Begin your descent - 3,500 steps carved into the hillside, dropping 1,500 feet into the lush valley. The trek takes about 3 hours, passing through dense subtropical forest with waterfalls and streams. Cross several smaller root bridges along the way, each one a marvel of bio-engineering. Arrive at Nongriat, a remote village accessible only by foot. Your accommodation is a basic but comfortable village homestay - bamboo walls, simple beds, but incredible hospitality. After lunch, explore the famous Double Decker Root Bridge just 10 minutes from the village. Spend the afternoon swimming in the natural pool beneath the bridges. Evening bonfire and local dinner with your host family.",
          highlights: ["3,500 Steps Descent", "Subtropical Forest Trail", "Multiple Root Bridges Crossing", "Nongriat Village Homestay", "Double Decker Bridge Afternoon", "Natural Pool Swimming"]
        },
        {
          day: 3,
          title: "Rainbow Falls Expedition",
          description: "Today's epic trek takes you to Rainbow Falls (Wahthyllong), one of Meghalaya's hidden gems. After early breakfast, begin the 3-hour trek from Nongriat, descending further into the valley. The trail is challenging - river crossings, boulder hopping, and steep sections require careful navigation. Cross the stunning Umshiang River on root bridges. Finally, you arrive at Rainbow Falls - on sunny mornings, rainbows form in the mist at the base of this 200-meter cascade. The pristine pool is perfect for swimming in crystal-clear water. Lunch is a packed meal in this paradise. The return trek to Nongriat takes another 3 hours - a full 6-7 hour day of trekking. Evening rest at homestay, nursing tired muscles with hot soup and local rice wine if you wish.",
          highlights: ["3-Hour Trek to Rainbow Falls", "Multiple River Crossings", "Root Bridge Crossings", "Rainbow Falls - 200m Cascade", "Crystal Pool Swimming", "6-7 Hour Trek Day"]
        },
        {
          day: 4,
          title: "Nongriat to Mawryngkhang Bamboo Trail",
          description: "After breakfast, begin the climb back up to Tyrna - the 3,500 steps feel harder going up! Allow 4 hours for the ascent with breaks. Transport awaits at Tyrna for the drive to Wahkhen village (30 km). This afternoon, experience the thrilling Mawryngkhang Trek - a U-shaped bamboo trail extending over a gorge, featuring bamboo bridges, ladders, and the famous King of Roots Bridge. The trail isn't for the faint-hearted - sections include near-vertical bamboo ladders and bridges swaying over drops. But the views and the engineering marvel of bamboo construction are extraordinary. Arrive at Wahkhen village for homestay. The Pnar (Jaintia) people here have their own distinct culture. Evening cultural interaction with the host family.",
          highlights: ["3,500 Steps Ascent (4 hrs)", "Drive to Wahkhen Village", "Mawryngkhang U-Shaped Trek", "Bamboo Bridges & Ladders", "King of Roots Bridge", "Pnar Culture Homestay"]
        },
        {
          day: 5,
          title: "Krem Mawmluh Cave Exploration",
          description: "Today explores the underground wonders of Meghalaya. Drive to Cherrapunji area to explore Krem Mawmluh, the fourth longest cave in India at over 7 km. You'll explore a section with your guide, equipped with headlamps and caving gear. The cave features massive chambers, underground rivers, and fascinating rock formations. Passages vary from walking height to crawl spaces - an exciting underground adventure! After emerging, visit nearby Mawsmai Cave for comparison - this shorter cave has lights installed and is more accessible. Lunch at a local restaurant. Afternoon, drive to Dawki (45 km) for sunset at the crystal-clear Umngot River. The evening light makes the river even more magical. Overnight stay in Dawki with dinner featuring local fish curry.",
          highlights: ["Krem Mawmluh - 4th Longest Cave", "7 km Underground System", "Headlamp Cave Exploration", "Massive Chambers & Rivers", "Mawsmai Cave Comparison", "Dawki Sunset Boat Ride"]
        },
        {
          day: 6,
          title: "Dawki Kayaking & Return to Shillong",
          description: "Early morning is magical on the Umngot River. Optional kayaking on the crystal waters - paddling on a river where you can see 20 feet to the bottom is surreal. The stillness of dawn, with mist rising from the river and boats seemingly floating on air, is unforgettable. After breakfast, visit the India-Bangladesh border market (on market days) or simply enjoy the riverside. Begin return journey to Shillong via Mawlynnong, the cleanest village. Arrive in Shillong by afternoon. The rest of the day is for rest and recovery - treat yourself to a massage if available. Farewell dinner celebrating your adventure - you've trekked to some of Meghalaya's most remote spots, slept in village homestays, and explored caves few tourists see.",
          highlights: ["Dawn Kayaking on Crystal River", "Border Area Exploration", "Mawlynnong Village Stop", "Return to Shillong", "Rest & Recovery", "Adventure Celebration Dinner"]
        },
        {
          day: 7,
          title: "Departure - Adventurer's Farewell",
          description: "Leisurely breakfast and checkout. Transfer to Guwahati Airport (3 hours), reflecting on your adventure-filled week. You've descended and climbed thousands of steps, crossed living root bridges that are centuries old, trekked to hidden waterfalls, explored underground cave systems, and kayaked on the clearest river in India. More than the physical challenges, you've experienced the extraordinary hospitality of Khasi and Pnar communities in their remote villages. These memories will stay with you forever. Khublei Shibun (Thank you very much in Khasi) for choosing this adventure!",
          highlights: ["Farewell Breakfast", "Guwahati Airport Transfer", "Reflection on Adventures", "Living Bridges Memories", "Village Hospitality Memories", "Khublei Shibun - Thank You"]
        }
      ]
    }
  ]
};

// Andaman Packages
export const andamanData: DestinationData = {
  id: "andaman",
  name: "Andaman",
  tagline: "Emerald Islands Paradise",
  description: "Escape to India's tropical paradise with pristine beaches, crystal-clear waters, world-class diving, colonial history, and indigenous cultures in the Bay of Bengal.",
  heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1484291150605-0860ed671f04?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "andaman-island-hopping",
      name: "Andaman Island Paradise",
      duration: "6D/5N",
      originalPrice: 45000,
      currentPrice: 36000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=675&fit=crop",
      description: "Complete Andaman experience covering Port Blair's history, Havelock's stunning beaches, and Neil Island's serene beauty with snorkeling and water sports.",
      highlights: ["Radhanagar Beach", "Cellular Jail", "Scuba Diving", "Neil Island"],
      inclusions: ["5 Nights Beach Resorts", "Daily Breakfast", "All Ferry Transfers", "Airport Transfers", "Sightseeing as per Itinerary"],
      exclusions: ["Airfare", "Lunch & Dinner", "Water Sports", "Scuba Diving Charges", "Permits for Tribal Areas"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Port Blair - Gateway to Andamans",
          description: "Welcome to the Andaman Islands! Arrive at Veer Savarkar International Airport, Port Blair, and transfer to your hotel. After freshening up, visit the Cellular Jail - a poignant reminder of India's freedom struggle. This colonial prison held political prisoners during British rule, earning the name 'Kala Pani' (Black Waters) for its isolation. Explore the seven wings and tiny cells where heroes like Veer Savarkar were imprisoned. In the evening, attend the powerful Light and Sound Show at Cellular Jail, narrating the story of freedom fighters through dramatic lighting of the prison walls. The show, narrated in Hindi (and sometimes English), brings history to life. Dinner near Aberdeen Bazaar, trying Andamanese seafood - fresh lobster, prawns, and fish. Welcome to India's tropical paradise!",
          highlights: ["Port Blair Airport Arrival", "Cellular Jail National Memorial", "Seven Wings Colonial Prison", "Freedom Struggle History", "Light & Sound Show Evening", "Andamanese Seafood Dinner"]
        },
        {
          day: 2,
          title: "Port Blair to Havelock Island",
          description: "After early breakfast, head to Phoenix Bay Jetty for your ferry to Havelock Island (55 km, approx. 2 hours by private catamaran). Havelock, officially renamed Swaraj Dweep, is the crown jewel of Andamans with some of Asia's most beautiful beaches. The ferry ride offers views of other islands and sometimes dolphins. Arrive at Havelock Jetty and transfer to your beach resort. After lunch and rest, visit the legendary Radhanagar Beach (Beach No. 7), consistently rated among Asia's best beaches. The 2 km crescent of white sand, turquoise waters, and jungle backdrop is stunning. Arrive before sunset - the sun sinking into the Andaman Sea from Radhanagar is one of India's most beautiful sunset experiences. Return to hotel for seafood dinner and rest - tomorrow is adventure day!",
          highlights: ["Morning Ferry to Havelock", "2-Hour Scenic Cruise", "Beach Resort Check-in", "Radhanagar Beach Visit", "Asia's Best Beach Experience", "Legendary Sunset Views"]
        },
        {
          day: 3,
          title: "Havelock - Snorkeling & Beaches",
          description: "Today explores Havelock's underwater world and beautiful beaches. After breakfast, head to Elephant Beach for snorkeling (accessible by boat or 30-min forest trek). The coral reefs here teem with colorful fish, sea turtles, and sometimes reef sharks. Snorkeling gear is provided, and guides help beginners. The crystal visibility makes this snorkeling experience world-class. Return for lunch at a beach shack. Afternoon, visit Kalapathar Beach for its dramatic black rocks against white sand and turquoise waters - excellent for photography and relaxation. For the adventurous, optional Scuba Diving is available - Havelock offers PADI-certified diving with sightings of manta rays, turtles, and diverse coral. Evening at leisure on your resort beach or exploring Havelock's relaxed village atmosphere. Fresh grilled seafood dinner under the stars.",
          highlights: ["Elephant Beach Snorkeling", "Crystal Clear Coral Reefs", "Colorful Fish & Turtles", "Kalapathar Beach Photography", "Optional Scuba Diving", "Beach Seafood Dinner"]
        },
        {
          day: 4,
          title: "Havelock to Neil Island",
          description: "Morning at leisure for a final swim at Radhanagar or optional sunrise yoga on the beach. After breakfast, take a ferry to Neil Island (45 mins, officially renamed Shaheed Dweep). Neil is smaller, quieter, and even more laid-back than Havelock - perfect for those seeking tranquility. Check into your beach resort. After lunch, rent a bicycle (the best way to explore) and visit Laxmanpur Beach for its stunning sunset views and shallow waters perfect for wading. The low tide reveals fascinating rock pools with sea life. Continue to Howrah Bridge - not the Kolkata one, but a natural rock arch formation! The coral formations and rock pools here are excellent for tide-pooling. Evening, watch the sunset from Laxmanpur with minimal tourists - Neil's gift is its quietness. Simple dinner at a local restaurant.",
          highlights: ["Morning Radhanagar Finale", "Ferry to Neil Island", "Bicycle Island Exploration", "Laxmanpur Beach Sunset", "Natural Rock Arch (Howrah)", "Quiet Island Tranquility"]
        },
        {
          day: 5,
          title: "Neil Island & Return to Port Blair",
          description: "Wake up for sunrise at Sitapur Beach on Neil's eastern shore - the first rays hitting the limestone cliffs and sea stacks is magical. After breakfast, explore Bharatpur Beach, excellent for swimming and snorkeling with glass-bottom boat rides available. The coral reefs here are beautiful and less crowded than Havelock. Optional activities include sea-walking (walking on the seabed with a helmet pumping air), kayaking, or simply beach relaxation. After lunch, take the afternoon ferry back to Port Blair (2.5 hours). Check into your hotel and freshen up. Evening, explore the Anthropological Museum showcasing Andaman's indigenous tribal cultures (Jarawa, Onge, Sentinelese, Great Andamanese) - some of the world's most isolated communities. Farewell dinner at a waterfront restaurant in Port Blair.",
          highlights: ["Sitapur Sunrise", "Bharatpur Beach Activities", "Glass Bottom Boat Option", "Ferry Return to Port Blair", "Anthropological Museum", "Waterfront Farewell Dinner"]
        },
        {
          day: 6,
          title: "Departure - Island Memories",
          description: "Your Andaman paradise experience concludes. Enjoy a leisurely breakfast with views of the Bay of Bengal. If time permits before your flight, visit the Samudrika Naval Marine Museum for excellent exhibits on the island's marine life, history, and coral ecosystems. Or shop for souvenirs - shell crafts, coconut products, and Andamanese tribal art (ensure ethical sourcing). Transfer to Veer Savarkar Airport for your departure. As you fly over the emerald islands, take a final look at this paradise - the turquoise waters, the white beaches, the dense forests. The Andamans have given you pristine beauty, adventure underwater, and peace on quiet beaches. These islands at the edge of India have captured your heart - until you return!",
          highlights: ["Leisure Breakfast", "Marine Museum Visit Option", "Souvenir Shopping", "Airport Transfer", "Aerial Island Views", "Paradise Memories Forever"]
        }
      ]
    },
    {
      id: "andaman-diving",
      name: "Andaman Diving Adventure",
      duration: "7D/6N",
      originalPrice: 65000,
      currentPrice: 52000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&h=675&fit=crop",
      description: "For dive enthusiasts - PADI certification course with multiple dives at world-class sites, underwater photography, and complete island exploration.",
      highlights: ["PADI Open Water Course", "10+ Dive Sites", "Manta Ray Encounters", "Night Diving"],
      inclusions: ["6 Nights Accommodation", "PADI Certification", "All Diving Equipment", "8 Boat Dives", "Breakfast Daily", "All Transfers"],
      exclusions: ["Airfare", "Lunch & Dinner", "Underwater Camera Rental", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Dive Briefing",
          description: "Arrive in Port Blair and transfer to your resort. Afternoon meet with your PADI instructor for an introduction to the course, theory session, and pool training basics. Learn about diving physics, equipment, and safety. The Andaman Islands offer some of India's best diving with visibility up to 40 meters and diverse marine life. Evening, review dive theory and prepare for tomorrow's pool session. Light dinner - you'll want to be well-rested for the intensive days ahead.",
          highlights: ["Port Blair Arrival", "PADI Instructor Meet", "Theory Session Introduction", "Diving Physics & Safety", "Equipment Overview", "Rest for Training"]
        },
        {
          day: 2,
          title: "Pool Training & Theory",
          description: "Full day of PADI Open Water training. Morning in the resort pool learning basic skills - regulator clearing, mask clearing, buoyancy control, emergency procedures. Your instructor ensures you're comfortable with each skill before progressing. Lunch break with more theory study. Afternoon, more pool sessions including underwater navigation and emergency ascent practice. By the end of the day, you're ready for open water! Complete your remaining theory and knowledge reviews. The excitement builds for tomorrow's first ocean dive.",
          highlights: ["Morning Pool Sessions", "Regulator & Mask Skills", "Buoyancy Control Practice", "Emergency Procedures", "Afternoon Advanced Pool", "Theory Completion"]
        },
        {
          day: 3,
          title: "First Open Water Dives",
          description: "The moment you've trained for! Ferry to Havelock Island (2 hours). After check-in at your dive resort, head to the dive center. Your first two open water dives are at a sheltered site - likely Aquarium or Nemo Reef. Descend into the underwater world for the first time as a trained diver. Practice your skills in the ocean while marveling at the colorful fish, coral formations, and visibility that can exceed 20 meters. Each dive is 30-40 minutes. Between dives, surface interval on the boat with snacks and excited chatter about what you saw. Completing your first ocean dives is a milestone! Evening celebration dinner.",
          highlights: ["Ferry to Havelock", "First Open Water Descent", "Aquarium Dive Site", "Coral & Fish Encounters", "Two Training Dives", "Milestone Celebration Dinner"]
        },
        {
          day: 4,
          title: "Certification Dives & Beach",
          description: "Morning, complete your final two certification dives at different sites - perhaps Lighthouse or Dixon's Pinnacle. Successfully demonstrate all required skills and you're PADI Open Water certified! You can now dive anywhere in the world to 18 meters depth. Celebratory lunch and certificate presentation. Afternoon free to enjoy Radhanagar Beach - the perfect reward after intensive training. Watch the legendary sunset as a newly certified diver, knowing the underwater world is now open to you. Tonight, plan tomorrow's fun dives with your instructor.",
          highlights: ["Final Certification Dives", "Lighthouse Dive Site", "PADI Certification Complete", "Certificate Celebration", "Radhanagar Beach Reward", "Sunset as Certified Diver"]
        },
        {
          day: 5,
          title: "Fun Dives - Advanced Sites",
          description: "Now certified, today is pure diving enjoyment! Two boat dives at more advanced sites - potentially Minerva Ledge (known for large pelagics), Jackson's Bar (coral gardens), or if conditions permit, Barracuda City. You might encounter manta rays, reef sharks, giant groupers, sea turtles, and schools of colorful fish. Each dive is about 40 minutes at depths around 15-18 meters. Your dive computer tracks your profile. Between dives, snorkeling and relaxation on the boat. Evening, option for night dive at extra cost - experiencing the reef at night reveals nocturnal creatures and is thrilling. Otherwise, beach relaxation and seafood dinner.",
          highlights: ["Two Fun Dives Certified", "Minerva Ledge Pelagics", "Manta Ray Possibilities", "Reef Sharks & Turtles", "Optional Night Dive", "Celebratory Seafood Dinner"]
        },
        {
          day: 6,
          title: "Neil Island Diving",
          description: "Ferry to Neil Island for diving at sites less visited than Havelock. The coral formations at sites like Margherita's Mischief are pristine. Morning dive, followed by lunch at a beach shack. Afternoon dive or snorkeling, depending on preference and conditions. Neil's quiet vibe is perfect for relaxation between dives. Watch sunset from Laxmanpur Beach - fewer crowds than Havelock. You've now dived at multiple Andaman sites and have a variety of underwater experiences. Final evening on the islands - reflect on your journey from non-diver to certified explorer of the underwater world.",
          highlights: ["Ferry to Neil Island", "Margherita's Mischief Dive", "Pristine Coral Formations", "Afternoon Dive/Snorkel", "Laxmanpur Quiet Sunset", "Diving Journey Reflection"]
        },
        {
          day: 7,
          title: "Departure - Certified Diver",
          description: "Return ferry to Port Blair. If time permits, visit the Samudrika Museum with newfound appreciation for marine life. Transfer to airport for departure. You leave the Andamans as a certified PADI Open Water Diver - a skill and certification for life. The underwater world is now your playground - from the Maldives to the Great Barrier Reef, from Egypt's Red Sea to Thailand's Similan Islands. Your logbook starts here in the Andamans, but the adventures continue wherever there's water. Safe travels and happy diving!",
          highlights: ["Ferry Return to Port Blair", "Marine Museum Visit", "Airport Transfer", "PADI Card for Life", "Logbook Started", "Worldwide Diving Ahead"]
        }
      ]
    }
  ]
};

// Sikkim Packages
export const sikkimData: DestinationData = {
  id: "sikkim",
  name: "Sikkim",
  tagline: "Hidden Himalayan Kingdom",
  description: "Discover the former Buddhist kingdom nestled in the Eastern Himalayas, with stunning views of Kanchenjunga, ancient monasteries, and a unique blend of Nepali, Tibetan, and Lepcha cultures.",
  heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "sikkim-classic",
      name: "Classic Sikkim Discovery",
      duration: "7D/6N",
      originalPrice: 42000,
      currentPrice: 33600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=675&fit=crop",
      description: "Complete Sikkim experience covering Gangtok, Lachen, Lachung, and Pelling with stunning mountain views, ancient monasteries, and high-altitude lakes.",
      highlights: ["Tsomgo Lake", "Nathula Pass", "Yumthang Valley", "Pelling Kanchenjunga Views"],
      inclusions: ["6 Nights Hotels", "Daily Breakfast & Dinner", "Permit Assistance", "All Transfers", "Sightseeing as per Itinerary"],
      exclusions: ["Airfare", "Lunch", "Nathula Pass Permit (extra)", "Yak Rides", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Gangtok - Capital of Sikkim",
          description: "Arrive at Bagdogra Airport (West Bengal) and drive to Gangtok (125 km, approx. 4.5 hours). The drive passes through the Teesta River valley, winding through forested hills and charming towns. Cross into Sikkim at Rangpo - a separate state requiring permits. As you climb, temperatures drop and views expand. Gangtok, at 1,650m, is a clean, well-organized hill town with a distinct Buddhist flavor. Check into your hotel with valley views. Evening, walk on MG Marg, Gangtok's pedestrian promenade - cafes, shops, and local life without any vehicles. Try momos, thukpa, and Sikkimese delicacies. The friendly atmosphere and mountain air welcome you to this former Buddhist kingdom.",
          highlights: ["Bagdogra to Gangtok Drive", "Teesta River Valley Views", "Cross into Sikkim State", "Hotel with Valley Views", "MG Marg Evening Walk", "Momos & Thukpa First Taste"]
        },
        {
          day: 2,
          title: "Tsomgo Lake & Baba Mandir",
          description: "Early start for the excursion to Tsomgo Lake (40 km, approx. 2.5 hours) - a sacred glacial lake at 3,753 meters. The drive climbs through rhododendron forests and yak grazing grounds. At the lake, the deep blue waters reflect the surrounding snow-capped peaks - a photographer's dream. Yak rides are available around the lake. The lake is sacred to Sikkimese and frozen in winter. Continue to Baba Harbhajan Singh Mandir (12 km further), a temple dedicated to an Indian soldier who died here and is believed to still guard the border. Visit time is limited at this India-China border area. Optional: Nathula Pass (extra permit required, closed Mondays/Tuesdays) - the historic trade route and India-China border at 4,310m. Return to Gangtok by evening.",
          highlights: ["Drive to 3,753m Altitude", "Tsomgo Sacred Glacial Lake", "Yak Rides Available", "Baba Mandir Border Temple", "India-China Border Area", "Optional Nathula Pass (4,310m)"]
        },
        {
          day: 3,
          title: "Gangtok to Lachung - Journey North",
          description: "After breakfast, drive to Lachung (120 km, approx. 6 hours), a beautiful journey into North Sikkim. The route follows the Teesta River initially, then the Lachung Chu stream through increasingly dramatic scenery. Stop at Kabi Lungchok, where the blood brotherhood treaty between Lepcha and Bhutia tribes was signed. Pass through Mangan town, then cross the Seven Sisters Waterfalls - a stunning cascade by the road. The landscape becomes more rugged, with rocky cliffs and alpine meadows. Lachung (2,900m) is a small mountain village near the Tibet border. Check into your hotel/homestay. Evening explore the village and visit the 19th-century Lachung Monastery. The night sky here is spectacular with minimal light pollution.",
          highlights: ["6-Hour Drive to North Sikkim", "Teesta River Valley Route", "Kabi Lungchok Historical Site", "Seven Sisters Waterfalls", "Lachung Village (2,900m)", "Lachung Monastery Evening"]
        },
        {
          day: 4,
          title: "Yumthang Valley - Valley of Flowers",
          description: "Very early departure (5 AM) for Yumthang Valley (25 km, approx. 1.5 hours), the 'Valley of Flowers of the East.' This stunning valley at 3,564m is carpeted with rhododendrons, primulas, and other alpine flowers from April-June. The Teesta River originates here, and you can see hot springs by the road. The valley is surrounded by snow-capped peaks on all sides - breathtaking in the morning light. Continue further (conditions permitting) to Zero Point (Yumesamdong) at 4,800m - where the road ends in a snowfield near the Tibet border. Few places in India offer such accessible high-altitude snow experiences. Return to Lachung for lunch. Afternoon drive to Lachen (45 km, 2.5 hours), sister village in another valley. Overnight in Lachen (2,750m).",
          highlights: ["5 AM Start for Sunrise", "Yumthang Valley Flowers", "Teesta River Source", "Zero Point (4,800m) Snow", "Tibetan Border Approach", "Drive to Lachen Village"]
        },
        {
          day: 5,
          title: "Gurudongmar Lake & Return to Gangtok",
          description: "Another pre-dawn start (4 AM) for the journey to Gurudongmar Lake (65 km, 3 hours from Lachen). This sacred lake at 5,183m is one of the highest in the world and one of India's most beautiful. Named after Guru Padmasambhava (Guru Rinpoche), the lake never fully freezes at one corner despite temperatures dropping to -25°C - considered miraculous. The turquoise waters against a barren mountain backdrop is surreal. Altitude sickness is possible - take it slow. Return to Lachen for breakfast. After, begin the long drive back to Gangtok (180 km, approx. 8 hours) with meal stops. The dramatic landscapes of North Sikkim gradually give way to the lusher valleys around Gangtok. Arrive late evening for overnight stay.",
          highlights: ["4 AM Start for Lake", "Gurudongmar Lake (5,183m)", "Sacred Never-Freezing Corner", "Guru Padmasambhava Site", "Turquoise High-Altitude Waters", "Return to Gangtok (8 hrs)"]
        },
        {
          day: 6,
          title: "Gangtok to Pelling - Kanchenjunga Views",
          description: "Drive to Pelling (130 km, approx. 5 hours), the viewpoint town for Kanchenjunga - the world's third highest mountain. En route, stop at Ravangla for the giant 130-foot Buddha statue with panoramic Himalayan views. Continue to Pelling, located at 2,150m in West Sikkim. Check into a hotel with Kanchenjunga views - on clear days, the entire range from Kabru to Pandim is visible from your room! Afternoon, visit the ancient Pemayangtse Monastery - one of Sikkim's oldest and most important, founded in 1705. The wooden model of Guru Rinpoche's heavenly palace on the top floor is incredible. Continue to Rabdentse Ruins, the former capital of Sikkim (17th-18th century). Return for sunset views of Kanchenjunga from your hotel - arguably Sikkim's most spectacular sight.",
          highlights: ["Drive to West Sikkim", "Ravangla Giant Buddha Statue", "Pelling Hotel with Mountain View", "Pemayangtse Monastery (1705)", "Rabdentse Historical Ruins", "Kanchenjunga Sunset from Hotel"]
        },
        {
          day: 7,
          title: "Pelling & Departure",
          description: "Wake before dawn for the sunrise over Kanchenjunga - the first rays hitting the snow peaks, turning them gold, then white, is magical. After breakfast, visit the Skywalk (glass bridge with Himalayan views) and Kanchenjunga Falls in Pelling. Drive to Bagdogra Airport (140 km, approx. 4.5 hours) for your departure, or continue to Darjeeling if time permits. As you descend from the mountains, you carry the peace of monasteries, the thrill of high-altitude lakes, the kindness of Sikkimese people, and the majesty of Kanchenjunga. This small state has shown you the grandeur of the Eastern Himalayas. Kazi Kush (Goodbye in Nepali) - until you return to this magical kingdom!",
          highlights: ["Kanchenjunga Sunrise", "Pelling Skywalk Views", "Kanchenjunga Falls", "Drive to Bagdogra Airport", "Eastern Himalayas Memories", "Kazi Kush - Farewell"]
        }
      ]
    }
  ]
};

// Bali (Indonesia) Packages
export const baliData: DestinationData = {
  id: "bali",
  name: "Bali",
  tagline: "Island of Gods",
  description: "Experience the magic of Bali with its ancient temples, terraced rice paddies, vibrant arts scene, world-class surfing, and spiritual Balinese Hindu culture.",
  heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "bali-essence",
      name: "Essence of Bali",
      duration: "6D/5N",
      originalPrice: 68750,
      currentPrice: 55000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=675&fit=crop",
      description: "Complete Bali experience covering Ubud's culture, Seminyak's beaches, iconic temples, rice terraces, and the unique Balinese Hindu traditions.",
      highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Seminyak Beach", "Balinese Spa"],
      inclusions: ["5 Nights Boutique Hotels", "Daily Breakfast", "Airport Transfers", "Ubud Day Tour", "Temple Tours", "English-Speaking Guide"],
      exclusions: ["International Flights", "Visa on Arrival Fee", "Lunch & Dinner", "Optional Activities", "Spa Treatments"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bali - Island of Gods",
          description: "Arrive at Ngurah Rai International Airport (Denpasar) and transfer to Seminyak, Bali's stylish beach area (45 mins). Seminyak combines excellent beaches with trendy cafes, boutiques, and nightlife. Check into your boutique hotel or villa with pool. After freshening up, head to the beach for your first Bali sunset. The wide sandy beach, breaking waves, and colorful sky as the sun sets over the Indian Ocean is the perfect introduction. Explore Seminyak's famous restaurant row - 'Eat Street' - lined with Indonesian, Japanese, Italian, and fusion restaurants. Try Nasi Goreng (fried rice) or Mie Goreng (fried noodles) at a local warung. The evening is yours to enjoy Seminyak's relaxed vibe - beach clubs, bars, and live music are everywhere.",
          highlights: ["Ngurah Rai Airport Arrival", "Seminyak Hotel/Villa Check-in", "First Bali Beach Sunset", "Eat Street Dinner Exploration", "Nasi Goreng First Taste", "Seminyak Evening Vibe"]
        },
        {
          day: 2,
          title: "Ubud - Cultural Heart of Bali",
          description: "After breakfast, drive to Ubud (1.5 hours), Bali's cultural capital. First stop: Tegallalang Rice Terraces, the iconic stepped paddies carved into the hillside - a UNESCO Cultural Landscape. Walk among the terraces and see the ancient 'subak' irrigation system. Continue to Ubud center, visiting the Sacred Monkey Forest Sanctuary with its ancient temples and 700+ Balinese long-tailed macaques. Lunch at a restaurant overlooking the Ayung River gorge. Explore Ubud's art galleries, craft shops, and the Royal Palace. Visit the Tirta Empul Temple, a sacred water temple where Balinese come for spiritual cleansing - you can participate in the purification ritual. Return to Seminyak for evening. Optional: Stay in Ubud for more immersion in the rice paddies and yoga/wellness scene.",
          highlights: ["Tegallalang Rice Terraces", "UNESCO Cultural Landscape", "Monkey Forest Sanctuary", "Ayung River Lunch Views", "Ubud Art & Craft Shops", "Tirta Empul Purification Temple"]
        },
        {
          day: 3,
          title: "Temples & Beaches",
          description: "Today explores Bali's iconic temples. After breakfast, drive to Tanah Lot (30 mins) - the most photographed temple in Bali, perched on a rock in the sea. Best visited at low tide when you can walk to the temple base, or at sunset for silhouette photos. Continue to Uluwatu Temple on the southern cliffs - a dramatic location 70m above the sea. Watch for cheeky monkeys! In the late afternoon, attend the Kecak Fire Dance at Uluwatu - a unique Balinese performance with a chorus of 50+ men chanting 'chak-chak-chak' as the sun sets behind the temple. The story from the Ramayana unfolds with fire and dance against the ocean backdrop - unforgettable. Dinner at Jimbaran Beach - seafood restaurants on the sand with candles and fresh catches grilled over coconut husks.",
          highlights: ["Tanah Lot Sea Temple", "Low Tide Temple Walk", "Uluwatu Clifftop Temple", "70m Above Sea Views", "Kecak Fire Dance Sunset", "Jimbaran Beach Seafood Dinner"]
        },
        {
          day: 4,
          title: "Water Adventures & Spa",
          description: "Today is for relaxation and optional adventure. Morning, choose your activity: water sports at Tanjung Benoa (parasailing, jet ski, banana boat, diving); surfing lessons at Kuta or Canggu beaches; or simply beach relaxation at your hotel. Afternoon, indulge in a traditional Balinese spa treatment - the island is famous for its wellness traditions. Experience a flower bath, Balinese massage with aromatic oils, and body scrubs using local ingredients like coffee, coconut, or lemongrass. Many spas are set in gorgeous tropical gardens or overlooking rice paddies. Evening, explore Canggu if you haven't - the hip neighborhood with excellent cafes, surf breaks, and bohemian vibe. Sunset at Echo Beach with its surf breaks and beach bars.",
          highlights: ["Choose: Water Sports/Surf/Beach", "Tanjung Benoa Adventures", "Surfing Lessons Option", "Traditional Balinese Spa", "Flower Bath & Massage", "Canggu Sunset at Echo Beach"]
        },
        {
          day: 5,
          title: "Hidden Bali & Cooking Class",
          description: "Discover hidden Bali today. Visit the stunning Lempuyang Temple - known for the 'Gates of Heaven' photo spot framing Mount Agung. The Instagram-famous shot requires patience but is rewarding. Continue to Tirta Gangga, a beautiful water palace with ornate statues, gardens, and pools with koi fish. Lunch at a local warung with village views. Afternoon, participate in a Balinese cooking class - learn to make sambal, lawar, satay, and other dishes using fresh ingredients from a market visit. The class is hands-on and fun, and you get to eat your creations for dinner! Return to Seminyak for your final evening. Farewell celebration at a beach club or rooftop bar with sunset views.",
          highlights: ["Lempuyang Gates of Heaven", "Mount Agung Views", "Tirta Gangga Water Palace", "Local Warung Lunch", "Balinese Cooking Class", "Final Sunset Celebration"]
        },
        {
          day: 6,
          title: "Departure - Sampai Jumpa",
          description: "Your Bali journey concludes. Enjoy a leisurely breakfast - perhaps your last plate of fresh tropical fruits and Balinese coffee. If time permits, squeeze in a final swim, yoga class, or last-minute shopping in Seminyak's boutiques - silver jewelry, batik fabrics, wood carvings, and local art make excellent souvenirs. Transfer to Ngurah Rai Airport for your departure. As you leave the Island of Gods, you carry memories of ancient temples against sunset skies, rice terraces that have sustained communities for centuries, the warm smiles of the Balinese, and the spiritual energy that makes Bali unique. Sampai Jumpa (See you again) - Bali will always welcome you back!",
          highlights: ["Leisurely Tropical Breakfast", "Final Beach Swim Option", "Seminyak Souvenir Shopping", "Silver & Batik Treasures", "Airport Transfer", "Sampai Jumpa - Until Next Time"]
        }
      ]
    }
  ]
};

// Turkey Packages
export const turkeyData: DestinationData = {
  id: "turkey",
  name: "Turkey",
  tagline: "Where East Meets West",
  description: "Explore the crossroads of civilizations - Byzantine churches, Ottoman mosques, ancient ruins, Mediterranean beaches, and Cappadocia's fairytale landscapes in one amazing country.",
  heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1609842947419-ba4f04d5d60f?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "turkey-highlights",
      name: "Best of Turkey",
      duration: "9D/8N",
      originalPrice: 118300,
      currentPrice: 91000,
      discount: 23,
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=675&fit=crop",
      description: "Complete Turkey journey covering Istanbul's Byzantine wonders, Cappadocia's fairytale landscapes, and the ancient ruins of Ephesus with Mediterranean charm.",
      highlights: ["Hagia Sophia", "Cappadocia Hot Air Balloon", "Ephesus Ancient City", "Pamukkale Travertines"],
      inclusions: ["8 Nights 4-Star Hotels", "Daily Breakfast", "Istanbul City Tour", "Cappadocia Full Tour", "Domestic Flights", "All Transfers"],
      exclusions: ["International Flights", "Visa Fee", "Lunch & Dinner", "Hot Air Balloon Ride", "Optional Activities"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Istanbul - Jewel of Empires",
          description: "Arrive at Istanbul Airport and transfer to your hotel in Sultanahmet, the historic peninsula where Byzantine and Ottoman history stands side by side. Istanbul is the only city spanning two continents - Europe and Asia - and has been the capital of Roman, Byzantine, and Ottoman empires. After check-in, take an evening walk to the Blue Mosque area. The six minarets of Sultan Ahmed Mosque (Blue Mosque) and the massive dome of Hagia Sophia are illuminated beautifully. Walk to the Bosphorus waterfront at Eminönü to see ferries crossing between continents. Dinner at a traditional restaurant with views of the lit monuments. Try Turkish mezes, kebabs, and finish with baklava. The call to prayer from multiple minarets adds to the atmospheric evening. Welcome to Turkey!",
          highlights: ["Istanbul Airport Arrival", "Sultanahmet Historic Area", "Two Continents City", "Blue Mosque Evening Views", "Hagia Sophia Illuminated", "Turkish Meze & Kebab Dinner"]
        },
        {
          day: 2,
          title: "Istanbul Historic Peninsula",
          description: "Full day exploring Istanbul's iconic monuments. Start at Hagia Sophia (Ayasofya), one of the world's greatest buildings - a 6th-century church converted to mosque, then museum, now mosque again. The massive dome, Byzantine mosaics, and Ottoman calligraphy create a unique spiritual space. Walk to the Blue Mosque (Sultan Ahmed) with its 20,000 blue Iznik tiles and cascading domes. Visit the Topkapi Palace, the opulent home of Ottoman sultans for 400 years - see the Harem, treasury with legendary jewels, and Prophet's relics. Lunch at a local restaurant. Afternoon, explore the Grand Bazaar - one of the world's oldest covered markets with 4,000+ shops selling carpets, jewelry, ceramics, spices. Haggling is expected! Evening, Turkish bath (hamam) experience recommended - the historic Cemberlitas Hamam dates to 1584.",
          highlights: ["Hagia Sophia - World Wonder", "Blue Mosque 20,000 Tiles", "Topkapi Palace & Harem", "Ottoman Treasury Jewels", "Grand Bazaar Shopping", "Optional Turkish Hamam"]
        },
        {
          day: 3,
          title: "Bosphorus & Asian Istanbul",
          description: "Morning Bosphorus cruise (2 hours) through the strait that divides continents. Pass Ottoman palaces, wooden waterfront mansions (yali), historic fortresses, and the modern bridges connecting Europe to Asia. The second bridge is where you cross from Europe to Asia! Stop at the Asian side - the neighborhoods of Kadıköy and Üsküdar offer a different, more local Istanbul vibe. Lunch at Kadıköy's famous fish market. Return to European Istanbul and explore the Istiklal Avenue and Galata Tower area - the 'modern' 19th-century European quarter with its art galleries, cafes, and vibrant street life. Climb Galata Tower for panoramic views. Evening, attend a traditional Turkish night with folk dancing, music, and dinner - or explore the restaurants of Karaköy and Beyoglu.",
          highlights: ["Bosphorus Strait Cruise", "Ottoman Palaces from Water", "Cross to Asia Continent", "Kadıköy Local Markets", "Galata Tower Panorama", "Istiklal Avenue Evening"]
        },
        {
          day: 4,
          title: "Fly to Cappadocia - Fairytale Land",
          description: "Morning flight to Kayseri or Nevsehir (1.5 hours), gateway to Cappadocia. Nothing prepares you for this lunar landscape of fairy chimneys, rock cones, and cave dwellings. Transfer to Göreme (45 mins from Kayseri). After lunch, visit Göreme Open-Air Museum - a UNESCO World Heritage Site with Byzantine rock-cut churches containing remarkable 10th-century frescoes. Explore the village of Ürgüp and its ancient cave dwellings. Stop at viewpoints including Lovers' Valley and Monks' Valley (Paşabağ) with its mushroom-shaped fairy chimneys. Your hotel is likely a cave hotel - carved into the rock with modern comforts! Dinner at a cave restaurant with local wine from Cappadocia's ancient vineyards. Early night - optional hot air balloon ride tomorrow requires 4 AM wake-up!",
          highlights: ["Fly to Cappadocia Region", "Surreal Lunar Landscape", "Göreme UNESCO Churches", "Byzantine Frescoes", "Fairy Chimney Valleys", "Cave Hotel Experience"]
        },
        {
          day: 5,
          title: "Cappadocia Full Day Exploration",
          description: "Optional: Wake at 4 AM for a sunrise hot air balloon ride over Cappadocia (extra cost but highly recommended - one of the world's best balloon experiences). Watch the sunrise illuminate hundreds of balloons floating over the fairy chimneys. After breakfast (late for balloonists!), full day tour of Cappadocia. Explore Derinkuyu or Kaymakli Underground City - ancient multi-level subterranean cities carved to hide from invaders, with churches, kitchens, and wine cellars 85 meters deep! Visit Ihlara Valley for a scenic canyon walk alongside a stream with rock-cut churches. See a pottery demonstration in Avanos, famous for its red clay pottery since Hittite times. Sunset at Kızılçukur (Red Valley) as the landscape glows in warm colors. Evening, optional Turkish night or cave wine tasting.",
          highlights: ["Optional Hot Air Balloon Sunrise", "Hundreds of Balloons View", "Derinkuyu Underground City", "85 Meters Deep Ancient City", "Ihlara Valley Canyon Walk", "Red Valley Sunset"]
        },
        {
          day: 6,
          title: "Cappadocia to Pamukkale",
          description: "Long but scenic drive to Pamukkale (540 km, approx. 7 hours, or optional domestic flight + transfer). The route passes through Central Anatolian landscapes. Arrive at Pamukkale ('Cotton Castle'), a natural wonder of white travertine terraces formed by calcium-rich thermal waters over millennia. Check into a thermal hotel - many have pools fed by the same hot springs. Late afternoon visit to the terraces - walking barefoot on the warm white calcium formations with blue thermal pools is surreal. Sunset turns the terraces gold and pink. Visit the adjacent ancient city of Hierapolis - a Roman spa city with well-preserved ruins including a 15,000-seat theater, necropolis, and the sacred pool where you can swim among ancient columns (Cleopatra's Pool - extra charge).",
          highlights: ["Drive Through Anatolia", "Pamukkale Travertines Arrival", "White Cotton Castle", "Barefoot Thermal Terraces", "Hierapolis Ancient City", "Optional Cleopatra's Pool Swim"]
        },
        {
          day: 7,
          title: "Ephesus - Ancient Wonder",
          description: "Drive to Selçuk (175 km, approx. 2.5 hours) to explore Ephesus, one of the best-preserved ancient cities in the Mediterranean. Once home to 250,000 people and the Temple of Artemis (one of the Seven Wonders), Ephesus is a walk through history. Enter through the Magnesia Gate and walk down the marble streets past the Library of Celsus (the iconic facade), the Great Theater (25,000 capacity), public baths, latrines, Hadrian's Temple, and the Terrace Houses (extra entry - Roman villas with frescoes). The scale and preservation are extraordinary. Visit the House of the Virgin Mary nearby - believed to be where Mary spent her final years. Lunch in the charming town of Şirince, known for fruit wines. Continue to Izmir or Kusadasi for overnight by the Aegean Sea.",
          highlights: ["Ephesus Ancient City", "Library of Celsus Icon", "25,000-Seat Great Theater", "Marble Street Walk", "House of Virgin Mary", "Şirince Village Wine Lunch"]
        },
        {
          day: 8,
          title: "Return to Istanbul",
          description: "Morning flight from Izmir to Istanbul (1 hour). Afternoon at leisure for last-minute exploration or shopping. Visit the Spice Bazaar (Egyptian Bazaar) near Eminönü for Turkish delight, dried fruits, spices, and teas - more relaxed than the Grand Bazaar and with incredible aromas. Walk through the busy streets of Eminönü and across the Galata Bridge, stopping to eat fresh fish sandwiches from boats rocking on the water - an Istanbul institution! Final shopping for souvenirs - Turkish carpets, ceramics, evil eye amulets (nazar boncuğu), Turkish coffee sets, and lokum (Turkish delight). Farewell dinner cruise on the Bosphorus with dinner, drinks, and entertainment as Istanbul's skyline glitters on both continents. A magical goodbye to Turkey.",
          highlights: ["Morning Flight to Istanbul", "Spice Bazaar Aromas", "Galata Bridge Fish Sandwich", "Turkish Souvenirs Shopping", "Evil Eye & Lokum Gifts", "Farewell Bosphorus Dinner Cruise"]
        },
        {
          day: 9,
          title: "Departure - Güle Güle",
          description: "Your Turkish journey concludes. Depending on flight time, enjoy a final Turkish breakfast - one of the world's great breakfast spreads with cheeses, olives, tomatoes, cucumbers, eggs, pastries, and endless tea. Last views of Istanbul's minarets and the Bosphorus glittering in the morning sun. Transfer to Istanbul Airport for your departure. Turkey has shown you the grandeur of Ottoman palaces, the spirituality of Byzantine churches, the otherworldly landscapes of Cappadocia, the warmth of Turkish hospitality, and flavors that will linger. From the call to prayer echoing across Istanbul to the fairy chimneys of Göreme, Turkey has enchanted. Güle Güle (Go with smiles) - may you return soon!",
          highlights: ["Turkish Breakfast Feast", "Final Istanbul Views", "Airport Transfer", "Ottoman & Byzantine Memories", "Cappadocia Dreams", "Güle Güle - Farewell"]
        }
      ]
    }
  ]
};

// Australia Packages
export const australiaData: DestinationData = {
  id: "australia",
  name: "Australia",
  tagline: "Land Down Under",
  description: "From the Sydney Opera House to the Great Barrier Reef, from the Outback to cosmopolitan cities - Australia offers diverse landscapes, unique wildlife, and laid-back adventure.",
  heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1494233892892-84542a694e72?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1546268060-2592ff93ee24?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "australia-explorer",
      name: "Australia Explorer",
      duration: "10D/9N",
      originalPrice: 299999,
      currentPrice: 274999,
      discount: 8,
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=675&fit=crop",
      description: "Complete Australia journey covering Sydney's icons, Great Barrier Reef, and Melbourne's culture with unique wildlife encounters and stunning coastal scenery.",
      highlights: ["Sydney Opera House", "Great Barrier Reef", "Great Ocean Road", "Melbourne Laneways"],
      inclusions: ["9 Nights 4-Star Hotels", "Daily Breakfast", "Sydney Harbor Cruise", "Great Barrier Reef Snorkeling", "Domestic Flights", "All Transfers"],
      exclusions: ["International Flights", "Visa Fee (ETA)", "Lunch & Dinner", "Optional Activities", "Theme Park Entry"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Sydney - Harbour City",
          description: "Arrive at Sydney Kingsford Smith Airport and transfer to your hotel in or near the CBD. Sydney, built around one of the world's great natural harbors, is Australia's largest city with over 5 million people. After settling in, take an orientation walk to Circular Quay, the heart of Sydney's harbor. Your first view of the Sydney Opera House and Harbour Bridge together is iconic - photograph it as the afternoon light catches the sails. Walk through the Royal Botanic Gardens for views back to the Opera House. As the sun sets, the harbor lights up. Dinner at one of the Circular Quay restaurants with waterfront views. Try Australian seafood - Sydney rock oysters, Moreton Bay bugs, and barramundi. Welcome to the Land Down Under!",
          highlights: ["Sydney Airport Arrival", "Circular Quay First Views", "Opera House & Harbour Bridge", "Royal Botanic Gardens Walk", "Harbour Sunset Views", "Australian Seafood Dinner"]
        },
        {
          day: 2,
          title: "Sydney Icons & Harbor Cruise",
          description: "Full day exploring Sydney's icons. Start with a tour inside the Sydney Opera House - its engineering and acoustics are as impressive as its exterior. Walk across the Sydney Harbour Bridge, or for the brave, book the BridgeClimb for 360-degree views from the top (extra cost). Head to The Rocks, Sydney's oldest neighborhood where the First Fleet landed in 1788, now a charming area of cobbled lanes, historic pubs, and weekend markets. Afternoon, board a Sydney Harbour Cruise (included). Glide past Opera House, Harbour Bridge, Taronga Zoo, and waterfront mansions to the Heads where the harbor meets the Pacific Ocean. The views are spectacular. Evening, visit Darling Harbour for dinner and entertainment - the harborside precinct is lively with restaurants, bars, and attractions.",
          highlights: ["Sydney Opera House Tour", "Harbour Bridge Walk/Climb", "The Rocks Historic Quarter", "Sydney Harbour Cruise", "Pacific Ocean Views", "Darling Harbour Evening"]
        },
        {
          day: 3,
          title: "Blue Mountains Day Trip",
          description: "Drive to the Blue Mountains (90 km, approx. 1.5 hours), a UNESCO World Heritage area of dramatic sandstone cliffs, eucalyptus forests, and cascading waterfalls. The mountains appear blue due to the eucalyptus oil mist. First stop: Echo Point for views of the Three Sisters - three sandstone rock pillars steeped in Aboriginal legend. The scale of the Jamison Valley below is breathtaking. Ride the Scenic Railway - the world's steepest at 52 degrees - down into the ancient rainforest. Walk through the forest floor before taking the Scenic Cableway back up with spectacular views. Visit the charming town of Leura for lunch and antique shopping. Optional: Featherdale Wildlife Park on the way back to cuddle koalas and feed kangaroos. Return to Sydney for evening at leisure.",
          highlights: ["Blue Mountains UNESCO Drive", "Three Sisters Rock Formation", "World's Steepest Railway", "Ancient Rainforest Walk", "Leura Charming Town", "Koala & Kangaroo Encounters (optional)"]
        },
        {
          day: 4,
          title: "Fly to Cairns - Gateway to the Reef",
          description: "Morning flight to Cairns (3 hours), the gateway to the Great Barrier Reef and the tropical north. The contrast with Sydney is immediate - tropical warmth, palm trees, and a relaxed vibe. Transfer to your hotel on the Esplanade. Cairns has no beach (mudflats and crocodiles!), but the lagoon pool on the Esplanade is perfect. Afternoon at leisure - explore the town, visit the night markets that set up daily, or simply relax by the pool. If arriving early, optional visit to Kuranda via the Skyrail Rainforest Cableway - gliding over the rainforest canopy is spectacular. Dinner on the Esplanade with the humid tropical evening. Tomorrow is the highlight - the Great Barrier Reef!",
          highlights: ["Fly Sydney to Cairns", "Tropical Australia Arrival", "Cairns Esplanade Walk", "Lagoon Pool Relaxation", "Optional Kuranda Skyrail", "Tropical Night Markets"]
        },
        {
          day: 5,
          title: "Great Barrier Reef Adventure",
          description: "Early departure for the Great Barrier Reef - the world's largest coral reef system and one of Earth's most spectacular natural wonders, visible from space. Cruise to the outer reef (90 mins) for the best coral. The platform provides a base for snorkeling, optional scuba diving, and semi-submersible reef viewing. Donning your mask, you enter an underwater wonderland - vibrant corals in every color, tropical fish from clownfish (Nemo!) to giant groupers, sea turtles, and if lucky, reef sharks. Lunch is served on the platform. Afternoon offers more snorkeling, a glass-bottom boat tour, or helicopter scenic flights over the reef (extra cost). The colors and diversity are extraordinary. Return to Cairns by late afternoon, exhausted and exhilarated. This is a bucket-list experience checked!",
          highlights: ["Cruise to Outer Reef", "World's Largest Coral System", "Snorkeling with Tropical Fish", "Clownfish & Sea Turtles", "Optional Scuba Diving", "Helicopter Reef Views (optional)"]
        },
        {
          day: 6,
          title: "Tropical Rainforest & Wildlife",
          description: "Today explores the Daintree Rainforest, the world's oldest rainforest at 180 million years. Drive north (2 hours) through sugar cane fields and coastal scenery. Cross the Daintree River by cable ferry into the ancient forest. Your guide explains the extraordinary biodiversity - 30% of Australia's frog species, 65% of butterfly species, and unique plants. Walk through the forest on elevated boardwalks, spotting rare wildlife. At Cape Tribulation, two World Heritage areas meet - the Reef and Rainforest. Stroll on the pristine beach where rainforest meets the coral sea. No swimming (crocodiles and stingers!). Lunch at a rainforest café. Optional crocodile river cruise to spot saltwater crocs. Return to Cairns by evening. Tonight, book a dinner with Aboriginal cultural performance if available.",
          highlights: ["Daintree - World's Oldest Rainforest", "180 Million Years Old", "Cable Ferry River Crossing", "Cape Tribulation Beach", "Reef Meets Rainforest", "Optional Crocodile Cruise"]
        },
        {
          day: 7,
          title: "Fly to Melbourne - Cultural Capital",
          description: "Morning flight to Melbourne (3 hours), Australia's cultural capital, known for its street art, coffee culture, live music, and sporting obsession. Melbourne is often rated the world's most livable city. Transfer to your hotel in the CBD. Afternoon, explore Melbourne's famous laneways - narrow alleys filled with street art (Hosier Lane is a must), hidden bars, and independent shops. Melbourne's coffee culture is legendary - find a laneway café for a flat white. Visit Federation Square, the city's cultural heart, and walk along the Yarra River. The architecture blends Victorian-era buildings with modern towers. Evening, explore Melbourne's dining scene - the city has incredible diversity from Greek (world's largest Greek population outside Greece) to Vietnamese to modern Australian.",
          highlights: ["Fly to Melbourne", "Laneway Street Art", "Hosier Lane Famous Murals", "World-Class Coffee Culture", "Federation Square & Yarra", "Multicultural Dining"]
        },
        {
          day: 8,
          title: "Great Ocean Road Adventure",
          description: "Full day on the Great Ocean Road, one of the world's most scenic coastal drives. Drive southwest from Melbourne (2 hours) to Torquay, where the road begins. The 243 km route hugs the spectacular coastline with stops at surf beaches, rainforest, and seaside towns. Visit the surf capital Bells Beach, then stop in Lorne for morning tea. Continue through the Great Otway National Park with short rainforest walks. The highlight: the Twelve Apostles - limestone stacks rising from the Southern Ocean. (There are actually 8 now - erosion!) The viewing platforms offer dramatic perspectives. Continue to Loch Ard Gorge, named after a tragic shipwreck. If time permits, walk to Gibson Steps beach for apostle views from sea level. Return to Melbourne by evening (3 hours from Apostles).",
          highlights: ["Great Ocean Road Drive", "Bells Beach Surf Capital", "Lorne Seaside Town", "Otway Rainforest Walk", "Twelve Apostles Icons", "Loch Ard Gorge Drama"]
        },
        {
          day: 9,
          title: "Melbourne at Leisure",
          description: "Day at leisure to explore Melbourne further or take optional excursions. Options include: Phillip Island to see the famous Penguin Parade (Little Penguins returning to their burrows at sunset); Yarra Valley wine region for tastings at boutique wineries; Melbourne's sporting precinct (MCG Cricket Ground tour, Australian Open tennis center); shopping on Chapel Street or high-end Collins Street; Royal Botanic Gardens; or simply more laneway exploration, coffee, and street art hunting. For sports fans, catching an AFL (Australian Rules Football) game if in season is quintessentially Australian. Afternoon high tea at a Victorian-era hotel is a refined option. Farewell dinner at a rooftop bar overlooking Melbourne's city lights.",
          highlights: ["Choose Your Melbourne Day", "Optional Penguin Parade", "Yarra Valley Wine Option", "MCG Sports Tour Option", "More Laneways & Coffee", "Farewell Rooftop Dinner"]
        },
        {
          day: 10,
          title: "Departure - G'day Mate!",
          description: "Your Australian adventure concludes. Depending on flight time, enjoy a final Melbourne breakfast at a laneway café - one more flat white and avocado toast (an Australian invention!). Transfer to Melbourne Airport for your departure. Australia has shown you its icons - the Opera House and Harbour Bridge, the Great Barrier Reef's underwater wonders, Melbourne's creative laneway culture. You've experienced unique wildlife, from koalas to kangaroos to Little Penguins. The dramatic landscapes of Blue Mountains, Great Ocean Road, and Daintree Rainforest will stay with you. Most of all, the friendly 'G'day mate' Aussie spirit has welcomed you. Hooroo (Australian goodbye) - safe travels and hope to see you Down Under again!",
          highlights: ["Final Melbourne Breakfast", "Flat White Farewell", "Airport Transfer", "Opera House Memories", "Reef Adventures to Remember", "Hooroo - See You Again!"]
        }
      ]
    }
  ]
};

// Switzerland Packages  
export const switzerlandData: DestinationData = {
  id: "switzerland",
  name: "Switzerland",
  tagline: "Alpine Paradise",
  description: "Experience fairytale villages, majestic Alpine peaks, pristine lakes, and world-famous chocolate and cheese in one of Europe's most beautiful countries.",
  heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1527095655658-89f085a51e21?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "swiss-highlights",
      name: "Swiss Alpine Journey",
      duration: "7D/6N",
      originalPrice: 169000,
      currentPrice: 135200,
      discount: 20,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop",
      description: "Complete Swiss experience covering Zurich, Lucerne, Interlaken, and Zermatt with iconic mountain excursions, scenic trains, and charming alpine villages.",
      highlights: ["Jungfraujoch - Top of Europe", "Matterhorn Views", "Lake Lucerne Cruise", "Scenic Train Rides"],
      inclusions: ["6 Nights 4-Star Hotels", "Daily Breakfast", "Swiss Travel Pass (4 days)", "Jungfraujoch Excursion", "All Transfers"],
      exclusions: ["International Flights", "Lunch & Dinner", "Cable Cars not in Swiss Pass", "Matterhorn Glacier Paradise"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Zurich - Gateway to Switzerland",
          description: "Arrive at Zurich Airport and transfer to Lucerne (1 hour by train, covered by Swiss Pass). Lucerne is Switzerland's most charming city, set on Lake Lucerne with mountains in every direction. Check into your hotel near the old town. Afternoon, explore Lucerne on foot - cross the iconic Chapel Bridge (Kapellbrücke), Europe's oldest covered wooden bridge dating to 1333. See the moving Lion Monument, a sculpture carved into rock commemorating Swiss Guards who died in the French Revolution. Walk through the cobblestoned old town with its painted facades and watch boutiques. Evening, dinner at a lakefront restaurant. Try fondue - melted cheese into which you dip bread - Switzerland's national dish! The setting is magical as lights reflect on the lake.",
          highlights: ["Zurich Airport Arrival", "Train to Lucerne (1 hr)", "Chapel Bridge - Oldest in Europe", "Lion Monument Visit", "Old Town Evening Walk", "First Swiss Fondue Dinner"]
        },
        {
          day: 2,
          title: "Mount Pilatus & Lake Lucerne",
          description: "Today explores the mountain and lake around Lucerne. Board a boat for a scenic cruise on Lake Lucerne (1 hour) to Alpnachstad - the lake is surrounded by dramatic peaks reflected in the crystal waters. From Alpnachstad, ascend Mount Pilatus (2,132m) on the world's steepest cogwheel railway (48% gradient) - a thrilling climb up the mountain face! At the summit, panoramic views extend across the Alps and 73 peaks. Walk on the rocky summit, visit the mountain restaurants, and if brave, cross the suspensIon bridge. Descend on the aerial cableway and gondola to Kriens, then bus back to Lucerne. The 'Golden Round Trip' covers boat, train, cable car, and bus - quintessentially Swiss! Evening at leisure in Lucerne.",
          highlights: ["Lake Lucerne Scenic Cruise", "Mount Pilatus Cogwheel Train", "World's Steepest Railway (48%)", "2,132m Summit Panoramas", "Aerial Cableway Descent", "Golden Round Trip Complete"]
        },
        {
          day: 3,
          title: "Lucerne to Interlaken",
          description: "Train to Interlaken (2 hours), spectacularly located between two lakes (Thun and Brienz) with the Jungfrau massif as backdrop. The train journey via the Golden Pass route is stunning. Interlaken is the adventure capital of Switzerland and base for the famous Jungfrau region. Check into your hotel with mountain views. Afternoon, take a leisurely walk along the Höheweg promenade with views of Jungfrau, Mönch, and Eiger peaks. Visit the old town of Unterseen across the river. For the adventurous, optional activities include paragliding (tandem flights launch from mountains above!), helicopter rides, or cruises on either lake. Dinner at a traditional Swiss restaurant - try raclette (melted cheese scraped onto potatoes and pickles). Rest early - tomorrow is the big mountain day!",
          highlights: ["Scenic Train to Interlaken", "Between Two Lakes Setting", "Jungfrau Views from Town", "Höheweg Promenade Walk", "Optional Paragliding", "Raclette Swiss Dinner"]
        },
        {
          day: 4,
          title: "Jungfraujoch - Top of Europe",
          description: "The highlight for most visitors! Train from Interlaken to Jungfraujoch (3,454m), the highest railway station in Europe. The journey is spectacular - through villages of Grindelwald and Wengen, past the Eiger's notorious north face, and through tunnels carved inside the Eiger and Mönch mountains with viewing stops. At the 'Top of Europe,' step onto the Sphinx terrace for 360-degree Alpine views. Visit the Ice Palace carved inside the glacier, walk on the Aletsch Glacier (longest in the Alps), and on clear days see as far as the Black Forest in Germany. The thin air and brilliant light are exhilarating. Return via Kleine Scheidegg, where you can stop for photos of the iconic Eiger north face. Back in Interlaken by late afternoon. This is a day you'll never forget!",
          highlights: ["Jungfraujoch - Top of Europe", "3,454m Highest Railway", "Sphinx Terrace Panorama", "Ice Palace Inside Glacier", "Aletsch Glacier Walk", "Eiger North Face Views"]
        },
        {
          day: 5,
          title: "Interlaken to Zermatt",
          description: "Train to Zermatt (2.5 hours) via Visp. Zermatt is a car-free village at the foot of the iconic Matterhorn (4,478m), perhaps the world's most recognizable mountain. Electric taxis and horse-drawn carriages are the only transport. Check into your hotel and walk through the charming village of chalets and boutiques. The Matterhorn dominates the view at every turn. Afternoon, take the Gornergrat Railway (included in Swiss Pass) to 3,089m for the best Matterhorn views - the pyramid-shaped peak is surrounded by glaciers and peaks over 4,000m. Hot chocolate at the summit café is a must. Return and explore Zermatt's old village with its historic granaries (on stilts to keep mice out). Dinner at a traditional Walliser restaurant with local specialties.",
          highlights: ["Scenic Train to Zermatt", "Car-Free Mountain Village", "Matterhorn Icon Views", "Gornergrat Railway 3,089m", "360° Alpine Panorama", "Traditional Walliser Dinner"]
        },
        {
          day: 6,
          title: "Zermatt & Matterhorn Glacier Paradise",
          description: "Optional: Matterhorn Glacier Paradise (extra cost, world's highest cable car at 3,883m) for up-close Matterhorn views and year-round skiing on the glacier. The panoramic terrace offers views of 14 glaciers and 38 peaks over 4,000m! Otherwise, enjoy a leisurely day in Zermatt. Take the Sunnegga funicular for beautiful Matterhorn reflections in the Stellisee lake (short hike). Walk in the village, shopping for Swiss watches, chocolate, and souvenirs. Visit the Matterhorn Museum ('Zermattlantis') for the fascinating story of the first Matterhorn ascent in 1865 and the tragedy that followed. Final evening in Zermatt with a special dinner - perhaps fondue or rösti (Swiss potato dish) with Matterhorn views. The mountain glows pink at sunset - magical!",
          highlights: ["Optional Glacier Paradise 3,883m", "World's Highest Cable Car", "Sunnegga & Stellisee Hike", "Matterhorn Reflections", "Swiss Watch & Chocolate Shop", "Final Matterhorn Sunset"]
        },
        {
          day: 7,
          title: "Departure - Auf Wiedersehen",
          description: "Train from Zermatt to Zurich (3.5 hours) for your departure flight. The train journey through the Rhône Valley, past Visp, along Lake Thun, and into Zurich is a scenic finale. If time permits, explore Zurich briefly - walk along the Limmat River, see the Grossmünster church, or enjoy Swiss chocolate shops. Transfer to Zurich Airport. Switzerland has shown you some of the world's most spectacular mountain scenery - from Pilatus to Jungfrau to Matterhorn. You've cruised on pristine lakes, ridden the world's most scenic trains, and tasted chocolate, cheese, and fondue in charming villages. Auf Wiedersehen (German), Au revoir (French), Arrivederci (Italian), A revair (Romansch) - Switzerland's four languages say goodbye until you return!",
          highlights: ["Scenic Train to Zurich", "Rhône Valley Journey", "Optional Zurich Exploration", "Zurich Airport Transfer", "Alpine Memories Forever", "Auf Wiedersehen - Farewell"]
        }
      ]
    }
  ]
};

// France Packages
export const franceData: DestinationData = {
  id: "france",
  name: "France",
  tagline: "Art, Culture & Romance",
  description: "From the Eiffel Tower to lavender fields, from the French Riviera to historic châteaux - France offers art, gastronomy, and romance unmatched anywhere in the world.",
  heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1551887196-1c1e7c5e6c0a?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1500039436846-25ae2f11882e?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "france-romance",
      name: "Romantic France",
      duration: "8D/7N",
      originalPrice: 175000,
      currentPrice: 140000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=675&fit=crop",
      description: "The essential French experience covering Paris, Loire Valley châteaux, and the glamorous French Riviera with wine tasting, gastronomy, and iconic sights.",
      highlights: ["Eiffel Tower", "Palace of Versailles", "Loire Châteaux", "Nice & Monaco"],
      inclusions: ["7 Nights 4-Star Hotels", "Daily Breakfast", "Paris City Tour", "Versailles Entry", "TGV Trains", "All Transfers"],
      exclusions: ["International Flights", "Schengen Visa", "Lunch & Dinner", "Loire Wine Tasting", "Attraction Entry (except Versailles)"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Paris - City of Light",
          description: "Arrive at Paris Charles de Gaulle Airport and transfer to your hotel near the Opera or Champs-Élysées. Paris, the City of Light, needs no introduction - for centuries it has been the world's capital of art, fashion, and romance. After freshening up, take an evening walk along the Seine. Cross the elegant bridges, see the silhouette of Notre-Dame (under restoration), and walk past the illuminated Louvre pyramid. End at the Champ de Mars for your first view of the Eiffel Tower, sparkling with 20,000 lights every hour after sunset. Dinner at a classic Parisian bistro - onion soup, coq au vin, and crème brûlée with a glass of Bordeaux. The Parisian evening is magical!",
          highlights: ["Paris CDG Airport Arrival", "Hotel near Opera/Champs-Élysées", "Seine River Evening Walk", "Notre-Dame Silhouette", "Eiffel Tower First Sparkle", "Classic Bistro Dinner"]
        },
        {
          day: 2,
          title: "Paris Icons & Romance",
          description: "Full day exploring Paris icons. Start at the Louvre Museum - home to Mona Lisa, Venus de Milo, and 35,000 other masterpieces. Walk through the Tuileries Garden to Place de la Concorde, then up the Champs-Élysées to the Arc de Triomphe. Climb for panoramic views. Afternoon, ascend the Eiffel Tower - the summit at 276m offers incomparable views. Pre-book to avoid queues. Cross to the Trocadéro for classic tower photos. Evening in Montmartre - the artistic heart with Sacré-Cœur Basilica, Place du Tertre artists, and charming cobblestone streets. Optional: cabaret show at Moulin Rouge.",
          highlights: ["Louvre Museum - Mona Lisa", "Champs-Élysées Walk", "Arc de Triomphe Panorama", "Eiffel Tower Summit", "Montmartre Art District", "Sacré-Cœur Basilica"]
        },
        {
          day: 3,
          title: "Versailles & Marais",
          description: "Morning, take the RER train to the Palace of Versailles (45 mins). The ultimate symbol of French monarchy's extravagance. The Hall of Mirrors, royal apartments, and the vast gardens (40 km² of manicured lawns, fountains, and groves) are overwhelming. Return to Paris for late lunch. Afternoon, explore the Marais district - Paris's trendiest neighborhood with Jewish heritage, LGBTQ+ culture, designer boutiques, and medieval mansions. Visit Place des Vosges, Paris's oldest square. End at the Centre Pompidou for modern art or simply people-watch at the plaza. Evening dinner in the Marais at a contemporary French restaurant.",
          highlights: ["Versailles Palace Tour", "Hall of Mirrors Grandeur", "Royal Gardens Stroll", "Marais District Exploration", "Place des Vosges Beauty", "Centre Pompidou Modern Art"]
        },
        {
          day: 4,
          title: "Paris to Loire Valley",
          description: "TGV train to Tours (1.5 hours), gateway to the Loire Valley châteaux. The Loire Valley is a UNESCO World Heritage region known as the 'Garden of France' - Renaissance châteaux, vineyards, and gentle rivers. Rent a car or join a guided tour. Visit Château de Chenonceau, the most elegant château spanning the River Cher - built by women, including Diana de Poitiers and Catherine de Medici. Continue to Château de Chambord, the largest and most impressive with its iconic double helix staircase designed by Leonardo da Vinci. Wine tasting at a local producer - try Vouvray or Chinon wines. Overnight in Tours or nearby.",
          highlights: ["TGV to Loire Valley", "Château de Chenonceau", "Spanning River Cher", "Château de Chambord", "Leonardo's Double Staircase", "Loire Wine Tasting"]
        },
        {
          day: 5,
          title: "Loire Valley to Nice",
          description: "Morning, explore Amboise - the charming town where Leonardo da Vinci spent his final years. Visit his residence, Clos Lucé, with recreated models of his inventions. TGV or flight to Nice (direct flight 1.5 hours, or train via Paris 6 hours). Nice is the jewel of the French Riviera (Côte d'Azur). Check into your hotel near the Promenade des Anglais. Evening, walk the 7 km promenade along the Mediterranean - the blue sea, Belle Époque hotels, and palm trees create a perfect Riviera scene. Explore the old town (Vieux Nice) with its narrow streets, markets, and Italian-influenced architecture. Dinner of Niçoise specialties - Salade Niçoise, socca (chickpea pancake), pissaladière.",
          highlights: ["Leonardo's Clos Lucé", "Travel to Nice", "French Riviera Arrival", "Promenade des Anglais Walk", "Vieux Nice Old Town", "Niçoise Cuisine Dinner"]
        },
        {
          day: 6,
          title: "Monaco & Eze Village",
          description: "Day trip along the stunning Corniche roads. First stop: Eze, a medieval village perched 427m above the sea. Walk the narrow streets and visit the exotic garden at the summit for panoramic Riviera views. Continue to Monaco (20 mins from Eze), the tiny principality synonymous with wealth and glamour. Visit the Monte Carlo Casino (dress code applies, or just admire the exterior), the Prince's Palace for the changing of the guard, and the old town. Walk the F1 Grand Prix circuit - the world's most famous street race passes the casino and harbor. Lunch on the port overlooking superyachts. Return to Nice via the coastal road. Evening at leisure - beach, restaurants, or the Nice Jazz scene.",
          highlights: ["Eze Hilltop Village", "Exotic Garden Views", "Monaco Principality", "Monte Carlo Casino", "F1 Grand Prix Route", "Superyacht Harbor Lunch"]
        },
        {
          day: 7,
          title: "Nice & Riviera Leisure",
          description: "Day at leisure on the French Riviera. Options include: beach day on Nice's pebbly beaches with famous blue chairs; Matisse and Chagall museums in Nice; day trip to Cannes (famous for the film festival) or Saint-Tropez (celebrity playground); boat trip to the Lerins Islands; or simply exploring Nice's excellent food markets (Cours Saleya). For art lovers, the Fondation Maeght in Saint-Paul-de-Vence has an exceptional modern art collection in a stunning setting. Return to Nice for your final French dinner - perhaps at a Michelin-starred restaurant to celebrate your journey through France.",
          highlights: ["Choose Your Riviera Day", "Beach Relaxation Option", "Optional Cannes/St-Tropez", "Nice Markets & Museums", "Saint-Paul-de-Vence Art", "Farewell French Dinner"]
        },
        {
          day: 8,
          title: "Departure - Au Revoir",
          description: "Your French journey concludes. Enjoy a final breakfast with croissants, pain au chocolat, and café au lait - the quintessential French breakfast. Last-minute shopping for macarons, lavender products, and perfumes - Nice has excellent options. Transfer to Nice Côte d'Azur Airport for your departure. France has given you Paris's timeless romance, the grandeur of royal châteaux, and the Mediterranean glamour of the Riviera. You've tasted wine, cheese, and haute cuisine in the country that invented gastronomy. You've walked in the footsteps of kings, artists, and lovers. Au revoir, France - until you return!",
          highlights: ["Final French Breakfast", "Croissants & Café au Lait", "Last Macaron Shopping", "Nice Airport Transfer", "Art, Culture & Romance", "Au Revoir - Until Again"]
        }
      ]
    }
  ]
};

// Japan Packages
export const japanData: DestinationData = {
  id: "japan",
  name: "Japan",
  tagline: "Land of the Rising Sun",
  description: "Experience the perfect blend of ancient tradition and cutting-edge technology - from serene temples and cherry blossoms to neon-lit cities and bullet trains.",
  heroImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "japan-classic",
      name: "Classic Japan Journey",
      duration: "10D/9N",
      originalPrice: 225000,
      currentPrice: 180000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=675&fit=crop",
      description: "The essential Japan experience covering Tokyo's modernity, Kyoto's ancient temples, and Osaka's food culture with iconic sights and cultural immersion.",
      highlights: ["Tokyo Tower", "Kyoto Temples", "Mount Fuji Views", "Shinkansen Experience"],
      inclusions: ["9 Nights Hotels", "Daily Breakfast", "7-Day JR Pass", "Tokyo City Tour", "Kyoto Temple Tour", "All Transfers"],
      exclusions: ["International Flights", "Lunch & Dinner", "Temple Entry Fees", "Optional Activities"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Tokyo - Neon Metropolis",
          description: "Arrive at Narita or Haneda Airport and transfer to your hotel in central Tokyo. Tokyo, a city of 14 million, seamlessly blends ancient tradition with cutting-edge technology. After settling in, take an evening walk in Shinjuku - the neon-lit district with its towering skyscrapers, entertainment complexes, and vibrant energy. Visit the observation deck of Tokyo Metropolitan Government Building for free night views (or Tokyo Tower for the iconic experience). Explore the narrow alleys of Omoide Yokocho ('Memory Lane') for yakitori and sake at tiny counter-seat restaurants. The sensory overload of your first Tokyo evening is unforgettable. Welcome to the Land of the Rising Sun!",
          highlights: ["Tokyo Airport Arrival", "Central Tokyo Hotel", "Shinjuku Neon Evening", "Free Observation Deck Views", "Omoide Yokocho Alleys", "First Yakitori & Sake"]
        },
        {
          day: 2,
          title: "Tokyo Traditional & Modern",
          description: "Full day exploring Tokyo's contrasts. Start at Senso-ji Temple in Asakusa, Tokyo's oldest temple founded in 628 AD. Walk through Nakamise shopping street for traditional souvenirs. Cross to the modern with a walk through Ginza, Tokyo's most upscale shopping district with flagship stores and contemporary architecture. Afternoon, visit the Meiji Shrine set in a forested area of 170,000 trees - a serene contrast to surrounding Harajuku's youth culture. Walk down Takeshita Street for a dose of colorful Harajuku fashion and crêpes. Evening in Shibuya - see the famous scramble crossing where up to 3,000 people cross simultaneously, shop in 109 building, and enjoy dinner in the entertainment district.",
          highlights: ["Senso-ji Temple - Oldest in Tokyo", "Nakamise Shopping Street", "Ginza Luxury District", "Meiji Shrine Forest Peace", "Harajuku Youth Culture", "Shibuya Scramble Crossing"]
        },
        {
          day: 3,
          title: "Day Trip to Mount Fuji & Hakone",
          description: "Day excursion to Japan's iconic Mount Fuji (3,776m) and Hakone. Take the Romancecar express to Hakone (90 mins). At Hakone, board a ropeway cable car for stunning views of Fuji on clear days, then descend to Owakudani volcanic valley with its sulphurous hot springs and black eggs (said to add 7 years to your life!). Lake Ashi cruise offers classic Fuji reflections in the water. Visit a traditional onsen (hot spring bath) for the authentic Japanese bathing experience - relaxation after the journey! Return to Tokyo by late afternoon/evening. Fuji is sacred in Japanese culture - this day connects you with that spirituality.",
          highlights: ["Romancecar to Hakone", "Ropeway with Fuji Views", "Owakudani Volcanic Valley", "Black Egg for 7 Years Life", "Lake Ashi Cruise", "Traditional Onsen Bath"]
        },
        {
          day: 4,
          title: "Tokyo to Kyoto - Shinkansen Experience",
          description: "Experience the famous Shinkansen (bullet train) from Tokyo to Kyoto (2.5 hours, 478 km, max speed 285 km/h). The efficient, punctual train service is a Japanese engineering marvel. Watch Mt. Fuji pass outside your window on clear days. Arrive in Kyoto, Japan's cultural capital with over 2,000 temples and shrines. Check into your hotel, ideally in a traditional ryokan (Japanese inn) for the full experience. Afternoon, visit the Fushimi Inari Shrine with its famous 10,000 vermillion torii gates winding up the mountainside - the most iconic image of Japan. Walk as far as time permits (the summit takes 2-3 hours). Evening, explore Gion, Kyoto's traditional geisha district - you may spot a geiko (geisha) or maiko (apprentice) hurrying to an engagement.",
          highlights: ["Shinkansen Bullet Train", "285 km/h Speed Experience", "Kyoto Cultural Capital", "Optional Ryokan Stay", "Fushimi Inari 10,000 Gates", "Gion Geisha District Evening"]
        },
        {
          day: 5,
          title: "Kyoto Temples & Gardens",
          description: "Full day of Kyoto's treasures. Start early at Kinkaku-ji (Golden Pavilion), covered in gold leaf and reflected in its pond - one of Japan's most beautiful sights. Visit Ryoan-ji with its famous Zen rock garden - contemplation of the 15 stones is said to bring enlightenment. Lunch in Arashiyama and walk through the famous Bamboo Grove - sunlight filtering through towering bamboo creates a magical atmosphere. Cross the Togetsukyo Bridge and visit Tenryu-ji Temple's gardens. Return to central Kyoto for Nijo Castle, with its 'nightingale floors' designed to chirp and warn of intruders. Evening, explore Pontocho alley's traditional restaurants for a kaiseki (multi-course) dinner if budget permits.",
          highlights: ["Kinkaku-ji Golden Pavilion", "Ryoan-ji Zen Rock Garden", "Arashiyama Bamboo Grove", "Togetsukyo Bridge", "Nijo Castle Nightingale Floors", "Optional Kaiseki Dinner"]
        },
        {
          day: 6,
          title: "Day Trip to Nara - Deer & Buddha",
          description: "Day trip to Nara (45 mins from Kyoto), Japan's first permanent capital. Nara Park is famous for its 1,200+ friendly deer, considered divine messengers - you can buy crackers to feed them (watch for bows!). Visit Todai-ji Temple, housing the world's largest bronze Buddha (15m tall) in the world's largest wooden building. The scale is overwhelming. Walk to Kasuga Taisha Shrine with its thousands of stone and bronze lanterns, then through the primeval forest surrounding it. Return to Kyoto. Evening, experience a traditional tea ceremony - the ritual preparation and drinking of matcha in a tatami room embodies Japanese aesthetics of harmony, respect, purity, and tranquility.",
          highlights: ["Nara Park Sacred Deer", "Deer Bowing for Crackers", "Todai-ji Great Buddha", "World's Largest Wooden Building", "Kasuga Shrine Lanterns", "Tea Ceremony Experience"]
        },
        {
          day: 7,
          title: "Kyoto to Hiroshima & Miyajima",
          description: "Day trip to Hiroshima (90 mins by Shinkansen). Visit the Hiroshima Peace Memorial Park and Museum - a moving experience commemorating the atomic bombing of August 6, 1945. The A-Bomb Dome, preserved as it stood after the blast, is a UNESCO World Heritage Site and powerful symbol of peace. Take the ferry to Miyajima Island to see the famous 'floating' torii gate of Itsukushima Shrine - one of Japan's most iconic images. At high tide, the gate appears to float; at low tide, you can walk to it. Explore the island, see wild deer, and try momiji manju (maple leaf-shaped cakes). Return to Kyoto by evening. This day balances sobering history with natural beauty.",
          highlights: ["Shinkansen to Hiroshima", "Peace Memorial Park", "A-Bomb Dome UNESCO Site", "Miyajima Island Ferry", "Floating Torii Gate", "Momiji Manju Cakes"]
        },
        {
          day: 8,
          title: "Kyoto to Osaka - Food Capital",
          description: "Train to Osaka (15 mins), Japan's kitchen and street food capital. Osakans are famous for loving food - 'kuidaore' means eating until you drop! Check into your hotel and head straight to food exploration. Start at Dotonbori, the neon-lit food street with its famous Glico Running Man sign. Try takoyaki (octopus balls), okonomiyaki (savory pancake), kushikatsu (deep-fried skewers), and gyoza (dumplings). Explore the covered Shinsaibashi shopping arcade. For contrast, visit Osaka Castle, one of Japan's most famous landmarks. Evening, explore the nightlife of Namba - izakayas (pubs), karaoke, and endless entertainment. Osaka's energy is different from Tokyo - earthier, friendlier, and food-obsessed!",
          highlights: ["Train to Osaka", "Dotonbori Food Street", "Takoyaki & Okonomiyaki", "Glico Running Man Icon", "Osaka Castle Visit", "Namba Nightlife"]
        },
        {
          day: 9,
          title: "Osaka Day & Universal Studios Option",
          description: "Day at leisure in Osaka. Options include: Universal Studios Japan (extra cost) with its Wizarding World of Harry Potter and new Super Nintendo World - excellent for families and theme park lovers. Alternatively, explore more of Osaka - the Umeda Sky Building for rooftop views, Shinsekai retro district, Kuromon Market for the freshest seafood, or day trip to nearby Kobe (30 mins) for famous beef and harbor views. For a traditional option, visit the atmospheric Sumiyoshi Taisha, one of Japan's oldest shrines. Final evening in Osaka - perhaps splurge on real Kobe beef or enjoy a final food tour through the backstreets.",
          highlights: ["Choose Your Osaka Day", "Optional Universal Studios", "Super Nintendo World", "Kuromon Market Fresh Seafood", "Optional Kobe Beef Trip", "Final Japanese Feast"]
        },
        {
          day: 10,
          title: "Departure - Sayonara",
          description: "Transfer to Kansai International Airport (45 mins from Osaka) for your departure. If time permits, last-minute shopping for Japanese souvenirs - matcha snacks, sake, ceramics, or electronics. Japan has shown you its extraordinary blend of ancient and modern - serene temples and neon cities, the precision of Shinkansen and the soul of geisha, the tragedy of Hiroshima and the joy of Osaka's food culture. You've experienced the famous Japanese hospitality ('omotenashi'), the beauty of gardens, and the innovation of technology. Sayonara, Japan - may the harmony you've found here stay with you. Mata aimashou (Let's meet again)!",
          highlights: ["Kansai Airport Transfer", "Last Japanese Shopping", "Matcha Snacks & Sake", "Ancient & Modern Memories", "Omotenashi Hospitality", "Sayonara - Until Again"]
        }
      ]
    }
  ]
};

// Vietnam Packages
export const vietnamData: DestinationData = {
  id: "vietnam",
  name: "Vietnam",
  tagline: "Timeless Charm",
  description: "Discover a country of breathtaking beauty - from Halong Bay's limestone karsts to ancient Hoi An, French colonial Hanoi to vibrant Ho Chi Minh City.",
  heroImage: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1464817739973-0128fe77aed1?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "vietnam-discovery",
      name: "Vietnam Discovery",
      duration: "10D/9N",
      originalPrice: 95000,
      currentPrice: 76000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&h=675&fit=crop",
      description: "Complete Vietnam journey from north to south covering Hanoi, Halong Bay, Hue, Hoi An, and Ho Chi Minh City with stunning scenery and rich culture.",
      highlights: ["Halong Bay Cruise", "Hoi An Ancient Town", "Hue Imperial City", "Cu Chi Tunnels"],
      inclusions: ["9 Nights Hotels", "Daily Breakfast", "Halong Bay Overnight Cruise", "Domestic Flights", "Guided Tours", "All Transfers"],
      exclusions: ["International Flights", "Visa Fee", "Lunch & Dinner", "Optional Activities"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Hanoi - Heart of Vietnam",
          description: "Arrive at Noi Bai International Airport and transfer to your hotel in the Old Quarter (30 mins). Hanoi, Vietnam's capital, is a city of tree-lined boulevards, French colonial architecture, ancient pagodas, and a vibrant street life. The Old Quarter, with its 36 streets each originally dedicated to a trade, is one of Asia's most atmospheric neighborhoods. After freshening up, explore on foot - weave through the narrow streets filled with motorbikes, street vendors, and tiny shops. Visit Hoan Kiem Lake, the spiritual heart of Hanoi, with its red Huc Bridge leading to Ngoc Son Temple on an island. Evening, try the famous street food - pho (noodle soup), bun cha (grilled pork), and egg coffee at a tiny plastic stool cafe. Welcome to Vietnam!",
          highlights: ["Hanoi Airport Arrival", "Old Quarter Hotel Check-in", "36 Ancient Trade Streets", "Hoan Kiem Lake Walk", "Ngoc Son Temple Island", "Pho & Egg Coffee First Taste"]
        },
        {
          day: 2,
          title: "Hanoi Heritage Day",
          description: "Full day exploring Hanoi's heritage. Start at the Ho Chi Minh Mausoleum complex (closed Mon/Fri) - see the embalmed body of 'Uncle Ho,' the revered revolutionary leader. Visit the Presidential Palace and One Pillar Pagoda nearby. Explore the Temple of Literature (1070 AD), Vietnam's first university and a serene complex of gardens, pavilions, and stone stelae. Lunch at a local restaurant - try banh mi (Vietnamese baguette). Afternoon, visit the fascinating Vietnamese Women's Museum or the sobering Hoa Lo Prison ('Hanoi Hilton') where American POWs were held. Evening, attend the traditional Water Puppet Theatre - a unique Vietnamese art form with puppets performing on water to traditional music. Night street food tour optional.",
          highlights: ["Ho Chi Minh Mausoleum", "One Pillar Pagoda", "Temple of Literature", "Banh Mi Lunch", "Vietnamese Women's Museum", "Water Puppet Theatre"]
        },
        {
          day: 3,
          title: "Hanoi to Halong Bay Cruise",
          description: "Drive to Halong Bay (170 km, approx. 3.5 hours), a UNESCO World Heritage Site of breathtaking beauty. Nearly 2,000 limestone islands and islets rise dramatically from the emerald waters of the Gulf of Tonkin. Board your overnight junk boat (traditional Vietnamese sailing boat) and begin cruising among the karsts. Lunch is served onboard as you sail - fresh seafood is the specialty. Afternoon, visit Sung Sot Cave (Surprising Cave), one of the largest and most beautiful in Halong with its dramatic chambers. Try kayaking among the karsts or swim from the boat deck. Watch the sunset over the bay - the changing light painting the limestone formations is magical. Seafood dinner on the boat, then night squid fishing or simply stargazing on deck.",
          highlights: ["Drive to Halong Bay", "UNESCO World Heritage", "Overnight Junk Boat", "Sung Sot Cave Exploration", "Kayaking Among Karsts", "Sunset Over Limestone Islands"]
        },
        {
          day: 4,
          title: "Halong Bay to Hanoi, Fly to Hue",
          description: "Wake up for sunrise over Halong Bay - the morning mist and golden light create ethereal beauty. Tai chi session on deck if you're energetic! Brunch on board as you cruise back to the harbor. Return to Hanoi (approx. 3 hours), then transfer to the airport for your flight to Hue (1 hour). Hue, the former imperial capital of Vietnam's Nguyen dynasty (1802-1945), is a city of royal tombs, pagodas, and the walled Citadel. Check into your hotel by the Perfume River. Evening, take a sunset dragon boat cruise on the Perfume River, passing the iconic Thien Mu Pagoda. Dinner of Hue's famous royal cuisine - the city is known for elaborate dishes once served to emperors.",
          highlights: ["Halong Bay Sunrise", "Tai Chi on Deck", "Return Drive & Flight to Hue", "Former Imperial Capital", "Perfume River Dragon Boat", "Royal Hue Cuisine Dinner"]
        },
        {
          day: 5,
          title: "Hue Imperial City & Tombs",
          description: "Full day exploring Hue's imperial heritage. Start at the Citadel, a massive walled fortress within which lies the Imperial City (Forbidden Purple City), modeled on Beijing's Forbidden City. Damaged during the Vietnam War, restoration continues, but the scale and remains are impressive. Visit the grand Ngo Mon Gate, Thai Hoa Palace, and remaining temples and pavilions. After lunch, visit the elaborate Royal Tombs - Emperor Tu Duc's tomb is the most beautiful, set in peaceful gardens; Emperor Khai Dinh's is the most ornate, blending Eastern and Western styles. En route, stop at Thien Mu Pagoda, the iconic seven-story tower. Evening at leisure to explore Hue's night market by the river.",
          highlights: ["Imperial Citadel Complex", "Forbidden Purple City", "Ngo Mon Gate & Thai Hoa Palace", "Tu Duc Royal Tomb", "Khai Dinh Ornate Tomb", "Thien Mu Pagoda Seven Tiers"]
        },
        {
          day: 6,
          title: "Hue to Hoi An via Hai Van Pass",
          description: "Scenic drive to Hoi An (130 km, approx. 4 hours) via the legendary Hai Van Pass, made famous by Top Gear as one of the world's most scenic coastal roads. The road climbs to 500m with dramatic views of the coastline, rice paddies, and fishing villages below. Stop at Da Nang to see the Marble Mountains - five limestone hills with Buddhist sanctuaries and caves. Arrive in Hoi An, a perfectly preserved 15th-17th century trading port and UNESCO World Heritage Site. The ancient town is a living museum with Japanese, Chinese, and French influences. Check into your hotel and spend the evening exploring the lantern-lit Old Town - the Japanese Covered Bridge, Assembly Halls, and ancient merchants' houses. Magic!",
          highlights: ["Hai Van Pass Scenic Drive", "Top Gear's Best Coastal Road", "Da Nang Marble Mountains", "Hoi An UNESCO Arrival", "Ancient Trading Port", "Lantern-Lit Evening Walk"]
        },
        {
          day: 7,
          title: "Hoi An Ancient Town",
          description: "Full day in Hoi An, one of Southeast Asia's most enchanting towns. Morning walking tour of the ancient town - visit the 400-year-old Japanese Covered Bridge, Cantonese Assembly Hall with its colorful decorations, and the Old House of Tan Ky (200 years old). Stop at a traditional handicraft workshop to see lantern-making or silk production. Hoi An is famous for tailoring - have clothes custom-made in 24 hours! Afternoon, optional cycling through rice paddies to Tra Que vegetable village and beach. Or take a cooking class - learn to make cao lau (Hoi An's signature noodle dish), white rose dumplings, and fresh spring rolls using local ingredients. Evening, release a lantern on the river for good luck. The full moon festival (monthly) is especially beautiful.",
          highlights: ["Japanese Covered Bridge", "Cantonese Assembly Hall", "Old House of Tan Ky", "Famous Tailor Shops", "Optional Cooking Class", "Release Lantern on River"]
        },
        {
          day: 8,
          title: "Fly to Ho Chi Minh City",
          description: "Morning flight from Da Nang to Ho Chi Minh City (1.5 hours), Vietnam's largest city, formerly Saigon. This bustling metropolis of 9 million is a whirlwind of energy, commerce, and history. Check into your hotel in District 1. Afternoon tour of the city's landmarks - the iconic Central Post Office designed by Gustave Eiffel, Notre-Dame Cathedral (under restoration), the Reunification Palace where the Vietnam War ended in 1975, and the moving War Remnants Museum documenting the conflict. Walk down Dong Khoi Street, the main shopping street lined with designer boutiques and colonial buildings. Evening, explore Ben Thanh Night Market for street food and souvenirs. Try banh xeo (crispy pancake) and com tam (broken rice).",
          highlights: ["Flight to Ho Chi Minh City", "Central Post Office by Eiffel", "Reunification Palace History", "War Remnants Museum", "Dong Khoi Street Shopping", "Ben Thanh Night Market"]
        },
        {
          day: 9,
          title: "Cu Chi Tunnels & Mekong Delta",
          description: "Early departure for the Cu Chi Tunnels (70 km, approx. 1.5 hours), the incredible underground network used by Viet Cong during the war. Descend into the tunnels (widened for tourists) to understand the claustrophobic conditions soldiers endured. See booby traps, living quarters, and the ingenuity of the guerrilla fighters. After lunch, drive to the Mekong Delta (60 km further) for a boat trip on the 'rice bowl of Vietnam.' Cruise through narrow canals, visit local villages, see traditional crafts, sample tropical fruits, and experience the rhythm of life on the water. Return to Ho Chi Minh City by evening. Final dinner at a rooftop bar overlooking the glittering city - perhaps the Rex Hotel for historical atmosphere.",
          highlights: ["Cu Chi Tunnel Network", "Underground Descent", "War History Immersion", "Mekong Delta Boat Trip", "Village Life on Water", "Rooftop Farewell Dinner"]
        },
        {
          day: 10,
          title: "Departure - Tam Biet",
          description: "Your Vietnam journey concludes. Enjoy a final breakfast of pho or banh mi. If time permits, last-minute shopping for lacquerware, silk, ao dai (traditional dress), or Vietnamese coffee. Transfer to Tan Son Nhat Airport for your departure. Vietnam has shown you extraordinary beauty - the surreal seascape of Halong Bay, the ancient lanterns of Hoi An, the imperial grandeur of Hue, and the dynamic energy of its cities. You've tasted the world's best street food, learned of a complex history, and experienced the warmth of Vietnamese people. Tam Biet (Goodbye) - may the spirit of Vietnam stay with you!",
          highlights: ["Final Vietnamese Breakfast", "Lacquerware & Silk Shopping", "Vietnamese Coffee Gifts", "Airport Transfer", "Halong to Hoi An Memories", "Tam Biet - Farewell"]
        }
      ]
    }
  ]
};

// Bhutan Packages
export const bhutanData: DestinationData = {
  id: "bhutan",
  name: "Bhutan",
  tagline: "Land of Happiness",
  description: "Enter the last Himalayan kingdom where Gross National Happiness matters more than GDP - ancient monasteries, pristine nature, and a living Buddhist culture await.",
  heroImage: "https://images.unsplash.com/photo-1609766857326-18a217692f37?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1609766857326-18a217692f37?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1587922546307-776227941871?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "bhutan-happiness",
      name: "Kingdom of Happiness",
      duration: "7D/6N",
      originalPrice: 125000,
      currentPrice: 100000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1609766857326-18a217692f37?w=1200&h=675&fit=crop",
      description: "Complete Bhutan experience covering Paro, Thimphu, and Punakha with the iconic Tiger's Nest, ancient dzongs, and immersion in Buddhist culture.",
      highlights: ["Tiger's Nest Monastery", "Thimphu Tashichho Dzong", "Punakha Dzong", "Buddhist Festivals"],
      inclusions: ["6 Nights Hotels", "All Meals (Breakfast, Lunch, Dinner)", "Licensed Bhutanese Guide", "All Entry Fees", "Sustainable Development Fee", "All Transfers"],
      exclusions: ["International Flights", "Bhutan Visa Fee", "Personal Expenses", "Tips for Guide & Driver", "Hot Stone Bath"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Paro - Mountain Kingdom",
          description: "Fly into Paro, one of the world's most dramatic airport approaches - the plane weaves between Himalayan peaks before landing in this small valley. As you exit the beautiful wooden airport (one of the few traditional-style airports in the world), you're greeted by your Bhutanese guide and driver who will be with you throughout. Bhutan requires tourists to travel with a licensed guide. The clean mountain air, traditional architecture, and colorful prayer flags immediately signal you've entered somewhere special. Check into your hotel and freshen up. Afternoon, visit the National Museum (Ta Dzong) in a former watchtower, and Paro Rinpung Dzong, a massive fortress-monastery. Walk across the traditional cantilever bridge. Evening, your first Bhutanese meal - try ema datshi (cheese and chili, the national dish)!",
          highlights: ["Dramatic Paro Flight Landing", "Traditional Wooden Airport", "Meet Your Guide & Driver", "Ta Dzong National Museum", "Rinpung Dzong Fortress", "First Ema Datshi Dinner"]
        },
        {
          day: 2,
          title: "Tiger's Nest Trek - Iconic Bhutan",
          description: "Today is the highlight - the trek to Tiger's Nest (Taktsang) Monastery, Bhutan's most iconic site. Clinging to a cliff 900m above the Paro Valley, this sacred monastery marks where Guru Rinpoche (Padmasambhava) flew on a tigress and meditated in a cave. The trek is 5-6 hours round trip (10 km, 900m elevation gain). Start early and ascend through blue pine forests with prayer flags fluttering. Stop at the cafeteria halfway for tea and stunning views. The final approach involves descending into and climbing out of a waterfall ravine. Inside the monastery, the atmosphere is deeply spiritual - incense, chanting, and centuries of devotion. Descend carefully. Upon return, treat yourself to a traditional hot stone bath - river stones heated and placed in a wooden tub with herbs.",
          highlights: ["Trek to Tiger's Nest", "Clinging 900m Above Valley", "Guru Rinpoche's Meditation Cave", "5-6 Hour Sacred Trek", "Inside Ancient Monastery", "Traditional Hot Stone Bath Reward"]
        },
        {
          day: 3,
          title: "Paro to Thimphu - Capital City",
          description: "Drive to Thimphu (65 km, approx. 1.5 hours), Bhutan's capital and the only capital in the world without traffic lights (a policeman directs traffic from an ornate booth!). Thimphu is a charming town of 100,000 that blends tradition with modernity. Visit the Memorial Chorten, a popular circumambulation site for devotees. See the Buddha Dordenma, a massive gilded Buddha statue overlooking the valley. Explore the Folk Heritage Museum to understand traditional Bhutanese life. Walk through the handicrafts market for handwoven textiles, masks, and crafts. Evening, visit the Tashichho Dzong, the 'fortress of the glorious religion,' which houses the throne room and government offices - beautiful at sunset when floodlit.",
          highlights: ["Drive to Thimphu Capital", "No Traffic Lights City", "Memorial Chorten Visit", "Buddha Dordenma Statue", "Folk Heritage Museum", "Tashichho Dzong Sunset"]
        },
        {
          day: 4,
          title: "Thimphu Exploration",
          description: "Full day in Thimphu. Visit the National Library with ancient Buddhist texts and the Institute for Zorig Chusum (13 traditional arts and crafts) where students learn painting, sculpture, and weaving. Stop at the Takin Preserve to see Bhutan's national animal - the takin, a bizarre-looking goat-antelope found only in the Eastern Himalayas. Lunch at a local restaurant. Afternoon, watch archery - Bhutan's national sport. If you're lucky, a local match will be in progress, complete with traditional songs and dances when teams score. Visit a paper factory making handmade paper from daphne bark, used for religious texts. Evening, explore Thimphu's cafes and shops. Optional: cooking class to learn Bhutanese cuisine.",
          highlights: ["National Library Texts", "School of 13 Arts", "Takin National Animal", "Archery National Sport", "Handmade Paper Factory", "Thimphu Evening Exploration"]
        },
        {
          day: 5,
          title: "Thimphu to Punakha via Dochula Pass",
          description: "Drive to Punakha (75 km, approx. 3 hours) via the stunning Dochula Pass (3,100m). On clear days, the pass offers panoramic views of the Himalayan range including Bhutan's highest peaks. The 108 chortens (stupas) at the pass create an iconic Bhutanese image. Continue descending through lush valleys to Punakha, the former winter capital at the junction of two rivers. Visit the magnificent Punakha Dzong, arguably Bhutan's most beautiful fortress-monastery. Built in 1637, it sits at the confluence of the Mo Chhu (Mother River) and Pho Chhu (Father River). Cross the longest suspension bridge in Bhutan to reach Punakha village. Evening, walk through the village and observe rural Bhutanese life.",
          highlights: ["Dochula Pass 3,100m", "108 Chortens Memorial", "Himalayan Peak Panorama", "Punakha Dzong Beauty", "Two Rivers Confluence", "Longest Suspension Bridge"]
        },
        {
          day: 6,
          title: "Punakha Valley & Return to Paro",
          description: "Morning, gentle hike through rice paddies to Chimi Lhakhang, the 'fertility temple' dedicated to the 'Divine Madman' Drukpa Kunley. Couples seeking children visit this temple, and the phallus symbols on houses throughout Bhutan reference his unconventional teaching style! The walk through the village and fields is beautiful. Return to Paro via Dochula Pass (3.5 hours), stopping for lunch at the pass restaurant. Afternoon in Paro for last explorations or rest. Evening, farewell dinner with your guide - by now you've become friends. Discuss Gross National Happiness and what you've learned about Bhutanese values. Exchange contacts - many visitors keep in touch with their guides for years!",
          highlights: ["Chimi Lhakhang Fertility Temple", "Rice Paddy Walk", "Divine Madman Stories", "Return via Dochula Pass", "Farewell Dinner with Guide", "Gross National Happiness Talk"]
        },
        {
          day: 7,
          title: "Departure - Tashi Delek",
          description: "Your Bhutan journey concludes. Depending on flight time, enjoy a final Bhutanese breakfast and perhaps last-minute shopping for handwoven textiles, prayer flags, or wooden masks. The flight out of Paro is as spectacular as the arrival - enjoy the aerial views of the peaks and valleys you've explored. You leave Bhutan different from how you arrived - the kingdom's emphasis on happiness, spiritual values, and harmony with nature provides perspective rarely found in the modern world. Bhutan, with its carbon-negative environment, preserved culture, and genuine people, has given you a glimpse of how life could be. Tashi Delek (May all auspicious signs come to you) - carry the Bhutanese peace home with you!",
          highlights: ["Final Bhutanese Breakfast", "Textile & Craft Shopping", "Dramatic Flight Departure", "Aerial Valley Views", "Lessons of Happiness", "Tashi Delek - Farewell"]
        }
      ]
    }
  ]
};

// USA Packages
export const usaData: DestinationData = {
  id: "usa",
  name: "USA",
  tagline: "Land of Dreams",
  description: "From New York's skyline to California's coast, from natural wonders to theme parks - America offers endless diversity in a single country.",
  heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "usa-highlights",
      name: "American Dream",
      duration: "12D/11N",
      originalPrice: 325000,
      currentPrice: 260000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=675&fit=crop",
      description: "Ultimate USA journey covering New York, Las Vegas, Grand Canyon, Los Angeles, and San Francisco - iconic cities and natural wonders in one trip.",
      highlights: ["Statue of Liberty", "Grand Canyon", "Hollywood", "Golden Gate Bridge"],
      inclusions: ["11 Nights 4-Star Hotels", "Daily Breakfast", "Domestic Flights", "City Tours", "Grand Canyon Day Trip", "All Transfers"],
      exclusions: ["International Flights", "ESTA/Visa", "Lunch & Dinner", "Theme Park Tickets", "Optional Activities"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in New York - The Big Apple",
          description: "Arrive at JFK or Newark Airport and transfer to your hotel in Manhattan. New York City, the city that never sleeps, is a world unto itself - 8 million people, iconic skyline, and neighborhoods each with their own character. After settling in, take your first walk - perhaps through Times Square where the neon lights are overwhelming, or to the Vessel at Hudson Yards. The energy of NYC is palpable from the first moment. Evening, explore a neighborhood for dinner - Hell's Kitchen, Koreatown, or the East Village each offer excellent options. Welcome to America!",
          highlights: ["JFK/Newark Airport Arrival", "Manhattan Hotel Check-in", "Times Square Neon Walk", "Hudson Yards Option", "NYC Energy Immersion", "Neighborhood Dinner Exploration"]
        },
        {
          day: 2,
          title: "New York Icons",
          description: "Full day of NYC icons. Start with the Statue of Liberty and Ellis Island ferry - see the symbol of American freedom and the immigrant gateway where 12 million entered the USA. Walk Wall Street to see the New York Stock Exchange and Charging Bull. Visit the 9/11 Memorial & Museum, a moving tribute to the nearly 3,000 who died. Walk across the Brooklyn Bridge for Manhattan skyline photos. Evening, see a Broadway show - the pinnacle of musical theater. From Hamilton to Wicked, the options are world-class.",
          highlights: ["Statue of Liberty Ferry", "Ellis Island Immigration History", "9/11 Memorial & Museum", "Wall Street & Charging Bull", "Brooklyn Bridge Walk", "Broadway Show Evening"]
        },
        {
          day: 3,
          title: "New York Art & Culture",
          description: "Explore NYC's cultural treasures. Central Park morning walk or bike ride - the 843-acre green heart of Manhattan. Visit the Metropolitan Museum of Art ('The Met'), one of the world's greatest art museums with over 2 million works. Afternoon, explore Fifth Avenue for luxury shopping past St. Patrick's Cathedral. Walk through Rockefeller Center. For sunset views, Top of the Rock observation deck offers the best skyline panorama (including the Empire State Building in view). Evening, explore SoHo or Greenwich Village for dinner and nightlife.",
          highlights: ["Central Park Morning Walk", "Metropolitan Museum of Art", "Fifth Avenue Luxury Row", "Rockefeller Center", "Top of the Rock Sunset", "SoHo/Village Evening"]
        },
        {
          day: 4,
          title: "Fly to Las Vegas - Sin City",
          description: "Fly from New York to Las Vegas (5.5 hours). Vegas rises from the Nevada desert as an adult playground of casinos, shows, and excess. Check into your hotel on the Strip - the 4-mile stretch of themed mega-resorts is unlike anywhere on Earth. Explore the Strip on foot - see the Bellagio fountains, enter themed hotels (Venice's canals, Paris's Eiffel Tower, NYC skyline at New York-New York), and marvel at the spectacle. Evening, catch a show - Cirque du Soleil, magicians, comedy, music - Vegas has it all. The neon lights against the desert night sky are surreal.",
          highlights: ["Flight NYC to Las Vegas", "The Strip Mega-Resorts", "Bellagio Fountains", "Themed Hotel Exploration", "Cirque du Soleil Option", "Neon Desert Night"]
        },
        {
          day: 5,
          title: "Grand Canyon Day Trip",
          description: "Day trip to the Grand Canyon (280 miles, bus tour or small plane optional). The Grand Canyon is 277 miles long, up to 18 miles wide, and over a mile deep - one of Earth's most awe-inspiring natural wonders. Visit the South Rim viewpoints - Mather Point, Yavapai Point, and others offer different perspectives of the layered red rocks carved over millions of years. Optional experiences include helicopter flights over the canyon or the glass-floored Skywalk at Grand Canyon West (different location). Return to Las Vegas by evening for free time on the Strip.",
          highlights: ["Grand Canyon Day Trip", "277 Miles Long Chasm", "South Rim Viewpoints", "Millions of Years History", "Optional Helicopter Flight", "Return to Vegas Evening"]
        },
        {
          day: 6,
          title: "Fly to Los Angeles - City of Angels",
          description: "Fly to Los Angeles (1 hour). LA is a sprawling metropolis of entertainment, beaches, and dreams. Check into your hotel in Hollywood or Beverly Hills area. Afternoon, Hollywood Walk of Fame - spot stars of your favorite celebrities on the sidewalk. See the TCL Chinese Theatre with celebrity handprints in cement. Drive past the Hollywood Sign for photo ops. Visit Griffith Observatory for panoramic views of LA and the Hollywood Sign. Sunset from here is spectacular. Evening on Hollywood Boulevard or explore West Hollywood's dining scene.",
          highlights: ["Flight to Los Angeles", "Hollywood Walk of Fame", "TCL Chinese Theatre", "Hollywood Sign Views", "Griffith Observatory Sunset", "Hollywood Boulevard Evening"]
        },
        {
          day: 7,
          title: "Beverly Hills & Santa Monica",
          description: "Explore LA's famous neighborhoods. Drive through Beverly Hills - Rodeo Drive's luxury boutiques, immaculate lawns, and celebrity mansions. The wealth on display is extraordinary. Continue to Santa Monica - the beach, pier with its Ferris wheel, and Third Street Promenade create a relaxed California vibe. Walk or bike the beach path to Venice Beach for its famous boardwalk of street performers, Muscle Beach, and bohemian spirit. For movie fans, Warner Bros. or Universal Studios tours offer behind-the-scenes Hollywood magic. Evening dinner in Santa Monica with Pacific sunset views.",
          highlights: ["Beverly Hills Drive", "Rodeo Drive Luxury", "Santa Monica Pier", "Venice Beach Boardwalk", "Optional Studio Tour", "Pacific Sunset Dinner"]
        },
        {
          day: 8,
          title: "LA Theme Park or Leisure",
          description: "Full day of choice. Universal Studios Hollywood combines a theme park with a real working studio - the Studio Tour tram ride through backlots is unique. Harry Potter's Wizarding World and other rides thrill. Alternatively, Disneyland (in Anaheim, 35 miles) is the 'Happiest Place on Earth' - the original Disney theme park. For non-theme park options, explore the Getty Center (free admission, stunning art and architecture), LACMA art museum, or the La Brea Tar Pits. Beach day at Malibu is another option. Evening at leisure in your area of choice.",
          highlights: ["Universal Studios Hollywood", "Or Disneyland Original", "Or Getty Center Free Art", "Or Malibu Beach Day", "Choose Your LA Adventure", "Evening at Leisure"]
        },
        {
          day: 9,
          title: "Drive to San Francisco (Coastal Option)",
          description: "Option 1: Fly to San Francisco (1.5 hours) for full day in city. Option 2: Scenic drive up the Pacific Coast Highway (5-7 hours) - one of America's most beautiful drives. PCH passes Malibu, Santa Barbara (Spanish mission town), Big Sur's dramatic cliffs, and Monterey. If driving, stop at Hearst Castle (opulent hilltop mansion), Big Sur viewpoints, and 17-Mile Drive in Monterey. Arrive in San Francisco by evening. San Francisco, set on hills by the bay, has a European charm unique in America. Check into your hotel near Union Square or Fisherman's Wharf.",
          highlights: ["Fly or Coastal Drive Choice", "Pacific Coast Highway Beauty", "Big Sur Cliffs Option", "Hearst Castle Stop Option", "San Francisco Arrival", "Bay City Check-in"]
        },
        {
          day: 10,
          title: "San Francisco Icons",
          description: "Full day of SF icons. Start at Fisherman's Wharf - sea lions at Pier 39, sourdough bread bowls, and bay views. Cruise to Alcatraz Island (book ahead!) - the infamous former prison where Al Capone was held. The audio tour narrated by former guards and inmates is excellent. Cross the Golden Gate Bridge by bus or bike for the iconic San Francisco experience. In the afternoon, explore Chinatown (oldest in North America), cable car ride (get the grip on the outside!), and Union Square. Evening in the Mission District for burritos or North Beach (Little Italy) for Italian.",
          highlights: ["Fisherman's Wharf Morning", "Alcatraz Island Prison Tour", "Golden Gate Bridge Crossing", "Chinatown Exploration", "Cable Car Ride", "Mission or North Beach Dinner"]
        },
        {
          day: 11,
          title: "San Francisco & Departure Prep",
          description: "Morning at leisure for last explorations. Options: Sausalito across the Golden Gate (charming waterfront town), Muir Woods for giant redwoods, or exploring SF neighborhoods like Haight-Ashbury (hippie history), Castro (LGBTQ+ history), or Pacific Heights mansions. Final shopping for souvenirs - American brands, tech gadgets, or local San Francisco products. Afternoon rest and packing. Farewell dinner at a San Francisco restaurant - the city has excellent farm-to-table dining, reflecting California's culinary innovation. Toast to your American journey!",
          highlights: ["Choose Final SF Experience", "Sausalito or Muir Woods", "Or SF Neighborhood Explore", "American Souvenir Shopping", "Rest & Pack", "Farewell California Dinner"]
        },
        {
          day: 12,
          title: "Departure - See Ya Later!",
          description: "Transfer to San Francisco International Airport for your departure. If time permits, enjoy a final American breakfast - pancakes, eggs, and strong coffee. As you fly home, you carry memories of America's extraordinary diversity - the skyscraper canyons of New York, the neon dreamscape of Vegas, the natural wonder of the Grand Canyon, the glamour of Los Angeles, and the charm of San Francisco. You've experienced the American Dream in its many forms. See ya later, America - there's always more to explore on your next visit!",
          highlights: ["SFO Airport Transfer", "Final American Breakfast", "Memories of NYC to SF", "Grand Canyon Wonder", "Hollywood Glamour", "See Ya Later America!"]
        }
      ]
    }
  ]
};
