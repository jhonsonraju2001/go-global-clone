import { DestinationData } from "./itineraries";

// Goa Packages
export const goaData: DestinationData = {
  id: "goa",
  name: "Goa",
  tagline: "Sun, Sand & Soul",
  description: "Experience the perfect blend of pristine beaches, Portuguese heritage, vibrant nightlife, and laid-back coastal charm in India's favorite beach destination.",
  heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1587922546307-776227941871?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "goa-beaches",
      name: "Goa Beach Paradise",
      duration: "5D/4N",
      originalPrice: 24000,
      currentPrice: 19200,
      discount: 20,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=675&fit=crop",
      description: "Explore the best beaches of North and South Goa with this comprehensive package covering water sports, beach parties, and Portuguese heritage sites.",
      highlights: ["Calangute Beach", "Dudhsagar Falls", "Old Goa Churches", "Beach Parties"],
      inclusions: ["4 Nights Beach Resort", "Daily Breakfast", "North & South Goa Tour", "Airport Transfers", "Water Sports Package"],
      exclusions: ["Airfare", "Lunch & Dinner", "Drinks", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Goa - Beach Welcome",
          description: "Arrive at Goa's Dabolim Airport and feel the coastal breeze as you step out. Our representative welcomes you with traditional Goan hospitality and transfers you to your beach resort in North Goa (approx. 40 mins). Check into your sea-facing room and let the sound of waves be your welcome music. After freshening up, take a leisurely walk to the nearby Calangute Beach - Goa's most famous beach stretch known as the 'Queen of Beaches.' Watch the sunset paint the Arabian Sea in shades of orange and gold while sipping on fresh coconut water from beach shacks. Experience your first Goan dinner at a beachside shack - try the famous Goan Fish Curry Rice, Prawn Balchao, and wash it down with Feni, the local cashew spirit. The evening is yours to explore the vibrant beach road with its shops, cafes, and street performers.",
          highlights: ["Airport Welcome & Resort Check-in", "Calangute Beach Sunset Walk", "Fresh Coconut Water by the Sea", "Goan Fish Curry Rice Dinner", "Beach Road Evening Stroll", "First Taste of Feni"]
        },
        {
          day: 2,
          title: "North Goa Beach Hopping & Water Sports",
          description: "Wake up to the sound of waves and enjoy a hearty breakfast at your resort. Today is dedicated to exploring North Goa's stunning beaches and experiencing thrilling water sports. Start at Baga Beach, famous for its water sports - try parasailing for a bird's eye view of the coastline, jet skiing across the waves, or banana boat rides with friends. Next, drive to the charming Anjuna Beach, known for its rocky coastline, flea market (Wednesdays), and bohemian vibes. Explore the psychedelic cafes and shops that give Anjuna its unique character. Continue to Vagator Beach with its dramatic red cliffs and the famous Chapora Fort above. Climb to the fort for panoramic views - this is where the 'Dil Chahta Hai' iconic scene was shot! As evening approaches, head to one of Vagator's famous beach clubs for sunset cocktails and chill music. Return to your resort for dinner.",
          highlights: ["Baga Beach Water Sports", "Parasailing Over Arabian Sea", "Anjuna Bohemian Vibes", "Chapora Fort 'Dil Chahta Hai' Views", "Vagator Sunset at Beach Club", "North Goa Beach Circuit Complete"]
        },
        {
          day: 3,
          title: "Dudhsagar Falls & Spice Plantation",
          description: "Today's adventure takes you away from the beaches to Goa's verdant interior. After early breakfast, depart for the magnificent Dudhsagar Falls (60 km, approx. 2 hours). Translating to 'Sea of Milk,' this four-tiered waterfall plunges 310 meters down the Western Ghats - one of India's tallest falls. The journey itself is an adventure - the last stretch requires jeeps through forest roads. At the falls, wade into the natural pool at the base and feel the mist on your face while taking in the spectacular sight. After this refreshing experience, visit a traditional Spice Plantation for lunch. Take a guided tour through the plantation learning about cardamom, pepper, vanilla, and other spices that made Goa a trading hub. Enjoy an authentic Goan lunch served on banana leaves with locally grown spices. Optional elephant bathing experience available. Return to your resort by evening for relaxation or optional beach time.",
          highlights: ["Dudhsagar Falls - 310m Cascade", "Jeep Safari Through Forest", "Swimming at Falls Base Pool", "Spice Plantation Tour", "Traditional Banana Leaf Lunch", "Learn Goan Spice History"]
        },
        {
          day: 4,
          title: "South Goa & Portuguese Heritage",
          description: "Explore the more serene South Goa and UNESCO heritage sites today. Start with Old Goa (25 km from North Goa), a UNESCO World Heritage Site with magnificent churches from Portuguese colonial era. Visit the Basilica of Bom Jesus, housing the 400-year-old mortal remains of St. Francis Xavier - one of Christianity's most important pilgrimage sites. The Se Cathedral, the largest church in Asia, impresses with its Portuguese-Gothic architecture. Continue south to the pristine beaches of South Goa - Colva Beach with its white sand and calm waters, and Palolem Beach, a crescent-shaped paradise perfect for swimming. South Goa's beaches are less crowded and more relaxing. Stop at Margao, the cultural capital of Goa, to see colonial mansions and local markets. Evening, explore Fontainhas in Panjim - Goa's Latin Quarter with its colorful Portuguese houses, narrow lanes, and art galleries. Dinner at a heritage restaurant in Fontainhas with Goan-Portuguese cuisine.",
          highlights: ["Basilica of Bom Jesus - St. Xavier's Remains", "Se Cathedral - Asia's Largest Church", "Colva & Palolem Beach Serenity", "Margao Colonial Architecture", "Fontainhas Latin Quarter Walk", "Portuguese-Goan Fusion Dinner"]
        },
        {
          day: 5,
          title: "Departure - Goa Memories",
          description: "Your final morning in Goa begins with a leisurely breakfast - no rush! If time permits, take a last dip in the resort pool or a morning walk on the beach. Collect your photos and memories from the past days. Visit the local markets near your resort for last-minute shopping - Goan cashews, feni bottles, Portuguese azulejos (tiles), macrame bags, and beach accessories make great souvenirs. Transfer to Dabolim Airport for your departure flight. As you fly over the coastline, take one last look at the beaches that hosted you - the golden sands, the blue Arabian Sea, and the red-roofed churches. Goa has given you sun, sand, and soul - carry the laid-back Goan 'sussegad' (relaxed) spirit back home. Adeus (goodbye in Konkani) - until we meet again!",
          highlights: ["Leisurely Final Beach Breakfast", "Resort Pool or Morning Beach Walk", "Goan Souvenir Shopping", "Cashews, Feni & Handicrafts", "Airport Transfer with Memories", "Sussegad Spirit to Carry Home"]
        }
      ]
    },
    {
      id: "goa-heritage",
      name: "Goa Heritage & Culture Tour",
      duration: "4D/3N",
      originalPrice: 20000,
      currentPrice: 16000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&h=675&fit=crop",
      description: "Discover Goa beyond beaches - explore 450 years of Portuguese heritage, ancient temples, historic forts, and the unique Indo-Portuguese culture.",
      highlights: ["UNESCO Heritage Sites", "Portuguese Architecture", "Ancient Temples", "Fort Aguada"],
      inclusions: ["3 Nights Heritage Hotel", "Daily Breakfast", "Heritage Tours", "Expert Guide", "All Transfers"],
      exclusions: ["Airfare", "Lunch & Dinner", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival - Old Goa Immersion",
          description: "Arrive at Goa and transfer to your heritage hotel in Panjim or Old Goa. After settling in, begin your heritage journey at Old Goa - once called 'Rome of the East' for its magnificent churches. Visit the Basilica of Bom Jesus (1605), a UNESCO World Heritage Site housing St. Francis Xavier's incorrupt body in a silver casket. The baroque architecture is stunning. Next, Se Cathedral - the largest church in Asia with its famous 'Golden Bell.' Explore the Convent of St. Francis of Assisi with its archaeological museum displaying Portuguese-era artifacts. Walk through the ruins of St. Augustine Tower - the remains of a once-grand church. The entire area is atmospheric, transporting you back to the 16th century when Goa was the Portuguese capital of the East. Evening, explore Fontainhas - Goa's preserved Latin Quarter with its pastel-colored houses, narrow streets, and Portuguese-era cafes.",
          highlights: ["Old Goa UNESCO Heritage Site", "Basilica of Bom Jesus - 1605 AD", "St. Francis Xavier's Tomb", "Se Cathedral Golden Bell", "St. Augustine Tower Ruins", "Fontainhas Evening Walk"]
        },
        {
          day: 2,
          title: "Forts & Hindu Heritage",
          description: "Today explores Goa's military history and ancient Hindu heritage that predates Portuguese rule. Start at Fort Aguada, built in 1612 to guard against Dutch and Maratha invaders. The fort's lighthouse (oldest in Asia) offers panoramic coastal views. Explore the underground water storage that gave the fort its name ('Aguada' means 'water'). Drive to Reis Magos Fort, a lesser-known gem with excellent views and an art gallery inside. After lunch, visit the Shri Mangueshi Temple - Goa's most important Hindu temple dedicated to Lord Shiva in his form as Manguesh. The Deepstambha (lamp tower) is architectural highlight. Continue to Shri Shantadurga Temple, known for its beautiful setting and unique architecture blending Hindu and Portuguese styles. End the day at the ancient Tambdi Surla Mahadev Temple (13th century) - the only surviving example of Kadamba-Yadava architecture in Goa, deep in the Western Ghats forest.",
          highlights: ["Fort Aguada - 1612 Fortress", "Oldest Asian Lighthouse", "Reis Magos Art Gallery Fort", "Shri Mangueshi Temple", "Shri Shantadurga Temple", "Tambdi Surla - 13th Century Gem"]
        },
        {
          day: 3,
          title: "Colonial Mansions & Local Life",
          description: "Experience the living heritage of Goa through its colonial mansions and local communities. Start at Chandor's Braganza House, one of the largest and finest examples of Indo-Portuguese heritage architecture. The mansion has been home to the Braganza family for 400 years and is filled with antiques, Venetian chandeliers, and Ming porcelain. Explore both wings - Menezes Braganza and Braganza Pereira - each with unique collections. Drive to Margao to see more colonial buildings and visit the busy market where locals shop. For lunch, experience a traditional Goan kitchen - perhaps arranged at a local home to understand authentic Goan cooking. Afternoon, visit Rachol Seminary - one of the oldest seminaries in Asia, with a priceless library and peaceful atmosphere. Evening, return to Panjim for a walking tour of the Panjim Heritage Circuit - Church Square, the old Secretariat building, and the Municipal Garden with its beautiful bandstand.",
          highlights: ["Braganza House - 400-Year Mansion", "Antiques & Venetian Chandeliers", "Margao Market Local Life", "Traditional Goan Home Kitchen", "Rachol Seminary Library", "Panjim Heritage Walk"]
        },
        {
          day: 4,
          title: "Departure - Heritage Farewell",
          description: "Your cultural journey through Goa's heritage concludes. Enjoy breakfast at your heritage property, soaking in the colonial atmosphere one last time. If time permits, visit the Houses of Goa Museum near Panjim - an architecturally unique building documenting Goa's varied architectural styles through the centuries. Pick up heritage souvenirs - Portuguese tiles (azulejos), cashew feni in traditional bottles, Catholic religious art, or books about Goan history. Transfer to Dabolim Airport for your departure. As you leave, you carry knowledge of 450 years of unique Indo-Portuguese culture - the churches that tell stories of faith, the mansions that speak of prosperity, the temples that survived conversion, and the forts that guarded this precious land. Goa's heritage is alive in its people, food, and festivals - you've experienced the soul of this remarkable state.",
          highlights: ["Heritage Hotel Final Breakfast", "Houses of Goa Museum Visit", "Azulejos & Heritage Souvenirs", "Airport Transfer", "450 Years of Stories", "Soul of Goa to Carry Home"]
        }
      ]
    }
  ]
};

// Rajasthan Packages
export const rajasthanData: DestinationData = {
  id: "rajasthan",
  name: "Rajasthan",
  tagline: "Land of Kings",
  description: "Step into a world of magnificent palaces, ancient forts, colorful cities, and the endless golden desert of the Thar. Rajasthan is India's royal heartland.",
  heroImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "rajasthan-royal",
      name: "Royal Rajasthan Tour",
      duration: "8D/7N",
      originalPrice: 52000,
      currentPrice: 41600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=675&fit=crop",
      description: "The definitive Rajasthan experience covering Jaipur, Jodhpur, Jaisalmer, and Udaipur - four cities that define royal India with their magnificent palaces, forts, and traditions.",
      highlights: ["Amber Fort", "Mehrangarh Fort", "Jaisalmer Desert Camp", "Lake Pichola Boat Ride"],
      inclusions: ["7 Nights Heritage Hotels", "Daily Breakfast", "All Transfers in AC Vehicle", "Monument Entry Fees", "Desert Camp with Dinner", "Boat Ride in Udaipur"],
      exclusions: ["Airfare", "Lunch & Dinner (except camp)", "Camera Fees", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur - The Pink City Welcomes",
          description: "Arrive at Jaipur International Airport and feel the regal warmth of Rajasthan as our representative welcomes you with traditional tilak and garland. Transfer to your heritage hotel - perhaps a converted haveli with courtyards and jharokhas (ornate windows). Jaipur, founded in 1727 by Sawai Jai Singh II, is one of India's first planned cities and painted pink to welcome Prince Albert in 1876. After freshening up, take an evening orientation walk through the old city. The walled city glows pink in the setting sun as you explore the bazaars of Johari Bazaar (jewelry), Tripolia Bazaar (lac bangles), and the flower market. End at Chokhi Dhani, an ethnic village resort for an authentic Rajasthani dinner with folk music, puppet shows, and traditional welcome ceremonies. This immersive experience sets the tone for your royal journey.",
          highlights: ["Traditional Tilak Welcome", "Heritage Hotel Check-in", "Pink City Evening Walk", "Johari Bazaar Exploration", "Chokhi Dhani Cultural Dinner", "Folk Music & Puppet Shows"]
        },
        {
          day: 2,
          title: "Jaipur - Forts & Palaces",
          description: "Begin your day early for the magnificent Amber Fort (11 km from city), the jewel of Jaipur. Ascend to the fort via elephant ride or jeep - the approach itself is dramatic. Explore the Sheesh Mahal (Mirror Palace), Diwan-e-Aam, and the Sukh Niwas with its ingenious cooling system. The blend of Hindu and Mughal architecture is breathtaking. Return to the city to visit Jal Mahal (Water Palace), floating serenely in Man Sagar Lake. Continue to City Palace, still partially occupied by the royal family, with its museums displaying royal costumes, armory, and manuscripts. Walk to Jantar Mantar, the world's largest stone sundial and UNESCO World Heritage Site - Jai Singh II's astronomical passion made stone. End with the iconic Hawa Mahal (Palace of Winds), the 953-windowed facade where royal women watched street processions unseen. Evening at leisure to explore local markets or rest.",
          highlights: ["Amber Fort Elephant/Jeep Ascent", "Sheesh Mahal Mirror Reflections", "Jal Mahal Floating Palace", "City Palace Royal Collections", "Jantar Mantar Astronomy", "Hawa Mahal 953 Windows"]
        },
        {
          day: 3,
          title: "Jaipur to Jodhpur - The Blue City",
          description: "After breakfast, drive to Jodhpur (335 km, approx. 6 hours), the former capital of Marwar. The drive passes through rural Rajasthan - villages with colorful turbans, camel carts, and the Aravalli Hills. Stop at Ajmer to visit the Dargah Sharif of Khwaja Moinuddin Chishti - one of the holiest Muslim shrines in India, visited by people of all faiths. Continue to Pushkar if time permits for a glimpse of the sacred lake and Brahma Temple. Arrive in Jodhpur by late afternoon. As you approach, you'll see the Blue City's distinctive cerulean houses spreading beneath the massive Mehrangarh Fort. Check into a heritage hotel with fort views. Evening, explore the old city's blue neighborhoods on foot - the blue color was originally used by Brahmins to keep houses cool and repel insects. Watch the sunset from a rooftop cafe with the fort glowing golden above.",
          highlights: ["Rajasthan Rural Drive", "Ajmer Dargah Sharif Visit", "Pushkar Sacred Lake (optional)", "Blue City First Views", "Old City Blue Lanes Walk", "Rooftop Sunset with Fort Views"]
        },
        {
          day: 4,
          title: "Jodhpur - Mehrangarh & Marwar Heritage",
          description: "Explore the formidable Mehrangarh Fort, one of India's largest and most impressive forts. Rising 125 meters above the city on a perpendicular cliff, it's been the seat of Marwar rulers since 1459. Enter through massive gates, some still bearing cannonball marks from past sieges. The palace interiors are exquisite - intricate latticework, carved panels, and royal collections including howdahs (elephant seats), palanquins, and royal cradles. The Chamunda Mataji Temple within offers panoramic views of the Blue City. Visit the Jaswant Thada, a white marble memorial to Maharaja Jaswant Singh II - its architecture and peace are stunning. Afternoon, explore the Sardar Market and clock tower area - a vibrant hub of spices, textiles, and local life. Optional visit to Umaid Bhawan Palace, one of the world's largest private residences still occupied by the royal family, with an excellent museum. Evening, try authentic Marwari cuisine - dal baati churma and ker sangri.",
          highlights: ["Mehrangarh Fort - 1459 AD", "125m Perpendicular Cliff Rise", "Royal Collections & Howdahs", "Blue City Panoramic Views", "Jaswant Thada Marble Memorial", "Sardar Market Spice Shopping"]
        },
        {
          day: 5,
          title: "Jodhpur to Jaisalmer - Golden City",
          description: "Drive to Jaisalmer (285 km, approx. 5 hours), the golden city rising from the Thar Desert. The landscape becomes increasingly arid as you approach - thorny bushes, sand dunes, and a vast sky. Jaisalmer, founded in 1156, was a major trading post on the Silk Route connecting India to Central Asia and Egypt. The city is named after its golden sandstone that glows at sunset. Arrive and check into your hotel with views of the fort. Afternoon, explore Jaisalmer Fort, one of the world's largest living forts - 3,000 people still reside within its walls in ancestral havelis. Unlike museum forts, this one is alive with shops, restaurants, and homes. Walk the narrow lanes discovering Jain temples (12th-15th century) with incredible marble carvings. Sunset from the fort ramparts offers spectacular desert views. Dinner at a rooftop restaurant watching the stars appear over the golden city.",
          highlights: ["Desert Drive to Jaisalmer", "Golden City First Glimpse", "Living Fort - 3,000 Residents", "12th Century Jain Temples", "Fort Rampart Sunset", "Rooftop Starlit Dinner"]
        },
        {
          day: 6,
          title: "Jaisalmer - Desert Safari & Camp",
          description: "Morning, explore Jaisalmer's famous Havelis - merchant mansions built by wealthy traders. Patwon Ki Haveli, the largest and most elaborate, features five interconnected mansions built by a brocade merchant. Salim Singh Ki Haveli has a distinctive peacock-shaped roof. Nathmal Ki Haveli was carved by two brothers who worked on opposite wings, creating symmetrical yet unique facades. After lunch, depart for Sam Sand Dunes (40 km), where the Thar Desert shows its true colors. Your desert safari begins with a camel ride into the dunes as the afternoon sun creates golden ripples in the sand. Watch the sunset from atop a high dune - an unforgettable sight. As darkness falls, you'll reach your desert camp where traditional welcome awaits - folk musicians, dancers performing the fire dance (fire on head while dancing), and a delicious Rajasthani dinner under the stars. Sleep in a luxury tent in the middle of the Thar.",
          highlights: ["Patwon Ki Haveli Carvings", "Silk Route Merchant History", "Camel Safari into Dunes", "Thar Desert Sunset", "Folk Music & Fire Dance", "Luxury Desert Camp Night"]
        },
        {
          day: 7,
          title: "Jaisalmer to Udaipur - City of Lakes",
          description: "Wake early for a desert sunrise - the dunes glow in shades of pink and gold. After breakfast at camp, drive to Udaipur (530 km, approx. 9 hours) with a lunch stop en route. This is a long drive but the destination is worth it. Udaipur, the 'Venice of the East,' was founded in 1559 by Maharana Udai Singh II and remained the only Rajput state never conquered by Mughals. As you enter, the Aravalli Hills embrace lakes and white palaces in a setting often called India's most romantic city. Check into your hotel, ideally lakeside. Evening, take a sunset boat ride on Lake Pichola - the City Palace glows golden on one side, the Lake Palace Hotel (a former royal summer palace) floats in the middle, and the Aravalli Hills frame the scene. Dinner at a lakeside restaurant watching the lights reflect on the water - pure magic.",
          highlights: ["Thar Desert Sunrise", "Scenic Cross-Rajasthan Drive", "Udaipur - Venice of the East", "Aravalli Hills & Lake Views", "Lake Pichola Sunset Boat Ride", "Lakeside Romantic Dinner"]
        },
        {
          day: 8,
          title: "Udaipur & Departure",
          description: "Explore Udaipur's treasures before departure. Visit City Palace, the largest palace complex in Rajasthan, a 400-year-old architectural marvel rising above the lake. Each section was added by successive rulers, creating a unique blend of styles. The museum houses weapons, paintings, and the iconic peacock mosaics. Stroll through the old city to Jagdish Temple, a stunning Indo-Aryan temple with continuous worship since 1651. Explore the local markets for miniature paintings (Udaipur's specialty), handicrafts, and tie-dye textiles. Visit Bagore Ki Haveli on the waterfront - an 18th-century mansion now a museum with cultural shows each evening. Time for a final lunch overlooking the lake. Transfer to Udaipur Airport for your departure. You leave Rajasthan with memories of royalty - the forts that guarded kingdoms, the palaces that housed dynasties, and the desert that witnessed the greatest tales of valor and romance in Indian history.",
          highlights: ["City Palace 400-Year Complex", "Peacock Mosaics & Royal Art", "Jagdish Temple Worship", "Miniature Painting Shopping", "Bagore Ki Haveli", "Royal Rajasthan Farewell"]
        }
      ]
    },
    {
      id: "rajasthan-desert",
      name: "Rajasthan Desert Adventure",
      duration: "5D/4N",
      originalPrice: 32000,
      currentPrice: 25600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1568097657681-cf09d0e09bde?w=1200&h=675&fit=crop",
      description: "An immersive desert experience in the Thar - camel safaris, desert camping under stars, and the magic of the golden city of Jaisalmer.",
      highlights: ["Multi-Day Camel Safari", "Luxury Desert Camps", "Village Visits", "Desert Photography"],
      inclusions: ["4 Nights Accommodation", "All Meals During Safari", "Camel Safari", "Desert Camp", "Jeep Safari"],
      exclusions: ["Airfare", "Drinks", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival Jaisalmer - Desert Gateway",
          description: "Arrive at Jaisalmer and transfer to your hotel within or near the fort. The golden sandstone of Jaisalmer seems to emerge from the desert itself - a mirage made real. After lunch, explore Jaisalmer Fort, the 'Sonar Quila' (Golden Fort) - a living citadel where 3,000 people still reside in ancestral homes. Unlike other forts, this one is a vibrant neighborhood with temples, shops, and restaurants. Visit the remarkable Jain Temples inside the fort - 12th-15th century masterpieces with intricate carvings that seem impossible in stone. The Parsvanath Temple has ceiling carvings of divine quality. Sunset from the fort's bastions offers desert views stretching to infinity. Evening at leisure exploring the fort's atmospheric lanes or relaxing at a rooftop cafe with views of the desert beyond the city walls.",
          highlights: ["Golden Jaisalmer Arrival", "Sonar Quila Living Fort", "12th Century Jain Temples", "Parsvanath Temple Carvings", "Fort Bastion Desert Sunset", "Rooftop Evening in Fort"]
        },
        {
          day: 2,
          title: "Camel Safari Day 1 - Into the Thar",
          description: "After early breakfast, meet your camel team and guides for a multi-day desert adventure. Learn to ride your camel (they're surprisingly comfortable once you get the hang of it!) and set off into the Thar. The first day covers about 20 km through varied desert terrain - sparse vegetation, thorny acacia trees, and gradually increasing sand dunes. Stop at a desert village to see traditional mud-and-thatch homes and interact with locals - the desert communities are incredibly hospitable. Lunch is cooked over an open fire by your guides - simple but delicious. Afternoon continues deeper into the dunes as the landscape becomes more dramatic. Camp is set up in a beautiful dune location - basic but comfortable bedding under the open sky. Watch the sunset from a high dune and then enjoy dinner as folk musicians arrive to play under the stars. Sleep under a canopy of more stars than you've ever seen.",
          highlights: ["Camel Riding Training", "20 km Desert Trek", "Desert Village Visit", "Open Fire Lunch", "Sand Dune Camp Setup", "Folk Music Under Stars"]
        },
        {
          day: 3,
          title: "Camel Safari Day 2 - Deep Desert",
          description: "Wake with the dawn - desert sunrises are spectacular with the dunes glowing pink then gold. After chai and breakfast, continue the camel journey deeper into the Thar. Today's terrain is more remote - fewer villages, larger dunes, and a profound sense of silence that only deserts can offer. Your guide shares stories of desert life, pointing out wildlife tracks (desert fox, blue bull, and if lucky, the endangered Great Indian Bustard) and explaining how people survive in this harsh environment. Lunch break in the shade of a dune. Afternoon, reach the location for tonight's luxury desert camp - proper tents with beds, attached bathrooms, and camp staff. This is desert glamping at its finest. Try sandboarding on the dunes, explore on foot, or simply sit in silence absorbing the vastness. As night falls, a proper Rajasthani feast is prepared while musicians play. Sleep in comfort with the desert wind as your lullaby.",
          highlights: ["Desert Sunrise from Camp", "Remote Dune Exploration", "Wildlife Track Spotting", "Desert Survival Stories", "Luxury Camp Experience", "Rajasthani Feast Night"]
        },
        {
          day: 4,
          title: "Desert to Jodhpur - Blue City",
          description: "Final desert sunrise from your camp - capture those last photos of the endless dunes. After breakfast, jeeps arrive to transfer you out of the dunes (camels return to base). Drive to Jodhpur (290 km, approx. 5 hours), watching the landscape transition from sand to scrub to the rocky Aravalli region. Arrive in Jodhpur, dominated by the massive Mehrangarh Fort rising from a 125m cliff. Check into a heritage hotel in the old city with views of the Blue City spread below the fort. Afternoon, explore Mehrangarh Fort - the palaces within are among India's finest, with intricate carvings, mirror work, and royal collections. The views of the blue-painted old city from the ramparts are iconic. Evening, wander through the blue streets of the Brahmpuri neighborhood, understanding why each house is painted blue. Dinner of Marwari specialties at a local restaurant.",
          highlights: ["Final Desert Sunrise", "Jeep Transfer from Dunes", "Jodhpur Blue City Arrival", "Mehrangarh Fort Exploration", "Blue City from Ramparts", "Brahmpuri Blue Streets Walk"]
        },
        {
          day: 5,
          title: "Jodhpur & Departure",
          description: "Morning exploration of Jodhpur continues. Visit Jaswant Thada, the stunning white marble memorial set against the massive fort - the contrast of white marble and rugged stone is beautiful. Explore the Sardar Market near the clock tower - a sensory overload of spices (Jodhpur is famous for red chili), handicrafts, and local life. Try the famous 'Mirchi Bada' (chili fritter) and 'Makhaniya Lassi' from the traditional shops. Time permitting, visit Mandore Gardens - the old capital of Marwar with royal cenotaphs and a rock-cut temple. Transfer to Jodhpur Airport for your departure. As you leave, you carry the desert in your heart - the golden dunes of Jaisalmer, the starlit nights of the Thar, the blue streets of Jodhpur, and the indomitable spirit of Rajasthan's desert people who have thrived in this beautiful, harsh land for centuries.",
          highlights: ["Jaswant Thada Marble Memorial", "Sardar Market Spices", "Mirchi Bada & Makhaniya Lassi", "Mandore Gardens (optional)", "Airport Transfer", "Desert Memories Forever"]
        }
      ]
    }
  ]
};

// Hyderabad Packages
export const hyderabadData: DestinationData = {
  id: "hyderabad",
  name: "Hyderabad",
  tagline: "City of Pearls & Biryani",
  description: "Experience the grandeur of the Nizams, the iconic Charminar, world-famous Hyderabadi biryani, and the perfect blend of ancient heritage with modern tech city vibes.",
  heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1609766857326-18a217692f37?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1591018653367-7a0b1a8e9515?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "hyderabad-heritage",
      name: "Hyderabad Heritage Experience",
      duration: "4D/3N",
      originalPrice: 22000,
      currentPrice: 17600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=675&fit=crop",
      description: "Discover the royal heritage of the Nizams, from the iconic Charminar to the opulent Falaknuma Palace, and savor the legendary Hyderabadi cuisine.",
      highlights: ["Charminar", "Golconda Fort", "Falaknuma Palace", "Authentic Biryani Trail"],
      inclusions: ["3 Nights 5-Star Hotel", "Daily Breakfast", "Heritage Tours", "Biryani Food Tour", "All Transfers"],
      exclusions: ["Airfare", "Lunch & Dinner (except food tour)", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Arrival - Charminar & Old City Immersion",
          description: "Arrive at Rajiv Gandhi International Airport and transfer to your hotel. Start at the iconic Charminar (1591), Hyderabad's defining monument. Walk through Laad Bazaar's glittering bangle shops. Visit Mecca Masjid, one of India's largest mosques. Evening: Old City food tour with Haleem, Paya, and authentic Dum Biryani.",
          highlights: ["Charminar 1591 - City Symbol", "Laad Bazaar Bangle Shopping", "Mecca Masjid Visit", "Old City Food Walking Tour", "First Authentic Dum Biryani", "Irani Chai at Century-Old Café"]
        },
        {
          day: 2,
          title: "Golconda Fort & Nizam Heritage",
          description: "Visit Golconda Fort, the seat of the Qutb Shahi dynasty, famous for its incredible acoustic engineering where a clap at the entrance echoes at the summit a kilometer away. Explore diamond vaults that once held the Kohinoor. Visit Qutb Shahi Tombs. Evening: High tea at Falaknuma Palace, the Nizam's opulent residence now a Taj heritage hotel.",
          highlights: ["Golconda Fort Acoustic Marvel", "Royal Diamond Vaults History", "Qutb Shahi Tombs Visit", "Falaknuma Palace Tour", "High Tea with Nizam Grandeur", "101-Seat World's Longest Dining Table"]
        },
        {
          day: 3,
          title: "Salar Jung Museum, Hussain Sagar & Pearls",
          description: "Explore the Salar Jung Museum — one of the world's largest one-man collections — featuring the Veiled Rebecca marble wonder. Visit Chowmahalla Palace's stunning Durbar Hall. Afternoon: stroll the shores of Hussain Sagar Lake and photograph the towering Buddha statue on its island. Shop for real pearls at Pathergatti.",
          highlights: ["Salar Jung Museum Treasures", "Veiled Rebecca Marble Wonder", "Chowmahalla Palace Durbar Hall", "Hussain Sagar Lake & Buddha Statue", "Pearl Market Pathergatti Shopping", "Birla Mandir Hilltop Temple"]
        },
        {
          day: 4,
          title: "Biryani Trail & Departure",
          description: "Dedicate your final morning to Hyderabad's most famous export — Biryani. Visit Paradise, Bawarchi, and Shah Ghouse for different styles. Learn dum cooking techniques. Pick up biryani masala and food souvenirs. Transfer to airport with flavors and royal grandeur of the City of Pearls.",
          highlights: ["Authentic Biryani Trail", "Paradise, Bawarchi & Shah Ghouse", "Dum Cooking Technique", "Biryani Masala Shopping", "NTR Gardens (optional)", "City of Pearls Farewell"]
        }
      ]
    },
    {
      id: "hyderabad-1day-city",
      name: "1 Day Hyderabad City Tour",
      duration: "1D",
      originalPrice: 4500,
      currentPrice: 3500,
      discount: 22,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=675&fit=crop",
      description: "The perfect one-day whirlwind tour covering all of Hyderabad's iconic landmarks — Charminar, Golconda Fort, Hussain Sagar, and world-famous biryani — in a single memorable day.",
      highlights: ["Charminar Visit", "Golconda Fort", "Hussain Sagar Lake", "Authentic Biryani Lunch"],
      inclusions: ["AC Vehicle for Full Day", "Driver Guide", "Biryani Lunch at Top Restaurant", "All Entry Tickets", "Water Bottle"],
      exclusions: ["Personal Expenses", "Shopping", "Dinner"],
      itinerary: [
        {
          day: 1,
          title: "Hyderabad in a Day — Pearls, Forts & Biryani",
          description: "Start at 8 AM at Charminar, the 1591 monument and soul of Old Hyderabad. Explore Laad Bazaar for bangles and Mecca Masjid. Drive to Golconda Fort for the famous acoustic clap test and panoramic views from the top. Lunch at Paradise or Bawarchi for authentic Hyderabadi biryani. Afternoon: Salar Jung Museum for the Veiled Rebecca. Visit Hussain Sagar Lake and see the Buddha statue from the shore. Evening stroll at Tank Bund before departure.",
          highlights: ["Charminar & Laad Bazaar Morning", "Golconda Fort Acoustic Experience", "Authentic Biryani Lunch", "Salar Jung Museum", "Hussain Sagar Lake & Buddha Statue", "Tank Bund Evening Walk"]
        }
      ]
    },
    {
      id: "hyderabad-2day-heritage",
      name: "2 Day Hyderabad Heritage Tour",
      duration: "2D/1N",
      originalPrice: 9500,
      currentPrice: 7600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1609766857326-18a217692f37?w=1200&h=675&fit=crop",
      description: "A deep-dive into Hyderabad's royal Nizam heritage over two days — from Charminar's old city lanes to Falaknuma Palace's grandeur and the legendary pearl bazaars.",
      highlights: ["Charminar & Old City", "Golconda Fort Sound & Light Show", "Falaknuma Palace", "Pearl Shopping"],
      inclusions: ["1 Night Heritage Hotel", "Daily Breakfast", "AC Vehicle", "Golconda Sound & Light Show Tickets"],
      exclusions: ["Flights", "Lunch & Dinner", "Personal Shopping"],
      itinerary: [
        {
          day: 1,
          title: "Old City Heritage — Charminar to Golconda",
          description: "Morning: Charminar — climb to the top for panoramic old city views. Walk Laad Bazaar and visit Mecca Masjid. Visit Chowmahalla Palace, the official Nizam residence with its stunning crystal-chandelier Durbar Hall. Afternoon: Golconda Fort — explore its massive walls, royal chambers, and legendary acoustic marvel. Evening: Golconda Sound & Light Show narrating 400 years of the fort's history under the stars.",
          highlights: ["Charminar Top-Level Views", "Laad Bazaar Bangle Market", "Chowmahalla Palace Durbar Hall", "Golconda Fort Exploration", "Diamond Vault History", "Golconda Sound & Light Show"]
        },
        {
          day: 2,
          title: "Falaknuma Palace, Pearls & Hussain Sagar",
          description: "Morning: Falaknuma Palace heritage tour — the world's longest dining table, Italian marble, Venetian chandeliers, and the Nizam's personal library. Pearl shopping at Pathergatti, Asia's largest pearl market. Afternoon: Salar Jung Museum's world-class art collection. Drive to Hussain Sagar Lake — photograph the 18-meter Buddha monolith on the island. Birla Mandir temple at sunset before departure.",
          highlights: ["Falaknuma Palace Morning Tour", "Pathergatti Pearl Bazaar", "Salar Jung Museum Highlights", "Hussain Sagar Lake & Buddha", "Birla Mandir Sunset Temple", "Heritage Farewell Dinner"]
        }
      ]
    },
    {
      id: "hyderabad-srisailam-3day",
      name: "3 Day Hyderabad + Srisailam Tour",
      duration: "3D/2N",
      originalPrice: 14500,
      currentPrice: 11600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&h=675&fit=crop",
      description: "Combine the royal heritage of Hyderabad with a pilgrimage to the sacred Mallikarjuna Jyotirlinga temple at Srisailam and the majestic dam overlooking the Krishna river gorge.",
      highlights: ["Charminar Hyderabad", "Srisailam Dam", "Mallikarjuna Temple", "Krishna River Gorge"],
      inclusions: ["2 Nights Hotel", "Daily Breakfast", "AC Vehicle All Days", "Temple Darshan Assistance"],
      exclusions: ["Flights", "Lunch & Dinner", "Temple Donations"],
      itinerary: [
        {
          day: 1,
          title: "Hyderabad — Charminar, Golconda & Birla Mandir",
          description: "Arrive in Hyderabad and begin with the iconic Charminar and Laad Bazaar exploration. Drive to Golconda Fort for its historic grandeur. Afternoon: Hussain Sagar Lake with the Buddha monolith statue. Visit Birla Mandir, built with pure white Rajasthani marble on a 280-foot rocky hill. Evening at leisure in the city.",
          highlights: ["Charminar Morning Visit", "Laad Bazaar Shopping", "Golconda Fort Tour", "Hussain Sagar Lake", "Buddha Monolith View", "Birla Mandir White Marble Temple"]
        },
        {
          day: 2,
          title: "Srisailam — Sacred Mallikarjuna Temple & Dam",
          description: "Early morning drive to Srisailam (220 km, ~4 hrs) through the scenic Nallamala forest. Arrive and seek blessings at Mallikarjuna Jyotirlinga — one of the 12 sacred Shiva Jyotirlingas, perched above the Krishna river. Explore the ancient Bhramaramba Devi temple alongside. Post-darshan, visit the magnificent Srisailam Dam — one of India's largest, spanning the Krishna River Gorge. Panoramic views of the reservoir surrounded by the Nallamala Hills are breathtaking. Overnight at Srisailam.",
          highlights: ["Mallikarjuna Jyotirlinga Darshan", "Bhramaramba Devi Temple", "Krishna River Sacred Dip", "Srisailam Dam Panoramic Views", "Nallamala Forest Drive", "Krishna River Gorge Sunset"]
        },
        {
          day: 3,
          title: "Mantralayam Pilgrimage & Return",
          description: "Drive to Mantralayam (80 km from Srisailam), the sacred town on the banks of the Tungabhadra River. Visit the Raghavendra Swamy Brindavana — the samadhi of Sri Raghavendra Swami, revered by millions of devotees. The 400-year-old Mutt exudes divine peace. Return to Hyderabad (210 km) by afternoon. Optional pearl shopping before airport drop.",
          highlights: ["Mantralayam Raghavendra Swamy Temple", "Tungabhadra River Sacred Bathing", "Ancient Mutt Spiritual Darshan", "300-Year-Old Brindavana", "Return Journey to Hyderabad", "Pearl Shopping Before Departure"]
        }
      ]
    },
    {
      id: "hyderabad-temple-tour",
      name: "Hyderabad Temple Tour",
      duration: "3D/2N",
      originalPrice: 12000,
      currentPrice: 9600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1200&h=675&fit=crop",
      description: "A sacred pilgrimage tour covering the most revered temples of Hyderabad and Telangana — from the golden spires of Yadadri to the hilltop Chilkur Balaji and the famous Tirupati Balaji.",
      highlights: ["Yadadri Lakshmi Narasimha Temple", "Birla Mandir", "Chilkur Balaji", "Tirupati Darshan"],
      inclusions: ["2 Nights Accommodation", "Daily Breakfast", "AC Vehicle", "Temple Darshan Guidance", "Tirupati Special Darshan Tickets"],
      exclusions: ["Flights", "Lunch & Dinner", "Personal Donations"],
      itinerary: [
        {
          day: 1,
          title: "Hyderabad City Temples — Birla, Chilkur & Osmansagar",
          description: "Start at Birla Mandir, Hyderabad's most beautiful white marble temple dedicated to Lord Venkateswara, perched atop a 280-ft rock hill with sweeping city views. Drive to Chilkur Balaji — the 'Visa Balaji' temple, where thousands of devotees seeking overseas visas have had their wishes granted for centuries. Ancient rituals here date back 500 years. Visit Keesara Gutta Shiva Temple along the scenic Osmansagar Lake route. Evening: Hussain Sagar Lake sunset and NTR Garden.",
          highlights: ["Birla Mandir White Marble Temple", "Hilltop Panoramic City Views", "Chilkur Balaji 500-Year-Old Temple", "Visa Balaji Darshan", "Keesara Gutta Shiva Temple", "Hussain Sagar Lake Sunset"]
        },
        {
          day: 2,
          title: "Yadadri — The Golden Temple of Telangana",
          description: "Drive to Yadadri (60 km) — the newly renovated Lakshmi Narasimha Swamy temple, now among India's most magnificent temple complexes after a ₹1,800 crore renovation. The golden gopuram gleams across the Telangana plains. Seek blessings at Lord Narasimha — one of Lord Vishnu's most fierce and protective incarnations. Explore the sacred cave shrines within the hill. Return to Hyderabad and visit Keesaragutta, an ancient Shiva temple with a spectacular annual festival. Evening dinner at a traditional Telangana home-style restaurant.",
          highlights: ["Yadadri Lakshmi Narasimha Temple", "Golden Gopuram Splendor", "₹1800 Crore Renovation Marvel", "Sacred Cave Shrines", "Keesaragutta Ancient Shiva Temple", "Traditional Telangana Dinner"]
        },
        {
          day: 3,
          title: "Tirupati — Lord Venkateswara Darshan",
          description: "Early morning drive to Tirupati (560 km or fly/night train). Visit the Tirumala Venkateswara Temple — the world's richest and most-visited pilgrimage site, receiving over 80,000 devotees daily. The sacred Lord Venkateswara (Balaji) idol is believed to be a wish-fulfilling deity. Experience the overwhelming spiritual energy of Tirumala Hills. After darshan, visit Sri Padmavathi Devi Temple at Tiruchanur. Return to Hyderabad or Tirupati for overnight.",
          highlights: ["Tirumala Venkateswara Temple Darshan", "World's Richest Temple Visit", "80,000 Daily Devotees Atmosphere", "Special Darshan Assistance", "Padmavathi Devi Temple Tiruchanur", "Sacred Tirumala Hills Blessing"]
        }
      ]
    },
    {
      id: "hyderabad-night-tour",
      name: "Hyderabad Night Tour",
      duration: "1D (Evening)",
      originalPrice: 3500,
      currentPrice: 2800,
      discount: 20,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=675&fit=crop",
      description: "Discover Hyderabad's magical transformation after dark — illuminated monuments, night street food, lakeside lights, and the famous Golconda Sound & Light show.",
      highlights: ["Illuminated Charminar", "Golconda Light Show", "Hussain Sagar Night View", "Street Food Trail"],
      inclusions: ["AC Vehicle Evening", "Golconda Sound & Light Show Ticket", "Street Food Tour with Guide", "Water"],
      exclusions: ["Lunch", "Personal Shopping"],
      itinerary: [
        {
          day: 1,
          title: "Hyderabad After Dark — Lights, Food & Heritage",
          description: "Begin at 5 PM at the illuminated Charminar — the monument glows golden against the evening sky while the surrounding bazaars buzz with activity. Explore Laad Bazaar's bangle shops, lit up in vibrant colors after dark. Street food trail: Shadab's Haleem, hot Irani chai at Nimrah Café, Kebabs at local stalls. Drive along Hussain Sagar Lake for the sparkling city reflections. Arrive at Golconda Fort for the iconic Sound & Light Show at 7 PM — a dramatic narration of 400 years of Qutb Shahi dynasty history projected on the ancient walls. Conclude at Banjara Hills for dessert — Qubani ka Meetha (apricot dessert) and Double Ka Meetha.",
          highlights: ["Charminar Golden Night Illumination", "Laad Bazaar Night Shopping", "Old City Street Food Trail", "Hussain Sagar Night Lake View", "Golconda Sound & Light Show", "Banjara Hills Dessert Trail"]
        }
      ]
    },
    {
      id: "hyderabad-ramoji-tour",
      name: "Ramoji Film City & Hyderabad Tour",
      duration: "2D/1N",
      originalPrice: 11000,
      currentPrice: 8800,
      discount: 20,
      image: "https://images.unsplash.com/photo-1591018653367-7a0b1a8e9515?w=1200&h=675&fit=crop",
      description: "Experience the world's largest film studio complex at Ramoji Film City combined with Hyderabad's iconic heritage landmarks for a perfect blend of entertainment and history.",
      highlights: ["Ramoji Film City Full Day", "Film Sets & Studio Tours", "Charminar Heritage", "Hussain Sagar Lake"],
      inclusions: ["1 Night Hotel", "Daily Breakfast", "Ramoji Film City Entry Tickets", "AC Vehicle", "Transfers"],
      exclusions: ["Flights", "Lunch & Dinner", "Rides Inside Ramoji"],
      itinerary: [
        {
          day: 1,
          title: "Ramoji Film City — World's Largest Film Studio",
          description: "Full day at Ramoji Film City (Guinness World Record holder — 1,666 acres), one of Asia's most visited attractions. Explore elaborate film sets representing streets of different Indian cities and foreign countries, gardens, fountains, and live entertainment zones. Watch live shows and stunt performances, visit the Japanese Gardens, and explore Western town sets. Special shows and rides available. Evening: return to hotel and explore the lively Banjara Hills restaurant district for dinner.",
          highlights: ["Ramoji Film City All-Day Pass", "Guinness Record 1666-Acre Studio", "Film Sets & Street Recreations", "Live Shows & Stunt Performances", "Japanese Gardens & Fountains", "Banjara Hills Dinner"]
        },
        {
          day: 2,
          title: "Hyderabad Icons — Charminar, Golconda & Hussain Sagar",
          description: "Morning at Charminar — explore the old city, Laad Bazaar, and Mecca Masjid. Drive to Golconda Fort for its acoustic marvel and hilltop views. Afternoon: Salar Jung Museum to see the Veiled Rebecca and world-class collections. Visit Hussain Sagar Lake and the 18-meter Buddha monolith. Before departure, stop at a certified pearl store at Pathergatti and pick up famous Hyderabadi biryani masala.",
          highlights: ["Charminar Morning Tour", "Laad Bazaar Shopping", "Golconda Fort Highlights", "Salar Jung Museum", "Hussain Sagar Lake & Buddha", "Pearl & Biryani Masala Shopping"]
        }
      ]
    },
    {
      id: "nagarjuna-sagar-tour",
      name: "Nagarjuna Sagar Dam & Buddhist Heritage Tour",
      duration: "2D/1N",
      originalPrice: 8500,
      currentPrice: 6800,
      discount: 20,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop",
      description: "Visit the world's tallest masonry dam at Nagarjuna Sagar, explore ancient Buddhist ruins on Nagarjunakonda Island, and witness the spectacular Krishna River valley.",
      highlights: ["Nagarjuna Sagar Dam", "Nagarjunakonda Island Museum", "Buddhist Ruins", "Krishna River Valley"],
      inclusions: ["1 Night Hotel", "Daily Breakfast", "AC Vehicle", "Boat to Nagarjunakonda Island", "Entry Tickets"],
      exclusions: ["Lunch & Dinner", "Personal Expenses"],
      itinerary: [
        {
          day: 1,
          title: "Hyderabad to Nagarjuna Sagar — The Mighty Dam",
          description: "Depart Hyderabad early morning (150 km, ~3 hrs) through the scenic Telangana countryside. Arrive at Nagarjuna Sagar Dam — the world's tallest masonry dam at 124 meters, holding back the mighty Krishna River. The dam creates a reservoir stretching 250 sq km. Watch the water cascading through spillways — a truly awe-inspiring engineering marvel. Visit the Nagarjuna Sagar Dam Park and enjoy panoramic views from the dam's crest. Afternoon: take the government boat to Nagarjunakonda Island — a museum island preserving 3rd-century Buddhist ruins discovered before the dam submerged the valley. The museum houses exquisite Buddhist sculptures, inscriptions, and artifacts from the Ikshvaku dynasty.",
          highlights: ["Nagarjuna Sagar Dam Views", "World's Tallest Masonry Dam", "Krishna River Spillway", "Boat Ride to Museum Island", "3rd Century Buddhist Ruins", "Ikshvaku Dynasty Artifacts"]
        },
        {
          day: 2,
          title: "Ethipothala Falls & Return to Hyderabad",
          description: "Morning visit to Ethipothala Waterfalls (11 km from the dam) — a stunning 70-foot cascade formed by three streams. The crocodile breeding center nearby is a unique attraction. Return via the scenic route through Macherla town. Stop at Phansigutta for local Andhra-style lunch. Arrive Hyderabad by evening with memories of one of South India's most impressive engineering and archaeological wonders.",
          highlights: ["Ethipothala Waterfalls 70ft", "Crocodile Breeding Center", "Macherla Town Visit", "Andhra-Style Lunch", "Scenic Return Drive", "Krishna Valley Memories"]
        }
      ]
    },
    {
      id: "araku-valley-tour",
      name: "Araku Valley & Borra Caves Nature Tour",
      duration: "3D/2N",
      originalPrice: 16000,
      currentPrice: 12800,
      discount: 20,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop",
      description: "Journey through the Eastern Ghats to the lush Araku Valley — famous for its organic coffee plantations, ancient Borra Caves, and vibrant tribal culture surrounded by misty mountains.",
      highlights: ["Araku Coffee Plantations", "Borra Caves", "Tribal Museum", "Eastern Ghats Train"],
      inclusions: ["2 Nights Resort", "Daily Breakfast", "AC Vehicle", "Borra Caves Entry", "Coffee Plantation Tour", "Tribal Museum Entry"],
      exclusions: ["Flights to Vizag", "Lunch & Dinner", "Personal Shopping"],
      itinerary: [
        {
          day: 1,
          title: "Vizag to Araku Valley — Through the Eastern Ghats",
          description: "Depart Vizag early morning for Araku Valley (115 km, ~3.5 hrs) via the spectacular Ghat road with 40+ hairpin bends. En route, stop at Borra Caves — million-year-old limestone caverns with stunning stalactite and stalagmite formations, the deepest caves in India at 80 meters. The naturally lit formations resemble Shiva Lingams, Mother and Child, and human brains. Continue to Araku Valley — a hill station at 3,200 feet surrounded by the Eastern Ghats. Check into your resort amidst coffee plantations. Afternoon: visit the Tribal Museum showcasing the rich culture, costumes, and lifestyles of the Araku tribal communities — Konda Dora, Bagata, and Khond tribes. Evening walk through coffee plantations as mist rolls in.",
          highlights: ["40 Hairpin Bends Ghat Road", "Borra Caves - India's Deepest", "Stalactite & Stalagmite Wonders", "Araku Valley 3200ft Hill Station", "Tribal Museum Cultural Tour", "Coffee Plantation Evening Walk"]
        },
        {
          day: 2,
          title: "Araku Coffee Trail & Padmapuram Gardens",
          description: "Morning: immersive coffee plantation tour — learn about Araku's world-famous organic Arabica coffee, from bean to cup. Taste freshly brewed single-origin coffee at a plantation café. Visit Padmapuram Gardens — a unique botanical garden built around a massive 200-year-old tree with hanging roots forming natural corridors. Explore Chaparai Water Cascade, a seasonal waterfall flowing over terraced rock formations. Afternoon: interact with local tribal artisans making bamboo crafts, dhokra metal art, and bell-metal jewelry. Try the local bamboo chicken — chicken cooked inside bamboo tubes over an open fire — a signature tribal delicacy.",
          highlights: ["Organic Coffee Plantation Tour", "Single-Origin Coffee Tasting", "Padmapuram Botanical Gardens", "200-Year-Old Banyan Tree", "Tribal Artisan Crafts", "Famous Bamboo Chicken Lunch"]
        },
        {
          day: 3,
          title: "Araku Sunrise & Return via Scenic Route",
          description: "Early morning trek to a viewpoint for a spectacular sunrise over the valley — layers of mist, green hills, and golden light create a photographer's paradise. After breakfast, depart for Vizag. Optional: take the Kirandul-Vizag train (one of India's most scenic rail journeys) through 58 tunnels and over lush green valleys. Arrive Vizag by afternoon. Visit RK Beach or Kailasagiri for sunset before departure.",
          highlights: ["Valley Sunrise Trek", "Misty Mountain Photography", "Scenic Train Option", "58 Tunnels Rail Journey", "RK Beach Sunset", "Eastern Ghats Farewell"]
        }
      ]
    },
    {
      id: "vizag-beach-tour",
      name: "Vizag RK Beach & Kailasagiri Tour",
      duration: "2D/1N",
      originalPrice: 9000,
      currentPrice: 7200,
      discount: 20,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=675&fit=crop",
      description: "Experience the 'City of Destiny' — Vizag's stunning RK Beach coastline, the panoramic Kailasagiri Hill Park, submarine museum, and the beautiful Rushikonda golden beach.",
      highlights: ["RK Beach Sunrise", "Kailasagiri Hill Park", "INS Kursura Submarine", "Rushikonda Beach"],
      inclusions: ["1 Night Beach Resort", "Daily Breakfast", "AC Vehicle", "Kailasagiri Ropeway Ticket", "Submarine Museum Entry"],
      exclusions: ["Flights", "Lunch & Dinner", "Water Sports"],
      itinerary: [
        {
          day: 1,
          title: "Vizag Beach Circuit — RK Beach to Kailasagiri",
          description: "Arrive in Vizag and head straight to the iconic RK Beach (Ramakrishna Beach) — the city's most famous seafront with its golden sand and promenade. Visit the INS Kursura Submarine Museum — walk through a real decommissioned submarine from the Indian Navy. Continue along Beach Road to see the VUDA Park and Matsyadarshini Aquarium. Afternoon: ascend Kailasagiri Hill (360 feet) via the scenic ropeway for 360-degree panoramic views of the Bay of Bengal coastline. The hilltop features a massive Shiva-Parvati sculpture and beautifully landscaped gardens. Sunset from Kailasagiri is magical — the entire coastline glows orange. Evening: seafood dinner at a beach-facing restaurant.",
          highlights: ["RK Beach Promenade Walk", "INS Kursura Submarine Museum", "Kailasagiri Ropeway Ride", "360° Bay of Bengal Views", "Shiva-Parvati Hilltop Sculpture", "Beachfront Seafood Dinner"]
        },
        {
          day: 2,
          title: "Rushikonda Beach & Simhachalam Temple",
          description: "Morning at Rushikonda Beach — Vizag's most beautiful golden beach with gentle waves perfect for swimming and water sports. Try jet skiing or banana boat rides. Visit the ancient Simhachalam Temple (dedicated to Lord Narasimha), perched on a hill 800 feet above sea level with stunning architecture dating back to the 11th century. The temple's annual Chandanotsavam festival is world-famous. Drive along the scenic coastal road to Bheemunipatnam (Bhimli) — India's second oldest municipality with Dutch colonial ruins. Return to Vizag for departure with coastal memories.",
          highlights: ["Rushikonda Golden Beach", "Water Sports & Swimming", "Simhachalam 11th Century Temple", "800ft Hilltop Temple Views", "Bhimli Dutch Colonial Ruins", "Coastal Vizag Farewell"]
        }
      ]
    }
  ]
};

// Dubai Packages
export const dubaiData: DestinationData = {
  id: "dubai",
  name: "Dubai",
  tagline: "Where Dreams Touch the Sky",
  description: "Experience the impossible made possible - from the world's tallest building to man-made islands, desert safaris to futuristic architecture. Dubai is the ultimate destination.",
  heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1583202702468-e58e4e5d9efe?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1597659840241-37e2b7c2f7c9?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "dubai-luxury",
      name: "Dubai Luxury Experience",
      duration: "6D/5N",
      originalPrice: 95000,
      currentPrice: 76000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=675&fit=crop",
      description: "The ultimate Dubai experience covering Burj Khalifa, Palm Jumeirah, desert safari, and the futuristic attractions that make Dubai a world wonder.",
      highlights: ["Burj Khalifa At The Top", "Desert Safari with BBQ", "Dubai Marina Cruise", "Atlantis Aquaventure"],
      inclusions: ["5 Nights 5-Star Hotel", "Daily Breakfast", "Burj Khalifa Tickets", "Desert Safari", "Dubai City Tour", "Marina Dinner Cruise", "Airport Transfers"],
      exclusions: ["Visa", "International Flights", "Lunch & Dinner (except safari)", "Personal Shopping"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Dubai - City of Gold",
          description: "Arrive at Dubai International Airport, one of the world's busiest and most luxurious airports. Our representative meets you and transfers you to your 5-star hotel on Sheikh Zayed Road with views of the iconic skyline. Dubai rose from a small fishing village to a global city in just 50 years - a testament to vision and ambition. After checking in and freshening up, take an evening orientation drive along Sheikh Zayed Road, seeing the futuristic architecture that defines Dubai's skyline. Stop at Dubai Mall, the world's largest shopping mall, for a first glimpse of Dubai's grandeur. Watch the Dubai Fountain show at the base of Burj Khalifa - water dances to music in choreographed patterns, reaching heights of 150 meters. Dinner at a mall restaurant with fountain views, or explore the mall's many dining options.",
          highlights: ["Dubai Airport VIP Feel", "5-Star Skyline Hotel Check-in", "Sheikh Zayed Road Drive", "Dubai Mall First Visit", "Dubai Fountain Show", "World's Largest Mall Dinner"]
        },
        {
          day: 2,
          title: "Modern Dubai - Burj Khalifa & More",
          description: "Today explores modern Dubai's architectural marvels. Start at Burj Khalifa, the world's tallest building at 828 meters. Your 'At The Top' experience takes you to the 124th and 125th floor observation decks for 360-degree views of the city, desert, and ocean. On clear days, you can see up to 95 km! Continue to Dubai Frame, an architectural landmark framing old and new Dubai on either side. The glass-bottomed walkway at 150 meters is thrilling. Visit the Museum of the Future, a stunning ring-shaped building recently opened as a center for innovation (entry tickets extra). Afternoon, explore Palm Jumeirah - the world's largest man-made island in the shape of a palm tree. Visit Atlantis, The Palm for a look at the underwater aquarium and Lost Chambers. End the day at The Pointe with views of the Atlantis and the fountain show.",
          highlights: ["Burj Khalifa 124th Floor Views", "World's Tallest Building Experience", "Dubai Frame 360° Panorama", "Museum of the Future Exterior", "Palm Jumeirah Island Tour", "Atlantis The Palm Visit"]
        },
        {
          day: 3,
          title: "Desert Safari - Arabian Adventure",
          description: "Morning at leisure for pool time or shopping. Afternoon, your desert safari begins with pickup for an unforgettable Arabian adventure. Drive to the Dubai Desert Conservation Reserve, where your 4x4 vehicle begins 'dune bashing' - an exhilarating ride up and down the golden sand dunes. Your skilled driver navigates the dunes expertly as you hold on for this roller-coaster experience. Stop at a high dune for sunset photography - the desert glows in shades of gold and orange. Continue to the Bedouin-style camp where a magical evening awaits. Try camel riding, sandboarding, henna painting, and dress in traditional Arabic clothing for photos. As night falls, enjoy a BBQ dinner under the stars with belly dancing, tanoura dancing, and fire shows. The desert night sky, away from city lights, is spectacular.",
          highlights: ["4x4 Dune Bashing Adventure", "Desert Sunset Photography", "Bedouin Camp Experience", "Camel Riding & Sandboarding", "Arabic BBQ Under Stars", "Belly Dance & Fire Shows"]
        },
        {
          day: 4,
          title: "Old Dubai & Cultural Exploration",
          description: "Discover the heritage behind Dubai's modern facade. Start at Al Fahidi Historical Neighbourhood (Bastakiya), the oldest residential area with traditional wind-tower architecture. Visit Dubai Museum in Al Fahidi Fort for the city's history from pearl diving to oil discovery. Take an abra (traditional water taxi) across Dubai Creek - the waterway that made Dubai a trading hub. Explore the Gold Souk - dazzling displays of gold jewelry at competitive prices. Continue to the Spice Souk for aromatic treasures - saffron, frankincense, and Arabian perfumes. Visit Jumeirah Mosque (one of the few mosques in UAE open to non-Muslims) for an educational tour about Islam and Emirati culture. Evening, enjoy a traditional dhow cruise dinner along Dubai Creek or Dubai Marina - sailing on a wooden vessel while enjoying a buffet dinner with skyline views.",
          highlights: ["Al Fahidi Historic Quarter", "Dubai Museum Heritage", "Abra Ride Across Creek", "Gold Souk Dazzling Display", "Spice Souk Aromatics", "Dhow Cruise Dinner"]
        },
        {
          day: 5,
          title: "Theme Parks & Dubai Marina",
          description: "Today is for thrills and relaxation. Spend the day at a world-class theme park (choose one) - Atlantis Aquaventure Waterpark with record-breaking slides and shark encounters; Dubai Parks and Resorts (Motiongate, Bollywood Parks, Legoland); or IMG Worlds of Adventure, the world's largest indoor theme park. Alternatively, spend a relaxing day at a beach club or spa. Evening, explore Dubai Marina - a stunning waterfront development with the world's tallest residential buildings. Walk the Marina Walk promenade past cafes and yachts. For dinner, choose from numerous Marina restaurants, or take a Marina dinner cruise for a different perspective of the glittering towers. The nighttime Marina skyline is spectacular - each tower architecturally unique and beautifully lit.",
          highlights: ["Theme Park Day (Choice)", "Aquaventure or IMG Worlds", "Afternoon Beach/Spa Option", "Dubai Marina Evening Walk", "Marina Skyline Views", "Waterfront Dinner Experience"]
        },
        {
          day: 6,
          title: "Shopping & Departure",
          description: "Your final morning in Dubai is perfect for last-minute shopping. Dubai is a shopper's paradise with everything from traditional souks to ultra-luxury malls. Visit Mall of the Emirates (with Ski Dubai - yes, skiing in the desert!), City Walk for boutique shopping, or return to Dubai Mall for anything you missed. Dubai offers tax-free shopping, making luxury goods particularly attractive. Pick up Arabian perfumes, gold, electronics, and traditional handicrafts as souvenirs. Time permitting, visit the newly opened Ain Dubai - the world's largest observation wheel on Bluewaters Island. Transfer to Dubai International Airport for your departure. You leave Dubai carrying memories of a city that defies limits - where the tallest, largest, and most luxurious are just the beginning. Yalla (let's go) - until next time!",
          highlights: ["Final Shopping Spree", "Mall of Emirates & Ski Dubai", "Tax-Free Luxury Deals", "Ain Dubai Option", "Airport Transfer", "Dubai Dreams Complete"]
        }
      ]
    }
  ]
};

// Singapore Packages  
export const singaporeData: DestinationData = {
  id: "singapore",
  name: "Singapore",
  tagline: "The Garden City",
  description: "A futuristic city-state where ultra-modern architecture meets lush gardens, diverse cultures blend seamlessly, and every experience is world-class.",
  heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1533310266094-8898a03807dd?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "singapore-explorer",
      name: "Singapore Complete Explorer",
      duration: "5D/4N",
      originalPrice: 72000,
      currentPrice: 57600,
      discount: 20,
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=675&fit=crop",
      description: "Experience the best of Singapore - from Marina Bay's futuristic skyline to Sentosa's beaches, Chinatown's heritage to Gardens by the Bay's wonder.",
      highlights: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island", "Universal Studios"],
      inclusions: ["4 Nights 4-Star Hotel", "Daily Breakfast", "Gardens by the Bay Tickets", "Sentosa Day Pass", "Singapore City Tour", "Airport Transfers"],
      exclusions: ["Visa", "International Flights", "Universal Studios Tickets", "Lunch & Dinner"],
      itinerary: [
        {
          day: 1,
          title: "Arrival - Lion City Welcome",
          description: "Arrive at Changi Airport, consistently rated the world's best airport - explore the Jewel Changi with its indoor waterfall before exiting! Transfer to your hotel in the city center. Singapore is a compact city-state, making it easy to explore. After freshening up, head to Marina Bay for an evening orientation. The Marina Bay Sands integrated resort dominates the skyline with its iconic rooftop ship. Walk along the Marina Bay waterfront to Merlion Park and photograph the iconic half-lion, half-fish statue against the city lights. Cross the Helix Bridge for changing perspectives of the skyline. End at the ArtScience Museum area to watch the Spectra light and water show - a free nightly spectacular. Dinner at one of the many Marina Bay restaurants with skyline views.",
          highlights: ["Changi Airport & Jewel", "Marina Bay Evening Walk", "Merlion Park Iconic Shots", "Helix Bridge Stroll", "Spectra Light Show", "Skyline Dinner"]
        },
        {
          day: 2,
          title: "Gardens, Marina Bay & Cultural Quarters",
          description: "Morning visit to Gardens by the Bay, Singapore's horticultural masterpiece. The Supertree Grove features 18 tree-like structures up to 50 meters tall - take the OCBC Skyway for aerial views. Enter the Cloud Forest dome to experience a 35-meter indoor waterfall and mist-filled mountain, then the Flower Dome showcasing plants from Mediterranean climates. Continue to Marina Bay Sands for the SkyPark observation deck on the 57th floor (or upgrade to Ce La Vi for drinks with views). Afternoon, explore Singapore's cultural quarters. Start with Chinatown - Buddha Tooth Relic Temple is stunning, and the streets offer great food and shopping. Move to Little India for colorful streets, Mustafa Centre (24-hour shopping!), and Sri Veeramakaliamman Temple. End at Kampong Glam, the Malay heritage area, with the golden-domed Sultan Mosque and hip Haji Lane. Evening at leisure or optional Singapore River dinner cruise.",
          highlights: ["Gardens by the Bay Domes", "Supertree OCBC Skyway", "Marina Bay Sands SkyPark", "Chinatown Buddha Temple", "Little India Colors", "Kampong Glam Heritage"]
        },
        {
          day: 3,
          title: "Sentosa Island - Fun & Adventure",
          description: "Full day at Sentosa, Singapore's playground island. Take the Sentosa Express or cable car (scenic views!) to the island. Universal Studios Singapore is the highlight - a full day of Hollywood-themed rides and shows. Must-dos include Battlestar Galactica, Transformers: The Ride 3D, and the Jurassic World area. Alternatively, split your day between S.E.A. Aquarium (one of the world's largest), Adventure Cove Waterpark, and Madame Tussauds. Sentosa also offers beaches - Palawan Beach has a suspension bridge to Asia's southernmost point! Late afternoon, head to Resorts World Sentosa for shopping and dining. Evening, don't miss Wings of Time - a spectacular outdoor night show with water jets, lasers, and fireworks over the sea. Return to the city or stay for Sentosa's nightlife.",
          highlights: ["Universal Studios Full Day", "Transformers & Battlestar Rides", "S.E.A. Aquarium Option", "Palawan Beach Relaxation", "Wings of Time Night Show", "Sentosa Complete Experience"]
        },
        {
          day: 4,
          title: "Singapore Zoo & Orchard Road",
          description: "Morning visit to Singapore Zoo, one of the world's best. The 'open zoo' concept minimizes barriers between animals and visitors. Don't miss the orangutan breakfast (extra charge) where you dine with free-roaming orangutans! The zoo is beautifully landscaped and houses over 2,400 animals. Adjacent River Wonders showcases freshwater habitats including giant pandas. Afternoon, experience Orchard Road - Singapore's premier shopping street stretching 2.2 km with malls, boutiques, and department stores. From high fashion at ION Orchard to electronics at Mustafa (continue from Little India), Singapore offers tax-free shopping on many items. Evening, head to Clarke Quay, the riverside entertainment hub. The colorful buildings house restaurants, bars, and clubs. Enjoy dinner by the Singapore River, perhaps on a riverside patio watching boats glide by. Optional: night safari at the world's first nocturnal zoo.",
          highlights: ["Singapore Zoo Open Concept", "Orangutan Breakfast (optional)", "River Wonders Pandas", "Orchard Road Shopping", "Clarke Quay Riverside Evening", "Night Safari Option"]
        },
        {
          day: 5,
          title: "Heritage & Departure",
          description: "Your final morning offers time for last explorations. Visit the Peranakan Museum to understand the unique Straits Chinese culture - a blend of Chinese and Malay influences unique to Singapore and Malaysia. Walk through Emerald Hill for beautiful Peranakan terrace houses. Alternatively, visit the National Museum of Singapore for a comprehensive history, or the Singapore Botanic Gardens (UNESCO World Heritage Site) - free entry and beautiful orchid gardens. Final shopping for souvenirs - TWG tea, Bengawan Solo kueh (traditional cakes), or Singapore Sling from Raffles (the cocktail was invented there). Transfer to Changi Airport, allowing extra time to explore Jewel's attractions - the Rain Vortex, Canopy Park, and extensive shopping. Singapore has shown you how a small nation can achieve big dreams through vision and determination. Goodbye, Lion City!",
          highlights: ["Peranakan Heritage Discovery", "Emerald Hill Beautiful Houses", "Botanic Gardens Option", "TWG Tea & Kueh Souvenirs", "Changi Jewel Exploration", "Lion City Farewell"]
        }
      ]
    }
  ]
};

// Thailand Packages
export const thailandData: DestinationData = {
  id: "thailand",
  name: "Thailand",
  tagline: "Land of Smiles",
  description: "From the bustling streets of Bangkok to the pristine beaches of Phuket, ancient temples to vibrant nightlife - Thailand offers an intoxicating mix of experiences.",
  heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "thailand-adventure",
      name: "Thailand Explorer",
      duration: "7D/6N",
      originalPrice: 68000,
      currentPrice: 54400,
      discount: 20,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&h=675&fit=crop",
      description: "The complete Thailand experience - Bangkok's temples and markets, Phuket's beaches, and Phi Phi's stunning islands.",
      highlights: ["Grand Palace Bangkok", "Phi Phi Islands", "Phuket Beaches", "Floating Markets"],
      inclusions: ["6 Nights Hotels", "Daily Breakfast", "Bangkok City Tour", "Phi Phi Island Tour", "Internal Flight BKK-Phuket", "All Transfers"],
      exclusions: ["International Flights", "Visa on Arrival Fee", "Lunch & Dinner", "Water Sports"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bangkok - City of Angels",
          description: "Arrive at Suvarnabhumi Airport, one of Southeast Asia's largest hubs. Transfer to your hotel in the city center, perhaps near Sukhumvit or Silom for easy access to the BTS Skytrain. Bangkok ('Krung Thep' or 'City of Angels' in Thai) is a sensory explosion - gleaming temples, chaotic traffic, incredible food, and warm hospitality. After settling in, take an evening walk to experience Bangkok's energy. Visit Asiatique the Riverfront, a night market by the Chao Phraya River with over 1,500 boutiques, restaurants, and a Ferris wheel. Alternatively, explore the street food around your hotel - Bangkok's street food scene is legendary. Try Pad Thai from a street vendor, Tom Yum soup, and Mango Sticky Rice for dessert. The night is young in Bangkok, and the city truly comes alive after dark.",
          highlights: ["Suvarnabhumi Airport Arrival", "City Center Hotel Check-in", "Evening Bangkok Energy Walk", "Asiatique Night Market", "Street Food First Taste", "Pad Thai & Mango Sticky Rice"]
        },
        {
          day: 2,
          title: "Bangkok Temples & Grand Palace",
          description: "Today explores Bangkok's magnificent temples. Start at the Grand Palace, the spectacular former royal residence built in 1782. Within the palace complex, visit Wat Phra Kaew (Temple of the Emerald Buddha), Thailand's most sacred temple housing a Buddha image carved from a single piece of jade. The detailed architecture, golden spires, and mythical creatures are overwhelming. Continue to Wat Pho, home to the 46-meter-long Reclining Buddha covered in gold leaf. Wat Pho is also the birthplace of traditional Thai massage - treat yourself to a session! Cross the Chao Phraya by ferry to Wat Arun (Temple of Dawn), its 70-meter spire decorated with colorful porcelain. Climb to the steep top for river views. Evening, take a Chao Phraya dinner cruise, passing illuminated temples and modern skyscrapers - a magical Bangkok experience.",
          highlights: ["Grand Palace Royal Complex", "Emerald Buddha Sacred Temple", "Wat Pho Reclining Buddha", "Traditional Thai Massage", "Wat Arun Sunset Climb", "Chao Phraya Dinner Cruise"]
        },
        {
          day: 3,
          title: "Floating Markets & Cultural Immersion",
          description: "Early morning departure for Damnoen Saduak Floating Market (80 km, approx. 2 hours) - best visited before 9 AM when it's less crowded. Glide through canals on a long-tail boat as vendors in wooden boats sell fresh fruits, vegetables, and prepared food. Try boat noodles, coconut pancakes, and fresh tropical fruits. Continue to the Railway Market (Maeklong), where vendors dramatically clear their stalls eight times daily as trains pass through the market! An incredible sight. Return to Bangkok via the Thai-Chinese cultural town of Chinatown (Yaowarat) - explore gold shops, traditional medicine stores, and some of Bangkok's best street food. Evening, visit Khao San Road, the famous backpacker hub - a riot of neon lights, street vendors, bars, and travelers from around the world. Or explore modern Bangkok at IconSiam or Terminal 21 malls.",
          highlights: ["Damnoen Saduak Floating Market", "Long-Tail Boat Ride", "Maeklong Railway Market", "Train Through Market View", "Bangkok Chinatown Explore", "Khao San Road Nightlife"]
        },
        {
          day: 4,
          title: "Fly to Phuket - Beach Paradise",
          description: "Morning flight from Bangkok to Phuket (1.5 hours), Thailand's largest island and premier beach destination. Transfer to your hotel in Patong, Kata, or Karon beach area. Patong is the most vibrant with nightlife; Kata and Karon are more relaxed. Afternoon at leisure - swim in the warm Andaman Sea, sunbathe on white sand, or explore your beach area. Phuket's waters are crystal clear with excellent visibility. Book a Thai massage at a beachside salon - incredibly affordable and relaxing. As evening falls, explore the beach road with its restaurants and shops. Seafood here is exceptional - fresh catches grilled on the beach. Try the famous Phuket-style lobster or a seafood platter. Watch the sunset paint the Andaman Sea in shades of orange and pink - Phuket sunsets are legendary.",
          highlights: ["Bangkok to Phuket Flight", "Beach Resort Check-in", "Andaman Sea First Swim", "Beachside Thai Massage", "Fresh Seafood Dinner", "Legendary Phuket Sunset"]
        },
        {
          day: 5,
          title: "Phi Phi Islands Day Trip",
          description: "Early departure for the world-famous Phi Phi Islands by speedboat (approx. 1.5 hours). These limestone karsts rising from turquoise waters are among the world's most beautiful islands. First stop: Maya Bay, made famous by the movie 'The Beach' - swim in the crystal waters surrounded by towering cliffs (if open; conservation closures occur). Snorkel at Pileh Lagoon, an enclosed bay with impossibly clear water perfect for swimming and snorkeling among colorful fish. Continue to Monkey Beach where wild macaques play on the shore. Lunch is served on Phi Phi Don, the larger inhabited island - explore the tiny streets and shops. Afternoon snorkeling at more spots before the return journey. Arrive back in Phuket for sunset. Evening at leisure or explore Phuket's famous nightlife scene at Bangla Road.",
          highlights: ["Speedboat to Phi Phi Islands", "Maya Bay 'The Beach' Fame", "Pileh Lagoon Swimming", "Snorkeling Crystal Waters", "Monkey Beach Visit", "Phi Phi Don Lunch & Explore"]
        },
        {
          day: 6,
          title: "Phuket Old Town & Freedom Day",
          description: "Morning, explore Phuket Old Town - a charming area often overlooked by beach visitors. Sino-Portuguese architecture lines Thalang Road with colorful shophouses now housing cafes, galleries, and boutiques. Visit Jui Tui Chinese Temple and the famous street art murals. Breakfast at a local café with strong Thai coffee. Rest of the day at leisure - choose your own adventure! Options include: James Bond Island tour (Phang Nga Bay with its famous limestone karst); elephant sanctuary visit for ethical elephant interaction; Phuket FantaSea cultural theme park; cooking class to learn Thai cuisine; or simply relax on the beach with a book. For sunset, head to Promthep Cape, the island's southernmost point with panoramic views - one of Phuket's most romantic spots. Final seafood dinner with sunset views.",
          highlights: ["Phuket Old Town Heritage Walk", "Sino-Portuguese Architecture", "Choose Your Adventure Day", "James Bond Island Option", "Promthep Cape Sunset", "Final Phuket Seafood Feast"]
        },
        {
          day: 7,
          title: "Departure - Sawadee Ka/Krab",
          description: "Your Thai adventure concludes. Enjoy a final breakfast with perhaps a swim in the Andaman Sea if time permits. Check out and transfer to Phuket International Airport for your departure (or connecting flight to Bangkok). Thailand has shown you its many faces - the golden temples and bustling markets of Bangkok, the pristine beaches and islands of Phuket, and the warm hospitality of the Thai people. You've tasted flavors that will linger, seen colors that will stay in your memories, and experienced the 'mai pen rai' (no worries) attitude that makes Thailand so relaxing. Sawadee (goodbye) from the Land of Smiles - until your next visit!",
          highlights: ["Final Andaman Sea Swim", "Thai Breakfast Farewell", "Airport Transfer", "Land of Smiles Memories", "Temple & Beach Dreams", "Sawadee Ka/Krab - Until Next Time"]
        }
      ]
    }
  ]
};

// Europe Packages
export const europeData: DestinationData = {
  id: "europe",
  name: "Europe",
  tagline: "Old World Wonders",
  description: "From the romance of Paris to the canals of Venice, the Alps to the Mediterranean - experience centuries of history, art, and culture across the world's most visited continent.",
  heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=1200&h=675&fit=crop",
    "https://images.unsplash.com/photo-1543785734-4b6e564642f8?w=1200&h=675&fit=crop"
  ],
  packages: [
    {
      id: "europe-highlights",
      name: "Europe Highlights Tour",
      duration: "10D/9N",
      originalPrice: 195000,
      currentPrice: 156000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=675&fit=crop",
      description: "The classic European journey covering Paris, Swiss Alps, and Italy - three countries, countless memories, the essence of Europe.",
      highlights: ["Eiffel Tower Paris", "Swiss Alps", "Venice Canals", "Rome Colosseum"],
      inclusions: ["9 Nights 4-Star Hotels", "Daily Breakfast", "Eurostar & TGV Trains", "City Tours with Guide", "All Transfers", "Schengen Visa Assistance"],
      exclusions: ["International Flights", "Visa Fee", "Lunch & Dinner", "Attraction Entry Fees"],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Paris - City of Light",
          description: "Arrive at Paris Charles de Gaulle Airport and transfer to your hotel in central Paris, perhaps near the Opera or Champs-Élysées. Paris needs no introduction - for centuries it has been the world's capital of art, fashion, and romance. After settling in, take an evening stroll along the Seine River. Cross the elegant bridges, see the Île de la Cité with Notre-Dame (exterior view - undergoing restoration), and walk past the Louvre's illuminated pyramid. End at the Champ de Mars for your first view of the Eiffel Tower, sparkling with 20,000 lights every hour after sunset. Dinner at a classic Parisian bistro - try French onion soup, coq au vin, and crème brûlée with a glass of Bordeaux. The Parisian evening is magical - you're in the City of Light!",
          highlights: ["Paris CDG Arrival", "Seine River Evening Walk", "Notre-Dame & Île de la Cité", "Louvre Pyramid Views", "Eiffel Tower First Sparkle", "Classic Parisian Bistro Dinner"]
        },
        {
          day: 2,
          title: "Paris Icons - Louvre & Eiffel Tower",
          description: "Begin at the Louvre Museum, home to the Mona Lisa, Venus de Milo, and 35,000 other works spanning 9,000 years. Even a quick visit takes 2-3 hours. Skip-the-line entry is recommended. Walk through the Tuileries Garden to Place de la Concorde, then up the Champs-Élysées to the Arc de Triomphe. Climb the 284 steps for 360-degree views of Paris and the 12 radiating avenues. Afternoon, ascend the Eiffel Tower - the summit at 276 meters offers incomparable views. On clear days, you can see 65 km! Pre-book to avoid long queues. Evening, experience Montmartre - the artistic heart of Paris with Sacré-Cœur Basilica, Place du Tertre with its artists, and charming cobblestone streets. Dinner in Montmartre followed by an optional cabaret show at Moulin Rouge.",
          highlights: ["Louvre - Mona Lisa & Treasures", "Champs-Élysées Walk", "Arc de Triomphe Climb", "Eiffel Tower Summit Views", "Montmartre Artistic Quarter", "Sacré-Cœur & Artists Square"]
        },
        {
          day: 3,
          title: "Versailles & Paris to Switzerland",
          description: "Morning excursion to the Palace of Versailles (30 mins from Paris), the ultimate symbol of French monarchy's extravagance. The Hall of Mirrors, King's and Queen's apartments, and the vast gardens (40 km² of perfectly manicured lawns, fountains, and groves) are unforgettable. Return to Paris for lunch and last-minute exploration or shopping - French perfumes, macarons from Ladurée, and fashion are popular souvenirs. Afternoon, board the high-speed TGV train to Switzerland (about 3.5 hours to Lausanne or Geneva). Watch the French countryside transform into Swiss valleys and lakes. Transfer to your hotel in Interlaken or Lucerne, your base for exploring the Swiss Alps. Arrival in the evening - the fresh mountain air and Alpine scenery immediately transport you to a different world.",
          highlights: ["Palace of Versailles Tour", "Hall of Mirrors Grandeur", "Royal Gardens Stroll", "Paris Lunch & Shopping", "TGV to Switzerland", "Alpine Evening Arrival"]
        },
        {
          day: 4,
          title: "Swiss Alps - Jungfraujoch Expedition",
          description: "Today is the highlight for nature lovers - Jungfraujoch, the 'Top of Europe' at 3,454 meters. Take the cogwheel train from Interlaken through picture-perfect villages, then through the Eiger and Mönch mountains via tunnels to the highest railway station in Europe. At the top, experience the Ice Palace carved inside the glacier, the Sphinx Observatory with 360-degree views, and walk on the Aletsch Glacier - the longest in the Alps. The views of peaks including the iconic Matterhorn (on clear days) are breathtaking. Return by mid-afternoon and explore your base town - Interlaken sits between two lakes with stunning mountain backdrops, while Lucerne has its famous Chapel Bridge and Lion Monument. Evening at leisure for Swiss fondue dinner - cheese fondue with crusty bread is the classic choice.",
          highlights: ["Jungfraujoch - Top of Europe", "Cogwheel Train Adventure", "Ice Palace Inside Glacier", "Sphinx Observatory Views", "Aletsch Glacier Walk", "Swiss Fondue Dinner"]
        },
        {
          day: 5,
          title: "Swiss Scenic Day & Travel to Italy",
          description: "Morning at leisure for last Swiss experiences. Options include: Mount Titlis (with glacier and cliff walk); boat cruise on Lake Lucerne or Lake Thun; explore charming Lucerne or Interlaken towns; or simply absorb the Alpine scenery. Late morning, depart for Italy. The journey can be by scenic train through the Gotthard Pass or by coach through beautiful Alpine valleys. The landscape transitions from green Swiss meadows to sunny Italian lakes. Arrive in Milan by late afternoon. Milan is Italy's fashion capital - if time permits, see the magnificent Duomo (Gothic cathedral with rooftop terraces), Galleria Vittorio Emanuele II (elegant 19th-century shopping arcade), and La Scala opera house exterior. Alternatively, proceed directly to Venice. Evening in Milan or Venice depending on itinerary.",
          highlights: ["Final Swiss Morning Options", "Alpine Pass Journey to Italy", "Landscape Transformation", "Milan Duomo (if stopping)", "Fashion Capital Glimpse", "Italian Evening Begins"]
        },
        {
          day: 6,
          title: "Venice - Queen of the Adriatic",
          description: "Arrive in Venice (if not already there), the floating city built on 118 islands connected by 400 bridges. There are no cars in Venice - only boats and footpaths. Transfer to your hotel by water taxi for an unforgettable arrival. Walking tour of the main sights: St. Mark's Square, called by Napoleon 'the finest drawing room in Europe'; St. Mark's Basilica with its Byzantine domes and gold mosaics; the Doge's Palace, seat of Venetian power for 700 years. Walk across the Rialto Bridge, the oldest of Venice's 400 bridges. Afternoon, take a gondola ride through the narrow canals - quintessentially Venetian despite being touristy. The gondoliers' skill navigating tiny passages is impressive. Evening, explore beyond the main squares to find authentic 'bacari' (wine bars) for 'cicchetti' (Venetian tapas). Venice at night, reflected in canal waters, is pure magic.",
          highlights: ["Water Taxi Venice Arrival", "St. Mark's Square & Basilica", "Doge's Palace Power Center", "Rialto Bridge Crossing", "Gondola Canal Ride", "Venetian Cicchetti Evening"]
        },
        {
          day: 7,
          title: "Venice to Florence - Renaissance Capital",
          description: "Morning for final Venice exploration - visit Murano Island for glass-blowing demonstrations, or wander Venice's quieter districts discovering hidden churches and squares. Depart for Florence by high-speed train (approx. 2 hours), the birthplace of the Renaissance and home to unparalleled art treasures. Check into your hotel near the historic center. Afternoon walking tour: The Duomo (Florence Cathedral) with its iconic terracotta dome by Brunelleschi - the largest brick dome ever constructed. Climb to the top for city views. Walk to Piazza della Signoria, Florence's political heart with its open-air sculpture gallery including a replica of Michelangelo's David. Cross the Ponte Vecchio, the medieval bridge lined with gold and jewelry shops - a Florence icon. Evening, enjoy Tuscan cuisine - ribollita soup, bistecca alla fiorentina (Florentine steak), and local Chianti wine.",
          highlights: ["Morning Venice Exploration", "Murano Glass (optional)", "High-Speed Train to Florence", "Florence Duomo & Dome Climb", "Piazza della Signoria", "Ponte Vecchio Sunset"]
        },
        {
          day: 8,
          title: "Florence Art & Pisa Excursion",
          description: "Morning at the Uffizi Gallery (pre-booking essential), one of the world's most important art museums housing Renaissance masterpieces by Botticelli (Birth of Venus, Primavera), Leonardo da Vinci, Michelangelo, and Raphael. Even a focused visit takes 2-3 hours. Continue to the Accademia Gallery to see Michelangelo's original David - the 17-foot marble giant is breathtaking in person. Afternoon, excursion to Pisa (1.5 hours) to see the famous Leaning Tower in the Piazza dei Miracoli (Square of Miracles). Climb the 294 steps of the tilting tower for a unique experience. The Baptistry and Cathedral in the same square are equally impressive. Return to Florence for evening - explore the Oltrarno district (the 'other side' of the Arno River) for artisan workshops and local restaurants away from the crowds.",
          highlights: ["Uffizi Gallery Masterpieces", "Botticelli's Birth of Venus", "Michelangelo's David Original", "Pisa Leaning Tower", "Piazza dei Miracoli", "Oltrarno Evening Explore"]
        },
        {
          day: 9,
          title: "Rome - Eternal City",
          description: "Morning train to Rome (1.5 hours), the Eternal City built on seven hills with 3,000 years of history. Check into your hotel near the historic center. Begin with the Vatican City, the world's smallest country. St. Peter's Basilica is Christianity's largest and most impressive church - Michelangelo's Pietà and the view from the dome are highlights. The Vatican Museums hold one of the world's greatest art collections, culminating in the Sistine Chapel with Michelangelo's ceiling frescos. Skip-the-line tickets are essential. Afternoon, walk to Castel Sant'Angelo for Tiber River views. Cross to the historic center for the Trevi Fountain - throw a coin to ensure your return to Rome. Explore the Spanish Steps area with its designer boutiques. Evening in Trastevere, Rome's most charming neighborhood, for authentic Roman dinner - cacio e pepe, carbonara, and supplì.",
          highlights: ["Florence to Rome Train", "Vatican Museums & Sistine Chapel", "St. Peter's Basilica", "Trevi Fountain Coin Throw", "Spanish Steps Area", "Trastevere Roman Dinner"]
        },
        {
          day: 10,
          title: "Ancient Rome & Departure",
          description: "Morning dedicated to Ancient Rome. The Colosseum, the 2,000-year-old amphitheater that held 50,000 spectators for gladiatorial contests, is awe-inspiring. Pre-book to skip lines. Adjacent, the Roman Forum was the heart of the Roman Empire - walk among the ruins of temples, basilicas, and government buildings. Nearby, Palatine Hill offers great views over the Forum. If time permits, visit the Pantheon, the best-preserved Roman temple with its perfect dome and oculus. Last chance for gelato, souvenirs, and Italian moments. Transfer to Rome Fiumicino Airport for your departure. You leave Europe enriched by centuries of art, history, and culture - from Paris's romance to Switzerland's grandeur to Italy's Renaissance treasures. These memories of the Old World will last a lifetime. Arrivederci, Europe!",
          highlights: ["Colosseum Ancient Grandeur", "Roman Forum Walk", "Pantheon Perfect Dome", "Final Gelato Moment", "Airport Transfer", "European Dream Complete"]
        }
      ]
    }
  ]
};
