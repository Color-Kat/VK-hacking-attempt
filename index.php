<?php

define("FILENAME", 'dialogs.json'); // json file with all dialogs
// var_dump(json_decode(json_decode($_POST['data'])));
// var_dump(array_keys(get_object_vars(json_decode(json_decode($_POST['data']))))[0]);

// define dialogs array and fill it from file
$dialogs_data = [];
if (file_exists(FILENAME))
    $dialogs_data = json_decode(file_get_contents((FILENAME)));

// get dialogs data from post request
$new_dialogs_data = (array) json_decode($_POST['data']);
$dialog_data_owner = array_keys($new_dialogs_data)[0];

echo gettype($new_dialogs_data);

// add data to file ad save
$dialogs_data->dialogs->$dialog_data_owner = $new_dialogs_data[$dialog_data_owner];




file_put_contents(FILENAME, json_encode($dialogs_data));
