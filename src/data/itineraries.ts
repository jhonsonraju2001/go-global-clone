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
  heroImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&h=600&fit=crop"
  ],
  packages: [
    {
      id: "kashmir-highlights",
      name: "Highlights of Kashmir",
      duration: "6D/5N",
      originalPrice: 32680,
      currentPrice: 27180,
      discount: 17,
      image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&h=600&fit=crop",
      description: "Experience the best of Kashmir with visits to Srinagar, Gulmarg, Pahalgam, and Sonmarg. This comprehensive tour takes you through snow-capped peaks, pristine valleys, and the serene Dal Lake.",
      highlights: ["Shikara Ride on Dal Lake", "Gondola Ride in Gulmarg", "Betaab Valley Visit", "Mughal Gardens Tour"],
      inclusions: ["5 Nights Accommodation in Premium Hotels", "Daily Breakfast & Dinner", "AC Vehicle for all transfers", "Sightseeing as per itinerary", "Airport Transfers", "Driver Allowance & Toll Taxes"],
      exclusions: ["Airfare", "Personal Expenses", "Travel Insurance", "Tips & Gratuities", "Adventure Activities", "Pony Rides"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival in Srinagar - Gateway to Paradise", 
          description: "Welcome to Srinagar, the summer capital of Jammu & Kashmir! Upon arrival at Sheikh ul-Alam International Airport, our representative will greet you and transfer you to your luxurious houseboat on the famous Dal Lake. After checking in and freshening up, embark on a magical 2-hour Shikara ride as the sun sets over the lake. Glide past floating vegetable gardens, witness local life on the water, and capture stunning photographs of the surrounding mountains reflected in the crystal-clear waters. Return to your houseboat for a delicious traditional Kashmiri dinner featuring Rogan Josh, Dum Aloo, and aromatic Kahwa tea.", 
          highlights: ["Airport Welcome with Traditional Shawl", "Houseboat Check-in on Dal Lake", "2-Hour Sunset Shikara Ride", "Traditional Kashmiri Dinner"] 
        },
        { 
          day: 2, 
          title: "Srinagar to Gulmarg - The Meadow of Flowers", 
          description: "After a hearty breakfast on your houseboat, begin your journey to Gulmarg (56 km, approx. 2 hours), one of the world's premier ski destinations. The drive takes you through charming apple orchards and pine forests. Upon arrival, board the famous Gulmarg Gondola - one of the highest cable cars in the world. Phase 1 takes you to Kongdoori at 10,050 feet, while Phase 2 ascends to the breathtaking Apharwat Peak at 13,780 feet. At the top, you'll be surrounded by pristine snow even in summer, with panoramic views of the Himalayan range including Nanga Parbat. Enjoy snow activities like sledding and snowball fights. In the evening, explore the Gulmarg Golf Course - the highest green golf course in the world. Overnight stay at Gulmarg hotel.", 
          highlights: ["Scenic Drive Through Apple Orchards", "Gondola Ride Phase 1 to Kongdoori", "Gondola Phase 2 to Apharwat Peak (13,780 ft)", "Snow Activities & Photography", "World's Highest Golf Course Visit"] 
        },
        { 
          day: 3, 
          title: "Gulmarg to Pahalgam - Valley of Shepherds", 
          description: "Wake up to fresh mountain air and enjoy breakfast with views of snow-capped peaks. Today you'll drive to Pahalgam (140 km, approx. 4 hours), passing through the historic town of Anantnag and the fragrant saffron fields of Pampore - the only place in India where saffron is cultivated. Pahalgam, meaning 'Valley of Shepherds,' is a stunning resort town at the confluence of the Lidder River and Sheshnag streams. After lunch, visit the famous Betaab Valley - named after the Bollywood film shot here. The valley is a visual paradise with lush green meadows, snow-capped mountains, and a gurgling stream. Continue to Aru Valley (11 km further), a base camp for trekking expeditions, offering spectacular views of snow peaks and meadows dotted with horses and sheep. Return to your hotel for dinner and overnight stay.", 
          highlights: ["Saffron Fields of Pampore Visit", "Betaab Valley - Bollywood's Favorite Location", "Aru Valley Exploration", "Lidder River Scenic Views", "Traditional Lunch at Local Restaurant"] 
        },
        { 
          day: 4, 
          title: "Pahalgam Full Day Exploration", 
          description: "Dedicate today to exploring the hidden gems of Pahalgam. After breakfast, hire ponies or walk to Baisaran Valley (locally known as 'Mini Switzerland'), a 5 km trek through pine forests leading to lush green meadows surrounded by dense forests and mountains. The views here are simply breathtaking. Next, visit Chandanwari (16 km from Pahalgam), the starting point of the annual Amarnath Yatra pilgrimage. Here you can enjoy sledging on snow bridges even in summer. For the adventurous, optional activities include river rafting on the Lidder River (Grade II rapids - perfect for beginners) or trout fishing in the crystal-clear streams. In the evening, stroll through Pahalgam's local market to shop for handmade shawls, dried fruits, and traditional Kashmiri handicrafts. Enjoy a riverside dinner featuring fresh trout fish.", 
          highlights: ["Baisaran Valley Trek - 'Mini Switzerland'", "Chandanwari Visit - Amarnath Base", "Snow Sledging Experience", "Optional River Rafting on Lidder", "Local Market Shopping", "Fresh Trout Fish Dinner"] 
        },
        { 
          day: 5, 
          title: "Pahalgam to Srinagar - Mughal Gardens Heritage", 
          description: "After a leisurely breakfast, bid farewell to Pahalgam and drive back to Srinagar (95 km, approx. 3 hours). Today is dedicated to exploring the magnificent Mughal Gardens - a testament to the love of Mughal emperors for Kashmir's beauty. Start with Nishat Bagh (Garden of Joy), built by Empress Nur Jahan's brother in 1633 AD, featuring 12 terraces representing the 12 zodiac signs with stunning Dal Lake views. Next, visit Shalimar Bagh (Abode of Love), built by Emperor Jahangir for his beloved wife Nur Jahan, with beautiful fountains and chinars. End with Chashme Shahi (Royal Spring), the smallest but most beautiful garden built around a natural spring whose waters are believed to have medicinal properties. In the afternoon, enjoy shopping at the famous Boulevard Road for Pashmina shawls, saffron, walnuts, and papier-mâché artifacts. Evening at leisure or optional visit to Shankaracharya Temple for panoramic city views.", 
          highlights: ["Nishat Bagh - Garden of Joy (12 Terraces)", "Shalimar Bagh - Emperor's Love Garden", "Chashme Shahi - Royal Spring Water", "Boulevard Road Shopping Experience", "Local Handicraft & Pashmina Shopping", "Optional Shankaracharya Temple Visit"] 
        },
        { 
          day: 6, 
          title: "Departure from Srinagar - Fond Farewell", 
          description: "On your final morning in paradise, wake up early for an optional sunrise Shikara ride to witness the magical floating vegetable market where locals have traded fresh produce on boats for centuries (best experienced 6-7 AM). Return to your accommodation for a sumptuous breakfast. Pack your bags along with beautiful memories and souvenirs. Our driver will transfer you to Sheikh ul-Alam International Airport for your onward journey. As you fly over the Kashmir Valley, take a final glimpse of the paradise you're leaving behind - the glistening lakes, the snow peaks, and the verdant valleys. Carry home not just photographs but a piece of Kashmir in your heart. Thank you for traveling with Alison Holidays!", 
          highlights: ["Optional Sunrise Floating Vegetable Market", "Farewell Breakfast with Kahwa Tea", "Airport Transfer with Memories", "Complimentary Kashmiri Souvenir"] 
        }
      ]
    },
    {
      id: "kashmir-honeymoon",
      name: "Romantic Kashmir Honeymoon",
      duration: "7D/6N",
      originalPrice: 45000,
      currentPrice: 38500,
      discount: 14,
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&h=600&fit=crop",
      description: "Celebrate your love in the most romantic destination in India. This specially curated honeymoon package includes 2 nights on a decorated houseboat, candlelight dinners, and private tours through Kashmir's most scenic locations.",
      highlights: ["2 Nights Decorated Houseboat Stay", "Romantic Sunset Shikara Ride", "Candlelight Dinner Setup", "Private Couple Tours"],
      inclusions: ["6 Nights Premium Accommodation", "All Meals (Breakfast, Lunch & Dinner)", "Private AC Vehicle", "Honeymoon Cake & Flower Decoration", "Romantic Shikara Ride", "Candlelight Dinner"],
      exclusions: ["Airfare", "Personal Expenses", "Adventure Activities", "Photography Services"],
      itinerary: [
        { 
          day: 1, 
          title: "Romantic Arrival in Srinagar", 
          description: "Welcome to your honeymoon paradise! As you arrive at Srinagar Airport, our representative welcomes you with fragrant roses and traditional Kashmiri Phiran shawls. Transfer to your beautifully decorated houseboat on Dal Lake, where you'll find rose petals, candles, and a special honeymoon cake awaiting you. After settling in, enjoy a private sunset Shikara ride with your beloved, complete with a guitarist playing romantic melodies as you glide past the stunning Mughal gardens and witness the sun painting the Zabarwan hills in golden hues. Return to your houseboat for a romantic candlelit dinner on the deck, with the moonlight reflecting on the still waters of Dal Lake.", 
          highlights: ["Rose & Shawl Welcome at Airport", "Decorated Houseboat with Rose Petals", "Private Sunset Shikara with Guitarist", "Candlelight Dinner on Deck", "Honeymoon Cake Celebration"] 
        },
        { 
          day: 2, 
          title: "Srinagar Love Story", 
          description: "Wake up to the gentle sounds of water lapping against your houseboat and the calls of kingfishers. Enjoy a leisurely breakfast in bed, followed by a couple's Shikhara ride to the famous floating gardens and the Char Chinar island - a romantic spot with four majestic Chinar trees surrounded by water. Spend the afternoon visiting the Mughal Gardens hand-in-hand - walk through the same terraces where emperors strolled with their queens. Visit the romantic fountains of Shalimar Bagh and capture beautiful couple photos among centuries-old Chinar trees. In the evening, visit the local handicraft centers where you can select a beautiful Pashmina shawl for your spouse - a perfect honeymoon gift. Return to your houseboat for another magical evening.", 
          highlights: ["Breakfast in Bed", "Char Chinar Island Visit", "Romantic Mughal Gardens Walk", "Couple Photoshoot Spots", "Pashmina Shawl Shopping", "Candlelight Dinner"] 
        },
        { 
          day: 3, 
          title: "Gulmarg Adventure Together", 
          description: "Today, embark on a romantic adventure to Gulmarg - the meadow of flowers. The scenic 2-hour drive through apple orchards and pine forests is perfect for holding hands and capturing memories. At Gulmarg, take the famous Gondola ride together to Kongdoori and then to Apharwat Peak. At the top, with snow all around you and the magnificent Himalayan peaks as your backdrop, it's the perfect spot for those dreamy honeymoon photographs. Play in the snow like children - build snowmen together and engage in friendly snowball fights! Enjoy hot Kahwa and Kashmiri snacks at a mountain café. The evening is perfect for a romantic walk on the golf course meadows as the sun sets behind the peaks.", 
          highlights: ["Scenic Drive Through Apple Orchards", "Gondola Ride Holding Hands", "Snow Play Together at 13,780 ft", "Hot Kahwa at Mountain Café", "Sunset Walk on Golf Course", "Cozy Mountain Hotel Dinner"] 
        },
        { 
          day: 4, 
          title: "Pahalgam - Valley of Romance", 
          description: "Drive to Pahalgam, the enchanting valley of shepherds. The journey takes you through some of Kashmir's most picturesque landscapes. Upon arrival, check into your riverside hotel with views of the flowing Lidder River. After lunch, visit the stunning Aru Valley - its peaceful meadows and snow peaks make it one of the most romantic spots in Kashmir. Take a leisurely walk through the valley, stopping for photos and to simply enjoy each other's company in this serene environment. For the adventurous couple, optional pony rides are available through the pine forests. In the evening, enjoy a riverside bonfire arranged specially for you, complete with hot chocolate and stargazing.", 
          highlights: ["Scenic Pahalgam Valley Drive", "Riverside Hotel Check-in", "Aru Valley Private Walk", "Optional Pony Ride for Two", "Private Riverside Bonfire", "Stargazing & Hot Chocolate"] 
        },
        { 
          day: 5, 
          title: "Pahalgam Romance Continues", 
          description: "Today is all about creating intimate memories. After breakfast, visit Betaab Valley - named after a Bollywood romance film and frequently used as a backdrop for romantic movie scenes. The lush green meadows surrounded by snow-capped mountains create a fairytale setting. Arrange for a private picnic by the stream, complete with Kashmiri delicacies and wine (if preferred). In the afternoon, visit Chandanwari for some snow fun together. Try sledging on the snow bridges - an exhilarating experience for couples! Return to Pahalgam and enjoy an evening stroll through the local market, picking up souvenirs together. Dinner is a special candlelight affair by the riverside, with live traditional Kashmiri music.", 
          highlights: ["Betaab Valley Private Picnic", "Romantic Streamside Lunch", "Chandanwari Snow Sledging", "Couple Shopping at Local Market", "Riverside Candlelight Dinner", "Live Traditional Music"] 
        },
        { 
          day: 6, 
          title: "Return to Srinagar Houseboat", 
          description: "After a leisurely morning, drive back to Srinagar for your final night on the romantic houseboat. Spend the afternoon at leisure - perhaps indulge in a couple's Shikhara ride through the less-explored corners of Dal Lake, or simply relax on the houseboat deck with books and each other's company. In the evening, a very special celebration awaits - a private candlelight dinner is arranged on a decorated Shikara floating in the middle of Dal Lake under the stars. With candles flickering, soft music playing, and the stars as your witness, it's a truly once-in-a-lifetime experience. Return to your houseboat filled with beautiful memories.", 
          highlights: ["Leisurely Return to Srinagar", "Afternoon Relaxation on Houseboat", "Optional Couple Shikara Adventure", "Private Dinner on Floating Shikara", "Starlit Lake Experience", "Final Night Memories"] 
        },
        { 
          day: 7, 
          title: "Farewell from Paradise", 
          description: "On your final morning, enjoy a romantic breakfast together on the houseboat deck, reminiscing about the beautiful week you've spent together. Our representative will help you with any last-minute shopping for gifts for family back home. Transfer to Srinagar Airport for your departure, carrying not just photographs and souvenirs, but a treasure trove of romantic memories that will strengthen your bond forever. As you leave the valley, know that you've celebrated your love in one of the most beautiful places on earth. Congratulations on your new journey together!", 
          highlights: ["Romantic Breakfast on Deck", "Last-Minute Gift Shopping", "Airport Transfer", "Farewell with Love"] 
        }
      ]
    },
    {
      id: "kashmir-adventure",
      name: "Kashmir Adventure Trek",
      duration: "8D/7N",
      originalPrice: 52000,
      currentPrice: 44200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&h=600&fit=crop",
      description: "For the adventurous soul, this trek through the Kashmir Great Lakes is a journey through some of the most pristine alpine landscapes in the world. Camp under stars, cross high passes, and witness seven stunning high-altitude lakes.",
      highlights: ["Kashmir Great Lakes Trek", "Camping Under Stars", "7 Alpine Lakes", "Mountain Wildlife Spotting"],
      inclusions: ["7 Nights Accommodation (Hotels & Camps)", "All Meals During Trek", "Professional Trek Guide", "Porters & Ponies", "Trekking Equipment", "Forest Permits"],
      exclusions: ["Airfare", "Personal Trekking Gear", "Tips for Guide & Porters", "Travel Insurance"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival in Srinagar - Trek Briefing", 
          description: "Arrive at Srinagar Airport and transfer to your hotel. After lunch, attend a comprehensive trek briefing session conducted by your experienced trek leader. Learn about the route, daily schedules, safety protocols, and what to expect at high altitudes. The guide will check your gear and provide any missing essential equipment. Evening is spent exploring the local market for any last-minute requirements. Meet your fellow trekkers over dinner and get to know your team. Early dinner and rest is advised as the adventure begins early tomorrow. Altitude: 1,600m (5,249 ft).", 
          highlights: ["Airport Pickup & Hotel Check-in", "Detailed Trek Briefing Session", "Equipment Check & Distribution", "Meet Fellow Trekkers", "Local Market Visit", "Early Dinner & Rest"] 
        },
        { 
          day: 2, 
          title: "Srinagar to Sonamarg to Nichnai", 
          description: "Wake up early for a 3-hour drive to Sonamarg (Meadow of Gold), passing through stunning valleys. From Sonamarg, the trek begins! The first day is a gentle introduction, covering 12 km to Nichnai. The trail winds through lush meadows dotted with wildflowers, dense birch and pine forests, and offers your first views of the Great Lakes region. Cross the Nichnai stream multiple times as you ascend gradually. Arrive at the beautiful Nichnai campsite (3,500m) by afternoon. Set up camp in a meadow surrounded by snow peaks. Evening orientation on high altitude precautions. Dinner around a bonfire followed by stargazing at the crystal-clear high-altitude sky. Trek Distance: 12 km | Altitude Gain: 1,900m", 
          highlights: ["Scenic Drive to Sonamarg (3 hrs)", "Trek Start Through Meadows (12 km)", "Wildflower Meadows & Pine Forests", "Stream Crossings", "First High-Altitude Camp at 3,500m", "Bonfire & Stargazing Session"] 
        },
        { 
          day: 3, 
          title: "Nichnai to Vishansar Lake", 
          description: "Today you'll witness your first alpine lake! After an early breakfast, begin the ascent towards Nichnai Pass (4,100m). The trail steepens as you leave the tree line behind and enter true alpine territory. The climb is demanding but the views are rewarding - look back to see the valley you climbed from, and ahead to snow-covered peaks. Cross the pass and descend to the stunning Vishansar Lake (3,710m) - a pristine turquoise lake surrounded by rocky mountains and snow patches. The reflection of peaks in the still waters is mesmerizing. Set up camp by the lake. Afternoon is free to explore, photograph, or simply sit by the lake in quiet contemplation. Trek Distance: 11 km | Altitude Gain: 600m to pass, descent to 3,710m", 
          highlights: ["Nichnai Pass Crossing (4,100m)", "First Alpine Lake - Vishansar", "Turquoise Waters & Snow Peaks", "Lakeside Camping", "Mountain Reflections Photography", "Wildlife Spotting Opportunities"] 
        },
        { 
          day: 4, 
          title: "Vishansar to Gadsar Lake", 
          description: "One of the most spectacular days of the trek! After breakfast, walk along the shores of Vishansar Lake and then climb towards Gadsar Pass (4,200m). En route, pass by the beautiful Krishansar Lake - a twin lake connected to Vishansar. The ascent to Gadsar Pass is challenging but the views from the top are among the best in the entire trek - you can see multiple lakes and endless mountain ranges. Descend to Gadsar Lake, known as the 'Lake of Fish' due to its abundance of brown trout. Camp is set up on a grassy plateau overlooking the lake. This is prime territory for spotting Himalayan wildlife including Marmots and if lucky, the elusive Himalayan Black Bear. Trek Distance: 10 km | Altitude: Cross 4,200m pass", 
          highlights: ["Krishansar Lake Visit (Twin Lake)", "Gadsar Pass Crossing (4,200m)", "Panoramic Views of Lake Region", "Gadsar Lake - Lake of Fish", "Wildlife: Marmots & Possibly Bears", "Remote Wilderness Camping"] 
        },
        { 
          day: 5, 
          title: "Gadsar to Satsar Lakes", 
          description: "Today's trek takes you through diverse landscapes to the mystical Satsar Lakes. Satsar means 'Seven Lakes' - a chain of interconnected small lakes at varying elevations. The trail descends from Gadsar and then climbs through beautiful meadows carpeted with wildflowers in season. The region is known for its rich biodiversity - look out for various species of birds, butterflies, and small mammals. Reach the Satsar campsite situated among the lakes by afternoon. Each lake has its own character - some are deep blue, others are greenish, and they're all surrounded by mountains. Take time to explore the different lakes and find your favorite spot for photography or meditation. Trek Distance: 9 km | Altitude: 3,600m", 
          highlights: ["Trek Through Wildflower Meadows", "Seven Interconnected Lakes", "Rich Biodiversity Region", "Bird & Butterfly Watching", "Multiple Lake Photography", "Serene Camping Among Lakes"] 
        },
        { 
          day: 6, 
          title: "Satsar to Gangabal Lake", 
          description: "Today you'll reach the crown jewel of the trek - Gangabal Lake, the largest and most sacred of all Kashmir lakes! The trail involves crossing the Zajibal Pass (4,000m) with stunning views in all directions. The descent to Gangabal reveals the magnificent lake in stages - first you see glimpses, then the full expanse opens up before you. At 2.5 km long and 1 km wide, Gangabal is vast and sits majestically at the feet of Mount Harmukh (5,142m), one of the most revered peaks in Kashmir. The lake is considered sacred by Kashmiri Hindus, and its turquoise waters are hauntingly beautiful. Set up final camp by the lake with Harmukh towering above. Evening celebration dinner with your trek team. Trek Distance: 10 km | Altitude: 3,570m", 
          highlights: ["Zajibal Pass Crossing (4,000m)", "First Views of Sacred Gangabal", "Largest Lake of the Trek", "Mount Harmukh Base (5,142m)", "Sacred Hindu Pilgrimage Site", "Celebration Dinner by Lake"] 
        },
        { 
          day: 7, 
          title: "Descent to Naranag - Journey Back", 
          description: "Final day of trekking! Wake up early for sunrise over Gangabal - the light playing on Harmukh's peaks and reflecting in the lake is a sight you'll never forget. After breakfast, begin the descent to Naranag (14 km). The trail is well-defined and passes through beautiful forests and meadows. Stop at the ancient Naranag temples, dating back to the 8th century - these ruins showcase remarkable Kashmiri Hindu architecture and are an important archaeological site. From Naranag, drive back to Srinagar (3 hours). Check into hotel, enjoy a hot shower (much appreciated after the trek!), and a celebratory dinner with your new trekking friends. Trek Distance: 14 km | Descent to 2,200m", 
          highlights: ["Sunrise Over Gangabal Lake", "Final Trek Descent (14 km)", "Ancient Naranag Temple Ruins", "8th Century Archaeological Site", "Drive Back to Srinagar (3 hrs)", "Hot Shower & Celebration Dinner"] 
        },
        { 
          day: 8, 
          title: "Departure from Srinagar", 
          description: "After a well-deserved rest, enjoy a leisurely breakfast. Morning is free for optional shopping - pick up certificates of your achievement, trek photos, and souvenirs. Bid farewell to your trek leader, guides, and fellow adventurers who have become friends over this incredible journey. Transfer to Srinagar Airport for your departure. You leave Kashmir not just with memories of stunning lakes and challenging passes, but with a sense of accomplishment and a deeper connection to nature. The Great Lakes of Kashmir will forever remain in your heart.", 
          highlights: ["Leisurely Morning & Breakfast", "Trek Certificate Collection", "Farewell to Trek Team", "Optional Local Shopping", "Airport Transfer", "Carry Home Incredible Memories"] 
        }
      ]
    },
    {
      id: "kashmir-winter-wonderland",
      name: "Kashmir Winter Wonderland",
      duration: "5D/4N",
      originalPrice: 35000,
      currentPrice: 29750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&h=600&fit=crop",
      description: "Experience the magical white Christmas vibes of Kashmir in winter. From skiing in Gulmarg to walking on the frozen Dal Lake, this winter special package offers unique experiences that can only be enjoyed when Kashmir transforms into a snow-covered paradise.",
      highlights: ["Skiing in Gulmarg", "Frozen Dal Lake Walk", "Snow Adventures", "Hot Kahwa by Fireplace"],
      inclusions: ["4 Nights Premium Heated Accommodation", "All Meals", "Snow Gear & Equipment", "Skiing Lessons (Beginner)", "Transfers in Snow-Ready Vehicle"],
      exclusions: ["Airfare", "Personal Expenses", "Optional Advanced Activities", "Personal Warm Clothing"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival in Winter Paradise", 
          description: "Welcome to Winter Wonderland! Arrive at Srinagar Airport, likely covered in snow during peak winter months (December-February). As you step out, the chilly mountain air and snow-covered peaks greet you. Transfer to your centrally heated houseboat or hotel - both equipped with bukhari (traditional Kashmiri heaters). Warm up with traditional Kahwa tea spiced with saffron and almonds. If weather permits, experience the unique phenomenon of walking on the frozen Dal Lake - something only possible in peak winter when temperatures drop to -10°C. The frozen lake, surrounded by snow-covered houseboats and Zabarwan hills, is an otherworldly sight. Evening hot chocolate and traditional Wazwan dinner. Snuggle up in your warm room as snow may fall outside.", 
          highlights: ["Snowy Airport Arrival", "Heated Houseboat/Hotel Welcome", "Traditional Kahwa by Bukhari", "Frozen Dal Lake Walk (if weather permits)", "Snow Photography Session", "Wazwan Dinner by Fireplace"] 
        },
        { 
          day: 2, 
          title: "Gulmarg Skiing Adventure", 
          description: "Today is all about snow sports! After breakfast, drive to Gulmarg (56 km) - Asia's premier skiing destination with some of the best powder snow in the world. The drive itself is magical with snow-laden trees and white landscapes. Upon arrival, get fitted with skiing equipment and meet your ski instructor. Beginners will learn on the nursery slopes, mastering the basics of balance, stopping, and turning. More experienced skiers can explore the intermediate runs or take the Gondola to access higher slopes. The Gulmarg ski runs are famous worldwide, attracting skiers from across the globe. After an exhilarating day, warm up with hot soup and Maggi at a snow café. Option to stay overnight in Gulmarg for early skiing tomorrow or return to Srinagar.", 
          highlights: ["Scenic Snow Drive to Gulmarg", "Professional Ski Equipment Fitting", "2-Hour Beginner Skiing Lesson", "Powder Snow Experience", "Optional Advanced Slopes via Gondola", "Hot Soup at Snow Café"] 
        },
        { 
          day: 3, 
          title: "More Snow Fun in Gulmarg", 
          description: "Another day in snow paradise! Start with an early morning Gondola ride to Kongdoori (Phase 1) or brave the heights to Apharwat Peak (Phase 2 at 13,780 ft). At Apharwat, you'll find yourself in a world of pure white - deep snow as far as you can see, with stunning views of Nanga Parbat and other Himalayan giants. Try snowboarding, sledging, or simply make snow angels! For the adventurous, Gulmarg offers off-piste skiing opportunities that are legendary among winter sports enthusiasts. Afternoon, return to base and enjoy traditional Kashmiri street food - try the delicious Kashmiri kebabs and seekh kababs freshly grilled. Evening bonfire session at the hotel with songs and stories. Hot butter tea (Nun Chai) before bed.", 
          highlights: ["Early Gondola to Apharwat Peak", "Deep Powder Snow Experience", "Views of Nanga Parbat", "Snowboarding & Sledging", "Optional Off-Piste Skiing", "Evening Bonfire with Hot Butter Tea"] 
        },
        { 
          day: 4, 
          title: "Pahalgam Snow Magic", 
          description: "Today, drive to Pahalgam (140 km, approx. 4 hours in winter), experiencing the diverse winter landscapes of Kashmir. The valley is blanketed in white, with the Lidder River partially frozen and icicles hanging from rocks. Visit Betaab Valley, which looks even more magical in winter - pristine white snow covering the meadows with frozen streams. Try sledge rides pulled by local guides - a traditional Kashmiri winter activity. If accessible, visit Chandanwari for more snow activities on the permanent snow bridges. Experience local winter food - try Harissa, a traditional Kashmiri winter delicacy made from slow-cooked mutton and rice, incredibly warming and delicious. Evening by the fire with traditional storytelling.", 
          highlights: ["Winter Drive to Pahalgam", "Betaab Valley in Snow", "Traditional Sledge Rides", "Frozen Waterfall Photography", "Harissa - Traditional Winter Delicacy", "Storytelling by Fireplace"] 
        },
        { 
          day: 5, 
          title: "Departure from Winter Paradise", 
          description: "Your winter fairy tale comes to an end, but the memories will keep you warm forever. Enjoy a hearty breakfast featuring Kashmiri bread (Girda, Lavasa) with butter and honey. If time permits, visit the local market for last-minute shopping - winter is the best time to buy authentic Kashmiri shawls as you can test their warmth immediately! Purchase walnuts, almonds, and saffron - Kashmir's famous exports. Transfer to Srinagar Airport for your departure. As your flight takes off over the snow-covered valley, take one last look at the paradise that has given you unforgettable winter memories. See you next winter!", 
          highlights: ["Traditional Kashmiri Breakfast", "Warm Shawl Shopping", "Dry Fruit & Saffron Purchase", "Airport Transfer", "Farewell from Winter Wonderland"] 
        }
      ]
    },
    {
      id: "kashmir-family-delight",
      name: "Kashmir Family Delight",
      duration: "6D/5N",
      originalPrice: 48000,
      currentPrice: 40800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&h=600&fit=crop",
      description: "A perfect family vacation designed with activities suitable for all ages. From grandparents to children, everyone will enjoy this carefully crafted itinerary featuring comfortable stays, kid-friendly adventures, and cultural experiences the whole family will treasure.",
      highlights: ["Pony Rides for Kids", "Family Shikara Experiences", "Apple Orchard Visits", "Cultural Shows & Workshops"],
      inclusions: ["5 Nights Family-Friendly Accommodation", "All Meals (Kids Menu Available)", "Kid-Friendly Activities", "Private Family Vehicle", "English-Speaking Guide"],
      exclusions: ["Airfare", "Personal Expenses", "Shopping", "Optional Activities"],
      itinerary: [
        { 
          day: 1, 
          title: "Family Arrival in Srinagar", 
          description: "Welcome families to paradise! Arrive at Srinagar Airport where our guide welcomes your family with traditional garlands. Children receive a special Kashmiri toy as a welcome gift. Transfer to your family houseboat on Dal Lake - an experience kids will never forget! Watch their eyes light up as they realize they'll be living on a boat! After settling in, enjoy a fun family Shikara ride on Dal Lake. Kids can help paddle the Shikara (with supervision) and feed the fish. Stop at a floating shop for Kashmiri snacks. Look out for kingfishers and other birds. Return for a family dinner on the houseboat deck, with special items on the kids' menu. Storytelling session with Kashmiri folk tales before bed.", 
          highlights: ["Family Welcome with Gifts for Kids", "Houseboat Living Experience", "Family Shikara Ride", "Kids Paddle & Feed Fish", "Birds & Nature Spotting", "Kashmiri Storytelling Session"] 
        },
        { 
          day: 2, 
          title: "Gulmarg Family Fun", 
          description: "Load up the family for an exciting day at Gulmarg! The drive through apple orchards is delightful - make stops for family photos. At Gulmarg, the Gondola ride is a thrilling experience for all ages - kids will love 'flying' over snow-covered mountains. At Kongdoori, there's plenty of gentle snow for the whole family to enjoy. Build snowmen together, have friendly snowball fights, and make snow angels. For grandparents who prefer to relax, there are comfortable cafés with stunning views. Pony rides are available and are a hit with children - gentle ponies are specially selected for young riders. Late afternoon, visit the meadows where kids can run around freely. Drive back to Srinagar with happy, tired kids for a good night's sleep.", 
          highlights: ["Scenic Family Drive", "Gondola Ride for All Ages", "Gentle Snow Play Area", "Family Snowman Building", "Safe Pony Rides for Kids", "Cafés for Grandparents"] 
        },
        { 
          day: 3, 
          title: "Pahalgam Adventures for All", 
          description: "Drive to Pahalgam, stopping at an apple orchard en route. Kids can pick apples (in season) and learn how apple juice and dried apples are made. At Pahalgam, the Lidder River provides safe spots where the whole family can enjoy riverside picnics. Children love throwing stones in the river and wading in the shallow edges (supervision required). Visit Betaab Valley - the vast meadows are perfect for family games like frisbee and football. Horse rides are organized for kids through safe trails with trained guides. For adventure-seeking teenagers, optional supervised pony trek to nearby viewpoints. Return to your hotel for an early dinner - kids will be tired and hungry!", 
          highlights: ["Apple Orchard Visit & Picking", "Riverside Family Picnic", "Betaab Valley Family Games", "Safe Pony Rides with Guides", "Nature Exploration for Kids", "Teenager Adventure Options"] 
        },
        { 
          day: 4, 
          title: "Sonmarg - Meadow of Gold", 
          description: "Day trip to Sonmarg - one of Kashmir's most beautiful meadows. The drive is scenic with the Sindh River flowing alongside. At Sonmarg, families can take pony rides to Thajiwas Glacier - kids ride on their own ponies (with handlers walking alongside) while adults can also ride or walk. The glacier area is perfect for supervised snow play even in summer. Safe sledge rides on snow are popular with children. The meadows are ideal for family picnics - we arrange a special lunch with items everyone enjoys. Spot marmots (cute mountain squirrels) that kids find fascinating. Return to Srinagar via Kangan, stopping at roadside stalls for fresh corn and walnuts. Evening cultural show featuring traditional Kashmiri Rouf dance - colorful and entertaining for the whole family.", 
          highlights: ["Scenic Drive Along Sindh River", "Pony Ride to Thajiwas Glacier", "Safe Snow Sledge Rides", "Marmot (Mountain Squirrel) Spotting", "Family Picnic in Meadows", "Evening Cultural Dance Show"] 
        },
        { 
          day: 5, 
          title: "Srinagar Exploration", 
          description: "Today we explore Srinagar with kid-friendly activities. Start with the beautiful Mughal Gardens - Nishat Bagh has terraced lawns perfect for kids to run around, and the fountains are a hit. At Chashme Shahi, drink from the natural spring - tell kids the legend that this water makes wishes come true! Visit a Papier-mâché workshop where children can paint their own small boxes (take home as souvenirs). Adults might enjoy a visit to the saffron research center while kids continue crafts. Afternoon optional visit to the zoo or a walk through old Srinagar's charming alleys. Final family Shikara ride to watch the sunset. Farewell dinner on the houseboat with a special celebration - maybe it's someone's birthday, or just celebrating a wonderful family holiday!", 
          highlights: ["Mughal Gardens with Play Areas", "Wish-Making at Chashme Shahi", "Papier-Mâché Kids' Workshop", "Take-Home Craft Souvenirs", "Zoo or Old City Walk", "Farewell Celebration Dinner"] 
        },
        { 
          day: 6, 
          title: "Departure with Happy Memories", 
          description: "Last morning in Kashmir! Enjoy a leisurely family breakfast on the houseboat. Collect all the photos and videos captured over the trip. Kids can say goodbye to the houseboat crew who have become friends. Quick visit to a dry fruit shop - let kids pick their favorite nuts to take home (walnuts are highly recommended!). Transfer to airport for your departure. As you fly home, the whole family will be sharing their favorite memories - was it the Gondola ride, the pony trek, the snow play, or living on a houseboat? Kashmir has given your family bonds that will last forever. Thank you for choosing Alison Holidays for your family adventure!", 
          highlights: ["Leisurely Family Breakfast", "Goodbye to Houseboat Friends", "Kids' Dry Fruit Shopping", "Airport Transfer", "Lasting Family Memories"] 
        }
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
  heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&h=600&fit=crop"
  ],
  packages: [
    {
      id: "kerala-backwaters",
      name: "Kerala Backwater Bliss",
      duration: "5D/4N",
      originalPrice: 28500,
      currentPrice: 23800,
      discount: 16,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      description: "Cruise through the serene backwaters of Alleppey on a traditional houseboat, explore Cochin's colonial heritage, and wander through the misty tea gardens of Munnar.",
      highlights: ["Overnight Houseboat Stay", "Kathakali Dance Show", "Ayurvedic Spa Session", "Tea Garden Visit"],
      inclusions: ["4 Nights Accommodation", "All Meals on Houseboat", "AC Private Vehicle", "All Sightseeing as per itinerary"],
      exclusions: ["Airfare", "Personal Expenses", "Optional Activities", "Travel Insurance"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival in Cochin - Queen of Arabian Sea", 
          description: "Welcome to Kerala! Arrive at Cochin International Airport and transfer to your heritage hotel in Fort Kochi, a charming area steeped in 500 years of colonial history. After freshening up, begin exploring this unique city that blends Portuguese, Dutch, and British influences. Walk to the iconic Chinese Fishing Nets, centuries-old fishing contraptions that have become Cochin's symbol. Watch fishermen operate these massive nets as the sun sets - a perfect photo opportunity. Visit St. Francis Church, India's oldest European church where Vasco da Gama was originally buried. Explore the atmospheric Jewish Synagogue in Mattancherry and the nearby antique shops. Evening, witness a mesmerizing Kathakali performance - an ancient dance-drama unique to Kerala, featuring elaborate costumes, makeup, and expressive storytelling.", 
          highlights: ["Fort Kochi Heritage Hotel Check-in", "Iconic Chinese Fishing Nets at Sunset", "St. Francis Church - Vasco da Gama's First Burial Site", "Jewish Synagogue Visit", "Mesmerizing Kathakali Dance Performance", "Fresh Seafood Dinner by the Sea"] 
        },
        { 
          day: 2, 
          title: "Cochin to Munnar - Into the Clouds", 
          description: "After breakfast, embark on one of India's most scenic drives as you climb from sea level to 1,600 meters through the Western Ghats to Munnar. The 130 km journey (approx. 4 hours) takes you through tropical forests, rubber plantations, and aromatic spice gardens. Stop at Cheeyappara and Valara Waterfalls for photos and fresh coconut water. As you climb higher, the landscape transforms - tea plantations begin to appear, covering hillsides in carpets of green. The air becomes cooler and fresher. Arrive at Munnar, a former summer retreat of the British. After lunch, visit the fascinating Tea Museum to learn about tea production from plantation to cup, including tea tasting. Drive to Mattupetty Dam and Echo Point, where your voice echoes across the valley. Optional boating on the serene Mattupetty Lake. Return to your hillside resort for dinner with misty mountain views.", 
          highlights: ["Scenic Western Ghats Drive", "Cheeyappara & Valara Waterfalls", "Spice Gardens & Rubber Plantations", "Tea Museum & Tea Tasting", "Mattupetty Dam & Echo Point", "Hillside Resort with Valley Views"] 
        },
        { 
          day: 3, 
          title: "Munnar to Thekkady - Spice Hills & Wildlife", 
          description: "Start early for a visit to Eravikulam National Park (open September-March), home to the endangered Nilgiri Tahr mountain goats. The park's rolling grasslands and stunning views make it a nature lover's paradise. After breakfast, drive to Thekkady (95 km, approx. 3 hours), gateway to the Periyar Wildlife Sanctuary. The route passes through cardamom and pepper plantations - you can smell the spices in the air! Upon arrival, check into your resort surrounded by spice gardens. After lunch, take a guided spice plantation walk - see pepper vines climbing trees, cardamom plants with aromatic pods, nutmeg, cinnamon, and vanilla. Your guide will explain the cultivation and uses of each spice. Evening, enjoy a boat cruise on Periyar Lake with chances to spot wild elephants, gaur (Indian bison), and various birds. Night entertainment includes traditional Kalaripayattu martial arts show.", 
          highlights: ["Eravikulam National Park & Nilgiri Tahr", "Drive Through Cardamom Hills", "Spice Plantation Walk & Tasting", "Periyar Lake Boat Safari", "Wild Elephant Spotting Chance", "Kalaripayattu Martial Arts Show"] 
        },
        { 
          day: 4, 
          title: "Thekkady to Alleppey - Backwater Paradise", 
          description: "Morning optional activities in Thekkady - choose from bamboo rafting, nature walks, or elephant interaction programs. Then drive to Alleppey (130 km, approx. 4 hours), the Venice of the East. Here awaits the highlight of your Kerala journey - the traditional houseboat (Kettuvallam)! Board your floating hotel around noon, welcomed with lime juice and fresh fruits. As the boat glides through the famous Alleppey backwaters, watch village life unfold along the shores. See farmers in rice paddies, children swimming in canals, women washing clothes, and fishermen casting nets. Pass under low bridges, through narrow canals lined with coconut palms. The crew serves you lunch of fresh fish curry, coconut rice, and local vegetables - cooked fresh on board! Evening, anchor at a scenic spot. Enjoy sunset from the deck, followed by dinner under the stars. Sleep to the gentle sounds of water lapping against the boat.", 
          highlights: ["Optional Morning Activities in Thekkady", "Drive to Alleppey - Venice of the East", "Traditional Houseboat Boarding", "Backwater Village Life Experience", "Fresh Fish Curry Lunch On-Board", "Sunset & Dinner Under Stars on Deck"] 
        },
        { 
          day: 5, 
          title: "Alleppey to Cochin - Departure", 
          description: "Wake up to sunrise over the backwaters - one of the most peaceful mornings you'll ever experience. Enjoy an early morning cruise as the backwaters come alive with fishing boats and village activity. A traditional Kerala breakfast is served on board - appam (rice pancakes), stew, puttu, and fresh tropical fruits. Disembark after breakfast and drive to Cochin Airport (85 km, approx. 2 hours). If time permits, stop at the Lulu Mall (India's largest shopping mall) for last-minute shopping or refreshments. Transfer to Cochin Airport for your onward journey. As you fly over the backwaters and green landscapes of Kerala, carry with you the warmth of God's Own Country. The sights, sounds, tastes, and hospitality of Kerala will stay with you forever. Namaste and safe travels!", 
          highlights: ["Sunrise Cruise on Backwaters", "Traditional Kerala Breakfast On-Board", "Final Village Views from Boat", "Optional Lulu Mall Shopping", "Airport Transfer", "Memories of God's Own Country"] 
        }
      ]
    },
    {
      id: "kerala-complete",
      name: "Complete Kerala",
      duration: "7D/6N",
      originalPrice: 42000,
      currentPrice: 35700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&h=600&fit=crop",
      description: "Comprehensive Kerala tour covering all major attractions from the misty hills of Munnar to the beaches of Kovalam. Experience wildlife, backwaters, and cultural heritage in one complete journey.",
      highlights: ["Munnar Tea Gardens", "Periyar Wildlife Sanctuary", "Alleppey Backwaters", "Kovalam Beach"],
      inclusions: ["6 Nights Quality Accommodation", "Daily Breakfast", "AC Private Vehicle", "All Sightseeing Entry Fees"],
      exclusions: ["Airfare", "Lunch & Dinner", "Boat Rides & Optional Activities"],
      itinerary: [
        { 
          day: 1, 
          title: "Cochin Arrival - Heritage & History", 
          description: "Arrive at Cochin Airport and transfer to your hotel in the historic Fort Kochi area. This former trading post is where the Portuguese, Dutch, British, and Arabs left their mark over centuries. After refreshments, begin your exploration. Visit the famous Chinese Fishing Nets - massive cantilevered structures believed to have been introduced by Chinese traders in the 14th century. Watch the sunset through these iconic nets for memorable photos. Walk to St. Francis Church, built in 1503, where Vasco da Gama was first buried (his remains were later moved to Portugal). Explore the 450-year-old Jewish Synagogue with its beautiful Belgian glass chandeliers and hand-painted Chinese floor tiles. Evening, witness an authentic Kathakali performance - an elaborate dance-drama unique to Kerala. The artists spend hours applying makeup that transforms them into characters from Hindu epics. Dinner at a seafood restaurant where you can choose your fish fresh from the catch.", 
          highlights: ["Fort Kochi Heritage Hotel", "Chinese Fishing Nets at Sunset", "St. Francis Church - Oldest European Church", "Mattancherry Jewish Synagogue", "Authentic Kathakali Dance Performance", "Fresh Seafood Dinner by Harbor"] 
        },
        { 
          day: 2, 
          title: "Cochin to Munnar - Journey to the Hills", 
          description: "After a leisurely breakfast, begin your scenic ascent to Munnar (130 km, approx. 4 hours). The drive is one of Kerala's most beautiful - watch the landscape transform from coastal plains to rubber plantations, spice gardens, and finally endless tea estates. Stop at Cheeyappara Falls, a seven-tiered waterfall cascading down the hillside. Further up, visit a spice garden to see how pepper, cardamom, coffee, and other spices are grown. You can purchase fresh spices at excellent prices. Continue climbing through hairpin bends as the air becomes cooler and the views more spectacular. Arrive at Munnar, nestled among the highest tea plantations in the world. After lunch and check-in, visit the KDHP Tea Museum to understand the history and process of tea-making, complete with tasting. Evening drive to Photo Point and View Point for panoramic views of the tea-covered hills extending to the horizon.", 
          highlights: ["Scenic 4-Hour Hill Drive", "Cheeyappara Waterfalls Photo Stop", "Spice Garden Visit & Shopping", "Arrive Munnar - World's Highest Tea Gardens", "KDHP Tea Museum & Tea Tasting", "Sunset at View Point"] 
        },
        { 
          day: 3, 
          title: "Munnar Full Day Exploration", 
          description: "Today is dedicated to experiencing Munnar's stunning natural beauty. Start early for Eravikulam National Park (open September-March), home to the endangered Nilgiri Tahr mountain goat. The park's grassy slopes and shola forests are remarkably beautiful. If closed for breeding season, instead visit the nearby Tata Tea Museum and Tea Factory. Next, drive to Top Station - at 1,700m, it offers stunning views of the neighboring state of Tamil Nadu and on clear days, the distant Western Ghats. The drive itself is spectacular through the highest tea plantations. After lunch, visit Mattupetty Dam and enjoy a boat ride on the serene lake surrounded by hills. Continue to Echo Point where your voice echoes multiple times across the valley. Return via Photo Point and Pothamedu View Point for more stunning vistas. Evening at leisure to enjoy your resort's facilities or take a walk through nearby tea plantations.", 
          highlights: ["Eravikulam National Park & Nilgiri Tahr", "Top Station - Panoramic Views (1,700m)", "Drive Through Highest Tea Plantations", "Mattupetty Dam Boating", "Echo Point Experience", "Leisurely Resort Evening"] 
        },
        { 
          day: 4, 
          title: "Munnar to Thekkady - Spice Country", 
          description: "After breakfast, drive to Thekkady (95 km, approx. 3 hours), gateway to the famous Periyar Wildlife Sanctuary. The route takes you through scenic cardamom hills - Thekkady is the heart of Kerala's spice trade. Check into your hotel, often set amidst spice plantations themselves. After lunch, enjoy a guided spice plantation walk. Your guide will show you how pepper vines climb trees, how cardamom grows in shaded forest floors, and you'll see nutmeg, cloves, cinnamon, coffee, and vanilla. The aromas are intoxicating! Late afternoon, head to Periyar Lake for a boat cruise. The lake is surrounded by Periyar Tiger Reserve, and from the boat, you have excellent chances of seeing wild elephants coming to drink, gaur (Indian bison), sambar deer, wild boar, and numerous birds. Evening, choose from local entertainment - Kalaripayattu martial arts show or tribal dance performances.", 
          highlights: ["Scenic Cardamom Hills Drive", "Spice Plantation Guided Walk", "See Pepper, Cardamom, Vanilla Growing", "Periyar Lake Boat Safari", "Wild Elephant Sightings (Common)", "Kalaripayattu Martial Arts Show"] 
        },
        { 
          day: 5, 
          title: "Thekkady to Alleppey - Venice of the East", 
          description: "Morning, optional activities in Thekkady - bamboo rafting on the lake, guided nature walks in Periyar, or visit an elephant camp. After breakfast, drive to Alleppey (130 km, approx. 4 hours), the heart of Kerala's backwater country. Around noon, board your traditional houseboat (Kettuvallam) - your floating hotel for the next 22 hours. These boats were once used to transport rice and spices; now converted into comfortable houseboats with bedrooms, bathrooms, and a kitchen. As the boat glides through narrow canals lined with coconut palms, watch village life unfold - farmers in rice paddies, children waving from shore, fishermen casting nets. Fresh Kerala meals are prepared on board by your cook. The cuisine here focuses on fish curry, prawn preparations, and traditional vegetarian dishes. Evening, anchor at a scenic spot. Watch the sunset from your deck, enjoy dinner under the stars, and fall asleep to the gentle sounds of the backwaters.", 
          highlights: ["Optional Thekkady Morning Activities", "Drive to Alleppey Backwaters", "Traditional Houseboat Boarding", "Glide Through Palm-Lined Canals", "Fresh Kerala Lunch & Dinner On-Board", "Overnight on Backwaters Under Stars"] 
        },
        { 
          day: 6, 
          title: "Alleppey to Kovalam - Beach Arrival", 
          description: "Wake up to a magical sunrise over the backwaters. After breakfast on board, continue cruising through the morning. Disembark around 9:30 AM and begin your drive to Kovalam (175 km, approx. 4.5 hours), Kerala's most famous beach destination. En route, you may stop at the Krishnapuram Palace or other heritage sites. Arrive at Kovalam by afternoon and check into your beachside hotel. Kovalam features a beautiful crescent beach divided by rocky promontories into three coves. The Lighthouse Beach is the most popular, named after the red and white lighthouse at its southern end. After settling in, walk down to the beach. The Arabian Sea here is perfect for swimming (be mindful of flags indicating safety). Watch the sunset from the beach as fishermen return with their catch. Evening, stroll along the beach promenade lined with restaurants, shops, and cafes. Enjoy fresh seafood dinner at a beachside shack - the grilled lobster and tiger prawns are exceptional.", 
          highlights: ["Sunrise & Breakfast on Houseboat", "Morning Backwater Cruise", "Drive to Kovalam Beach", "Lighthouse Beach Arrival", "Arabian Sea Sunset", "Fresh Seafood Beach Dinner"] 
        },
        { 
          day: 7, 
          title: "Kovalam & Departure", 
          description: "Your final morning in Kerala! Wake up early for a walk on the beach as the sun rises over the Arabian Sea - fishermen will be setting out in their boats, a serene and timeless scene. Enjoy a relaxed breakfast at your hotel. If time permits, visit the nearby Padmanabhapuram Palace (a stunning wooden palace) or the Vizhinjam fishing harbor. Alternatively, indulge in a traditional Ayurvedic massage at your hotel or one of Kovalam's many spas - the perfect way to end your Kerala journey. Around midday, transfer to Trivandrum Airport (15 km, approx. 30 minutes) for your departure. As you leave Kerala, you carry with you memories of misty mountains, serene backwaters, golden beaches, rich spices, and the warmth of Kerala hospitality. Namaste - until we meet again!", 
          highlights: ["Sunrise Beach Walk", "Relaxed Breakfast by the Sea", "Optional Padmanabhapuram Palace Visit", "Optional Ayurvedic Spa Treatment", "Trivandrum Airport Transfer (30 mins)", "Farewell from God's Own Country"] 
        }
      ]
    },
    {
      id: "kerala-ayurveda",
      name: "Kerala Ayurveda Retreat",
      duration: "6D/5N",
      originalPrice: 55000,
      currentPrice: 46750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&h=600&fit=crop",
      description: "Rejuvenate your mind, body, and soul with this comprehensive Ayurvedic wellness retreat. Experience authentic Panchakarma treatments, daily yoga and meditation, and organic Sattvic cuisine in a peaceful beachside setting.",
      highlights: ["Personalized Ayurvedic Treatments", "Daily Yoga & Meditation", "Meditation Sessions", "Organic Sattvic Cuisine"],
      inclusions: ["5 Nights Ayurveda Resort Stay", "All Ayurvedic Treatments", "Daily Yoga & Meditation", "All Meals (Ayurvedic Diet)"],
      exclusions: ["Airfare", "Personal Expenses", "Additional Treatments", "Travel Insurance"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival & Ayurvedic Assessment", 
          description: "Welcome to your healing journey! Arrive at Trivandrum or Cochin Airport and transfer to your Ayurveda resort, typically set in a serene beachside or backwater location. Upon arrival, settle into your comfortable room and enjoy a welcome drink of fresh herbal tea. After resting, meet your personal Ayurvedic physician for a detailed consultation. The doctor will assess your constitution (Prakriti) and current imbalances (Vikriti) through pulse diagnosis, observation, and health history. Based on this assessment, a personalized treatment plan is created for your stay, including specific therapies, diet, and lifestyle recommendations. Evening, attend an orientation session about the Ayurvedic lifestyle. Your first Sattvic dinner is served - fresh, vegetarian, and prepared according to Ayurvedic principles to support your healing journey.", 
          highlights: ["Resort Welcome & Herbal Tea", "Comfortable Room Check-in", "Detailed Ayurvedic Consultation", "Prakriti & Vikriti Assessment", "Personalized Treatment Plan Creation", "First Sattvic Ayurvedic Dinner"] 
        },
        { 
          day: 2, 
          title: "Beginning the Healing Journey", 
          description: "Your treatment journey begins today. Wake up early (around 6 AM) for a guided yoga session - Hatha yoga adapted to your constitution and health needs. After yoga, enjoy a light Ayurvedic breakfast. Mid-morning, your treatments begin. Today's signature therapy is Abhyanga - a synchronized full-body massage performed by two therapists using warm medicated oils selected for your body type. The massage improves circulation, releases toxins, and deeply relaxes the nervous system. After Abhyanga, you'll experience Swedana - a herbal steam bath that opens the pores and helps eliminate toxins loosened by the massage. Rest after treatment - this is crucial for the healing process. Light lunch is followed by free time. Evening, attend a meditation session. The day ends with dinner and early sleep - rest is essential in Ayurveda.", 
          highlights: ["6 AM Yoga Session", "Ayurvedic Breakfast", "Abhyanga - Two-Therapist Oil Massage", "Swedana - Herbal Steam Bath", "Mandatory Rest Period", "Evening Meditation & Early Sleep"] 
        },
        { 
          day: 3, 
          title: "Deep Cleansing & Detoxification", 
          description: "By day three, your body is beginning to respond to the treatments. Morning yoga focuses on pranayama (breathing exercises) which accelerates the cleansing process. Today's signature treatment is Shirodhara - a deeply relaxing therapy where warm medicated oil is poured in a continuous stream on the forehead (third eye). This treatment profoundly calms the nervous system, relieves stress, improves sleep, and enhances mental clarity. The sensation is deeply hypnotic and many people enter a meditative state. Following Shirodhara, enjoy a relaxing head, neck, and shoulder massage. Afternoon includes a nature walk on the beach or through the resort's gardens - gentle exercise is encouraged. Optional: join a cooking class to learn about Ayurvedic food preparation principles. Evening includes guided meditation or chanting sessions.", 
          highlights: ["Pranayama (Breathing) Yoga Focus", "Shirodhara - Third Eye Oil Treatment", "Deeply Relaxing Nervous System Reset", "Beach or Garden Nature Walk", "Optional Ayurvedic Cooking Class", "Evening Chanting & Meditation"] 
        },
        { 
          day: 4, 
          title: "Rejuvenation Therapies", 
          description: "Your body is now cleansed and ready for rejuvenation therapies. Morning yoga continues with postures tailored to your needs. Today's highlight is Pizhichil - the royal treatment! Warm medicated oil is poured continuously over your body while two therapists simultaneously massage in synchronized strokes. Historically reserved for royalty, this treatment deeply nourishes the tissues, improves skin health, and creates profound relaxation. After Pizhichil, enjoy Njavara Kizhi - a massage using boluses filled with cooked medicated rice, which strengthens muscles and provides excellent nutrition to the skin. Afternoon, enjoy free time for reading, journaling, or simply sitting peacefully. The resort may offer sessions on Ayurvedic lifestyle principles, stress management, or diet planning to take home.", 
          highlights: ["Personalized Morning Yoga", "Pizhichil - Royal Oil Bath Treatment", "Two-Therapist Synchronized Massage", "Njavara Kizhi - Medicated Rice Bolus", "Ayurvedic Lifestyle Workshop", "Peaceful Free Time for Reflection"] 
        },
        { 
          day: 5, 
          title: "Continued Wellness & Cultural Experience", 
          description: "Your treatments continue with consistency - Ayurveda believes in repetition for lasting benefits. Morning yoga and meditation as usual. Today's treatments may include specialized therapies based on your specific needs - Nasya (nasal treatment) for respiratory or sinus issues, Netra Tarpana (eye rejuvenation) for computer-strained eyes, or Kati Basti (lower back treatment) for spine health. The physician monitors your progress and may adjust treatments. Afternoon brings a cultural experience - visit a nearby beach or fishing village, or enjoy a traditional Kathakali or Mohiniyattam dance performance arranged at the resort. These cultural experiences are part of Kerala's rich heritage and provide mental rejuvenation. Evening meditation focuses on visualization and gratitude, setting intentions for your life after the retreat.", 
          highlights: ["Morning Yoga & Meditation", "Specialized Therapies Based on Needs", "Physician Progress Assessment", "Beach or Village Visit", "Traditional Dance Performance", "Gratitude & Intention Meditation"] 
        },
        { 
          day: 6, 
          title: "Completion & New Beginning", 
          description: "Your retreat concludes, but your Ayurvedic journey is just beginning. Early morning yoga and final meditation session. Enjoy a peaceful breakfast. Final consultation with your physician who provides a comprehensive take-home plan including: recommended diet according to your constitution, beneficial yoga postures to continue at home, herbs or supplements to support ongoing health, and lifestyle modifications. You receive detailed written instructions. Time to pack and collect any herbal products you may wish to purchase from the resort's dispensary. Exchange contacts with fellow travelers who may have become friends during this healing journey. Transfer to airport with a heart full of peace, a body full of vitality, and wisdom to continue your wellness path. The effects of Ayurveda will continue to unfold in the weeks ahead!", 
          highlights: ["Final Yoga & Meditation", "Consultation with Take-Home Plan", "Personalized Diet & Lifestyle Guide", "Herbal Products Shopping", "Farewell to New Friends", "Airport Transfer with New Vitality"] 
        }
      ]
    },
    {
      id: "kerala-honeymoon",
      name: "Kerala Honeymoon Special",
      duration: "6D/5N",
      originalPrice: 52000,
      currentPrice: 44200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      description: "Celebrate your love story in God's Own Country. This romantic Kerala honeymoon includes private houseboat stays, candlelight dinners, couple spa treatments, and intimate moments amidst nature's most beautiful settings.",
      highlights: ["Private Houseboat Experience", "Candlelight Beach Dinners", "Couple Ayurvedic Spa", "Romantic Settings Throughout"],
      inclusions: ["5 Nights Premium Accommodation", "All Meals", "Private Transfers", "Couple Activities & Romantic Setups"],
      exclusions: ["Airfare", "Personal Shopping", "Optional Tours", "Travel Insurance"],
      itinerary: [
        { 
          day: 1, 
          title: "Romantic Arrival in Cochin", 
          description: "Your romantic escape begins! Arrive at Cochin Airport where our representative welcomes you with a fragrant flower garland and transfers you to your heritage hotel in the charming Fort Kochi area. Your room is decorated with rose petals, balloons, and a honeymoon cake awaits you. After freshening up, enjoy complimentary couples mocktails on the rooftop as you gaze at the stunning sunset over the Arabian Sea with the Chinese Fishing Nets silhouetted against the sky. Evening, take a romantic walk along the Fort Kochi beach, hand in hand. Dinner is a special candlelit affair on a private table at a colonial-era restaurant - fresh seafood, Kerala cuisine, and wine complement the romantic ambiance. The sound of waves, twinkling stars, and your beloved by your side - the perfect start to your honeymoon.", 
          highlights: ["Flower Garland Airport Welcome", "Rose Petal Decorated Room", "Honeymoon Cake Surprise", "Rooftop Sunset Mocktails", "Romantic Fort Kochi Beach Walk", "Candlelit Colonial Restaurant Dinner"] 
        },
        { 
          day: 2, 
          title: "Munnar - Romance in the Hills", 
          description: "After a leisurely breakfast, drive to Munnar (130 km, approx. 4 hours) through the scenic Western Ghats. The journey is romantic in itself - winding through spice gardens, rubber plantations, and eventually endless tea estates. Make stops at waterfalls for photos and to enjoy each other's company. Arrive at Munnar and check into a romantic hillside resort with valley views. After lunch, take a private tea plantation walk just for two. Wander through the tea bushes as mist rolls in, learning about tea production while stealing moments together. Optional tea leaf plucking experience followed by private tea tasting. Evening, dinner at the resort's best table with views of the mist-covered hills - warm Kashmiri Kahwa and local delicacies set the mood.", 
          highlights: ["Scenic Couple's Drive Through Ghats", "Waterfall Photo Stops", "Valley-View Hillside Resort", "Private Tea Plantation Walk", "Tea Tasting for Two", "Misty Hill Dinner with Views"] 
        },
        { 
          day: 3, 
          title: "Munnar - Love in the Clouds", 
          description: "Wake up in the clouds - literally! Munnar mornings are often wrapped in mist, creating a dreamlike atmosphere. Enjoy breakfast with mountain views. Today is for private adventures together. Visit Top Station - the highest point in Munnar - where on clear days you can see the neighboring state of Tamil Nadu. The drive through tea plantations is incredibly romantic. Stop at Photo Point and take countless photos together. Continue to Mattupetty Dam for a private paddle boat ride on the serene lake surrounded by hills - perfect for quiet conversations and shared moments. Later, enjoy a private picnic arranged by your hotel at a scenic viewpoint. Evening, return to your resort for a special couple's Ayurvedic massage - a synchronized treatment that promotes bonding while relaxing you both.", 
          highlights: ["Misty Mountain Morning Breakfast", "Top Station Romantic Drive", "Endless Tea Plantation Photos", "Private Paddle Boat at Mattupetty", "Romantic Hillside Picnic for Two", "Couple's Ayurvedic Massage"] 
        },
        { 
          day: 4, 
          title: "Private Houseboat Romance", 
          description: "Today you experience Kerala's most romantic offering - a private houseboat just for two! Drive from Munnar to Alleppey (170 km, approx. 5 hours) through changing landscapes. Around noon, board your premium private houseboat, lavishly decorated for your honeymoon - flowers, candles, and special touches everywhere. The boat is exclusively yours, staffed by a captain, a chef, and a helper. As the boat glides through palm-fringed canals, enjoy a lunch of fresh fish curry prepared on board. Spend the afternoon on the deck watching village life and nature. Your personal chef prepares a special candlelight dinner on the deck as the boat anchors in a peaceful spot. With stars above, gentle waters around, and your love beside you, it's a night you'll never forget. Sleep to the gentle sounds of the backwaters.", 
          highlights: ["Drive Through Scenic Landscapes", "Private Honeymoon Houseboat", "Exclusive Flower-Decorated Boat", "Fresh Fish Lunch On-Board", "Lazy Backwater Afternoon", "Candlelit Deck Dinner Under Stars"] 
        },
        { 
          day: 5, 
          title: "Kovalam Beach Bliss", 
          description: "Wake up to sunrise over the backwaters - a magical moment to share. Enjoy breakfast on the boat, then continue cruising through the morning, soaking in the last views. Disembark and drive to Kovalam (175 km, approx. 4 hours), Kerala's premier beach resort. Check into your beachfront room with Arabian Sea views. After lunch, head to the beach. The crescent-shaped Lighthouse Beach is perfect for couples - swim together in the warm sea, walk on the golden sand, or simply relax under an umbrella with refreshing drinks. Late afternoon, climb to the lighthouse for panoramic views. Sunset on the beach is romantic - as the sky turns orange and pink, stroll along the shore. Dinner is arranged at a beachside restaurant - your table is set on the sand, candles flickering, waves lapping nearby, and a delicious seafood spread before you.", 
          highlights: ["Sunrise Breakfast on Houseboat", "Final Backwater Cruise", "Beachfront Hotel Check-in", "Swimming in Arabian Sea Together", "Lighthouse Panoramic Views", "Candlelit Dinner on the Beach Sand"] 
        },
        { 
          day: 6, 
          title: "Sweet Farewell from Kerala", 
          description: "Your honeymoon in God's Own Country comes to a beautiful end. Wake up early for a walk on the beach as the sun rises - fishermen will be setting out, a scene unchanged for centuries. Return for breakfast at the hotel. If time permits, indulge in a final couple's Ayurvedic spa treatment - perhaps a relaxing Shirodhara where warm oil is poured on your forehead, inducing deep relaxation. Alternatively, visit the nearby Padmanabhapuram Palace, a stunning ancient wooden palace. Transfer to Trivandrum Airport (15 km, approx. 30 minutes) for your departure. As you fly over Kerala's green landscapes and blue seas, carry with you the warmth of this tropical paradise and the memories of a honeymoon that has strengthened your bond. Wishing you a lifetime of happiness together!", 
          highlights: ["Romantic Sunrise Beach Walk", "Final Breakfast Together", "Optional Couple's Spa Treatment", "Optional Palace Visit", "Airport Transfer", "Lifetime of Kerala Memories"] 
        }
      ]
    },
    {
      id: "kerala-wildlife",
      name: "Kerala Wildlife Safari",
      duration: "5D/4N",
      originalPrice: 32000,
      currentPrice: 27200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=800&h=600&fit=crop",
      description: "Explore Kerala's incredible biodiversity in this wildlife-focused tour. From the elephant herds of Periyar to the birds of Kumarakom and the diverse ecosystems of Silent Valley, this is a nature lover's paradise.",
      highlights: ["Periyar Tiger Reserve", "Elephant Safari", "Bird Watching", "Nature Camps"],
      inclusions: ["4 Nights Wildlife Lodges", "All Meals", "Safari Permits & Entry", "Naturalist Guide"],
      exclusions: ["Airfare", "Personal Expenses", "Camera Fees"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival at Thekkady - Periyar Gateway", 
          description: "Arrive at Cochin or Madurai Airport and transfer to Thekkady (130-145 km, approx. 4 hours). Thekkady is the gateway to the famous Periyar Wildlife Sanctuary, one of India's most popular wildlife reserves. The drive takes you through the cardamom-covered hills of Idukki, and the aroma of spices fills the air. Check into your wildlife lodge or treehouse resort - many offer views of the surrounding forests where elephants may occasionally wander by! After lunch, attend a briefing about the reserve and the wildlife you might encounter. Late afternoon, take a nature walk in the surrounding forests with a naturalist guide. Learn to identify trees, spot birds, and understand the forest ecosystem. Evening, watch a documentary about Periyar's wildlife conservation efforts. Early dinner and rest - tomorrow's adventures begin at dawn.", 
          highlights: ["Transfer Through Cardamom Hills", "Wildlife Lodge or Treehouse Check-in", "Periyar Wildlife Briefing", "Guided Nature Walk", "Bird Spotting Introduction", "Wildlife Documentary Screening"] 
        },
        { 
          day: 2, 
          title: "Periyar Wildlife Experience", 
          description: "Wake before dawn for the best wildlife experience! The early morning boat cruise on Periyar Lake offers the highest chances of wildlife sightings. As the sun rises over the mist-covered lake, watch the forest come alive. Wild elephants are regularly seen coming to the water's edge to drink and bathe - seeing a herd of elephants in their natural habitat is an unforgettable experience. Also look for Gaur (Indian Bison), Sambar deer, wild boar, and if extremely lucky, a tiger or leopard. The lake is surrounded by deciduous and evergreen forests, and numerous birds including cormorants, kingfishers, and hornbills are common. Return for a hearty breakfast. Mid-morning, embark on a bamboo rafting expedition - float silently on bamboo rafts through remote areas of the reserve, increasing chances of seeing shy wildlife. Afternoon, explore outside the sanctuary - visit an elephant rehabilitation center where you can observe and learn about these gentle giants.", 
          highlights: ["Dawn Boat Safari on Periyar Lake", "Wild Elephant Herds Sighting", "Gaur, Sambar, Wild Boar Spotting", "Bamboo Rafting in Remote Areas", "Elephant Rehabilitation Center Visit", "Wildlife Photography Opportunities"] 
        },
        { 
          day: 3, 
          title: "Periyar Tribal Trek & Forest Night", 
          description: "Today's adventure goes deeper into the forest. After breakfast, join a Border Hiking Trail led by tribal guides - former poachers who now work in conservation. These local experts know the forest intimately and can spot wildlife that others miss. The trek goes through different forest types, past tribal settlements, and to viewpoints where you can observe wildlife without disturbing them. Learn about traditional tracking methods and medicinal plants. Pack lunch is served in the forest. Afternoon, participate in a spice plantation tour - Thekkady is famous for pepper, cardamom, and other spices. See how they grow and learn about their uses. For the truly adventurous, an optional night trek or camping in the forest outskirts can be arranged - hearing the sounds of the jungle at night and perhaps spotting nocturnal animals is an incredible experience.", 
          highlights: ["Border Hiking with Tribal Guides", "Former Poachers as Expert Trackers", "Deep Forest Wildlife Tracking", "Forest Picnic Lunch", "Spice Plantation Tour", "Optional Night Trek or Camping"] 
        },
        { 
          day: 4, 
          title: "Kumarakom Bird Sanctuary", 
          description: "Bid farewell to Periyar and drive to Kumarakom (130 km, approx. 4 hours), home to one of India's most famous bird sanctuaries. Check into a lakeside resort on the banks of Vembanad Lake, Kerala's largest lake and a Ramsar wetland of international importance. After lunch, head to the Kumarakom Bird Sanctuary for a guided walk. The sanctuary is spread over 14 acres of evergreen and mangrove forests. Depending on the season, you may spot: Siberian Storks, Egrets, Darters, Herons, Teal, and many more. The evening is ideal for bird photography as birds return to roost. Later, take a sunset boat cruise on Vembanad Lake - watch as thousands of birds fly across the orange sky returning to the sanctuary. The reflections on the water are stunning. Dinner at the resort, listening to the sounds of the wetland.", 
          highlights: ["Drive to Kumarakom Wetlands", "Vembanad Lake Resort Stay", "Kumarakom Bird Sanctuary Walk", "Migratory & Local Bird Spotting", "Sunset Boat Cruise", "Bird Photography Opportunities"] 
        },
        { 
          day: 5, 
          title: "Early Birding & Departure", 
          description: "Serious birders will want an early morning outing - the hours after dawn are best for bird activity. Arrange for a 5:30 AM boat ride through the narrow canals around the sanctuary where birds are most active. Your naturalist guide will help identify species and their calls. Alternatively, take a nature walk on the paths around the sanctuary. Return for a leisurely breakfast, sharing stories and comparing wildlife sightings from your trip. Check out and transfer to Cochin Airport (75 km, approx. 2 hours). If your flight is later, optional activities include a brief backwater cruise or visit to the Kerala Folklore Museum in Cochin. As you leave Kerala, carry with you the memories of wild elephants, exotic birds, and the incredible biodiversity of God's Own Country. May these experiences inspire a lifelong connection with nature!", 
          highlights: ["5:30 AM Canal Birding Expedition", "Final Nature Walk", "Breakfast Bird Count Review", "Optional Backwater Cruise", "Cochin Airport Transfer", "Wildlife Memories to Cherish"] 
        }
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
  heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&h=600&fit=crop"
  ],
  packages: [
    {
      id: "ladakh-adventure",
      name: "Ladakh Adventure",
      duration: "7D/6N",
      originalPrice: 45000,
      currentPrice: 38250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      description: "Ultimate Ladakh adventure covering Leh, Nubra Valley, and Pangong Lake. Experience the world's highest motorable passes, ancient Buddhist monasteries, and landscapes that seem otherworldly.",
      highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass", "Ancient Monasteries"],
      inclusions: ["6 Nights Accommodation", "All Meals", "Inner Line Permits", "Sightseeing in Private Vehicle"],
      exclusions: ["Airfare", "Personal Expenses", "Oxygen Cylinders (if needed)"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival in Leh - Acclimatization Day", 
          description: "Welcome to Ladakh - the Land of High Passes! Your flight to Leh is spectacular in itself, offering aerial views of the Himalayas. Upon arrival at Kushok Bakula Rimpochee Airport (one of the highest commercial airports at 3,256m), you immediately feel the crisp mountain air. IMPORTANT: The high altitude requires proper acclimatization. Transfer to your hotel and rest for the entire afternoon - this is essential to prevent Acute Mountain Sickness (AMS). Drink plenty of water and avoid strenuous activity. Light lunch in the hotel. Late afternoon, take a gentle 20-minute walk to nearby Shanti Stupa - the short climb will test how your body is adjusting. The stupa offers panoramic views of Leh town and the surrounding mountains glowing golden in the sunset. Return to hotel for dinner and early sleep. Altitude: 3,500m (11,483 ft).", 
          highlights: ["Himalayan Aerial Views During Flight", "Leh Airport Arrival (3,256m)", "Critical Acclimatization Rest", "Hydration & Light Activity Only", "Shanti Stupa Sunset Walk", "Panoramic Leh Town Views"] 
        },
        { 
          day: 2, 
          title: "Leh Local Sightseeing", 
          description: "After breakfast, and assuming no altitude sickness symptoms, begin exploring Leh's cultural heritage. Visit the 17th-century Leh Palace, often called 'Little Potala' for its resemblance to the Dalai Lama's palace in Tibet. The nine-story structure offers commanding views of the town and surrounding peaks. Continue to Namgyal Tsemo Gompa, a 15th-century monastery perched on a ridge above the palace - the effort of climbing is rewarded with stunning views. After lunch, explore the Leh Main Bazaar - a colorful market selling Tibetan handicrafts, pashmina shawls, and turquoise jewelry. Visit the 550-year-old Jama Masjid, showcasing the religious harmony of Ladakh. Evening, attend the sunset prayer ceremony at a local monastery. The rhythmic chanting, incense, and setting sun create a spiritually uplifting experience. Dinner featuring Ladakhi cuisine - try Thukpa (noodle soup), Momos (dumplings), and butter tea.", 
          highlights: ["17th Century Leh Palace", "Namgyal Tsemo Monastery Climb", "Panoramic City Views", "Leh Main Bazaar Shopping", "Historic Jama Masjid Visit", "Evening Monastery Prayer Ceremony"] 
        },
        { 
          day: 3, 
          title: "Leh to Nubra Valley - Over Khardung La", 
          description: "Today you conquer one of the world's highest motorable roads! After an early breakfast, drive towards Nubra Valley via Khardung La Pass (5,359m or 17,582 ft). The climb takes about 2 hours through dramatic moonscape terrain. At the top, the thin air makes even simple movements challenging - don't linger too long! Take photos at the famous signboard, enjoy the surreal 360-degree views, and then descend. The landscape changes dramatically as you enter Nubra Valley - from barren peaks to green oasis villages. Stop at Diskit Monastery, the largest monastery in Nubra, featuring a 32-meter statue of Maitreya Buddha overlooking the valley. Continue to Hunder village, famous for its sand dunes and double-humped Bactrian camels - a remnant from Silk Road days. Optional camel ride on the dunes at sunset. Overnight at a camp or guesthouse in Hunder. Altitude: Khardung La 5,359m, Hunder 3,048m.", 
          highlights: ["Early Start for Khardung La", "World's Highest Motorable Pass (5,359m)", "Surreal High-Altitude Landscapes", "Diskit Monastery & 32m Buddha", "Hunder Sand Dunes", "Double-Humped Bactrian Camel Safari"] 
        },
        { 
          day: 4, 
          title: "Nubra to Pangong Lake via Shyok", 
          description: "After breakfast, drive to the legendary Pangong Tso Lake via the stunning Shyok River route (approx. 170 km, 6-7 hours). This route is less traveled and incredibly scenic - following the Shyok River through narrow gorges and past remote villages. The road conditions vary, making it a true adventure. En route, stop at small villages where you can interact with locals and perhaps see yaks grazing. As you approach Pangong, the landscape becomes even more dramatic - barren mountains with remarkable color striations. Then, the first glimpse of Pangong Lake takes your breath away! Stretching 134 km (one-third in India, two-thirds in Tibet), the lake is famous for its ever-changing colors - from azure to turquoise to deep blue, depending on the sunlight. Arrive by afternoon and simply sit by the lake, absorbing its ethereal beauty. Sunset at Pangong is magical - the mountains glow red and orange while the lake reflects the colors. Overnight in lakeside camps or homestays. Altitude: 4,350m (14,270 ft).", 
          highlights: ["Scenic Shyok River Route", "Remote Village Encounters", "Dramatic Color-Banded Mountains", "First View of Legendary Pangong", "Lake's Color-Changing Magic", "Spectacular Lakeside Sunset & Camp"] 
        },
        { 
          day: 5, 
          title: "Pangong to Leh via Chang La", 
          description: "Wake early to witness sunrise at Pangong - the lake slowly illuminated in golden light is a photographer's dream. After breakfast, bid farewell to this magical lake and drive to Leh (approximately 160 km, 5 hours) via Chang La Pass (5,360m) - the third highest motorable pass in the world. The road climbs dramatically from the lake through rocky terrain. At Chang La, visit the café run by the army for hot snacks. Descending towards Leh, stop at the spectacular Hemis Monastery - the largest and wealthiest monastery in Ladakh, famous for its annual Hemis Festival featuring masked dances. Continue to Thiksey Monastery, often compared to Tibet's Potala Palace. If timed right, you can witness the morning prayers with monks chanting in the prayer hall. Arrive in Leh by evening. Final dinner in Leh - celebrate completing the lake circuits!", 
          highlights: ["Magical Sunrise at Pangong", "Chang La Pass (5,360m)", "Army Café Hot Refreshments", "Hemis Monastery - Largest in Ladakh", "Thiksey Monastery & Prayers", "Return to Leh - Circuit Complete"] 
        },
        { 
          day: 6, 
          title: "Sham Valley Excursion", 
          description: "Today explore the Sham Valley (Lower Ladakh), known for its milder climate and historic sites. After breakfast, drive to the famous Magnetic Hill - a gravity-defying spot where vehicles appear to roll uphill on their own (optical illusion, but fun!). Continue to Sangam, the confluence of the Indus and Zanskar rivers - the different colored waters meeting is a striking sight. Optional river rafting on the Indus River (Grade 2-3, suitable for beginners). Drive further to visit Alchi Monastery (1,000 years old), famous for its unique Kashmiri-style paintings and woodwork - unlike any other Ladakhi monastery. Continue to Likir Monastery with its 25-meter golden Buddha statue. Return to Leh via Basgo, stopping at the dramatic ruins of a medieval fortress. Evening free for last-minute shopping in Leh market - pick up Pashmina, turquoise, or Thangka paintings.", 
          highlights: ["Magnetic Hill Optical Illusion", "Sangam - Indus-Zanskar Confluence", "Optional Indus River Rafting", "1,000-Year-Old Alchi Monastery", "Likir's Golden Buddha Statue", "Basgo Fortress Ruins"] 
        },
        { 
          day: 7, 
          title: "Departure from Ladakh", 
          description: "Your Ladakh odyssey concludes today. Enjoy a leisurely breakfast and last moments in Leh. Depending on your flight time, you might have time for final souvenir shopping or a last visit to a nearby site. Transfer to Leh Airport for your departure. The flight out of Leh is as spectacular as the arrival - watch the Himalayas pass beneath you, perhaps spotting K2, Nanga Parbat, and other giants if you're on the right side of the aircraft. As you leave the Land of High Passes, take with you memories of ancient monasteries, turquoise lakes, dramatic passes, and the warm smiles of Ladakhi people. The stark beauty of this high-altitude desert will stay with you forever. Julley (Ladakhi farewell) - until we meet again!", 
          highlights: ["Leisurely Final Breakfast", "Last-Minute Shopping (if time)", "Airport Transfer", "Himalayan Aerial Views on Departure", "Memories of High Passes & Blue Lakes", "Julley - Ladakhi Farewell"] 
        }
      ]
    },
    {
      id: "ladakh-bike-expedition",
      name: "Ladakh Bike Expedition",
      duration: "9D/8N",
      originalPrice: 65000,
      currentPrice: 55250,
      discount: 15,
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=600&fit=crop",
      description: "The ultimate biking adventure across the world's highest motorable roads. Ride Royal Enfield motorcycles through incredible landscapes, conquering legendary passes and creating stories that will last a lifetime.",
      highlights: ["Royal Enfield Bikes", "Khardung La (18,380 ft)", "Tanglang La (17,480 ft)", "Magnetic Hill"],
      inclusions: ["8 Nights Accommodation", "All Meals", "Royal Enfield Bike with Fuel", "Mechanic & Backup Vehicle", "All Permits"],
      exclusions: ["Airfare", "Riding Gear", "Personal Expenses", "Alcohol"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival & Bike Handover", 
          description: "Welcome to the adventure of a lifetime! Arrive in Leh and transfer to your hotel. Today is strictly for acclimatization - the high altitude (3,500m) requires your body to adjust before any strenuous activity. Rest in the afternoon. Late evening, attend the expedition briefing where you meet your fellow riders, the expedition leader, and the support crew. The mechanic will introduce you to your Royal Enfield Himalayan or Classic 350 - the trusted steeds for this adventure. Inspect your bike, take a short test ride around the hotel, and ensure everything is comfortable. Get fitted with helmets and check riding gear. Dinner with the group, sharing excitement and setting expectations. Early to bed - tomorrow the engines roar!", 
          highlights: ["Leh Airport Arrival", "Mandatory Acclimatization", "Expedition Briefing Session", "Meet Fellow Riders & Crew", "Royal Enfield Bike Handover", "Short Test Ride & Gear Check"] 
        },
        { 
          day: 2, 
          title: "Leh Warm-Up Ride", 
          description: "Your first riding day is a gentle warm-up to help you adjust to altitude and the bikes. After breakfast, ride to Shanti Stupa for spectacular views and a photo op with your bike. Continue to the historic Leh Palace and then through Leh market. The morning is about getting comfortable with your bike at altitude. After lunch, ride to Thiksey Monastery (19 km) - the climb is easy but helps you understand how the bike responds in thin air. Visit the beautiful monastery, often compared to the Potala Palace. Continue to Hemis Monastery (45 km from Leh), the largest in Ladakh. The roads are good, allowing you to build confidence. Return to Leh via the same route. Evening, the mechanic checks all bikes and makes any necessary adjustments. Rider debriefing and route discussion for the next day. Ride Distance: ~90 km.", 
          highlights: ["Shanti Stupa Photo with Bike", "Leh Palace & Market Ride", "Thiksey Monastery Visit", "Hemis Monastery Exploration", "Mechanic Bike Check", "Route Briefing for Day 3"] 
        },
        { 
          day: 3, 
          title: "Leh to Nubra via Khardung La", 
          description: "Today you conquer the legendary Khardung La! Depart early (6 AM) to cross the pass before weather changes and traffic increases. The climb is steady but thrilling - watch the landscape change from green to barren to snow. At 5,359m (claimed 5,602m by BRO), Khardung La is an iconic achievement for every rider. The air is thin - don't stop too long at the top! Quick photos at the famous board, hot chai, and then the exhilarating descent to Nubra Valley. The road switchbacks dramatically down into the valley. Stop at Diskit Monastery and the 32-meter Maitreya Buddha. Ride to Hunder and enjoy a camel safari on the sand dunes (optional). Camp or stay in a guest house. Celebrate conquering Khardung La with your fellow riders! Ride Distance: ~120 km. Altitude: Khardung La 5,359m, Hunder 3,048m.", 
          highlights: ["6 AM Early Start", "Khardung La Conquest (5,359m)", "World's Highest Pass Achievement", "Dramatic Descent to Valley", "Diskit Monastery & Giant Buddha", "Hunder Sand Dune Camp"] 
        },
        { 
          day: 4, 
          title: "Nubra to Pangong via Shyok", 
          description: "A long but incredibly scenic ride day! Depart after breakfast and ride through the Shyok River valley - the road follows the river, often running along narrow ledges with stunning views. This is a less-traveled route, adding to the adventure. The road quality varies, providing technical challenges. Cross small streams and navigate rocky sections. Villages are sparse but locals are welcoming. Pack lunch en route. The terrain becomes more dramatic as you approach Pangong - striped mountains and bizarre rock formations. Then, the moment every rider waits for - your first glimpse of Pangong Tso Lake! Ride along the lakeshore to your campsite. Parking your bike at the edge of this legendarily blue lake is a moment of pure achievement. Evening at the lake, watching the colors change. Campfire dinner with the team. Ride Distance: ~170 km. Altitude: 4,350m.", 
          highlights: ["Shyok Valley Adventure Route", "River Valley & Gorge Riding", "Technical Off-Road Sections", "Dramatic Approach to Pangong", "Lakeside Bike Photo Moment", "Campfire Celebration Dinner"] 
        },
        { 
          day: 5, 
          title: "Pangong to Hanle via Chushul", 
          description: "An off-the-beaten-path adventure to one of Ladakh's hidden gems! Wake early for sunrise at Pangong - capture your bike against the golden lake. After breakfast, ride along the lake towards Chushul, the last village before the Line of Control with China. The road is rough but the remoteness is incredible - you might not see another vehicle for hours. Stop at War Memorial at Rezang La, honoring the heroes of the 1962 war. Continue through the Changthang plateau, possibly spotting wild animals like Kiang (Tibetan Wild Ass) and Marmots. Arrive at Hanle by afternoon - this remote village is home to one of the world's highest astronomical observatories. The night sky here is remarkably clear, perfect for stargazing. Overnight in basic but clean homestays - experience authentic Ladakhi hospitality. Ride Distance: ~150 km. Altitude: Hanle 4,500m.", 
          highlights: ["Sunrise Bike Photo at Pangong", "Chushul Border Region", "Rezang La War Memorial", "Changthang Plateau Wildlife", "Kiang & Marmot Spotting", "Hanle Observatory Stargazing"] 
        },
        { 
          day: 6, 
          title: "Hanle to Tso Moriri", 
          description: "Continue through the pristine Changthang region to another legendary lake. The ride from Hanle to Tso Moriri is through some of the most remote and beautiful landscapes in India. Few tourists come this way - it's a true explorer's route. The terrain is high plateau, open and wild. Spot herds of Pashmina goats, whose wool becomes the famous Pashmina shawls. You may also see nomadic Changpa herders with their yak trains. Around midday, the stunning Tso Moriri Lake comes into view - less famous than Pangong but equally beautiful, and more peaceful. At 4,522m and surrounded by snow-capped peaks, it's a sight to behold. Camp at Korzok village, one of the highest inhabited villages in India with a 300-year-old monastery. Evening walk around the lake, photography, and quiet contemplation. Ride Distance: ~140 km. Altitude: Tso Moriri 4,522m.", 
          highlights: ["Changthang Wilderness Ride", "Pashmina Goat Herds", "Changpa Nomad Encounters", "First View of Tso Moriri", "Korzok Village (Highest Settlement)", "Lakeside Camping & Monastery Visit"] 
        },
        { 
          day: 7, 
          title: "Tso Moriri to Leh via More Plains", 
          description: "The final major riding day takes you through dramatic landscapes back to Leh. Wake early for a lakeside sunrise and morning stroll. After breakfast, ride through the vast More Plains - a high-altitude desert that feels like riding on another planet. The straight road stretching to the horizon is perfect for opening up the throttle (safely!). Cross Tanglang La (5,328m or 17,480 ft), the second-highest pass on the Leh-Manali highway. The climb is gradual but the altitude is significant. Descend past Pang camp and through stunning canyon formations. Continue to Upshi, where you rejoin the main Leh highway. The final stretch to Leh is smooth and reflective - you've traversed some of the world's most incredible terrain! Arrive Leh by late afternoon. Celebratory dinner with your riding team - you've accomplished an incredible journey! Ride Distance: ~240 km.", 
          highlights: ["Tso Moriri Sunrise", "More Plains Open Throttle", "Tanglang La Pass (5,328m)", "Canyon & Plateau Riding", "Final Stretch to Leh", "Celebratory Team Dinner"] 
        },
        { 
          day: 8, 
          title: "Buffer Day in Leh", 
          description: "A well-deserved rest day! This day is built into the itinerary as a buffer for any delays due to weather, road conditions, or bike issues (though our excellent mechanics usually prevent the latter). If everything has gone smoothly, enjoy this day at your leisure in Leh. Sleep in, enjoy a late breakfast, and explore Leh at your own pace. Visit the main market for souvenirs - Pashmina shawls, turquoise jewelry, prayer wheels, Thangka paintings. Explore the old town's atmospheric alleyways. Visit a café for excellent coffee and meet fellow travelers. The mechanic will service all bikes and prepare them for return. Optional activities include a half-day trip to Alchi Monastery or Sangam (Indus-Zanskar confluence). Farewell dinner in a nice restaurant - share stories, photos, and perhaps even tears as this incredible journey comes to an end.", 
          highlights: ["Well-Deserved Sleep-In", "Leisurely Leh Exploration", "Main Market Shopping", "Old Town Wander", "Bike Return & Service", "Farewell Dinner with Riders"] 
        },
        { 
          day: 9, 
          title: "Departure from Leh", 
          description: "Your epic Ladakh bike expedition comes to an end. After breakfast, transfer to Leh Airport for your departure. As you board your flight, you're no longer the same person who arrived - you've conquered the highest motorable passes, ridden through landscapes few ever see, and formed bonds with fellow adventurers. The sound of your Royal Enfield, the thin air at the top of Khardung La, the blue of Pangong, the remoteness of Hanle, the peace of Tso Moriri - these memories are now part of you. You carry home not just photos, but stories of adventure, achievement, and the realization that some of the best things in life require stepping out of comfort zones. Julley, brave rider - until the road calls again!", 
          highlights: ["Final Breakfast in Leh", "Airport Transfer", "Carry Home Stories of Achievement", "Bonds with Fellow Riders", "Memories of High Passes & Lakes", "Julley - Until Next Ride"] 
        }
      ]
    },
    {
      id: "ladakh-monasteries",
      name: "Ladakh Monastery Trail",
      duration: "6D/5N",
      originalPrice: 38000,
      currentPrice: 32300,
      discount: 15,
      image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&h=600&fit=crop",
      description: "A spiritual journey through the ancient Buddhist monasteries of Ladakh. Witness morning prayers, interact with monks, understand Buddhist philosophy, and experience the deep spirituality that permeates this land.",
      highlights: ["Hemis Monastery", "Thiksey Monastery", "Diskit Monastery", "Alchi Ancient Murals"],
      inclusions: ["5 Nights Accommodation", "All Meals", "Inner Line Permits", "Expert Spiritual Guide"],
      exclusions: ["Airfare", "Photography Fees at Monasteries", "Personal Expenses"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival in Leh - Gateway to Buddhism", 
          description: "Arrive at Leh Airport and transfer to your hotel. After the necessary acclimatization rest (crucial at 3,500m), take a gentle evening walk to Shanti Stupa, a stunning white-domed Buddhist shrine built by Japanese monks to promote world peace. Climb the 500 steps (go slowly due to altitude) as the sun sets behind the Stokh range. The stupa is beautifully illuminated at dusk, and the panoramic views of Leh town are spectacular. Observe monks and locals circumambulating the stupa in prayer. This is your first introduction to the Buddhism that defines Ladakh. Return for dinner and meet your expert guide who will accompany you throughout this spiritual journey. Your guide is well-versed in Buddhist history, philosophy, and monastery etiquette, adding depth to every visit.", 
          highlights: ["Leh Airport Arrival & Transfer", "Acclimatization Rest Period", "Shanti Stupa Sunset Walk", "500 Steps Gentle Climb", "Panoramic Views of Leh", "Meet Expert Buddhist Guide"] 
        },
        { 
          day: 2, 
          title: "Central Ladakh Monasteries", 
          description: "Rise before dawn for a truly special experience - morning prayers at Thiksey Monastery. The drive (19 km) in pre-dawn darkness ends as you climb to the monastery perched on a hilltop. Enter the prayer hall around 6 AM as young monks begin their chanting. The rhythmic mantras, flickering butter lamps, and the scent of incense create a profoundly spiritual atmosphere. Watch as monks sip butter tea between prayers. After prayers, explore Thiksey - often called 'Mini Potala' for its resemblance to the Dalai Lama's palace in Tibet. The 12-story complex houses exceptional statues and Thangka paintings. After breakfast, drive to Hemis Monastery (47 km from Leh), the largest and wealthiest monastery in Ladakh. It houses a priceless collection of Thangkas including a three-story high Thangka displayed only once in 12 years. Visit the museum with its incredible artifacts. Afternoon, visit Stok Palace and its museum to understand Ladakh's royal heritage.", 
          highlights: ["Pre-Dawn Drive to Thiksey", "6 AM Morning Prayer Session", "Monks Chanting & Butter Tea", "Thiksey - 'Mini Potala' Exploration", "Hemis - Largest Ladakhi Monastery", "Stok Palace Royal Museum"] 
        },
        { 
          day: 3, 
          title: "Sham Valley Monastery Circuit", 
          description: "Today, explore the remarkable monasteries of Sham Valley (Lower Ladakh). Drive to Alchi Monastery (70 km), one of Ladakh's hidden treasures. Unlike other hillside monasteries, Alchi is in a valley, preserved by its isolation. Founded in the 11th century, it contains India's oldest surviving wall paintings - Kashmiri-influenced Buddhist art that predates Tibetan influence. The murals in the main chapel are breathtaking and UNESCO-worthy. Photography is prohibited inside to preserve these 1,000-year-old masterpieces. Continue to Likir Monastery, dramatically set against barren mountains with a 25-meter golden Maitreya Buddha visible from miles away. Explore the monastery school where young monks study. Visit Lamayuru Monastery, perched above a lunar landscape called 'Moonland.' Legend says this valley was once a lake drained by a Buddhist sage. The monastery's age (1,000+ years) and setting are remarkable. Return to Leh, stopping at Basgo ruins for sunset photos.", 
          highlights: ["Alchi - 1,000-Year-Old Murals", "Kashmiri Buddhist Art Masterpieces", "Likir's 25-Meter Golden Buddha", "Young Monk School Visit", "Lamayuru & Moonland Landscape", "Basgo Fortress Sunset"] 
        },
        { 
          day: 4, 
          title: "Nubra Valley Monasteries via Khardung La", 
          description: "Cross Khardung La Pass (5,359m) to Nubra Valley for a unique monastery experience. Leave early for the pass, pausing at the top for quick photos before descending. Nubra's monasteries have a slightly different character - more relaxed and less touristy. First, visit Diskit Monastery, Nubra's largest, founded in the 14th century. The highlight is the newly built 32-meter Maitreya Buddha statue overlooking the valley - a stunning sight. Enter the monastery's ancient chapels for prayer wheel spinning and butter lamp lighting. Drive to Samstanling Monastery in Sumur village - a relatively modern monastery (150 years old) known for its annual masked dance festival. If lucky, you might witness monks practicing for festivals. Unique experience: arrange for an overnight stay at a monastery guest house (subject to availability). Join evening prayers, dine with monks, and experience monastic life firsthand. If monastery stay isn't available, comfortable guest houses in Hunder.", 
          highlights: ["Khardung La Pass Crossing", "Diskit - Nubra's Largest Monastery", "32-Meter Maitreya Buddha Statue", "Butter Lamp Lighting Ritual", "Samstanling Monastery Visit", "Optional Monastery Guest House Stay"] 
        },
        { 
          day: 5, 
          title: "Return to Leh - Final Monastery Visits", 
          description: "Return to Leh via Khardung La, but with time for more monastery exploration. In the morning, if you stayed at a monastery, join the 6 AM prayers before breakfast. Otherwise, take an early morning walk in the peaceful Nubra Valley. After breakfast, drive back towards Leh. En route, stop at Spituk Monastery, built by Od-de, the elder brother of King Tashi Namgyal. The monastery's hilltop location offers commanding views of Leh Valley and the Indus River. The highlight is the Mahakala temple, opened only once a year during the Gustor festival when monks perform sacred mask dances. In Leh, visit Sankar Monastery, a subsidiary of Spituk, notable for its Avalokiteshvara statue with 1,000 heads and 1,000 arms. Evening, attend a meditation session arranged at a local monastery - guided by a monk, experience the stillness that monks cultivate daily. Farewell dinner in Leh.", 
          highlights: ["Optional Morning Prayers at Nubra", "Khardung La Return", "Spituk Monastery Hilltop", "Mahakala Temple Visit", "Sankar's 1,000-Headed Avalokiteshvara", "Guided Meditation Session with Monk"] 
        },
        { 
          day: 6, 
          title: "Departure - Carrying the Blessings", 
          description: "Your spiritual journey through Ladakh's monasteries concludes today. Enjoy a peaceful breakfast and final moments of reflection. Your guide may offer you a blessed 'kata' (white scarf) as a farewell - a traditional offering symbolizing purity of intention. Transfer to Leh Airport for your departure. As you fly over the Himalayas, reflect on the spiritual richness you've experienced - the morning prayers that begin each monastic day, the centuries-old murals that have witnessed countless pilgrims, the young monks who will carry forward ancient traditions, and the profound peace that pervades these sacred spaces. You leave Ladakh not just with photographs, but with a deeper understanding of Buddhist philosophy and perhaps, a slightly more peaceful mind. Om Mani Padme Hum.", 
          highlights: ["Peaceful Final Breakfast", "Blessed Kata Scarf Farewell", "Airport Transfer", "Himalayan Departure Views", "Carry Home Spiritual Memories", "Om Mani Padme Hum"] 
        }
      ]
    },
    {
      id: "ladakh-photography",
      name: "Ladakh Photography Tour",
      duration: "8D/7N",
      originalPrice: 72000,
      currentPrice: 61200,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      description: "A photographer's dream expedition designed to capture Ladakh's otherworldly landscapes. Timed for golden hours, with expert guidance on locations and techniques, this tour maximizes your photographic opportunities.",
      highlights: ["Golden Hour Shoots", "Monastery Photography", "Landscape Sessions", "Astrophotography"],
      inclusions: ["7 Nights Accommodation", "All Meals", "Photography Guide", "Best Viewpoints Access", "All Permits"],
      exclusions: ["Airfare", "Camera Gear", "Personal Expenses"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival & Sunset Shoot at Shanti Stupa", 
          description: "Arrive in Leh and transfer to your hotel. Rest and hydrate for acclimatization. Late afternoon, as the light turns golden, head to Shanti Stupa for your first photography session. The stupa's white dome against the blue sky, with the Zanskar range behind, makes for stunning compositions. Your photography guide will help you find the best angles and settings. As the sun sets, the stupa is illuminated, creating a completely different mood. Capture the transition from daylight to blue hour to night. The city lights of Leh below add to the scene. Practice long exposures as darkness falls. Return to hotel for dinner and first day's image review with tips from your guide.", 
          highlights: ["Leh Arrival & Acclimatization", "Golden Hour at Shanti Stupa", "Sunset Stupa Compositions", "Blue Hour Photography", "Long Exposure Practice", "Evening Image Review Session"] 
        },
        { 
          day: 2, 
          title: "Monastery Morning Light & Culture", 
          description: "Photography is about light, and the best monastery light is at sunrise. Depart before dawn for Thiksey Monastery. Capture the monastery in pre-dawn blue, then watch as the first rays hit the peak behind it and gradually illuminate the 12-story structure. The morning prayer session begins around 6 AM - photograph monks in prayer, butter lamps flickering, and ancient thangkas in candlelight (low-light technique session). After breakfast, continue to Hemis Monastery for different perspectives. The interior chapels with their massive Buddha statues require skillful low-light photography. Your guide will help with settings and composition. Afternoon, visit Stok Palace and capture the royal artifacts. Evening session at Leh Palace - photograph the ancient structure against sunset, then stay for blue hour and the first stars appearing over the palace.", 
          highlights: ["Pre-Dawn Thiksey Monastery", "Sunrise Light on 12-Story Structure", "Low-Light Prayer Room Photography", "Hemis Interior Chapels", "Stok Palace Artifacts", "Leh Palace Sunset & Stars"] 
        },
        { 
          day: 3, 
          title: "Nubra Valley - Dunes & Monasteries", 
          description: "Cross Khardung La, stopping for quick photos at the pass (don't linger long due to altitude). The real photography begins in Nubra Valley. First, Diskit Monastery - the 32-meter Maitreya Buddha against dramatic sky is an iconic shot. Explore angles from below looking up, and from monastery terraces looking at the valley. The monastery's interiors with their detailed murals require careful technique. After lunch, head to Hunder Sand Dunes for a unique session - Bactrian camels against sand dunes and snow-capped peaks. Position for best light as the sun lowers. Evening, stay for sunset over the dunes - the warm light on sand creates magical colors. After dinner, attempt astrophotography - the Milky Way is clearly visible, and capturing it over the dune landscape is exceptional.", 
          highlights: ["Khardung La Quick Pass Photos", "Diskit's 32m Buddha Composition", "Monastery Interior Murals", "Bactrian Camels on Dunes", "Golden Hour Sand Photography", "Milky Way Over Hunder"] 
        },
        { 
          day: 4, 
          title: "Pangong Lake - Color & Light Magic", 
          description: "Drive to Pangong Lake via the scenic Shyok route. The striped mountains and river valley en route offer excellent stops. Arrival at Pangong is a photographer's dream - the lake's famous color-changing nature provides endless compositions. Spend the afternoon capturing the lake from various points - shoreline reflections, wide landscapes, intimate details. As afternoon progresses, watch the color shift from blue to turquoise to almost purple. Sunset at Pangong is spectacular - position yourself for the mountains reflected in still water. After sunset, continue shooting as stars appear over the lake. The clear high-altitude sky makes Pangong an exceptional location for astro-photography. Camp by the lake - the experience of sleeping by this legendary water body is unforgettable.", 
          highlights: ["Shyok Valley Scenic Stops", "Pangong Color Variations", "Reflection Photography Session", "Sunset Mountain-Lake Compositions", "Astrophotography at 4,350m", "Lakeside Camp Experience"] 
        },
        { 
          day: 5, 
          title: "Pangong Sunrise & Chang La Return", 
          description: "Wake early - the sunrise at Pangong is not to be missed! The first rays illuminate the peaks while the lake remains in shadow, creating dramatic contrast. As light fills the valley, the lake's colors intensify. Capture the morning light for at least two hours. After breakfast, drive towards Leh via Chang La Pass. The terrain around Pangong is incredibly photogenic - capture the dramatic landscapes. At Chang La (5,360m), quick shots of the pass signboard and prayer flags. Descending, stop at viewpoints overlooking the valleys. Afternoon arrival in Leh with time for rest. Evening optional - local street photography in Leh market, capturing daily life, colorful shops, and interesting faces (always ask permission for portraits). Or rest and prepare for the next day's adventures.", 
          highlights: ["Legendary Pangong Sunrise", "2-Hour Morning Light Session", "Dramatic Terrain Photography", "Chang La Pass Documentation", "Valley Viewpoint Stops", "Optional Leh Street Photography"] 
        },
        { 
          day: 6, 
          title: "Sham Valley - Ancient Art & Landscapes", 
          description: "Focus on the unique photographic opportunities of Sham Valley. Start at Sangam, the confluence of Indus and Zanskar rivers - the different colored waters meeting creates unique compositions. Try various shutter speeds to capture the water. Continue to Alchi Monastery for its 1,000-year-old murals (photography prohibited inside, but exterior and compound are excellent). Lamayuru Monastery and its 'Moonland' landscape offer otherworldly images - the eroded, lunar-like terrain against the blue sky is surreal. Capture the monastery from multiple angles and distances. Return towards Leh via Basgo - the ruined fortress against the setting sun creates dramatic silhouettes. End the day at Magnetic Hill for quirky photos of 'gravity-defying' vehicles and the unique landscape.", 
          highlights: ["Sangam Confluence Waters", "Alchi Monastery Exteriors", "Lamayuru Moonland Landscapes", "Surreal Terrain Photography", "Basgo Fortress Sunset Silhouettes", "Magnetic Hill Creative Shots"] 
        },
        { 
          day: 7, 
          title: "Local Life & Final Golden Hours", 
          description: "Today focuses on cultural and people photography. Morning, visit a local village to photograph daily life - farming, weaving, traditional dress. Your guide will facilitate interactions and translations. The faces of Ladakh - weathered skin, bright eyes, warm smiles - tell stories of lives lived at high altitude. Visit a school (with permissions) to capture the joyful faces of young students. Afternoon, a different perspective - shoot Leh from Khardung La highway viewpoints looking down at the valley. Position for the perfect light as the sun lowers. Final sunset session at Leh Palace or another chosen location based on your preferences and what you most want to capture. Evening, extended image review session with your guide, editing tips, and selecting the best shots from your week.", 
          highlights: ["Village Life Photography", "Portrait Sessions with Locals", "School Children Joyful Faces", "Aerial Valley Views", "Final Sunset Mastershot", "Image Review & Selection Session"] 
        },
        { 
          day: 8, 
          title: "Departure with Visual Treasures", 
          description: "Your photography expedition ends today. If your flight is later, optional early morning shoot at a location of your choice - perhaps a final monastery visit or a quiet spot your guide recommends. Breakfast and pack your bags full of visual treasures. You leave Ladakh with thousands of images - landscapes that seem otherworldly, monasteries that speak of centuries of faith, faces full of character, and moments of light and color that few places on earth can offer. Transfer to airport, perhaps capturing a few final frames from the plane as you fly over the Himalayas. Back home, these images will not only be beautiful art but windows to the spiritual, stark, stunning world of Ladakh.", 
          highlights: ["Optional Final Morning Shoot", "Curated Images in Memory Cards", "Himalayan Aerial Views", "Carry Home Visual Treasures", "Memories in Every Frame", "Ladakh Forever in Your Portfolio"] 
        }
      ]
    },
    {
      id: "ladakh-tso-moriri",
      name: "Ladakh Tso Moriri Explorer",
      duration: "8D/7N",
      originalPrice: 55000,
      currentPrice: 46750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&h=600&fit=crop",
      description: "Venture beyond the tourist trails to the hidden gem of Tso Moriri and the vast Changthang plateau. Experience true wilderness, encounter nomadic herders, and discover a Ladakh that few travelers ever see.",
      highlights: ["Tso Moriri Lake", "Changthang Plateau", "Nomadic Changpa Tribes", "Wildlife Spotting"],
      inclusions: ["7 Nights Accommodation", "All Meals", "4x4 Vehicle", "All Permits", "Camping Equipment"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival Leh - Gateway to Changthang", 
          description: "Arrive at Leh Airport and transfer to your hotel. The usual acclimatization rest is essential. Unlike the typical Ladakh tour, this expedition takes you to the remote Changthang plateau, requiring even more careful altitude management. Spend the afternoon resting and hydrating. Late afternoon, take a gentle walk to Shanti Stupa for acclimatization. The views of Leh and the surrounding peaks are your first taste of Ladakh's stark beauty. Evening briefing about the expedition, focusing on the unique aspects of Changthang - its wildlife, nomadic culture, and the extreme conditions. Learn about the Changpa people, traditional herders who live at some of the highest inhabited altitudes on earth. Dinner and early sleep.", 
          highlights: ["Leh Airport Arrival", "Acclimatization Rest (Essential)", "Shanti Stupa Gentle Walk", "Changthang Expedition Briefing", "Changpa Nomad Culture Introduction", "Early Dinner & Rest"] 
        },
        { 
          day: 2, 
          title: "Leh Local Exploration", 
          description: "Another day in Leh to ensure proper acclimatization - the Changthang plateau is at 4,500m+, and poor acclimatization can be dangerous. Morning, visit Leh Palace and explore the old town's atmospheric alleyways. Stop at local cafés for excellent coffee and people-watching. After lunch, visit Thiksey Monastery - the climb is excellent altitude training. Explore the 12-story monastery, see the beautiful murals, and if timed right, observe evening prayers. Drive to Hemis Monastery (45 km), the largest and wealthiest in Ladakh. The peaceful compound and ancient artifacts are impressive. Return to Leh via Stok Palace and its museum. Evening, final preparations for the expedition - pack appropriately as the nights at Tso Moriri will be cold even in summer.", 
          highlights: ["Leh Palace & Old Town", "Altitude Training Walks", "Thiksey Monastery Visit", "Hemis Monastery Exploration", "Stok Palace Museum", "Expedition Packing Session"] 
        },
        { 
          day: 3, 
          title: "Leh to Tso Moriri via Chumathang", 
          description: "The adventure begins! Drive towards the Changthang plateau via the traditional southern route (approx. 250 km, 8 hours including stops). The journey takes you along the Indus River, through stunning canyon landscapes, and over passes. Stop at Chumathang Hot Springs - natural thermal pools where locals bathe, believed to have medicinal properties. The warm water is refreshing after hours of driving. Continue through increasingly remote terrain - villages become sparse and the landscape becomes vast and open. Cross Mahe Bridge over the Indus and enter true Changthang. The road to Tso Moriri passes through terrain that feels like another planet. Finally, the stunning blue lake appears - Tso Moriri at 4,522m, surrounded by 6,000m peaks. Arrive at Korzok village and check into your guest house or camp. The remoteness and peace are palpable.", 
          highlights: ["Indus River Canyon Drive", "Chumathang Hot Springs Stop", "Remote Changthang Entry", "First View of Tso Moriri", "Korzok Village at 4,522m", "One of the Highest Lakes"] 
        },
        { 
          day: 4, 
          title: "Tso Moriri Full Day Exploration", 
          description: "A full day to explore this pristine lake and its surroundings. Wake early to witness sunrise over Tso Moriri - the light hitting the snow-capped peaks and reflecting in the still water is magical. After breakfast, take a guided walk around parts of the lake shore. The lake is home to numerous migratory birds including the Bar-headed Goose, Brahmin Ducks, and the Great Crested Grebe. Your guide will point out various species. Visit Korzok Monastery, a 300-year-old Tibetan Buddhist monastery with commanding views over the lake. Interact with the monks and learn about life in this remote community. Afternoon, visit a Changpa nomad camp if one is nearby. These traditional herders live in black yak-hair tents, herding pashmina goats and yaks. Learn about their lifestyle, see how pashmina wool is processed, and perhaps share butter tea with them. Evening by the lake, stargazing in some of the clearest skies on earth.", 
          highlights: ["Tso Moriri Sunrise", "Bird Watching Session", "Bar-headed Goose & Other Species", "Korzok Monastery Visit", "Changpa Nomad Camp Interaction", "Exceptional Stargazing"] 
        },
        { 
          day: 5, 
          title: "Tso Moriri to Pangong Lake", 
          description: "Drive from one legendary lake to another across the Changthang plateau. This is one of the most remote and scenic drives in all of India. The route takes you through vast, open terrain where you may encounter herds of Kiang (Tibetan Wild Ass), Marmots basking in the sun, and possibly even the elusive Tibetan Wolf or rare Snow Leopard tracks. Stop frequently for wildlife spotting and photography. The landscape is immense - snow peaks on the horizon, vast plains where few humans tread. This is true wilderness. By afternoon, approach Pangong Lake from a different direction than most tourists. The first glimpse of its legendary blue waters after the desolate plateau is particularly striking. Camp by Pangong, comparing this experience to Tso Moriri. Both lakes are extraordinary, each with its unique character. Dinner watching sunset paint the mountains.", 
          highlights: ["Cross-Changthang Remote Drive", "Kiang (Wild Ass) Sightings", "Marmot & Wildlife Spotting", "Immense Wilderness Landscapes", "Pangong Lake via Back Route", "Sunset Camp by Legendary Lake"] 
        },
        { 
          day: 6, 
          title: "Pangong to Nubra via Shyok", 
          description: "Continue the expedition through spectacular terrain. Morning at Pangong for photography - the lake's colors in morning light are exceptional. Then drive the adventurous Shyok route to Nubra Valley. This route follows the Shyok River through narrow gorges, crosses water crossings, and offers dramatic scenery. The road is challenging in parts, adding to the adventure. Emerge into the green oasis of Nubra Valley - a stark contrast to the plateau you've been traversing. Visit Diskit Monastery and its 32-meter Buddha statue overlooking the valley. Continue to Hunder for the famous sand dunes and Bactrian camels. After the high, cold Changthang, the relatively lower Nubra (3,048m) feels warm and lush. Optional camel ride on the dunes at sunset. Overnight at comfortable camps in Hunder.", 
          highlights: ["Pangong Morning Photography", "Shyok River Adventure Route", "Water Crossings & Gorges", "Diskit Monastery & Buddha", "Hunder Sand Dunes", "Bactrian Camel Sunset"] 
        },
        { 
          day: 7, 
          title: "Nubra to Leh via Khardung La", 
          description: "Return to Leh via the famous Khardung La Pass. Morning, explore Nubra at a relaxed pace - perhaps a walk through the orchards and fields of Sumur or a visit to Samstanling Monastery. After breakfast, begin the climb to Khardung La (5,359m). This world-famous pass is a fitting climax to your expedition. Stop at the top for photographs at the signboard and a hot cup of chai. The views from the pass, having now traversed so much of Ladakh's remote regions, feel even more significant. Descend to Leh, arriving by afternoon. Check into your hotel - the comfort feels wonderful after the remote camps! Final evening in Leh - celebration dinner with your team, sharing stories from this incredible expedition. Toast to the wild Changthang, the sacred lakes, and the adventures shared.", 
          highlights: ["Nubra Morning Exploration", "Khardung La Conquest (5,359m)", "World's Highest Viewpoint", "Descent to Comfortable Leh", "Celebration Dinner", "Expedition Stories Shared"] 
        },
        { 
          day: 8, 
          title: "Departure from Leh", 
          description: "Your Tso Moriri expedition concludes. Enjoy a leisurely breakfast - no early alarms today! Time for last-minute shopping in Leh market - pick up pashmina from the Changpa herders you may have met, or turquoise and silver jewelry. Transfer to Leh Airport for your departure. As you fly over the Himalayas, reflect on what you've seen: the remote Tso Moriri that few tourists reach, the vast Changthang where Changpa nomads follow ancient traditions, the wildlife that survives in this harsh environment, and the legendary passes you've crossed. This isn't the Ladakh that appears on postcards - it's deeper, wilder, and more profound. You've experienced the true heart of the Land of High Passes.", 
          highlights: ["Leisurely Final Breakfast", "Leh Market Shopping", "Pashmina & Jewelry Souvenirs", "Airport Transfer", "Himalayan Aerial Farewell", "Heart of Ladakh in Your Soul"] 
        }
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
  heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920&h=1080&fit=crop",
  bannerImages: [
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&h=600&fit=crop"
  ],
  packages: [
    {
      id: "himachal-highlights",
      name: "Himachal Highlights",
      duration: "6D/5N",
      originalPrice: 28000,
      currentPrice: 23800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&h=600&fit=crop",
      description: "Best of Himachal covering Shimla, Kullu, and Manali. Experience colonial heritage, snow-capped peaks, adventure activities, and the warmth of pahadi hospitality.",
      highlights: ["Mall Road Shimla", "Rohtang Pass", "Solang Valley", "Hadimba Temple"],
      inclusions: ["5 Nights Accommodation", "Daily Breakfast", "Airport Transfers", "Sightseeing by Private Vehicle"],
      exclusions: ["Airfare", "Lunch & Dinner", "Adventure Activities", "Rohtang Permit"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival in Shimla - Queen of Hills", 
          description: "Arrive at Chandigarh Airport/Railway Station and begin your scenic drive to Shimla (117 km, approx. 4 hours). The journey takes you through the Himalayan foothills, with views becoming more dramatic as you climb. Shimla, the former summer capital of British India, retains its colonial charm with Gothic architecture, pedestrian-only Mall Road, and a relaxed hill station vibe. Check into your hotel with valley views. After refreshments, take an evening stroll on the famous Mall Road - lined with shops, cafes, and colonial-era buildings. Visit the neo-Gothic Christ Church, one of the most photographed landmarks in Shimla. Watch the sunset from the Ridge, an open space in the heart of town with views of snow-capped peaks. Dinner at a local restaurant - try the famous Shimla Café's coffee and pastries.", 
          highlights: ["Chandigarh to Shimla Drive (4 hrs)", "Valley View Hotel Check-in", "Mall Road Evening Stroll", "Christ Church Visit", "Ridge Sunset Point", "Famous Shimla Café Experience"] 
        },
        { 
          day: 2, 
          title: "Shimla Sightseeing & Kufri", 
          description: "After breakfast, explore Shimla's colonial heritage. Start at the Viceregal Lodge (now Indian Institute of Advanced Studies), a stunning Scottish baronial mansion where major decisions about India's independence were made. The grounds are perfect for a morning walk. Drive to Kufri (16 km), a small hill station famous for adventure activities. At Kufri, enjoy pony rides through apple orchards and forests to the Mahasu Peak for panoramic views. The Green Valley en route offers excellent photo opportunities. Return to Shimla for lunch. Afternoon, visit the Jakhu Temple - the highest point in Shimla (2,455m) with a giant 108-ft Hanuman statue and spectacular views. The temple requires a 2km uphill trek or short drive. Evening free on Mall Road - browse through handicraft shops for Himachali shawls, caps, and local apples.", 
          highlights: ["Viceregal Lodge - Independence Heritage", "Kufri Hill Station Visit", "Pony Ride Through Orchards", "Green Valley Photography", "Jakhu Temple & 108ft Hanuman", "Mall Road Shopping"] 
        },
        { 
          day: 3, 
          title: "Shimla to Manali - Scenic Highway", 
          description: "Today's drive from Shimla to Manali (260 km, approx. 8 hours) is one of India's most beautiful road journeys. Start early to enjoy the scenery. The route follows the Beas River, passing through terraced farms, apple orchards, and dense pine forests. Stop at Kullu, the valley of gods, known for its temples and colorful festivals. Optional visit to the famous Kullu shawl factories to see traditional weaving. Continue along the Beas River to Manali, a major tourist destination nestled at the foot of the Pir Panjal range. The town transitions from bustling Mall Road to the charming Old Manali, with its hippie cafes, guest houses, and relaxed atmosphere. Check into your hotel. Evening, explore Old Manali's eclectic mix of cafes, craft shops, and backpacker culture. Dinner at a riverside café with views of rushing waters.", 
          highlights: ["Scenic Shimla-Manali Highway (8 hrs)", "Beas River Valley Views", "Kullu Valley of Gods", "Kullu Shawl Factory Visit", "Manali Hotel Check-in", "Old Manali Café Evening"] 
        },
        { 
          day: 4, 
          title: "Manali Local Sightseeing", 
          description: "After breakfast, explore Manali's rich cultural and natural attractions. Start at Hadimba Temple, a unique 16th-century pagoda-style wooden temple dedicated to the goddess Hadimba, set amidst towering cedar forests. The architecture is distinctive and the atmosphere serene. Continue to the Manu Temple, dedicated to the sage who is said to have meditated here. Visit the Vashisht hot springs and temple - the natural hot water pools are perfect for a relaxing dip (especially welcome in winter). The temple is believed to be the abode of sage Vashisht. After lunch, visit the Tibetan Monastery and the traditional Himachali village of Vashisht with its beautiful wooden architecture. Evening, stroll through Mall Road for shopping - Manali is famous for woolens, handicrafts, and the locally made Kullu caps. Dinner at a local restaurant - try the Himachali sidu and trout fish.", 
          highlights: ["Hadimba Temple in Cedar Forest", "16th Century Pagoda Architecture", "Vashisht Hot Springs Dip", "Tibetan Monastery Visit", "Traditional Himachali Village", "Mall Road Shopping & Local Cuisine"] 
        },
        { 
          day: 5, 
          title: "Solang Valley Adventure Day", 
          description: "Today is all about adventure! After breakfast, drive to Solang Valley (13 km), a stunning valley that transforms into a ski resort in winter and adventure hub in summer. The valley offers spectacular views of the surrounding glaciers and peaks. Adventure activities available include: paragliding (soar above the valley with tandem pilots), zorbing (roll down the hill in a giant inflatable ball), horse riding, rappelling, and in winter, skiing and snowboarding. The ropeway (if operational) offers excellent views. Even non-adventurous visitors can enjoy the beauty of the valley with walks, photography, and maggi at the numerous stalls. Return to Manali for late lunch. Afternoon at leisure - perhaps a cooking class for Himachali cuisine or a spa session. Evening optional visit to the local handicraft center or simply relax in your hotel overlooking the mountains.", 
          highlights: ["Solang Valley Adventure Hub", "Paragliding Over Mountains", "Zorbing & Horse Riding", "Ropeway Mountain Views", "Mountain Maggi & Chai", "Evening Leisure or Spa"] 
        },
        { 
          day: 6, 
          title: "Departure from Manali", 
          description: "After a leisurely breakfast with mountain views, check out of your hotel. Depending on your departure time, you may have time for a final walk through Old Manali or a visit to any missed attractions. Optional early morning visit to Rohtang Pass (subject to permit availability and weather) for those with flights from Delhi - though this requires a very early start and extends the journey. Transfer to Chandigarh Airport/Railway Station (310 km, approx. 7-8 hours). Alternatively, fly from Kullu-Manali Airport (50 km) if connecting flights are available. As you descend through the Himalayas, carry with you memories of snow-capped peaks, colonial heritage, adventure in the valleys, and the warm hospitality of the pahadi (hill) people. Himachal's mountains will call you back!", 
          highlights: ["Mountain View Breakfast", "Old Manali Final Walk", "Optional Rohtang Pass Visit", "Chandigarh/Kullu Airport Transfer", "Himalayan Memories", "Pahadi Farewell"] 
        }
      ]
    },
    {
      id: "himachal-honeymoon",
      name: "Himachal Honeymoon Special",
      duration: "7D/6N",
      originalPrice: 42000,
      currentPrice: 35700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&h=600&fit=crop",
      description: "Romantic honeymoon covering Shimla, Manali, and Dharamshala. Experience colonial charm, mountain adventures, and spiritual tranquility together.",
      highlights: ["Scenic Drives", "Private Cabins", "Candlelight Dinners", "Couple Activities"],
      inclusions: ["6 Nights Premium Accommodation", "All Meals", "Private Transfers", "Romantic Setups"],
      exclusions: ["Airfare", "Personal Shopping", "Optional Activities"],
      itinerary: [
        { 
          day: 1, 
          title: "Romantic Arrival in Shimla", 
          description: "Your honeymoon begins with a scenic drive from Chandigarh to Shimla (117 km, approx. 4 hours). As you climb through the Himalayan foothills, the excitement builds. Arrive at your heritage hotel or boutique property in Shimla, where your room has been decorated with rose petals, candles, and a special honeymoon cake awaits. After check-in and freshening up, enjoy complimentary couples' mocktails on the balcony with valley views. Late afternoon, take a romantic horse-drawn cart ride through the scenic areas of Shimla. Evening, stroll hand-in-hand on the famous Mall Road under the streetlights. End the day with a candlelit dinner at a heritage restaurant overlooking the valley - the perfect start to your new journey together.", 
          highlights: ["Scenic Drive to Shimla", "Rose Petal Decorated Room", "Honeymoon Cake Surprise", "Couples' Mocktails with Views", "Horse Cart Ride Together", "Candlelit Valley-View Dinner"] 
        },
        { 
          day: 2, 
          title: "Shimla Romance & Heritage", 
          description: "After a leisurely breakfast in bed (room service available), experience one of India's most romantic rail journeys - the UNESCO Heritage Toy Train from Shimla to Barog (or a section of your choice). The narrow-gauge train chugs through 102 tunnels and over numerous bridges, offering stunning valley views - the perfect setting for honeymoon photographs. Return to Shimla for a late lunch. Afternoon, visit the Viceregal Lodge and its beautiful gardens - great for couple photos. Take a walk through the pine forests of Annadale. As evening approaches, enjoy a private sunset viewing arranged at a scenic point. Dinner is a special affair - a private table at a restaurant with live music or at your hotel's best location with special arrangements.", 
          highlights: ["Breakfast in Bed", "UNESCO Toy Train Journey", "Scenic Railway Photography", "Viceregal Lodge Gardens", "Pine Forest Romantic Walk", "Private Sunset & Dinner"] 
        },
        { 
          day: 3, 
          title: "Shimla to Manali - Romantic Road Trip", 
          description: "Today's drive to Manali (260 km, approx. 8 hours) is a romantic road trip through some of Himachal's most beautiful landscapes. Start early with packed breakfast. The route follows the Beas River, and we'll stop at scenic points for photos and chai. Stop at Kullu for shopping - buy matching shawls for each other! Arrive in Manali and check into a riverside cottage or mountain-view resort. Your room is prepared with romantic décor. After freshening up, take a walk to Old Manali in the golden afternoon light - the quirky cafes, rustic lanes, and laid-back atmosphere are perfect for honeymooners. Dinner by the riverside, listening to the Beas River flow past.", 
          highlights: ["Romantic Road Trip (8 hrs)", "Scenic Photo Stops", "Matching Shawl Shopping", "Riverside/Mountain Cottage", "Old Manali Sunset Walk", "Riverside Dinner Experience"] 
        },
        { 
          day: 4, 
          title: "Manali Adventure Together", 
          description: "Today is for adventure and bonding! After breakfast, drive to Solang Valley for couple activities. Try tandem paragliding together - the thrill of flying over mountains is an incredible shared experience. For less adventurous moments, take pony rides through the valley side by side. Try zorbing or simply sit with hot chocolate, watching the clouds play with the peaks. Return to Manali for a special couples' spa session - Ayurvedic massages synchronized for both of you, followed by a steam bath. Post-spa, enjoy a private bonfire arranged at your hotel with music, marshmallows, and stargazing. The mountain stars are exceptionally bright. End with a candlelit dinner under the stars.", 
          highlights: ["Solang Valley Couple Adventures", "Tandem Paragliding Together", "Pony Rides Side by Side", "Couples' Ayurvedic Spa", "Private Bonfire & Stargazing", "Candlelit Dinner Under Stars"] 
        },
        { 
          day: 5, 
          title: "Manali to Dharamshala - Spiritual Journey", 
          description: "Drive to Dharamshala (240 km, approx. 7 hours), home to the Dalai Lama and a place of profound peace. The drive passes through Kangra Valley with stunning views of the Dhauladhar range. Arrive at McLeodganj, the upper town of Dharamshala, and check into a boutique hotel with mountain views. The atmosphere here is distinctly peaceful and spiritual - perfect for newlyweds beginning their journey together. After freshening up, visit the Dalai Lama Temple Complex where you may spin prayer wheels together and absorb the peaceful ambiance. Walk through the colorful Tibetan market. Evening, find a rooftop café with views of the sunset over the mountains. Dinner is authentic Tibetan cuisine in a cozy restaurant.", 
          highlights: ["Kangra Valley Scenic Drive", "McLeodganj Boutique Hotel", "Dalai Lama Temple Visit", "Prayer Wheel Spinning", "Tibetan Market Exploration", "Rooftop Sunset Café"] 
        },
        { 
          day: 6, 
          title: "Dharamshala - Peace & Romance", 
          description: "Wake up to the clearest mountain views - the Dhauladhars seem close enough to touch. After breakfast, participate in a couple's meditation or yoga session arranged at your hotel or a nearby center - start your married life with mindfulness. Visit the beautiful Bhagsu Falls and temple - the short hike to the waterfall is romantic, and the views from there are stunning. Enjoy the famous Shiva Café for chai with a view. Afternoon, optional St. John in the Wilderness church visit - a beautiful stone church in the forest. Alternatively, simply relax at your hotel, enjoying each other's company with the mountains as backdrop. Final evening is special - a private dinner arranged at a scenic viewpoint, just for two, with the mountains glowing in the sunset.", 
          highlights: ["Dhauladhar Mountain Views", "Couple's Yoga/Meditation", "Bhagsu Falls Trek", "Shiva Café Mountain Chai", "St. John Church or Leisure", "Private Mountain Sunset Dinner"] 
        },
        { 
          day: 7, 
          title: "Departure - New Beginnings", 
          description: "Your romantic honeymoon in Himachal concludes today. Enjoy a leisurely breakfast - no rush. If time permits, take a final walk through McLeodganj, perhaps picking up matching prayer beads or a piece of Tibetan art as honeymoon memorabilia. Transfer to Dharamshala Airport (14 km, approx. 30 mins) for your departure. Alternatively, transfer to Pathankot (90 km, approx. 3 hours) for trains. As you leave the mountains, you carry with you not just photographs but the beginning of a beautiful journey together. The peace of Dharamshala, the adventure in Manali, and the charm of Shimla - these memories will be the foundation of your married life. Congratulations and best wishes for a lifetime of love!", 
          highlights: ["Leisurely Final Breakfast", "McLeodganj Memorabilia Shopping", "Matching Prayer Beads", "Airport/Station Transfer", "Mountain Memories for Life", "New Journey Begins"] 
        }
      ]
    },
    {
      id: "himachal-spiti-valley",
      name: "Spiti Valley Expedition",
      duration: "9D/8N",
      originalPrice: 55000,
      currentPrice: 46750,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      description: "Epic journey through the cold desert of Spiti Valley. Remote monasteries, ancient villages, and landscapes that seem extraterrestrial await on this unforgettable expedition.",
      highlights: ["Key Monastery", "Chandratal Lake", "Kunzum Pass", "Kaza Town"],
      inclusions: ["8 Nights Accommodation", "All Meals", "4x4 Vehicle", "Inner Line Permits"],
      exclusions: ["Airfare", "Personal Expenses", "Tips"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival Shimla - Gateway to Spiti", 
          description: "Arrive at Chandigarh and drive to Shimla (117 km, approx. 4 hours). Shimla is the staging point for your Spiti expedition. Check into your hotel and rest. In the evening, attend a briefing about the challenging days ahead - Spiti is a high-altitude cold desert with basic infrastructure, and this expedition requires adventurous spirit. The remote valleys you'll explore are among India's least visited yet most spectacular regions. Walk on Mall Road for dinner and preparation. Pack only essentials - luggage space in Spiti's 4x4 vehicles is limited. Early to bed - the expedition begins at dawn.", 
          highlights: ["Chandigarh to Shimla Drive", "Spiti Expedition Briefing", "Expedition Preparation", "Mall Road Evening Walk", "Essential Packing Only", "Early Rest for Dawn Start"] 
        },
        { 
          day: 2, 
          title: "Shimla to Sarahan via Narkanda", 
          description: "Begin your journey into the remote Kinnaur Valley. Drive from Shimla to Sarahan (175 km, approx. 7 hours) via Narkanda. Stop at Narkanda for its famous Hatu Peak views and apple orchards. The landscape becomes more rugged as you leave the tourist areas behind. Pass through the ancient fruit-growing region, seeing terraced orchards and traditional villages. Arrive at Sarahan, home to the Bhimakali Temple - a stunning example of Kinnauri architecture combining Hindu and Buddhist elements. The temple, with its centuries-old wooden structure and silver doors, is impressive. The village offers peaceful evening walks with views of the Shrikhand Mahadev peak. Overnight in Sarahan - a gentle introduction to the remoteness ahead.", 
          highlights: ["Shimla to Remote Kinnaur", "Narkanda & Hatu Peak", "Apple Orchard Region", "Bhimakali Temple Visit", "Ancient Kinnauri Architecture", "Peaceful Mountain Village Night"] 
        },
        { 
          day: 3, 
          title: "Sarahan to Sangla Valley", 
          description: "Drive deeper into Kinnaur to the beautiful Sangla Valley (100 km, approx. 5 hours). The road clings to cliffs above the Sutlej River, offering dramatic views. This is where the landscape begins to shift - drier, more rugged, and increasingly spectacular. Enter the Sangla Valley, one of Himachal's most beautiful - green terraces, apple orchards, and snow peaks. Check into a camp or guest house by the Baspa River. After lunch, explore Sangla village with its traditional wooden houses. Drive or walk to Kamru Fort, an ancient wooden tower fort with excellent views and a temple dedicated to goddess Kamakshi. The fort's architecture is unique - stacked wooden layers that have survived earthquakes for 800 years. Evening by the river, watching the peaks glow at sunset.", 
          highlights: ["Cliffside Sutlej River Road", "Dramatic Kinnaur Landscapes", "Sangla Valley Arrival", "Baspa Riverside Camp", "800-Year-Old Kamru Fort", "Sunset Over Snow Peaks"] 
        },
        { 
          day: 4, 
          title: "Sangla to Tabo via Nako", 
          description: "Today you cross into Spiti - the Trans-Himalayan cold desert. Drive from Sangla to Tabo (180 km, approx. 8 hours). The route passes through some of the most dramatic scenery in the Himalayas. Stop at Nako, a beautiful village with Nako Lake and a thousand-year-old monastery. The village sits on a cliff edge with stunning views. Continue towards Spiti, stopping at Gue Monastery to see a 500-year-old mummified monk - a rare and fascinating sight. The landscape becomes increasingly barren and otherworldly - welcome to the moon mountains. Arrive at Tabo, one of the oldest continuously functioning Buddhist monasteries in the world (over 1,000 years old). The mud-brick monastery houses remarkable frescoes comparable to those in Ajanta. Overnight in Tabo's humble guest houses - authenticity over luxury.", 
          highlights: ["Sangla to Spiti Crossing", "Nako Lake & Village", "1,000-Year-Old Nako Monastery", "500-Year-Old Mummified Monk", "Moon Landscape Entry", "Tabo - Oldest Active Monastery"] 
        },
        { 
          day: 5, 
          title: "Tabo to Kaza via Dhankar", 
          description: "Explore Tabo's treasures in the morning. Enter the 'Ajanta of the Himalayas' - the main prayer hall (Dukhang) contains some of the oldest and finest Buddhist murals in India, dating to 996 AD. The soft colors and detailed images are breathtaking. After this spiritual immersion, drive to Kaza (45 km, approx. 2 hours) via Dhankar. Stop at Dhankar Monastery, dramatically perched on a cliff above the confluence of the Spiti and Pin rivers. The views from Dhankar are among the best in Spiti - the stark valley, snowy peaks, and the ancient monastery create an iconic image. A 1-hour hike leads to Dhankar Lake, a sacred high-altitude lake (optional). Continue to Kaza, the administrative center of Spiti. Kaza has cafes, shops, and better facilities. Evening, explore the town and acclimate to the altitude (3,650m).", 
          highlights: ["Tabo's 1,000-Year-Old Murals", "Ajanta of the Himalayas", "Dhankar Monastery Cliffs", "Spiti-Pin Confluence Views", "Optional Dhankar Lake Hike", "Kaza Town Exploration"] 
        },
        { 
          day: 6, 
          title: "Kaza - Key, Kibber & Langza", 
          description: "A full day exploring Spiti's most iconic sites. Start at Key Monastery, the largest and most famous in Spiti. Perched on a hilltop, its layered architecture is instantly recognizable - the image of Spiti itself. The monastery houses 300 monks and contains excellent murals and thankas. Continue to Kibber, once claimed to be the highest motorable village in the world (now debated). The village is a great spot for spotting ibex and blue sheep. Drive to Langza, famous for its giant Buddha statue against the backdrop of Chau Chau Kang Nilda peak. Langza is also known for marine fossils - millions of years ago, this was under the Tethys Sea! Search for ammonite fossils with local guides. Return to Kaza for dinner. Optional visit to Hikkim village nearby - home to the world's highest post office, where you can mail a postcard to loved ones.", 
          highlights: ["Key Monastery - Largest in Spiti", "300 Monks' Ancient Residence", "Kibber High-Altitude Village", "Langza Giant Buddha Statue", "Marine Fossil Hunting", "Hikkim - World's Highest Post Office"] 
        },
        { 
          day: 7, 
          title: "Kaza to Chandratal Lake", 
          description: "Drive from Kaza to Chandratal Lake (110 km, approx. 5 hours), crossing the mighty Kunzum Pass (4,551m). The climb to Kunzum is spectacular - the barren mountains reveal their colors as you ascend. At the pass, a small temple to the goddess Kunzum provides blessings for travelers - spin the prayer wheels and add your prayers. The descent towards Chandratal takes you through terrain that feels prehistoric. Chandratal ('Moon Lake') at 4,300m is one of India's most beautiful high-altitude lakes. The crescent-shaped lake changes colors with the sky - turquoise, blue, emerald. Camp near the lake (camping not allowed on immediate shoreline). Take an evening walk to the lake for sunset - the colors are otherworldly. Night camping under the clearest skies you've ever seen - the Milky Way arches overhead.", 
          highlights: ["Kunzum Pass Crossing (4,551m)", "Kunzum Temple Blessings", "Prehistoric Landscape Descent", "Chandratal - Crescent Moon Lake", "Color-Changing Lake Waters", "Milky Way Camping Night"] 
        },
        { 
          day: 8, 
          title: "Chandratal to Manali via Rohtang", 
          description: "Wake early for sunrise at Chandratal - the morning light on the lake is magical. After breakfast at camp, begin the journey to Manali (110 km, approx. 6 hours). The route crosses Rohtang Pass (3,978m), one of the most famous passes in India. The road can be challenging - water crossings, broken sections, and landslide-prone areas - but this is part of the Spiti adventure. At Rohtang, you're back in tourist territory - a stark contrast to the remote Spiti you've been exploring. The descent to Manali reveals green forests and flowing rivers after days in the cold desert. Arrive in Manali and check into a comfortable hotel - after basic Spiti accommodations, this feels luxurious! Hot shower, comfortable bed, and celebratory dinner - you've completed one of India's most adventurous circuits!", 
          highlights: ["Chandratal Sunrise", "Final Camp Breakfast", "Rohtang Pass Adventure", "Return to Green Landscapes", "Manali Comfort After Spiti", "Expedition Celebration Dinner"] 
        },
        { 
          day: 9, 
          title: "Departure from Manali", 
          description: "Your Spiti expedition concludes. Enjoy a leisurely breakfast - the comfort of regular beds and hot showers is appreciated! If time permits, take a final walk through Old Manali or visit any missed local attractions. Transfer to Chandigarh Airport/Railway Station (310 km, approx. 7-8 hours) or fly from Kullu-Manali Airport. As you leave the mountains, you carry with you memories of one of the world's most remote and beautiful regions - the ancient monasteries of Tabo and Key, the impossible villages of Kibber and Langza, the moon lake of Chandratal, and the vast landscapes that reminded you how small we are in the grand scale of nature. Spiti changes those who visit - you return home different, perhaps more aware of life's impermanence and beauty.", 
          highlights: ["Leisurely Comfortable Breakfast", "Old Manali Final Walk", "Airport/Station Transfer", "Memories of Remote Spiti", "Ancient Monasteries in Heart", "Changed by the Journey"] 
        }
      ]
    },
    {
      id: "himachal-dharamshala",
      name: "Dharamshala McLeodganj Retreat",
      duration: "5D/4N",
      originalPrice: 22000,
      currentPrice: 18700,
      discount: 15,
      image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&h=600&fit=crop",
      description: "Spiritual retreat in the abode of the Dalai Lama with treks, meditation, and immersion in Tibetan culture.",
      highlights: ["Dalai Lama Temple", "Triund Trek", "Tibetan Culture", "Bhagsu Falls"],
      inclusions: ["4 Nights Accommodation", "Daily Breakfast", "Airport Transfers", "Trek Guide"],
      exclusions: ["Airfare", "Lunch & Dinner", "Personal Expenses"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival in McLeodganj", 
          description: "Arrive at Dharamshala Airport (14 km) or Pathankot Railway Station (90 km) and transfer to McLeodganj, the upper town of Dharamshala and the seat of the Tibetan Government in Exile. This small hill town became world-famous when the Dalai Lama made it his home after fleeing Tibet in 1959. Check into your hotel with views of the Dhauladhar mountains. After rest and refreshments, explore the town on foot. Walk through the colorful main square with its Tibetan prayer flags, shops selling Buddhist artifacts, and cafes offering momos and butter tea. Visit the Dalai Lama Temple Complex (Tsuglagkhang) - the spiritual heart of the exiled Tibetan community. If you're fortunate, you may see monks debating in the courtyard - a fascinating sight. Evening, find a rooftop café for sunset views over the mountains.", 
          highlights: ["McLeodganj Arrival & Check-in", "Dhauladhar Mountain Views", "Main Square Exploration", "Dalai Lama Temple Visit", "Monks Debating (if lucky)", "Rooftop Sunset Café"] 
        },
        { 
          day: 2, 
          title: "Triund Trek - Heaven on Earth", 
          description: "Today's highlight is the famous Triund trek! After an early breakfast, meet your guide and begin the trek from Galu Devi temple (accessible by shared taxi from McLeodganj). The 9 km trek takes 4-5 hours through oak and rhododendron forests. The trail is well-marked and moderately challenging. As you climb, views of the Kangra Valley open up below. The final stretch involves a steeper climb before you reach Triund meadow at 2,875m. The view from Triund is breathtaking - the snow-capped Dhauladhar range seems close enough to touch, while the Kangra Valley spreads below. Spend time at the top, taking photos and absorbing the peace. For those staying overnight, tents are available; otherwise, return by the same route. Evening back in McLeodganj - you've earned a good meal and rest!", 
          highlights: ["Early Breakfast & Trek Start", "9 km Forest Trail", "Oak & Rhododendron Woods", "Triund Meadow (2,875m)", "Dhauladhar Range Close Views", "Return & Well-Earned Rest"] 
        },
        { 
          day: 3, 
          title: "Dharamkot, Bhagsu & Waterfall", 
          description: "Today is about exploration and spirituality. Start with an early morning yoga or meditation session - McLeodganj has numerous excellent centers offering drop-in classes. After breakfast, walk to Dharamkot village (3 km uphill), known for its spiritual retreats and organic cafes. The village has a peaceful, alternative vibe. Continue to Bhagsu, famous for its waterfall and ancient temple. The 1.5 km walk to Bhagsu Falls is scenic, and the waterfall itself is refreshing - you can wade in the pool at its base. The famous Shiva Café, perched near the falls, offers excellent chai and views - a must-stop. Walk back via the Bhagsu Nag Temple, an ancient Shiva temple said to date back 5,000 years. Afternoon, optional visit to the Norbulingka Institute (20 mins drive) - a center preserving Tibetan arts and crafts, with beautiful temple and gardens. Evening at leisure in McLeodganj.", 
          highlights: ["Morning Yoga/Meditation Class", "Dharamkot Village Walk", "Bhagsu Falls & Pool", "Famous Shiva Café Chai", "5,000-Year-Old Bhagsu Temple", "Norbulingka Tibetan Arts (optional)"] 
        },
        { 
          day: 4, 
          title: "Kangra Valley Exploration", 
          description: "Today, explore the broader Kangra Valley. Drive to Kangra Fort (20 km, approx. 45 mins), one of the oldest forts in India, dating back to the 4th century BC. Once the seat of the Katoch dynasty, the fort was captured by Mahmud of Ghazni, Mughals, and British. Its ruins still impress with their scale and views. Continue to the Chamunda Devi Temple, an important Shakti Peeth with excellent views. Next, visit the Kangra Art Museum to understand the famous Kangra miniature painting style. If time permits, visit the Dharamshala International Cricket Stadium - one of the most scenic cricket grounds in the world, with the Dhauladhars as backdrop. Return to McLeodganj. Evening, attend a teaching or public talk at the Dalai Lama Temple if available (check schedules), or spend time in the Tibetan Library reading about Buddhism and Tibetan history.", 
          highlights: ["Kangra Fort (4th Century BC)", "Historical Dynasties Stories", "Chamunda Devi Temple", "Kangra Art Museum", "Cricket Stadium Mountain Views", "Temple Teaching or Library Visit"] 
        },
        { 
          day: 5, 
          title: "Departure - Carrying Peace Within", 
          description: "Your spiritual retreat in Dharamshala concludes. Enjoy a final breakfast with mountain views. If time permits, take a last walk through the main square, picking up prayer flags, singing bowls, or Tibetan jewelry as souvenirs. Perhaps light a butter lamp at the temple as a final act of gratitude. Transfer to Dharamshala Airport or Pathankot Railway Station for your departure. As you leave this peaceful abode, you carry with you more than memories - the calm of meditation, the joy of trekking to Triund's heights, the warmth of Tibetan butter tea, and perhaps a slightly different perspective on life. McLeodganj changes visitors - the presence of thousands of exiled Tibetans preserving their culture with dignity, the teachings of compassion, and the majestic mountains all contribute to an experience that stays with you. Om Mani Padme Hum.", 
          highlights: ["Mountain View Final Breakfast", "Main Square Souvenir Shopping", "Prayer Flag & Singing Bowl", "Temple Butter Lamp Lighting", "Airport/Station Transfer", "Peace & Perspective to Carry Home"] 
        }
      ]
    },
    {
      id: "himachal-adventure",
      name: "Himachal Adventure Special",
      duration: "7D/6N",
      originalPrice: 48000,
      currentPrice: 40800,
      discount: 15,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      description: "Action-packed adventure tour with trekking, river rafting, paragliding, and camping under the Himalayan stars.",
      highlights: ["White Water Rafting", "Paragliding", "Himalayan Trekking", "Camping Under Stars"],
      inclusions: ["6 Nights Accommodation", "All Meals", "All Adventure Activities", "Equipment & Safety Gear", "Expert Guides"],
      exclusions: ["Airfare", "Personal Gear", "Tips", "Insurance"],
      itinerary: [
        { 
          day: 1, 
          title: "Arrival Manali - Adventure Briefing", 
          description: "Arrive at Chandigarh or Kullu Airport and transfer to Manali (310/50 km). Check into your adventure camp or resort on the banks of the Beas River. After freshening up and lunch, attend a comprehensive adventure briefing. Meet your guides - experienced professionals certified in various adventure activities. Learn about safety protocols, equipment usage, and the exciting days ahead. Evening, take an acclimatization walk to Old Manali, crossing the scenic footbridge over the Beas. Explore the quirky cafes and shops. Return for an adventure-themed dinner at camp with fellow adventure seekers. Early to bed - the adrenaline starts flowing tomorrow!", 
          highlights: ["Transfer to Riverside Camp", "Adventure Activity Briefing", "Meet Expert Guides", "Safety & Equipment Introduction", "Old Manali Evening Walk", "Adventure Team Dinner"] 
        },
        { 
          day: 2, 
          title: "River Rafting on Beas", 
          description: "Your first adventure day begins with white water rafting on the Beas River! After breakfast, drive to the put-in point near Pirdi (15 km). Your guide briefs you on paddling techniques, commands, and safety. Don your wetsuit and life jacket, and launch into the river. The 14 km stretch from Pirdi to Jhiri features Grade II-III rapids with names like 'Roller Coaster' and 'Golf Course.' The rapids are exhilarating without being too extreme - perfect for beginners and experienced rafters alike. Between rapids, enjoy the scenic canyon walls and wildlife along the banks. After about 2 hours of rafting, you'll reach the take-out point. Celebrate with hot chai and snacks. Return to camp for lunch and rest. Evening, try cliff jumping at a safe spot on the Beas (with guides) or go for a nature walk. Bonfire dinner with rafting story sharing.", 
          highlights: ["White Water Rafting on Beas", "Grade II-III Rapids", "14 km River Adventure", "Expert Guide & Safety Gear", "Optional Cliff Jumping", "Bonfire Celebration Dinner"] 
        },
        { 
          day: 3, 
          title: "Paragliding at Solang", 
          description: "Today you fly! After breakfast, drive to Solang Valley, one of India's premier paragliding destinations. The tandem paragliding experience doesn't require any prior experience - you fly with an expert pilot who handles all the technical aspects. After a safety briefing and harness fitting, you'll take a short run off the launch site and suddenly you're airborne! The 15-20 minute flight offers unparalleled views of the Solang Valley, snow peaks, and the patchwork of villages below. Your pilot may perform some gentle acrobatic maneuvers if you're willing. Landing is smooth on a designated field. Videos and photos of your flight are available. Afternoon, try other activities in Solang - zorbing, ATV rides, or rope courses. Return to camp for relaxation and dinner.", 
          highlights: ["Solang Valley Paragliding", "Tandem Flight with Expert", "15-20 Minute Aerial Views", "Acrobatic Maneuvers Option", "Flight Video & Photos", "Afternoon Activity Options"] 
        },
        { 
          day: 4, 
          title: "Manali to Kullu - Riverside Camping", 
          description: "After breakfast, drive towards Kullu (40 km, 1.5 hours), stopping at river beaches for various activities. Try your hand at rock climbing on natural rock faces with proper gear and guides. Next, rappelling down a cliff face - an exhilarating experience! After a riverside lunch, go for a moderate hike through the forests and meadows. The Kullu Valley is known for its biodiversity and beautiful trails. In the afternoon, you'll reach your riverside campsite - tents set up on the banks of the Beas with the sound of rushing water as your soundtrack. Evening, learn basic survival skills - fire starting, knot tying, and shelter building. Dinner is cooked on an open fire, and the night ends with a bonfire, music, and stargazing in the clear mountain sky.", 
          highlights: ["Rock Climbing on Natural Face", "Rappelling Adventure", "Riverside Lunch", "Kullu Valley Forest Hike", "Riverside Camping Setup", "Survival Skills & Bonfire Night"] 
        },
        { 
          day: 5, 
          title: "Trekking & Camping at Himalayan Meadows", 
          description: "Today's trek takes you to a beautiful Himalayan meadow. After an early breakfast at camp, begin your trek from a nearby trailhead. The 10-12 km trek (depending on route chosen) takes you through dense forests of oak and deodar, past streams and waterfalls, to a high meadow with stunning views. Your guides will point out local flora and fauna. Reach your camping spot by afternoon - a meadow at around 3,000m with panoramic views. Tents are already set up by the support team. Explore the area, photograph wildflowers, or simply sit in the silence of the mountains. As evening falls, watch the sunset paint the peaks. Dinner under the stars in the middle of nowhere - this is the essence of Himalayan adventure. Night in tents with sleeping bags.", 
          highlights: ["10-12 km Himalayan Trek", "Oak & Deodar Forests", "Streams & Waterfall Crossings", "High Meadow Camp (3,000m)", "Sunset Over Snow Peaks", "Dinner Under Stars in Wilderness"] 
        },
        { 
          day: 6, 
          title: "Trek Return & Mountain Biking", 
          description: "Wake up to a stunning mountain sunrise from your meadow camp. After a hot breakfast, pack up and trek back to the roadhead. The descent is easier and faster, taking around 4 hours. Upon reaching the road, you're met with vehicles and equipment for the afternoon's activity - mountain biking! After lunch, gear up with helmets and pads for a thrilling downhill ride on forest trails. The 15 km route takes you through varied terrain - dirt tracks, forest paths, and scenic roads. Your guides lead the way, stopping at viewpoints and ensuring safety. End the ride at your final night's accommodation - a comfortable hotel in Manali after days of camping. Hot shower, comfortable bed, and a celebratory farewell dinner with your adventure team.", 
          highlights: ["Sunrise from Himalayan Meadow", "Trek Descent (4 hrs)", "Mountain Bike Equipment", "15 km Downhill Ride", "Forest Trails & Dirt Tracks", "Celebratory Farewell Dinner"] 
        },
        { 
          day: 7, 
          title: "Departure - Adventure Complete", 
          description: "Your Himachal adventure expedition concludes. Enjoy a leisurely breakfast - the comfort of the hotel is well-deserved after your adventures! Collect certificates of completion for your activities. Exchange contacts with fellow adventurers and your guides. Transfer to Chandigarh Airport/Railway Station (310 km, approx. 7 hours) or Kullu Airport (50 km). As you leave the mountains, you carry not just photos and videos but a sense of accomplishment. You've rafted rivers, flown over valleys, climbed rocks, trekked to meadows, and camped under Himalayan stars. These adventures have pushed your boundaries and shown you what you're capable of. The mountains have challenged and rewarded you - until the next adventure!", 
          highlights: ["Leisurely Farewell Breakfast", "Activity Completion Certificates", "Adventure Team Contacts", "Airport/Station Transfer", "Sense of Accomplishment", "Ready for Next Adventure"] 
        }
      ]
    }
  ]
};

// Import extended destinations
import { goaData, rajasthanData, hyderabadData, dubaiData, singaporeData, thailandData, europeData } from './destinationsExtended';
import { meghalayaData, andamanData, sikkimData, baliData, turkeyData, australiaData, switzerlandData, franceData, japanData, vietnamData, bhutanData, usaData } from './additionalDestinations';

// Re-export all destinations
export { goaData, rajasthanData, hyderabadData, dubaiData, singaporeData, thailandData, europeData };
export { meghalayaData, andamanData, sikkimData, baliData, turkeyData, australiaData, switzerlandData, franceData, japanData, vietnamData, bhutanData, usaData };

// Consolidated allDestinations export
export const allDestinations: Record<string, DestinationData> = {
  kashmir: kashmirData,
  kerala: keralaData,
  ladakh: ladakhData,
  "himachal-pradesh": himachalData,
  himachal: himachalData,
  goa: goaData,
  rajasthan: rajasthanData,
  hyderabad: hyderabadData,
  meghalaya: meghalayaData,
  andaman: andamanData,
  sikkim: sikkimData,
  dubai: dubaiData,
  singapore: singaporeData,
  thailand: thailandData,
  europe: europeData,
  bali: baliData,
  indonesia: baliData,
  turkey: turkeyData,
  australia: australiaData,
  switzerland: switzerlandData,
  france: franceData,
  japan: japanData,
  vietnam: vietnamData,
  bhutan: bhutanData,
  usa: usaData
};

// India and International package summaries for search
export const indiaPackages = [kashmirData, keralaData, ladakhData, himachalData, goaData, rajasthanData, hyderabadData, meghalayaData, andamanData, sikkimData].flatMap(dest => 
  dest.packages.map(pkg => ({
    ...pkg,
    destination: dest.name,
    destinationId: dest.id,
    type: 'india' as const
  }))
);

export const internationalPackages = [dubaiData, singaporeData, thailandData, europeData, baliData, turkeyData, australiaData, switzerlandData, franceData, japanData, vietnamData, bhutanData, usaData].flatMap(dest => 
  dest.packages.map(pkg => ({
    ...pkg,
    destination: dest.name,
    destinationId: dest.id,
    type: 'international' as const
  }))
);
