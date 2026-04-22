<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "cv_database");

if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed"]));
}

// Get the JSON data from the React request
$data = json_decode(file_get_contents("php://input"), true);

// Check if all required fields are present
if (!empty($data['name']) && !empty($data['email']) && !empty($data['message'])) {

    // Sanitize all inputs to prevent SQL Injection
    $name    = $conn->real_escape_string($data['name']);
    $email   = $conn->real_escape_string($data['email']);
    $message = $conn->real_escape_string($data['message']);

    // Updated SQL to include email and message
    $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Contact information saved successfully!"]);
    } else {
        echo json_encode(["message" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["message" => "All fields (name, email, message) are required"]);
}

$conn->close();
?>