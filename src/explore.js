// Import functionality from app.js
// In a real app, we would use ES modules properly or a bundler
// For this demo, we're accessing the global hotels array and functions

function initExplorePage() {
  // Parse URL parameters for filtering
  const urlParams = new URLSearchParams(window.location.search);
  const urlDestination = urlParams.get('destination');
  const urlCheckin = urlParams.get('checkin');
  const urlCheckout = urlParams.get('checkout');
  const urlGuests = urlParams.get('guests');

  // Set form values from URL parameters if present
  if (urlDestination) {
    const destinationInput = document.getElementById('destination');
    if (destinationInput) destinationInput.value = urlDestination;
  }

  // Display all hotels with any URL filters applied
  displayFilteredHotels();

  // Set up filter button
  const filterBtn = document.getElementById('filter-btn');
  if (filterBtn) {
    filterBtn.addEventListener('click', filterHotels);
  }

  // Initialize chatbot (reusing from app.js)
  if (typeof window.initChatbot === 'function') {
    window.initChatbot();
  }

  if (typeof window.loadHotelsFromApi === 'function') {
    window.loadHotelsFromApi({
      onSuccess: () => {
        displayFilteredHotels();
      }
    });
  }
}

window.initExplorePage = initExplorePage;

function runOnReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

runOnReady(initExplorePage);

// Function to display all hotels or filtered hotels based on URL parameters
function displayFilteredHotels() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlDestination = urlParams.get('destination');

  const hotelsContainer = document.getElementById('all-hotels');
  if (!hotelsContainer) return;

  const hotelsData = Array.isArray(window.hotels) ? window.hotels : null;
  if (!hotelsData) {
    hotelsContainer.innerHTML = '<p>No hotels available at the moment. Please try again later.</p>';
    return;
  }

  // Filter hotels based on URL parameters if present
  let filteredHotels = [...hotelsData];

  if (urlDestination) {
    filteredHotels = filteredHotels.filter(hotel =>
      hotel.location.toLowerCase().includes(urlDestination.toLowerCase())
    );
  }

  if (filteredHotels.length === 0) {
    hotelsContainer.innerHTML = '<p>No hotels match your filters. Try adjusting your criteria.</p>';
    return;
  }

  // Display the filtered hotels
  let hotelsHTML = '';
  filteredHotels.forEach(hotel => {
    hotelsHTML += generateHotelCard(hotel);
  });

  hotelsContainer.innerHTML = hotelsHTML;

  // Add event listeners to view detail buttons
  const viewButtons = document.querySelectorAll('.hotel-card .btn');
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Extract hotel ID from button's onclick attribute
      const onclickAttr = this.getAttribute('onclick');
      if (onclickAttr && onclickAttr.includes('viewHotelDetails')) {
        const hotelId = parseInt(onclickAttr.match(/\d+/)[0]);
        viewHotelDetails(hotelId);
      }
    });
  });

  // Update filter count
  const filterCountElem = document.getElementById('filter-count');
  if (filterCountElem) {
    filterCountElem.textContent = filteredHotels.length;
  }
}

// Function to filter hotels based on user selections
function filterHotels() {
  const destination = document.getElementById('destination').value.toLowerCase();
  const priceRange = document.getElementById('price-range').value;
  const rating = parseFloat(document.getElementById('rating').value);
  const amenities = document.getElementById('amenities').value;

  const hotelsData = Array.isArray(window.hotels) ? window.hotels : null;
  if (!hotelsData) return;

  // Filter the hotels
  const filteredHotels = hotelsData.filter(hotel => {
    // Filter by destination
    if (destination && !hotel.location.toLowerCase().includes(destination)) {
      return false;
    }

    // Filter by price range - adjusted for Indian rupees
    if (priceRange) {
      if (priceRange === 'budget' && hotel.price > 15000) return false;
      if (priceRange === 'moderate' && (hotel.price < 15000 || hotel.price > 20000)) return false;
      if (priceRange === 'luxury' && hotel.price < 20000) return false;
    }

    // Filter by rating
    if (rating && hotel.rating < rating) {
      return false;
    }

    if (amenities) {
      const hotelAmenities = Array.isArray(hotel.amenities) ? hotel.amenities : [];
      return hotelAmenities.includes(amenities);
    }

    return true;
  });

  // Display the filtered hotels
  const hotelsContainer = document.getElementById('all-hotels');
  if (!hotelsContainer) return;

  if (filteredHotels.length === 0) {
    hotelsContainer.innerHTML = '<p>No hotels match your filters. Try adjusting your criteria.</p>';
    return;
  }

  let hotelsHTML = '';
  filteredHotels.forEach(hotel => {
    hotelsHTML += generateHotelCard(hotel);
  });

  hotelsContainer.innerHTML = hotelsHTML;

  // Update filter count
  const filterCountElem = document.getElementById('filter-count');
  if (filterCountElem) {
    filterCountElem.textContent = filteredHotels.length;
  }

  // Add event listeners to view detail buttons
  const viewButtons = document.querySelectorAll('.hotel-card .btn');
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Extract hotel ID from button's onclick attribute
      const onclickAttr = this.getAttribute('onclick');
      if (onclickAttr && onclickAttr.includes('viewHotelDetails')) {
        const hotelId = parseInt(onclickAttr.match(/\d+/)[0]);
        viewHotelDetails(hotelId);
      }
    });
  });
}

// Function to view hotel details (would go to a detail page in a real app)
function viewHotelDetails(hotelId) {
  // In a real app, this would navigate to a detail page
  // For this demo, we'll show an alert
  if (typeof window.viewHotelDetails === 'function') {
    window.viewHotelDetails(hotelId);
  } else {
    const hotelsData = Array.isArray(window.hotels) ? window.hotels : [];
    const hotel = hotelsData.find(h => h.id === hotelId);
    if (hotel) {
      alert(`You selected ${hotel.name} in ${hotel.location}. In a real app, this would take you to a detailed page where you can see more information and book this hotel.`);
    }
  }
}

// Function to generate hotel card HTML
// This is a fallback in case generateHotelCard isn't available globally
function generateHotelCard(hotel) {
  // If the global function exists, use it
  if (typeof window.generateHotelCard === 'function') {
    return window.generateHotelCard(hotel);
  }

  // Otherwise, use our own implementation
  // Generate star rating HTML
  function generateStars(rating) {
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

  return `
    <div class="hotel-card">
      <img src="${hotel.image}" alt="${hotel.name}" class="hotel-img">
      <div class="hotel-details">
        <h3 class="hotel-name">${hotel.name}</h3>
        <p class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
        <div class="hotel-rating">${generateStars(hotel.rating)} (${hotel.rating})</div>
        <p class="hotel-price">₹${hotel.price} <span>/ night</span></p>
        <button class="btn" onclick="viewHotelDetails(${hotel.id})">View Details</button>
      </div>
    </div>
  `;
}
