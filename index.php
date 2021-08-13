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
$reader->read(); // go to first object of dialogs

// initialize responce
$response;

switch ($action) {
        // get names of all preys
    case 'get_preys_names':
        $response = []; // response is array
        $depth = $reader->depth(); // check length

        do {
            // get id and name of prey from dialogs.json
            $preyId = $reader->name();
            $preyName = $reader->value()['name'];

            // save it [vk_id => name]
            $response[$preyId] = $preyName;
        } while (
            $reader->next() && // go to next sibling
            $reader->depth() >= $depth // end if it is end ;)
        ); // Read each sibling

        break;

        // get dialogs of prey by name
    case 'dialogs':
        // get id of prey and current page from GET
        $preyId = $_GET['id'];
        $page = $_GET['page'] ?? 0;

        // no prey's id, stop
        if (!$preyId) {
            $response = false;
            break;
        }

        // init response
        $response = [$preyId => []];

        echo $reader->name() . '<br>';
        // $reader->read($preyId);
        $depth = $reader->depth(); // check length

        do {
            // echo $reader->name() . '<br>';
            // $reader->read();
            // echo $reader->name() . '<br>';
            $response[$preyId][] = $reader->value();
        } while (
            $reader->next($preyId) && // go to next element of our prey
            $reader->depth() >= $depth // end of dialogs
        );

        break;

    default:
        $response = false;
        break;
}


// $reader->read('dialogs'); // go to dialogs
// // $depth = $reader->depth(); // Check in a moment to break when the array is done.
// $reader->read(); // Step to the first object.

echo '<pre>';
var_dump($response);
echo '</pre>';



$reader->close();
