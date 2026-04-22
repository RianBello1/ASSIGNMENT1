<?php
// Fix CORS issues so React can read the data
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "cv_database");

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed"]));
}

// Select all columns so we get name, email, and message
$sql = "SELECT id, name, email, message, created_at FROM contacts ORDER BY created_at DESC";
$result = $conn->query($sql);

$contacts = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $contacts[] = $row;
    }
}

// Return the full list as JSON
echo json_encode($contacts);

$conn->close();
?>