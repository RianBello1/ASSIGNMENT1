<?php
// 1. Allow React to talk to PHP (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 2. Get the JSON data from the request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// 3. Extract the name (and other fields)
$name = isset($data['name']) ? $data['name'] : "";

// 4. Check if name is empty
if (empty($name)) {
    echo json_encode(["message" => "Name is required"]);
} else {
    // This is the success response
    echo json_encode(["message" => "Thank you, $name! Your message has been sent."]);
}
?>