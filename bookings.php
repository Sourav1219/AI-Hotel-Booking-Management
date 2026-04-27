<?php

declare(strict_types=1);

require_once __DIR__ . '/config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Connect to the database
try {
    $conn = get_db_connection();
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database Connection Error: ' . $e->getMessage()]);
    exit;
}

// Handle different HTTP request methods
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        // Get bookings for a user
        if(isset($_GET['user_id'])) {
            $user_id = $_GET['user_id'];
            getBookingsByUser($conn, $user_id);
        } else {
            echo json_encode(['error' => 'User ID is required']);
        }
        break;

    case 'POST':
        // Create a new booking
        $data = json_decode(file_get_contents('php://input'), true);
        if(!$data) {
            echo json_encode(['error' => 'Invalid JSON data']);
            exit;
        }

        createBooking($conn, $data);
        break;

    case 'PUT':
        // Update an existing booking
        $data = json_decode(file_get_contents('php://input'), true);
        if(!$data || !isset($data['booking_id'])) {
            echo json_encode(['error' => 'Invalid JSON data or missing booking ID']);
            exit;
        }

        updateBooking($conn, $data);
        break;

    case 'DELETE':
        // Cancel a booking
        $data = json_decode(file_get_contents('php://input'), true);
        if(!$data || !isset($data['booking_id'])) {
            echo json_encode(['error' => 'Invalid JSON data or missing booking ID']);
            exit;
        }

        cancelBooking($conn, $data['booking_id']);
        break;

    default:
        echo json_encode(['error' => 'Unsupported request method']);
        break;
}

// Function to get bookings for a user
function getBookingsByUser($conn, $user_id) {
    try {
        $stmt = $conn->prepare("SELECT * FROM bookings WHERE user_id = :user_id ORDER BY created_at DESC");
        $stmt->bindParam(':user_id', $user_id);
        $stmt->execute();

        $bookings = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(['bookings' => $bookings]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Error fetching bookings: ' . $e->getMessage()]);
    }
}

// Function to create a new booking
function createBooking($conn, $data) {
    try {
        // Validate required fields
        $required_fields = ['user_id', 'hotel_id', 'hotel_name', 'location', 'check_in', 'check_out', 'guests', 'room_type', 'price'];
        foreach($required_fields as $field) {
            if(!isset($data[$field])) {
                echo json_encode(['error' => "Missing required field: $field"]);
                exit;
            }
        }

        // Insert booking into database
        $stmt = $conn->prepare("INSERT INTO bookings (user_id, hotel_id, hotel_name, location, check_in, check_out,
                                guests, room_type, price, status, created_at)
                                VALUES (:user_id, :hotel_id, :hotel_name, :location, :check_in, :check_out,
                                :guests, :room_type, :price, 'confirmed', NOW())");

        $stmt->bindParam(':user_id', $data['user_id']);
        $stmt->bindParam(':hotel_id', $data['hotel_id']);
        $stmt->bindParam(':hotel_name', $data['hotel_name']);
        $stmt->bindParam(':location', $data['location']);
        $stmt->bindParam(':check_in', $data['check_in']);
        $stmt->bindParam(':check_out', $data['check_out']);
        $stmt->bindParam(':guests', $data['guests']);
        $stmt->bindParam(':room_type', $data['room_type']);
        $stmt->bindParam(':price', $data['price']);

        $stmt->execute();

        // Get the booking ID
        $booking_id = $conn->lastInsertId();

        echo json_encode([
            'success' => true,
            'message' => 'Booking created successfully',
            'booking_id' => $booking_id
        ]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Error creating booking: ' . $e->getMessage()]);
    }
}

// Function to update an existing booking
function updateBooking($conn, $data) {
    try {
        $booking_id = $data['booking_id'];

        // Check if booking exists
        $stmt = $conn->prepare("SELECT * FROM bookings WHERE id = :booking_id");
        $stmt->bindParam(':booking_id', $booking_id);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            echo json_encode(['error' => 'Booking not found']);
            exit;
        }

        // Update fields that can be modified
        $updateFields = [];
        $params = [':booking_id' => $booking_id];

        $allowedFields = ['check_in', 'check_out', 'guests', 'room_type', 'price'];
        foreach($allowedFields as $field) {
            if(isset($data[$field])) {
                $updateFields[] = "$field = :$field";
                $params[":$field"] = $data[$field];
            }
        }

        if(empty($updateFields)) {
            echo json_encode(['error' => 'No fields to update']);
            exit;
        }

        // Update the booking
        $updateQuery = "UPDATE bookings SET " . implode(', ', $updateFields) . " WHERE id = :booking_id";
        $stmt = $conn->prepare($updateQuery);
        $stmt->execute($params);

        echo json_encode([
            'success' => true,
            'message' => 'Booking updated successfully'
        ]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Error updating booking: ' . $e->getMessage()]);
    }
}

// Function to cancel a booking
function cancelBooking($conn, $booking_id) {
    try {
        // Check if booking exists
        $stmt = $conn->prepare("SELECT * FROM bookings WHERE id = :booking_id");
        $stmt->bindParam(':booking_id', $booking_id);
        $stmt->execute();

        if($stmt->rowCount() == 0) {
            echo json_encode(['error' => 'Booking not found']);
            exit;
        }

        // Update booking status to cancelled
        $stmt = $conn->prepare("UPDATE bookings SET status = 'cancelled' WHERE id = :booking_id");
        $stmt->bindParam(':booking_id', $booking_id);
        $stmt->execute();

        echo json_encode([
            'success' => true,
            'message' => 'Booking cancelled successfully'
        ]);
    } catch(PDOException $e) {
        echo json_encode(['error' => 'Error cancelling booking: ' . $e->getMessage()]);
    }
}
?>
