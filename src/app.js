// Sample Hotel Data for India - In a real application, this would come from an API
const hotels = [
  {
    id: 1,
    name: "Taj Mahal Palace",
    location: "Mumbai, India",
    rating: 4.9,
    price: 15000,
    image: "/images/india-hotel1.jpg",
    summary: "Iconic harbor-front hotel with heritage suites and ocean views.",
    description: "Experience luxury in the heart of Mumbai with stunning ocean views, heritage interiors, and signature service in Colaba.",
    amenities: ["pool", "spa", "gym", "restaurant", "wifi"],
    roomTypes: ["Luxury Room", "Sea View Suite", "Heritage Suite"],
    highlights: ["Gateway of India views", "Heritage wing access", "Award-winning dining"]
  },
  {
    id: 2,
    name: "The Oberoi Udaivilas",
    location: "Udaipur, India",
    rating: 4.8,
    price: 22000,
    image: "/images/india-hotel2.jpg",
    summary: "Lakefront palace retreat with pools, courtyards, and spa rituals.",
    description: "Lakefront resort with exclusive spa facilities, tranquil courtyards, and traditional Rajasthani architecture on Lake Pichola.",
    amenities: ["pool", "spa", "restaurant", "wifi"],
    roomTypes: ["Premier Room", "Luxury Suite", "Pool Pavilion"],
    highlights: ["Private boat transfers", "Sunset lake views", "Signature spa therapies"]
  },
  {
    id: 3,
    name: "The Leela Palace",
    location: "New Delhi, India",
    rating: 4.7,
    price: 18000,
    image: "/images/india-hotel3.jpg",
    summary: "Diplomatic enclave stay with refined rooms and club lounge access.",
    description: "Opulent palace hotel with modern amenities, curated art, and proximity to the diplomatic enclave in New Delhi.",
    amenities: ["spa", "gym", "restaurant", "wifi"],
    roomTypes: ["Grand Deluxe", "Royal Club Room", "Presidential Suite"],
    highlights: ["Butler service", "Signature Jamavar dining", "Rooftop pool"]
  },
  {
    id: 4,
    name: "ITC Grand Chola",
    location: "Chennai, India",
    rating: 4.6,
    price: 13500,
    image: "/images/india-hotel4.jpg",
    summary: "Grand heritage-inspired hotel with expansive dining and spa.",
    description: "Majestic hotel inspired by the Chola dynasty with luxury accommodations, vast banquet spaces, and wellness programs.",
    amenities: ["pool", "spa", "gym", "restaurant", "wifi"],
    roomTypes: ["Executive Club", "Grand Suite", "Presidential Suite"],
    highlights: ["Largest luxury hotel in Chennai", "Multiple cuisines", "Holistic spa"]
  },
  {
    id: 5,
    name: "Rambagh Palace",
    location: "Jaipur, India",
    rating: 4.8,
    price: 24000,
    image: "/images/india-hotel2.jpg",
    summary: "Former royal residence with manicured gardens and heritage suites.",
    description: "Former residence of the Maharaja of Jaipur offering royal experiences, heritage decor, and serene garden views.",
    amenities: ["pool", "spa", "restaurant", "wifi"],
    roomTypes: ["Palace Room", "Royal Suite", "Grand Presidential Suite"],
    highlights: ["Heritage palace tours", "Royal afternoon tea", "Vintage car rides"]
  },
  {
    id: 6,
    name: "Wildflower Hall",
    location: "Shimla, India",
    rating: 4.7,
    price: 17500,
    image: "/images/india-hotel3.jpg",
    summary: "Himalayan retreat with forest views, spa rituals, and cozy suites.",
    description: "Luxurious mountain retreat with panoramic Himalayan views, forest trails, and colonial architecture.",
    amenities: ["spa", "gym", "restaurant", "wifi"],
    roomTypes: ["Deluxe Room", "Mountain View Suite", "Presidential Suite"],
    highlights: ["Himalayan views", "Outdoor jacuzzi", "Guided nature walks"]
  },
  {
    id: 7,
    name: "Taj Lake Palace",
    location: "Udaipur, India",
    rating: 4.9,
    price: 26000,
    image: "/images/india-hotel1.jpg",
    summary: "Floating marble palace with private piers and lake dining.",
    description: "A romantic lake palace offering luxury suites, serene courtyards, and private lake experiences.",
    amenities: ["pool", "spa", "restaurant", "wifi"],
    roomTypes: ["Lake View Room", "Royal Suite", "Grand Royal Suite"],
    highlights: ["Private boat arrival", "Lakefront dining", "Historic marble palace"]
  },
  {
    id: 8,
    name: "ITC Rajputana",
    location: "Jaipur, India",
    rating: 4.5,
    price: 12500,
    image: "/images/india-hotel4.jpg",
    summary: "Traditional haveli-style stay close to Jaipur markets.",
    description: "A classic haveli-inspired hotel with warm hospitality, rich textures, and convenient access to Jaipur sights.",
    amenities: ["pool", "gym", "restaurant", "wifi"],
    roomTypes: ["Executive Room", "Rajputana Suite", "Presidential Suite"],
    highlights: ["Courtyard architecture", "Live folk performances", "Central location"]
  },
  {
    id: 9,
    name: "The Leela Kovalam",
    location: "Kerala, India",
    rating: 4.6,
    price: 14500,
    image: "/images/india-hotel3.jpg",
    summary: "Clifftop beach retreat with Ayurveda spa and sea views.",
    description: "Clifftop resort overlooking the Arabian Sea, known for wellness rituals and sunset views.",
    amenities: ["pool", "spa", "restaurant", "wifi"],
    roomTypes: ["Garden View Room", "Ocean View Suite", "Royal Club"],
    highlights: ["Ayurveda wellness", "Private beach access", "Oceanfront dining"]
  },
  {
    id: 10,
    name: "Evolve Back Coorg",
    location: "Coorg, India",
    rating: 4.6,
    price: 17000,
    image: "/images/india-hotel2.jpg",
    summary: "Coffee estate getaway with private pools and nature trails.",
    description: "A nature-focused resort in Coorg with private pool villas, plantation walks, and curated local cuisine.",
    amenities: ["pool", "spa", "restaurant", "wifi"],
    roomTypes: ["Pool Villa", "Duplex Pool Villa", "Family Cottage"],
    highlights: ["Coffee plantation tours", "Private plunge pools", "Nature-guided treks"]
  },
  {
    id: 11,
    name: "The Serai",
    location: "Jaisalmer, India",
    rating: 4.5,
    price: 19000,
    image: "/images/india-hotel1.jpg",
    summary: "Desert sanctuary with dune views and curated safari experiences.",
    description: "A desert sanctuary offering villa-style stays, dune views, and curated safari experiences.",
    amenities: ["pool", "spa", "restaurant", "wifi"],
    roomTypes: ["Luxury Tent", "Sunset Villa", "Presidential Suite"],
    highlights: ["Dune dining", "Camel safari", "Stargazing sessions"]
  },
  {
    id: 12,
    name: "Taj Falaknuma Palace",
    location: "Hyderabad, India",
    rating: 4.9,
    price: 28000,
    image: "/images/india-hotel2.jpg",
    summary: "Hilltop palace with regal suites and city skyline views.",
    description: "A hilltop palace with regal suites, curated art collections, and sweeping views of Hyderabad.",
    amenities: ["pool", "spa", "gym", "restaurant", "wifi"],
    roomTypes: ["Palace Room", "Grand Royal Suite", "Presidential Suite"],
    highlights: ["Private palace tours", "Library lounge", "Horse carriage arrival"]
  }
];

const API_BASE_URL = typeof window !== 'undefined' && window.API_BASE_URL
  ? window.API_BASE_URL
  : '';

const ASSET_BASE_URL = typeof window !== 'undefined' && window.ASSET_BASE_URL
  ? window.ASSET_BASE_URL
  : '';

function getAssetBase() {
  if (ASSET_BASE_URL) {
    return ASSET_BASE_URL;
  }

  if (typeof window === 'undefined') {
    return '/images';
  }

  if (window.location.port === '5173') {
    return '/images';
  }

  return '/public/images';
}

function resolveImagePath(value) {
  if (!value) {
    return `${getAssetBase()}/hotel-room3.jpg`;
  }

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  const normalized = value.startsWith('/') ? value.slice(1) : value;
  if (normalized.startsWith('images/')) {
    const prefix = getAssetBase().replace(/\/$/, '');
    return `${prefix}/${normalized.replace('images/', '')}`;
  }

  return value;
}

window.resolveImagePath = resolveImagePath;

function buildApiUrl(path) {
  return API_BASE_URL ? `${API_BASE_URL}${path}` : path;
}

window.buildApiUrl = buildApiUrl;

function normalizeHotel(rawHotel) {
  const price = typeof rawHotel.price === 'string'
    ? Number(rawHotel.price)
    : rawHotel.price;

  return {
    ...rawHotel,
    price: Number.isFinite(price) ? price : 0,
    image: resolveImagePath(rawHotel.image),
    amenities: Array.isArray(rawHotel.amenities) ? rawHotel.amenities : [],
    roomTypes: Array.isArray(rawHotel.roomTypes) ? rawHotel.roomTypes : [],
    highlights: Array.isArray(rawHotel.highlights) ? rawHotel.highlights : [],
    summary: rawHotel.summary || '',
    description: rawHotel.description || ''
  };
}

hotels.forEach((hotel, index) => {
  hotels[index] = normalizeHotel(hotel);
});

window.hotels = hotels;

async function loadHotelsFromApi(options = {}) {
  const { onSuccess, onError } = options;

  try {
    const response = await fetch(buildApiUrl('/hotels.php'));
    if (!response.ok) {
      throw new Error('Hotels request failed');
    }

    const payload = await response.json();
    if (!payload || !Array.isArray(payload.hotels) || payload.hotels.length === 0) {
      return;
    }

    hotels.length = 0;
    payload.hotels.forEach((hotel) => hotels.push(normalizeHotel(hotel)));
    window.hotels = hotels;

    if (typeof onSuccess === 'function') {
      onSuccess();
    }
  } catch (error) {
    if (typeof onError === 'function') {
      onError(error);
    }
  }
}

window.loadHotelsFromApi = loadHotelsFromApi;

// Top Destinations Data in India
const destinations = [
  {
    id: 1,
    name: "Golden Triangle",
    location: "Delhi-Agra-Jaipur, India",
    rating: 4.8,
    image: "/images/india-hotel1.jpg",
    description: "Experience India's most iconic circuit featuring the Taj Mahal, Red Fort, and Amber Palace."
  },
  {
    id: 2,
    name: "Kerala Backwaters",
    location: "Kerala, India",
    rating: 4.7,
    image: "/images/india-hotel2.jpg",
    description: "Serene network of lagoons, lakes and canals perfect for houseboat stays and Ayurvedic retreats."
  },
  {
    id: 3,
    name: "Goa Beaches",
    location: "Goa, India",
    rating: 4.6,
    image: "/images/india-hotel3.jpg",
    description: "India's beach paradise with golden sands, vibrant nightlife, and Portuguese colonial heritage."
  }
];

// Gemini API Integration
// API key would typically be stored securely on the server side
// This is a simplified client-side implementation for demonstration only
const GEMINI_API_KEY = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY 
  ? import.meta.env.VITE_GEMINI_API_KEY 
  : "API_KEY_PLACEHOLDER"; // Provide key in .env as VITE_GEMINI_API_KEY
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";

// Function to call Gemini API for AI responses
async function getGeminiResponse(userQuery, context) {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === "API_KEY_PLACEHOLDER") {
    console.warn('Gemini API Key missing. Falling back to predefined responses.');
    return getIntelligentResponse(userQuery);
  }

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are an AI hotel booking assistant specializing in Indian hotels.
                       Context: ${context}
                       User query: ${userQuery}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      })
    });

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message || 'API Error');
    }
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error with Gemini API:', error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again later. (Error: " + error.message + ")";
  }
}

// Advanced chatbot responses for Indian hotels
const botResponses = {
  greetings: [
    "Namaste! How can I assist with your hotel booking in India today?",
    "Welcome to AI Hotel Booking Assistant! Looking for the perfect hotel in India? I can help!",
    "Greetings from India! I'm here to help you find the ideal accommodation for your Indian adventure."
  ],
  hotelRecommendations: [
    "Based on your preferences, I'd recommend the Taj Mahal Palace in Mumbai. It has exceptional reviews and stunning ocean views. The architecture combines Moorish, Oriental and Florentine styles, creating a truly iconic experience. Would you like to know more about their room options?",
    "The Oberoi Udaivilas in Udaipur would be perfect for you! This magnificent property sits on Lake Pichola and recreates the romance of a royal era with stunning Rajasthani architecture. Their rooms with semi-private pools are particularly sought after.",
    "For a unique experience, consider The Leela Palace in New Delhi - it's located in the diplomatic enclave and combines traditional Indian architecture with modern amenities. Their royal club rooms come with butler service and exclusive lounge access!"
  ],
  priceQuestions: [
    "Luxury hotels in India range from ₹13,500 to ₹25,000 per night depending on location and amenities. Delhi and Mumbai tend to be more expensive, while you can find better deals in cities like Jaipur or Kochi. Is there a specific budget you have in mind?",
    "We have several price points available. Taj Mahal Palace starts at ₹15,000 per night, while ITC Grand Chola is ₹13,500 per night. Would you like me to suggest options within a specific budget range? Many hotels also offer special seasonal discounts that I can help you find."
  ],
  bookingQuestions: [
    "To book a hotel in India, simply select your preferred property, dates, and number of guests, then click 'Book Now'. You'll need to provide passport details for international travelers. Many luxury hotels in India also offer special experiences like heritage walks or cultural performances that can be added during booking.",
    "Booking is easy! Choose your hotel, enter your dates and guest information, and follow the checkout process. For Indian hotels, I recommend checking if they offer airport transfers as traffic can be unpredictable in major cities like Delhi and Mumbai. Need help with a specific part of booking?"
  ],
  destinationInfo: [
    "India offers diverse destinations from the Himalayan mountains to Kerala's backwaters. The Golden Triangle (Delhi-Agra-Jaipur) is perfect for first-time visitors, while Goa offers beautiful beaches, and Rajasthan showcases royal heritage. What type of experience are you looking for?",
    "The best time to visit most of India is from October to March when the weather is cooler and more pleasant. If you're interested in hill stations like Shimla or Darjeeling, April to June is ideal. Monsoon season (June to September) is beautiful in Kerala but may affect travel plans elsewhere."
  ],
  foodQuestions: [
    "Most luxury hotels in India offer multiple dining options ranging from authentic Indian cuisine to international dishes. Many properties like Taj and Oberoi have award-winning restaurants. Some even offer cooking classes where you can learn to make traditional dishes like butter chicken or biryani!",
    "Indian cuisine varies dramatically by region - from the rich, creamy curries of North India to coastal seafood in the south. Most luxury hotels offer extensive breakfast buffets featuring both Indian and Western options. Let me know if you have specific dietary requirements, and I can recommend suitable properties."
  ],
  fallback: [
    "I'm not quite sure I understand. Could you please rephrase your question about Indian hotels or travel?",
    "I'd like to help, but I'm not quite sure what you're asking about India. Can you provide more details about what you're looking for?",
    "Sorry, I didn't catch that. Could you try asking in a different way? I'm here to help with all your travel plans in India."
  ]
};

// Pick a random response from a list
function getRandomResponse(responses) {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

// Function to generate more intelligent responses based on query
function getIntelligentResponse(query) {
  query = query.toLowerCase();

  // More sophisticated keyword matching
  if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('namaste')) {
    return getRandomResponse(botResponses.greetings);
  }
  else if ((query.includes('recommend') || query.includes('suggestion') || query.includes('best hotel')) &&
           (query.includes('mumbai') || query.includes('bombay'))) {
    return "For Mumbai, I'd highly recommend the iconic Taj Mahal Palace. Located in Colaba with views of the Arabian Sea and Gateway of India, this historic hotel offers unparalleled luxury and service. Their sea-facing rooms are particularly stunning. Would you like to know about their dining options?";
  }
  else if ((query.includes('recommend') || query.includes('suggestion') || query.includes('best hotel')) &&
           query.includes('delhi')) {
    return "In Delhi, The Leela Palace in the diplomatic enclave offers spectacular luxury with its grand architecture inspired by Lutyen's Delhi. Their royal club rooms include butler service and exclusive lounge access. The hotel's Jamavar restaurant serves excellent North Indian cuisine. Would you like me to check availability?";
  }
  else if ((query.includes('recommend') || query.includes('suggestion') || query.includes('best hotel')) &&
           (query.includes('udaipur') || query.includes('rajasthan'))) {
    return "Udaipur is home to the magnificent Oberoi Udaivilas, consistently rated among the world's best hotels. Set on the banks of Lake Pichola, it offers incredible views of the City Palace. Their premier rooms with semi-private pools are worth the splurge. The traditional boat ride at sunset organized by the hotel is a must-experience!";
  }
  else if (query.includes('recommend') || query.includes('suggestion') || query.includes('best hotel')) {
    return getRandomResponse(botResponses.hotelRecommendations);
  }
  else if (query.includes('price') || query.includes('cost') || query.includes('how much') || query.includes('rate') || query.includes('rupee') || query.includes('₹')) {
    return getRandomResponse(botResponses.priceQuestions);
  }
  else if (query.includes('book') || query.includes('reservation') || query.includes('reserve')) {
    return getRandomResponse(botResponses.bookingQuestions);
  }
  else if (query.includes('destination') || query.includes('place') || query.includes('city') || query.includes('region') || query.includes('where')) {
    return getRandomResponse(botResponses.destinationInfo);
  }
  else if (query.includes('food') || query.includes('restaurant') || query.includes('breakfast') || query.includes('dinner') || query.includes('cuisine') || query.includes('eat')) {
    return getRandomResponse(botResponses.foodQuestions);
  }
  else if (query.includes('weather') || query.includes('season') || query.includes('monsoon') || query.includes('rain') || query.includes('hot') || query.includes('cold')) {
    return "Northern India is best visited from October to March, when the weather is cooler and pleasant. Southern India is great year-round, though the monsoon (June-September) brings heavy rains to many regions. If you're visiting hill stations like Shimla or Darjeeling, April to June offers ideal weather. When are you planning to travel?";
  }
  else if (query.includes('transport') || query.includes('getting around') || query.includes('travel') || query.includes('car') || query.includes('train')) {
    return "Most luxury hotels in India offer airport transfers and car services with professional drivers. For intercity travel, domestic flights are convenient, while the train system (especially premium trains like Shatabdi Express) offers a unique experience. Some hotels like Taj and Oberoi have their own car fleets with trained drivers familiar with local routes.";
  }
  else {
    return getRandomResponse(botResponses.fallback);
  }
}

function getHotelsData() {
  if (Array.isArray(window.hotels) && window.hotels.length > 0) {
    return window.hotels;
  }

  return hotels;
}

function extractDestination(query, hotelsData) {
  const locations = new Set();

  hotelsData.forEach((hotel) => {
    hotel.location.split(',').forEach((chunk) => {
      const trimmed = chunk.trim().toLowerCase();
      if (trimmed) {
        locations.add(trimmed);
      }
    });
  });

  for (const location of locations) {
    if (query.includes(location)) {
      return location;
    }
  }

  const match = query.match(/in\s+([a-z\s]+)/i);
  if (match && match[1]) {
    return match[1].trim().toLowerCase();
  }

  return null;
}

function parseBudget(query) {
  if (query.includes('budget')) {
    return { max: 15000, label: 'budget' };
  }

  if (query.includes('moderate')) {
    return { min: 15000, max: 20000, label: 'moderate' };
  }

  if (query.includes('luxury')) {
    return { min: 20000, label: 'luxury' };
  }

  const rangeMatch = query.match(/between\s*₹?\s*(\d{4,6})\s*(?:and|to)\s*₹?\s*(\d{4,6})/i);
  if (rangeMatch) {
    return { min: Number(rangeMatch[1]), max: Number(rangeMatch[2]) };
  }

  const underMatch = query.match(/(?:under|below|less than)\s*₹?\s*(\d{4,6})/i);
  if (underMatch) {
    return { max: Number(underMatch[1]) };
  }

  const overMatch = query.match(/(?:over|above|more than)\s*₹?\s*(\d{4,6})/i);
  if (overMatch) {
    return { min: Number(overMatch[1]) };
  }

  return null;
}

function parseRating(query) {
  const match = query.match(/(\d(?:\.\d)?)\s*\+?\s*(?:star|stars|rating)/i);
  if (match) {
    return Number(match[1]);
  }

  return null;
}

function parseAmenity(query) {
  const amenityOptions = ['pool', 'spa', 'gym', 'restaurant', 'wifi'];
  return amenityOptions.find((amenity) => query.includes(amenity)) || null;
}

function findHotelByName(query, hotelsData) {
  return hotelsData.find((hotel) => query.includes(hotel.name.toLowerCase()));
}

function filterHotelsByQuery(options) {
  const { destination, budget, rating, amenity } = options;
  const hotelsData = getHotelsData();

  return hotelsData
    .filter((hotel) => {
      if (destination && !hotel.location.toLowerCase().includes(destination)) {
        return false;
      }

      if (budget) {
        if (budget.min && hotel.price < budget.min) return false;
        if (budget.max && hotel.price > budget.max) return false;
      }

      if (rating && hotel.rating < rating) {
        return false;
      }

      if (amenity) {
        const amenities = Array.isArray(hotel.amenities) ? hotel.amenities : [];
        if (!amenities.includes(amenity)) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return a.price - b.price;
    });
}

function formatHotelList(hotelsList, label) {
  const topHotels = hotelsList.slice(0, 3);
  const prefix = label ? `Here are ${label} hotels:` : 'Here are some options:';
  const lines = topHotels.map((hotel, index) => {
    return `${index + 1}) ${hotel.name} (${hotel.location}) - ${formatPrice(hotel.price)}/night, rating ${hotel.rating}`;
  });

  const suffix = hotelsList.length > 3
    ? `Reply with a hotel name for more details, or ask for more options.`
    : `Reply with a hotel name for more details.`;

  return `${prefix}\n${lines.join('\n')}\n${suffix}`;
}

function getSuggestions(query, destination) {
  const suggestions = [];
  if (destination) {
    suggestions.push(`Luxury hotels in ${destination}`);
    suggestions.push(`Budget hotels in ${destination}`);
  }

  suggestions.push('Hotels with spa');
  suggestions.push('Top rated hotels in India');
  suggestions.push('Show my bookings');

  return suggestions.slice(0, 4);
}

async function getChatbotResponse(message) {
  const query = message.toLowerCase();
  const hotelsData = getHotelsData();

  if (query.includes('my bookings') || query.includes('show bookings')) {
    return {
      text: 'Opening your bookings now.',
      action: () => {
        window.location.href = 'bookings.html';
      },
      suggestions: ['Modify a booking', 'Cancel a booking', 'Book a hotel']
    };
  }

  if (query.includes('contact')) {
    return {
      text: 'Opening the contact page for you.',
      action: () => {
        window.location.href = 'contact.html';
      },
      suggestions: ['Show my bookings', 'Hotels with spa', 'Luxury hotels in Jaipur']
    };
  }

  const matchedHotel = findHotelByName(query, hotelsData);
  if (matchedHotel && (query.includes('details') || query.includes('view') || query.includes('open') || query.includes('book'))) {
    return {
      text: `Opening details for ${matchedHotel.name}.`,
      action: () => {
        if (typeof window.viewHotelDetails === 'function') {
          window.viewHotelDetails(matchedHotel.id);
        }
      },
      suggestions: ['Book this hotel', 'Show my bookings', 'Hotels with spa']
    };
  }

  if (matchedHotel && query.includes('amenities')) {
    const amenities = Array.isArray(matchedHotel.amenities) ? matchedHotel.amenities.join(', ') : 'Standard amenities';
    return {
      text: `${matchedHotel.name} offers: ${amenities}. Want room options or pricing?`,
      suggestions: ['Room types', 'Pricing', 'Book this hotel']
    };
  }

  const destination = extractDestination(query, hotelsData);
  const budget = parseBudget(query);
  const rating = parseRating(query);
  const amenity = parseAmenity(query);
  const shouldSearch = destination || budget || rating || amenity || query.includes('recommend') || query.includes('hotel');

  if (shouldSearch) {
    const results = filterHotelsByQuery({ destination, budget, rating, amenity });
    if (results.length === 0) {
      return {
        text: 'I could not find matches with those filters. Try a different city or budget range.',
        suggestions: getSuggestions(query, destination)
      };
    }

    const labelParts = [];
    if (budget?.label) labelParts.push(budget.label);
    if (destination) labelParts.push(`in ${destination}`);
    const label = labelParts.join(' ');

    return {
      text: formatHotelList(results, label),
      suggestions: getSuggestions(query, destination)
    };
  }

  const contextData = JSON.stringify(hotelsData.map(h => ({ name: h.name, location: h.location, price: h.price, rating: h.rating, amenities: h.amenities, summary: h.summary })));
  const aiText = await getGeminiResponse(message, contextData);

  return {
    text: aiText,
    suggestions: ['Best hotels in Mumbai', 'Budget stays under ₹15000', 'Hotels with spa', 'Show my bookings']
  };
}

function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

function toDateInputValue(value) {
  if (!value) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return '';
  }
  return parsed.toISOString().slice(0, 10);
}

function getPriceLabel(price) {
  if (price <= 15000) return 'Budget';
  if (price <= 20000) return 'Moderate';
  return 'Luxury';
}

function toTitleCase(value) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatAmenity(amenity) {
  return toTitleCase(amenity.replace(/-/g, ' '));
}

function truncateText(text, maxLength) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
}

// Function to generate star rating HTML
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }

  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }

  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>';
  }

  return starsHTML;
}

// Function to generate hotel card HTML
function generateHotelCard(hotel) {
  const priceLabel = getPriceLabel(hotel.price);
  const description = truncateText(hotel.summary || hotel.description, 110);

  return `
    <div class="hotel-card">
      <img src="${hotel.image}" alt="${hotel.name}" class="hotel-img">
      <div class="hotel-details">
        <span class="price-badge ${priceLabel.toLowerCase()}">${priceLabel}</span>
        <h3 class="hotel-name">${hotel.name}</h3>
        <p class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
        <div class="hotel-rating">${generateStarRating(hotel.rating)} (${hotel.rating})</div>
        <p class="hotel-description">${description}</p>
        <p class="hotel-price">${formatPrice(hotel.price)} <span>/ night</span></p>
        <button class="btn" onclick="viewHotelDetails(${hotel.id})">View Details</button>
      </div>
    </div>
  `;
}

// Function to display recommended hotels
function displayRecommendedHotels() {
  const recommendedContainer = document.getElementById('recommended-hotels');
  if (!recommendedContainer) return;

  // Get a subset of hotels for recommendations (first 3)
  const recommendedHotels = hotels.slice(0, 3);
  let hotelsHTML = '';

  recommendedHotels.forEach(hotel => {
    hotelsHTML += generateHotelCard(hotel);
  });

  recommendedContainer.innerHTML = hotelsHTML;
}

// Function to display top destinations
function displayTopDestinations() {
  const destinationsContainer = document.getElementById('top-destinations');
  if (!destinationsContainer) return;

  let destinationsHTML = '';

  destinations.forEach(destination => {
    const image = typeof resolveImagePath === 'function'
      ? resolveImagePath(destination.image)
      : destination.image;
    destinationsHTML += `
      <div class="hotel-card">
        <img src="${image}" alt="${destination.name}" class="hotel-img">
        <div class="hotel-details">
          <h3 class="hotel-name">${destination.name}</h3>
          <p class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${destination.location}</p>
          <div class="hotel-rating">${generateStarRating(destination.rating)} (${destination.rating})</div>
          <p>${destination.description}</p>
          <button class="btn" onclick="exploreDestination('${destination.location.split(',')[0].trim()}')">Explore Hotels</button>
        </div>
      </div>
    `;
  });

  destinationsContainer.innerHTML = destinationsHTML;
}

// Function to redirect to the explore page with a destination filter
function exploreDestination(destination) {
  window.location.href = `explore.html?destination=${encodeURIComponent(destination)}`;
}

// Function to view hotel details (would go to a detail page in a real app)
function viewHotelDetails(hotelId) {
  const hotel = hotels.find(h => h.id === hotelId);
  if (!hotel) return;
  openHotelDetailsModal(hotel);
}

function ensureHotelDetailsModal() {
  let overlay = document.getElementById('hotel-details-overlay');
  if (overlay) return overlay;

  overlay = document.createElement('div');
  overlay.id = 'hotel-details-overlay';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="hotel-details-title"></div>';

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay || event.target.closest('[data-close]')) {
      closeHotelDetailsModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeHotelDetailsModal();
    }
  });

  document.body.appendChild(overlay);
  return overlay;
}

function openHotelDetailsModal(hotel) {
  const overlay = ensureHotelDetailsModal();
  const modal = overlay.querySelector('.modal');
  const amenities = Array.isArray(hotel.amenities) ? hotel.amenities : [];
  const highlights = Array.isArray(hotel.highlights) ? hotel.highlights : [];
  const roomTypes = Array.isArray(hotel.roomTypes) ? hotel.roomTypes : [];
  const priceLabel = getPriceLabel(hotel.price).toLowerCase();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const defaultCheckIn = toDateInputValue(today);
  const defaultCheckOut = toDateInputValue(tomorrow);
  const roomTypeOptions = roomTypes.length
    ? roomTypes.map(type => `<option value="${type}">${type}</option>`).join('')
    : '<option value="Standard Room">Standard Room</option>';

  const amenitiesList = amenities.length
    ? amenities.map(item => `<li>${formatAmenity(item)}</li>`).join('')
    : '<li>Standard amenities available</li>';

  const roomTypesList = roomTypes.length
    ? roomTypes.map(item => `<li>${item}</li>`).join('')
    : '<li>Contact us for room options</li>';

  const highlightsList = highlights.length
    ? `<div class="details-highlight">
        <h4>Highlights</h4>
        <ul class="details-list">${highlights.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>`
    : '';

  modal.innerHTML = `
    <div class="modal-header">
      <div>
        <h2 class="modal-title" id="hotel-details-title">${hotel.name}</h2>
        <p class="modal-subtitle"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
      </div>
      <button class="modal-close" data-close aria-label="Close details">&times;</button>
    </div>
    <div class="modal-body">
      <div class="modal-media">
        <img src="${hotel.image}" alt="${hotel.name}">
      </div>
      <div class="modal-info">
        <div class="modal-meta">
          <span class="price-badge ${priceLabel}">${getPriceLabel(hotel.price)}</span>
          <span class="rating-badge"><i class="fas fa-star"></i> ${hotel.rating}</span>
          <span class="price-text">${formatPrice(hotel.price)} / night</span>
        </div>
        <p class="modal-description">${hotel.description}</p>
        <div class="details-grid">
          <div>
            <h4>Amenities</h4>
            <ul class="details-list">${amenitiesList}</ul>
          </div>
          <div>
            <h4>Room Types</h4>
            <ul class="details-list">${roomTypesList}</ul>
          </div>
        </div>
        ${highlightsList}
        <form class="modal-form booking-form" id="booking-form">
          <div class="details-grid">
            <div class="form-group">
              <label for="booking-check-in">Check-in</label>
              <input type="date" id="booking-check-in" value="${defaultCheckIn}" required>
            </div>
            <div class="form-group">
              <label for="booking-check-out">Check-out</label>
              <input type="date" id="booking-check-out" value="${defaultCheckOut}" required>
            </div>
            <div class="form-group">
              <label for="booking-guests">Guests</label>
              <select id="booking-guests" required>
                <option value="1">1 Guest</option>
                <option value="2" selected>2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
              </select>
            </div>
            <div class="form-group">
              <label for="booking-room-type">Room Type</label>
              <select id="booking-room-type" required>
                ${roomTypeOptions}
              </select>
            </div>
          </div>
          <div class="modal-actions">
            <button class="btn btn-outline" type="button" data-close>Close</button>
            <button class="btn" type="submit">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  `;

  const bookingForm = modal.querySelector('#booking-form');
  bookingForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const checkInValue = modal.querySelector('#booking-check-in').value;
    const checkOutValue = modal.querySelector('#booking-check-out').value;
    const guestsValue = Number(modal.querySelector('#booking-guests').value);
    const roomTypeValue = modal.querySelector('#booking-room-type').value;

    if (!checkInValue || !checkOutValue) {
      alert('Please select both check-in and check-out dates.');
      return;
    }

    if (new Date(checkOutValue) <= new Date(checkInValue)) {
      alert('Check-out must be after check-in.');
      return;
    }

    const payload = {
      user_id: 1,
      hotel_id: hotel.id,
      hotel_name: hotel.name,
      location: hotel.location,
      check_in: checkInValue,
      check_out: checkOutValue,
      guests: guestsValue,
      room_type: roomTypeValue,
      price: hotel.price
    };

    const apiUrl = buildApiUrl('/bookings.php');

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Booking failed');
      }

      closeHotelDetailsModal();
      showInlineToast('Booking created! Check it in My Bookings.', 'success');
    } catch (error) {
      showInlineToast('Sorry, we could not create the booking right now.', 'error');
    }
  });

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showInlineToast(message, type) {
  let container = document.getElementById('inline-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'inline-toast-container';
    container.style.position = 'fixed';
    container.style.right = '1.5rem';
    container.style.bottom = '1.5rem';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '0.6rem';
    container.style.zIndex = '1100';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.backgroundColor = type === 'success' ? '#15803d' : '#b91c1c';
  toast.style.color = '#fff';
  toast.style.padding = '0.75rem 1rem';
  toast.style.borderRadius = '10px';
  toast.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
  toast.style.fontSize = '0.95rem';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(6px)';
  toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(6px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function closeHotelDetailsModal() {
  const overlay = document.getElementById('hotel-details-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Chatbot functionality
function initChatbot() {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const closeChat = document.getElementById('close-chat');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const sendMessage = document.getElementById('send-message');
  const chatInputContainer = chatbotWindow ? chatbotWindow.querySelector('.chat-input-container') : null;

  if (!chatbotToggle || !chatbotWindow || !closeChat || !chatMessages || !chatInput || !sendMessage) return;

  if (chatbotToggle.dataset.bound === 'true') return;
  chatbotToggle.dataset.bound = 'true';

  const quickReplies = document.createElement('div');
  quickReplies.className = 'chat-quick-replies';
  if (chatInputContainer) {
    chatbotWindow.insertBefore(quickReplies, chatInputContainer);
  }

  const historyKey = 'aiHotelChatHistory';
  let chatHistory = [];

  function saveHistory() {
    localStorage.setItem(historyKey, JSON.stringify(chatHistory));
  }

  function loadHistory() {
    try {
      const saved = localStorage.getItem(historyKey);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function renderHistory() {
    chatMessages.innerHTML = '';
    chatHistory = loadHistory();

    if (chatHistory.length === 0) {
      addMessageToChat("Namaste! Ask me about hotels, prices, or destinations in India.", 'bot-message', true);
      return;
    }

    chatHistory.forEach((entry) => {
      addMessageToChat(entry.text, entry.role === 'user' ? 'user-message' : 'bot-message', false);
    });
  }

  function setQuickReplies(items) {
    if (!quickReplies) return;
    quickReplies.innerHTML = '';
    if (!items || items.length === 0) return;

    items.forEach((item) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'quick-reply';
      button.textContent = item;
      button.addEventListener('click', () => {
        sendUserMessage(item);
      });
      quickReplies.appendChild(button);
    });
  }

  // Toggle chatbot window
  chatbotToggle.addEventListener('click', () => {
    chatbotWindow.style.display = chatbotWindow.style.display === 'block' ? 'none' : 'block';
  });

  // Close chatbot window
  closeChat.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
  });

  // Send message function
  async function sendUserMessage(overrideMessage) {
    const message = (overrideMessage || chatInput.value).trim();
    if (message === '') return;

    // Add user message to chat
    addMessageToChat(message, 'user-message');

    // Clear input
    chatInput.value = '';

    // Add typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot-message typing-indicator';
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
      const response = await getChatbotResponse(message);
      
      if (typingIndicator.parentElement) {
        chatMessages.removeChild(typingIndicator);
      }

      addMessageToChat(response.text, 'bot-message');

      if (response.suggestions) {
        setQuickReplies(response.suggestions);
      }

      if (typeof response.action === 'function') {
        setTimeout(response.action, 400);
      }
    } catch (err) {
      if (typingIndicator.parentElement) {
        chatMessages.removeChild(typingIndicator);
      }
      addMessageToChat("I'm having some trouble. Please try again.", 'bot-message');
    }
  }

  // Add message to chat
  function addMessageToChat(message, className, persist = true) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (!persist) return;

    chatHistory.push({
      role: className === 'user-message' ? 'user' : 'bot',
      text: message
    });

    if (chatHistory.length > 40) {
      chatHistory = chatHistory.slice(chatHistory.length - 40);
    }

    saveHistory();
  }

  // Event listeners
  sendMessage.addEventListener('click', () => sendUserMessage());

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendUserMessage();
    }
  });

  renderHistory();
  setQuickReplies(['Best hotels in Mumbai', 'Budget stays under ₹15000', 'Hotels with spa', 'Show my bookings']);
}

window.initChatbot = initChatbot;

// Search functionality
function initSearch() {
  const searchBtn = document.querySelector('.search-form .btn');
  if (!searchBtn) return;

  searchBtn.addEventListener('click', () => {
    const destinationInput = document.getElementById('destination');
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    const guestsInput = document.getElementById('guests');

    if (!destinationInput || !checkInInput || !checkOutInput || !guestsInput) {
      return;
    }

    const destination = destinationInput.value;
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;
    const guests = guestsInput.value;

    // Redirect to explore page with search parameters
    window.location.href = `explore.html?destination=${encodeURIComponent(destination)}&checkin=${encodeURIComponent(checkIn)}&checkout=${encodeURIComponent(checkOut)}&guests=${encodeURIComponent(guests)}`;
  });
}

function initHomePage() {
  displayRecommendedHotels();
  displayTopDestinations();
  initChatbot();
  initSearch();

  // Make functions available globally
  window.generateHotelCard = generateHotelCard;
  window.viewHotelDetails = viewHotelDetails;
  window.exploreDestination = exploreDestination;

  loadHotelsFromApi({
    onSuccess: () => {
      displayRecommendedHotels();
    }
  });
}

window.initHomePage = initHomePage;

function runOnReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

// Initialize all components when DOM is ready
runOnReady(initHomePage);
