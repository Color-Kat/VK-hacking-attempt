<?php
define("FILENAME", 'dialogs.json'); // json file with all dialogs

// get dialogs data from file
$dialogs_data = [];
if (file_exists(FILENAME))
    $dialogs_data = json_decode(file_get_contents((FILENAME)), true);

// add key dialogs if file is empty
if (!array_key_exists('dialogs', $dialogs_data)) $dialogs_data['dialogs'] = [];

// get dialogs data from post request
$new_dialogs_data = json_decode($_POST['data'], true); // data
$dialog_data_owner = array_keys($new_dialogs_data)[0]; // name of prey from first key

// merge old and new data
$dialogs_data['dialogs'][$dialog_data_owner] = array_merge(
    $dialogs_data['dialogs'][$dialog_data_owner] ?? [],
    $new_dialogs_data[$dialog_data_owner]
);

// and put it in file
file_put_contents(FILENAME, json_encode($dialogs_data));
