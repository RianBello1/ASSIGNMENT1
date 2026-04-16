<?php
// Add these headers to fix CORS issues between React and PHP
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "cv_database");

if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['name'])) {

    $name = $conn->real_escape_string($data['name']);


    $sql = "INSERT INTO contacts (name) VALUES ('$name')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Name saved! (Email/Message ignored)"]);
    } else {
        echo json_encode(["message" => "Error: " . $conn->error]);
    }
} else {
    echo json_encode(["message" => "Name is required"]);
}

$conn->close();
?>
