// In a real app, this would be handled with proper authentication
// For demonstration purposes, we're using a simulated user ID
const CURRENT_USER_ID = 1; // Test User

// Sample booking data - in a real app, this would come from the PHP backend
// For demo purposes, we're using this data directly
const bookings = [
  {
    id: 12345,
    hotelName: "Taj Mahal Palace",
    location: "Mumbai, India",
    checkIn: "June 15, 2025",
    checkOut: "June 20, 2025",
    guests: 2,
    roomType: "Luxury Suite",
    status: "confirmed",
    price: 15000,
    image: "/images/india-hotel1.jpg"
  },
  {
    id: 12346,
    hotelName: "The Oberoi Udaivilas",
    location: "Udaipur, India",
    checkIn: "July 10, 2025",
    checkOut: "July 15, 2025",
    guests: 2,
    roomType: "Premier Room with Semi-Private Pool",
    status: "pending",
    price: 22000,
    image: "/images/india-hotel2.jpg"
  }
];

function formatDate(value) {
  if (!value) return '';
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }
  return parsed.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function ensureToastContainer() {
  let container = document.getElementById('toast-container');
  if (container) return container;

  container = document.createElement('div');
  container.id = 'toast-container';
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

function showToast(message, type = 'info') {
  const container = ensureToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('visible');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function setButtonLoading(button, isLoading, loadingText) {
  if (!button) return;

  if (isLoading) {
    button.dataset.originalHtml = button.innerHTML;
    const label = loadingText || 'Loading...';
    button.innerHTML = `${label} <span class="btn-spinner" aria-hidden="true"></span>`;
    button.disabled = true;
    button.classList.add('btn-loading');
  } else {
    button.innerHTML = button.dataset.originalHtml || button.innerHTML;
    button.disabled = false;
    button.classList.remove('btn-loading');
    delete button.dataset.originalHtml;
  }
}

function findHotelImage(booking) {
  const hotelsData = Array.isArray(window.hotels) ? window.hotels : [];
  const hotelMatch = hotelsData.find(hotel => hotel.id === booking.hotel_id || hotel.name === booking.hotel_name);
  const candidate = hotelMatch ? hotelMatch.image : '/images/india-hotel1.jpg';
  if (typeof window.resolveImagePath === 'function') {
    return window.resolveImagePath(candidate);
  }
  return candidate;
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

function normalizeBooking(rawBooking) {
  const checkIn = rawBooking.check_in || rawBooking.checkIn;
  const checkOut = rawBooking.check_out || rawBooking.checkOut;
  const imageValue = rawBooking.image || findHotelImage(rawBooking);
  const resolvedImage = typeof window.resolveImagePath === 'function'
    ? window.resolveImagePath(imageValue)
    : imageValue;

  return {
    id: rawBooking.id,
    hotelName: rawBooking.hotel_name || rawBooking.hotelName || 'Hotel',
    location: rawBooking.location || 'India',
    checkIn: formatDate(checkIn),
    checkOut: formatDate(checkOut),
    rawCheckIn: checkIn,
    rawCheckOut: checkOut,
    guests: rawBooking.guests || 1,
    roomType: rawBooking.room_type || rawBooking.roomType || 'Standard Room',
    status: rawBooking.status || 'pending',
    price: Number(rawBooking.price) || 0,
    image: resolvedImage
  };
}

function mapBookings(rawBookings) {
  if (!Array.isArray(rawBookings)) {
    return [];
  }
  return rawBookings.map(normalizeBooking);
}

function initBookingsPage() {
  // Initialize booking functionality
  initializeBookings();

  // Initialize chatbot (reusing from app.js)
  if (typeof window.initChatbot === 'function') {
    window.initChatbot();
  }
}

window.initBookingsPage = initBookingsPage;

function runOnReady(callback) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', callback, { once: true });
  } else {
    callback();
  }
}

runOnReady(initBookingsPage);

// Initialize bookings page
function initializeBookings() {
  loadBookingsFromApi();
}

async function loadBookingsFromApi() {
  const apiUrl = window.buildApiUrl
    ? window.buildApiUrl(`/bookings.php?user_id=${CURRENT_USER_ID}`)
    : `/bookings.php?user_id=${CURRENT_USER_ID}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Bookings request failed');
    }

    const data = await response.json();
    if (data.bookings && data.bookings.length > 0) {
      displayBookings(mapBookings(data.bookings));
    } else {
      showEmptyState();
    }
  } catch (error) {
    console.warn('Falling back to sample bookings:', error);
    displayBookings(bookings);
  }

  setupBookingActions();
}

// Display bookings in the UI
function displayBookings(bookings) {
  const bookingList = document.getElementById('booking-list');
  if (!bookingList) return;

  // Clear existing content
  bookingList.innerHTML = '';

  const activeBookings = bookings.filter(booking =>
    String(booking.status || '').toLowerCase() !== 'cancelled'
  );

  if (activeBookings.length === 0) {
    showEmptyState();
    return;
  }

  // Add bookings to UI
  activeBookings.forEach(booking => {
    const bookingCard = document.createElement('div');
    bookingCard.className = 'booking-card';

    const checkInValue = toDateInputValue(booking.rawCheckIn || booking.checkIn);
    const checkOutValue = toDateInputValue(booking.rawCheckOut || booking.checkOut);

    bookingCard.dataset.bookingId = booking.id;
    bookingCard.dataset.checkIn = checkInValue;
    bookingCard.dataset.checkOut = checkOutValue;
    bookingCard.dataset.guests = booking.guests;
    bookingCard.dataset.roomType = booking.roomType;
    bookingCard.dataset.price = booking.price;
    bookingCard.dataset.hotelName = booking.hotelName;
    bookingCard.dataset.location = booking.location;

    const statusClass = booking.status === 'confirmed' ? 'confirmed' : '';

    bookingCard.innerHTML = `
      <div class="booking-header">
        <div class="booking-id">Booking #${booking.id}</div>
        <div class="booking-status ${statusClass}">${booking.status}</div>
      </div>
      <div class="booking-details">
        <div class="booking-info">
          <h3>${booking.hotelName}</h3>
          <p><i class="fas fa-map-marker-alt"></i> ${booking.location}</p>
          <p><i class="fas fa-calendar-alt"></i> Check-in: <span class="booking-check-in">${booking.checkIn}</span></p>
          <p><i class="fas fa-calendar-check"></i> Check-out: <span class="booking-check-out">${booking.checkOut}</span></p>
          <p><i class="fas fa-user"></i> <span class="booking-guests">${booking.guests}</span> Guests</p>
          <p><i class="fas fa-bed"></i> <span class="booking-room-type">${booking.roomType}</span></p>
          <p><i class="fas fa-rupee-sign"></i> ₹${booking.price} per night</p>
          <div class="booking-actions">
            <button class="btn modify-booking">Modify Booking</button>
            <button class="btn btn-outline cancel-booking">Cancel Booking</button>
          </div>
        </div>
        <div class="booking-image">
          <img src="${booking.image}" alt="${booking.hotelName}" class="hotel-img">
        </div>
      </div>
    `;

    bookingList.appendChild(bookingCard);
  });
}

// Set up actions for booking buttons
function setupBookingActions() {
  const bookingList = document.getElementById('booking-list');
  if (!bookingList || bookingList.dataset.actionsBound === 'true') return;

  bookingList.dataset.actionsBound = 'true';

  bookingList.addEventListener('click', (event) => {
    const modifyButton = event.target.closest('.modify-booking');
    if (modifyButton) {
      handleModifyBooking({ target: modifyButton });
      return;
    }

    const cancelButton = event.target.closest('.cancel-booking');
    if (cancelButton) {
      handleCancelBooking({ target: cancelButton });
    }
  });
}

// Handle modify booking button click
function handleModifyBooking(event) {
  const bookingCard = event.target.closest('.booking-card');
  openBookingEditModal(bookingCard);
}

function ensureBookingEditModal() {
  let overlay = document.getElementById('booking-edit-overlay');
  if (overlay) return overlay;

  overlay = document.createElement('div');
  overlay.id = 'booking-edit-overlay';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="booking-edit-title"></div>';

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay || event.target.closest('[data-close]')) {
      closeBookingEditModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeBookingEditModal();
    }
  });

  document.body.appendChild(overlay);
  return overlay;
}

function openBookingEditModal(bookingCard) {
  const overlay = ensureBookingEditModal();
  const modal = overlay.querySelector('.modal');

  const bookingId = bookingCard.dataset.bookingId;
  const hotelName = bookingCard.dataset.hotelName || 'Booking';
  const location = bookingCard.dataset.location || '';
  const checkIn = bookingCard.dataset.checkIn || '';
  const checkOut = bookingCard.dataset.checkOut || '';
  const guests = bookingCard.dataset.guests || '1';
  const roomType = bookingCard.dataset.roomType || '';

  modal.innerHTML = `
    <div class="modal-header">
      <div>
        <h2 class="modal-title" id="booking-edit-title">Modify Booking</h2>
        <p class="modal-subtitle">${hotelName}${location ? ` · ${location}` : ''}</p>
      </div>
      <button class="modal-close" data-close aria-label="Close">&times;</button>
    </div>
    <div class="modal-body booking-modal-body">
      <form id="booking-edit-form" class="modal-form">
        <div class="form-group">
          <label for="edit-check-in">Check-in</label>
          <input type="date" id="edit-check-in" value="${checkIn}" required>
        </div>
        <div class="form-group">
          <label for="edit-check-out">Check-out</label>
          <input type="date" id="edit-check-out" value="${checkOut}" required>
        </div>
        <div class="form-group">
          <label for="edit-guests">Guests</label>
          <input type="number" id="edit-guests" min="1" max="8" value="${guests}" required>
        </div>
        <div class="form-group">
          <label for="edit-room-type">Room Type</label>
          <input type="text" id="edit-room-type" value="${roomType}" required>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-outline" data-close>Cancel</button>
          <button type="submit" class="btn">Update Booking</button>
        </div>
      </form>
    </div>
  `;

  const form = modal.querySelector('#booking-edit-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const checkInValue = modal.querySelector('#edit-check-in').value;
    const checkOutValue = modal.querySelector('#edit-check-out').value;
    const guestsValue = Number(modal.querySelector('#edit-guests').value);
    const roomTypeValue = modal.querySelector('#edit-room-type').value.trim();

    if (!checkInValue || !checkOutValue) {
      showToast('Please select both check-in and check-out dates.', 'error');
      return;
    }

    if (new Date(checkOutValue) <= new Date(checkInValue)) {
      showToast('Check-out must be after check-in.', 'error');
      return;
    }

    if (!Number.isFinite(guestsValue) || guestsValue < 1) {
      showToast('Guests must be at least 1.', 'error');
      return;
    }

    if (!roomTypeValue) {
      showToast('Please enter a room type.', 'error');
      return;
    }

    const payload = {
      booking_id: bookingId,
      check_in: checkInValue,
      check_out: checkOutValue,
      guests: guestsValue,
      room_type: roomTypeValue
    };

    const submitButton = form.querySelector('button[type="submit"]');
    setButtonLoading(submitButton, true, 'Updating...');

    const updated = await updateBookingInApi(payload);
    setButtonLoading(submitButton, false);
    if (updated) {
      updateBookingCardUI(bookingCard, payload);
      closeBookingEditModal();
      showToast('Booking updated successfully.', 'success');
    }
  });

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingEditModal() {
  const overlay = document.getElementById('booking-edit-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

async function updateBookingInApi(payload) {
  const apiUrl = window.buildApiUrl
    ? window.buildApiUrl('/bookings.php')
    : '/bookings.php';

  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Update failed');
    }

    return true;
  } catch (error) {
    showToast('Sorry, we could not update this booking right now.', 'error');
    return false;
  }
}

function updateBookingCardUI(bookingCard, payload) {
  bookingCard.dataset.checkIn = payload.check_in;
  bookingCard.dataset.checkOut = payload.check_out;
  bookingCard.dataset.guests = payload.guests;
  bookingCard.dataset.roomType = payload.room_type;

  const checkInEl = bookingCard.querySelector('.booking-check-in');
  const checkOutEl = bookingCard.querySelector('.booking-check-out');
  const guestsEl = bookingCard.querySelector('.booking-guests');
  const roomTypeEl = bookingCard.querySelector('.booking-room-type');

  if (checkInEl) checkInEl.textContent = formatDate(payload.check_in);
  if (checkOutEl) checkOutEl.textContent = formatDate(payload.check_out);
  if (guestsEl) guestsEl.textContent = payload.guests;
  if (roomTypeEl) roomTypeEl.textContent = payload.room_type;
}

// Handle cancel booking button click
async function handleCancelBooking(event) {
  const bookingCard = event.target.closest('.booking-card');
  const bookingId = bookingCard.querySelector('.booking-id').textContent.replace('Booking #', '');
  const statusBadge = bookingCard.querySelector('.booking-status');

  if (statusBadge && statusBadge.textContent.toLowerCase() === 'cancelled') {
    showToast('This booking is already cancelled.', 'error');
    return;
  }

  // Confirm cancellation
  const confirmed = confirm(`Are you sure you want to cancel booking #${bookingId}? This action cannot be undone.`);

  if (!confirmed) return;

  const apiUrl = window.buildApiUrl
    ? window.buildApiUrl('/bookings.php')
    : '/bookings.php';

  const cancelButton = event.target.closest('button');

  try {
    setButtonLoading(cancelButton, true, 'Cancelling...');
    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ booking_id: bookingId })
    });

    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Cancel failed');
    }

    updateBookingCancelledUI(bookingCard);
    showToast('Booking cancelled successfully.', 'success');
  } catch (error) {
    showToast('Sorry, we could not cancel this booking right now.', 'error');
  } finally {
    setButtonLoading(cancelButton, false);
  }
}

function updateBookingCancelledUI(bookingCard) {
  bookingCard.remove();
  const bookingList = document.getElementById('booking-list');
  if (bookingList && bookingList.children.length === 0) {
    showEmptyState();
  }
}

// Add a new booking via API (would be called from booking form)
function addNewBooking(bookingData) {
  // In a real app, this would communicate with the PHP backend

  // Simulation of API call
  // const apiUrl = 'bookings.php';
  //
  // fetch(apiUrl, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(bookingData)
  // })
  // .then(response => response.json())
  // .then(data => {
  //   if (data.success) {
  //     // Reload bookings or update UI directly
  //     alert(`Booking created successfully with ID: ${data.booking_id}`);
  //   } else {
  //     console.error('Error:', data.error);
  //   }
  // })
  // .catch(error => {
  //   console.error('Error creating booking:', error);
  // });

  // For this demo, we'll just create a booking card
  const bookingList = document.getElementById('booking-list');
  if (!bookingList) return;

  // Simulate a booking ID
  const bookingId = Math.floor(Math.random() * 10000) + 20000;

  const bookingCard = document.createElement('div');
  bookingCard.className = 'booking-card';

  bookingCard.innerHTML = `
    <div class="booking-header">
      <div class="booking-id">Booking #${bookingId}</div>
      <div class="booking-status">pending</div>
    </div>
    <div class="booking-details">
      <div class="booking-info">
        <h3>${bookingData.hotelName}</h3>
        <p><i class="fas fa-map-marker-alt"></i> ${bookingData.location}</p>
        <p><i class="fas fa-calendar-alt"></i> Check-in: ${bookingData.checkIn}</p>
        <p><i class="fas fa-calendar-check"></i> Check-out: ${bookingData.checkOut}</p>
        <p><i class="fas fa-user"></i> ${bookingData.guests} Guests</p>
        <p><i class="fas fa-bed"></i> ${bookingData.roomType}</p>
        <p><i class="fas fa-rupee-sign"></i> ₹${bookingData.price} per night</p>
        <div class="booking-actions">
          <button class="btn modify-booking">Modify Booking</button>
          <button class="btn btn-outline cancel-booking">Cancel Booking</button>
        </div>
      </div>
      <div class="booking-image">
        <img src="${bookingData.image}" alt="${bookingData.hotelName}" class="hotel-img">
      </div>
    </div>
  `;

  bookingList.insertBefore(bookingCard, bookingList.firstChild);

  // Re-attach event listeners
  setupBookingActions();

  return {
    success: true,
    booking_id: bookingId
  };
}

// Show empty state if no bookings exist
function showEmptyState() {
  const bookingList = document.getElementById('booking-list');
  if (!bookingList) return;

  bookingList.innerHTML = `
    <div class="no-bookings">
      <h3>No Bookings Found</h3>
      <p>You don't have any hotel bookings yet. Start planning your next trip by exploring our curated selection of premium hotels in India.</p>
      <a href="explore.html" class="btn">Explore Hotels</a>
    </div>
  `;
}
