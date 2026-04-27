<?php

declare(strict_types=1);

$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $env = parse_ini_file($envFile);
    if ($env !== false) {
        $DB_HOST = $env['DB_HOST'] ?? '127.0.0.1';
        $DB_PORT = $env['DB_PORT'] ?? '3306';
        $DB_NAME = $env['DB_NAME'] ?? 'AI_Hotel_Booking';
        $DB_USER = $env['DB_USER'] ?? 'root';
        $DB_PASS = $env['DB_PASS'] ?? '';
    }
} else {
    $DB_HOST = '127.0.0.1';
    $DB_PORT = '3306';
    $DB_NAME = 'AI_Hotel_Booking';
    $DB_USER = 'root';
    $DB_PASS = '';
}
function get_db_connection(): PDO
{
    global $DB_HOST, $DB_PORT, $DB_NAME, $DB_USER, $DB_PASS;

    $dsn = "mysql:host={$DB_HOST};port={$DB_PORT};dbname={$DB_NAME};charset=utf8mb4";

    try {
        return new PDO($dsn, $DB_USER, $DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (PDOException $e) {
        if (str_contains($e->getMessage(), "Unknown database")) {
            initialize_database();

            return new PDO($dsn, $DB_USER, $DB_PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
        }

        throw $e;
    }
}

function initialize_database(): void
{
    global $DB_HOST, $DB_PORT, $DB_USER, $DB_PASS;

    $serverDsn = "mysql:host={$DB_HOST};port={$DB_PORT};charset=utf8mb4";
    $pdo = new PDO($serverDsn, $DB_USER, $DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);

    $sqlFile = __DIR__ . '/database.sql';
    $sql = file_get_contents($sqlFile);
    if ($sql === false) {
        throw new RuntimeException('Unable to read database.sql');
    }

    $statements = array_filter(array_map('trim', explode(';', $sql)));
    foreach ($statements as $statement) {
        if ($statement === '') {
            continue;
        }
        $pdo->exec($statement);
    }
}
