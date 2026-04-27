<?php

declare(strict_types=1);

require_once __DIR__ . '/config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Unsupported request method']);
    exit;
}

try {
    $conn = get_db_connection();
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database Connection Error: ' . $e->getMessage()]);
    exit;
}

function decode_list(?string $value): array
{
    if (!$value) {
        return [];
    }

    $decoded = json_decode($value, true);
    if (!is_array($decoded)) {
        return [];
    }

    return $decoded;
}

$id = isset($_GET['id']) ? (int) $_GET['id'] : null;
$destination = isset($_GET['destination']) ? trim($_GET['destination']) : null;
$priceRange = isset($_GET['price_range']) ? trim($_GET['price_range']) : null;
$rating = isset($_GET['rating']) ? (float) $_GET['rating'] : null;
$amenity = isset($_GET['amenity']) ? trim($_GET['amenity']) : null;

if ($id) {
    $stmt = $conn->prepare('SELECT * FROM hotels WHERE id = :id');
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $hotel = $stmt->fetch();

    if (!$hotel) {
        echo json_encode(['hotels' => []]);
        exit;
    }

    $hotel['amenities'] = decode_list($hotel['amenities']);
    $hotel['roomTypes'] = decode_list($hotel['room_types']);
    $hotel['highlights'] = decode_list($hotel['highlights']);
    unset($hotel['room_types']);

    echo json_encode(['hotels' => [$hotel]]);
    exit;
}

$where = [];
$params = [];

if ($destination) {
    $where[] = 'location LIKE :destination';
    $params[':destination'] = '%' . $destination . '%';
}

if ($priceRange === 'budget') {
    $where[] = 'price <= 15000';
} elseif ($priceRange === 'moderate') {
    $where[] = 'price BETWEEN 15000 AND 20000';
} elseif ($priceRange === 'luxury') {
    $where[] = 'price >= 20000';
}

if ($rating) {
    $where[] = 'rating >= :rating';
    $params[':rating'] = $rating;
}

if ($amenity) {
    $where[] = 'amenities LIKE :amenity';
    $params[':amenity'] = '%"' . $amenity . '"%';
}

$query = 'SELECT * FROM hotels';
if ($where) {
    $query .= ' WHERE ' . implode(' AND ', $where);
}
$query .= ' ORDER BY rating DESC, price ASC';

$stmt = $conn->prepare($query);
foreach ($params as $key => $value) {
    $stmt->bindValue($key, $value);
}
$stmt->execute();

$hotels = $stmt->fetchAll();
foreach ($hotels as &$hotel) {
    $hotel['amenities'] = decode_list($hotel['amenities']);
    $hotel['roomTypes'] = decode_list($hotel['room_types']);
    $hotel['highlights'] = decode_list($hotel['highlights']);
    unset($hotel['room_types']);
}

unset($hotel);

echo json_encode(['hotels' => $hotels]);
