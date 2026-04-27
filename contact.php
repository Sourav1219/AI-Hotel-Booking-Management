<?php

declare(strict_types=1);

require_once __DIR__ . '/config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Unsupported request method']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit;
}

$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (!isset($data[$field]) || trim((string) $data[$field]) === '') {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: {$field}"]);
        exit;
    }
}

try {
    $conn = get_db_connection();
    $stmt = $conn->prepare('INSERT INTO contact_messages (name, email, subject, message) VALUES (:name, :email, :subject, :message)');
    $stmt->bindValue(':name', trim((string) $data['name']));
    $stmt->bindValue(':email', trim((string) $data['email']));
    $stmt->bindValue(':subject', trim((string) $data['subject']));
    $stmt->bindValue(':message', trim((string) $data['message']));
    $stmt->execute();

    echo json_encode(['success' => true, 'message' => 'Message submitted']);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error saving message: ' . $e->getMessage()]);
}
