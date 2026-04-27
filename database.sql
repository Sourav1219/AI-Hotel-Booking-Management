-- Create database
CREATE DATABASE IF NOT EXISTS AI_Hotel_Booking;
USE AI_Hotel_Booking;

-- Hotels catalog
CREATE TABLE IF NOT EXISTS hotels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    location VARCHAR(150) NOT NULL,
    rating DECIMAL(2, 1) NOT NULL,
    price INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    summary VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    amenities TEXT NOT NULL,
    room_types TEXT NOT NULL,
    highlights TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NULL,
    hotel_id INT NOT NULL,
    hotel_name VARCHAR(150) NOT NULL,
    location VARCHAR(150) NOT NULL,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    guests INT NOT NULL,
    room_type VARCHAR(80) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled') NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample hotels
INSERT INTO hotels (name, location, rating, price, image, summary, description, amenities, room_types, highlights) VALUES
('Taj Mahal Palace', 'Mumbai, India', 4.9, 15000, '/images/india-hotel1.jpg',
 'Iconic harbor-front hotel with heritage suites and ocean views.',
 'Experience luxury in the heart of Mumbai with stunning ocean views, heritage interiors, and signature service in Colaba.',
 '["pool","spa","gym","restaurant","wifi"]',
 '["Luxury Room","Sea View Suite","Heritage Suite"]',
 '["Gateway of India views","Heritage wing access","Award-winning dining"]'),
('The Oberoi Udaivilas', 'Udaipur, India', 4.8, 22000, '/images/india-hotel2.jpg',
 'Lakefront palace retreat with pools, courtyards, and spa rituals.',
 'Lakefront resort with exclusive spa facilities, tranquil courtyards, and traditional Rajasthani architecture on Lake Pichola.',
 '["pool","spa","restaurant","wifi"]',
 '["Premier Room","Luxury Suite","Pool Pavilion"]',
 '["Private boat transfers","Sunset lake views","Signature spa therapies"]'),
('The Leela Palace', 'New Delhi, India', 4.7, 18000, '/images/india-hotel3.jpg',
 'Diplomatic enclave stay with refined rooms and club lounge access.',
 'Opulent palace hotel with modern amenities, curated art, and proximity to the diplomatic enclave in New Delhi.',
 '["spa","gym","restaurant","wifi"]',
 '["Grand Deluxe","Royal Club Room","Presidential Suite"]',
 '["Butler service","Signature Jamavar dining","Rooftop pool"]'),
('ITC Grand Chola', 'Chennai, India', 4.6, 13500, '/images/india-hotel4.jpg',
 'Grand heritage-inspired hotel with expansive dining and spa.',
 'Majestic hotel inspired by the Chola dynasty with luxury accommodations, vast banquet spaces, and wellness programs.',
 '["pool","spa","gym","restaurant","wifi"]',
 '["Executive Club","Grand Suite","Presidential Suite"]',
 '["Largest luxury hotel in Chennai","Multiple cuisines","Holistic spa"]'),
('Rambagh Palace', 'Jaipur, India', 4.8, 24000, '/images/india-hotel2.jpg',
 'Former royal residence with manicured gardens and heritage suites.',
 'Former residence of the Maharaja of Jaipur offering royal experiences, heritage decor, and serene garden views.',
 '["pool","spa","restaurant","wifi"]',
 '["Palace Room","Royal Suite","Grand Presidential Suite"]',
 '["Heritage palace tours","Royal afternoon tea","Vintage car rides"]'),
('Wildflower Hall', 'Shimla, India', 4.7, 17500, '/images/india-hotel3.jpg',
 'Himalayan retreat with forest views, spa rituals, and cozy suites.',
 'Luxurious mountain retreat with panoramic Himalayan views, forest trails, and colonial architecture.',
 '["spa","gym","restaurant","wifi"]',
 '["Deluxe Room","Mountain View Suite","Presidential Suite"]',
 '["Himalayan views","Outdoor jacuzzi","Guided nature walks"]'),
('Taj Lake Palace', 'Udaipur, India', 4.9, 26000, '/images/india-hotel1.jpg',
 'Floating marble palace with private piers and lake dining.',
 'A romantic lake palace offering luxury suites, serene courtyards, and private lake experiences.',
 '["pool","spa","restaurant","wifi"]',
 '["Lake View Room","Royal Suite","Grand Royal Suite"]',
 '["Private boat arrival","Lakefront dining","Historic marble palace"]'),
('ITC Rajputana', 'Jaipur, India', 4.5, 12500, '/images/india-hotel4.jpg',
 'Traditional haveli-style stay close to Jaipur markets.',
 'A classic haveli-inspired hotel with warm hospitality, rich textures, and convenient access to Jaipur sights.',
 '["pool","gym","restaurant","wifi"]',
 '["Executive Room","Rajputana Suite","Presidential Suite"]',
 '["Courtyard architecture","Live folk performances","Central location"]'),
('The Leela Kovalam', 'Kerala, India', 4.6, 14500, '/images/india-hotel3.jpg',
 'Clifftop beach retreat with Ayurveda spa and sea views.',
 'Clifftop resort overlooking the Arabian Sea, known for wellness rituals and sunset views.',
 '["pool","spa","restaurant","wifi"]',
 '["Garden View Room","Ocean View Suite","Royal Club"]',
 '["Ayurveda wellness","Private beach access","Oceanfront dining"]'),
('Evolve Back Coorg', 'Coorg, India', 4.6, 17000, '/images/india-hotel2.jpg',
 'Coffee estate getaway with private pools and nature trails.',
 'A nature-focused resort in Coorg with private pool villas, plantation walks, and curated local cuisine.',
 '["pool","spa","restaurant","wifi"]',
 '["Pool Villa","Duplex Pool Villa","Family Cottage"]',
 '["Coffee plantation tours","Private plunge pools","Nature-guided treks"]'),
('The Serai', 'Jaisalmer, India', 4.5, 19000, '/images/india-hotel1.jpg',
 'Desert sanctuary with dune views and curated safari experiences.',
 'A desert sanctuary offering villa-style stays, dune views, and curated safari experiences.',
 '["pool","spa","restaurant","wifi"]',
 '["Luxury Tent","Sunset Villa","Presidential Suite"]',
 '["Dune dining","Camel safari","Stargazing sessions"]'),
('Taj Falaknuma Palace', 'Hyderabad, India', 4.9, 28000, '/images/india-hotel2.jpg',
 'Hilltop palace with regal suites and city skyline views.',
 'A hilltop palace with regal suites, curated art collections, and sweeping views of Hyderabad.',
 '["pool","spa","gym","restaurant","wifi"]',
 '["Palace Room","Grand Royal Suite","Presidential Suite"]',
 '["Private palace tours","Library lounge","Horse carriage arrival"]');

-- Insert sample bookings (user_id 1 for demo)
INSERT INTO bookings (user_id, hotel_id, hotel_name, location, check_in, check_out, guests, room_type, price, status) VALUES
(1, 1, 'Taj Mahal Palace', 'Mumbai, India', '2025-06-15', '2025-06-20', 2, 'Luxury Suite', 15000.00, 'confirmed'),
(1, 2, 'The Oberoi Udaivilas', 'Udaipur, India', '2025-07-10', '2025-07-15', 2, 'Premier Room', 22000.00, 'pending');
