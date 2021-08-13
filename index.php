<?php

// autoload for composer libraries
require __DIR__ . '/vendor/autoload.php';

use pcrov\JsonReader\JsonReader;

// what we do
$action = $_GET['action'];

// create json reader and open our dialogs.json
$reader = new JsonReader();
$reader->open("dialogs.json");
$reader->read('dialogs'); // go to dialogs
$reader->read(); // Step to the first object.

$response;

switch ($action) {
    case 'get_people_names':
        $response = [];
        $depth = $reader->depth(); // Check in a moment to break when the array is done.

        do {
            $response[] = $reader->name();
        } while ($reader->next()); // Read each sibling.

        # code...
        break;

    default:
        # code...
        break;
}


// $reader->read('dialogs'); // go to dialogs
// // $depth = $reader->depth(); // Check in a moment to break when the array is done.
// $reader->read(); // Step to the first object.

var_dump($response);


$reader->close();
