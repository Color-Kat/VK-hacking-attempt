import {
    FETCH_DIALOGS,
    FETCH_PREYS,
    FETCH_SCRIPT,
    HIDE_BURGER,
    HIDE_LOADER,
    SHOW_LOADER,
    TOGGLE_BURGER,
    TOGGLE_LOADER
} from "./types";

export function toggle_burger() {
    return {
        type: TOGGLE_BURGER
    };
}

export function hide_burger() {
    return {
        type: HIDE_BURGER
    };
}

export function toggle_loading() {
    return {
        type: TOGGLE_LOADER
    };
}

export function show_loader() {
    return {
        type: SHOW_LOADER
    };
}

export function hide_loader() {
    return {
        type: HIDE_LOADER
    };
}

export function fetchScript() {
    return async dispatch => {
        dispatch(show_loader()); // show loader

        let response = await fetch(window.apiPath + 'index.php?action=script');
        let script = await response.json();

        dispatch(hide_loader()); // hide loader

        dispatch({
            type: FETCH_SCRIPT,
            payload: script
        });
    }
}

export function fetchPreys() {
    return async dispatch => {
        dispatch(show_loader()); // show loader

        let response = await fetch(window.apiPath + 'index.php?action=get_preys_names');
        let preys = await response.json();

        // console.log(preys);


        dispatch(hide_loader()); // hide loader

        dispatch({
            type: FETCH_PREYS,
            payload: preys
        })
    }
}

export function fetchDialogs(prey_id) {
    return async dispatch => {
        dispatch(show_loader()); // show loader

        let response = await fetch(window.apiPath + 'index.php?action=dialogs&id=' + prey_id);
        let dialogs = await response.json();

        dispatch(hide_loader()); // hide loader

        dispatch({
            type: FETCH_DIALOGS,
            payload: dialogs
        })
    }
}