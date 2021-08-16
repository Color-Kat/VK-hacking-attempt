import {
    FETCH_PREYS,
    FETCH_SCRIPT,
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
        dispatch(show_loader());

        let response = await fetch(window.apiPath + 'index.php?action=script');
        let script = await response.json();

        dispatch(hide_loader());

        dispatch({
            type: FETCH_SCRIPT,
            payload: script
        });
    }
}

export function fetchPreys() {
    return async dispatch => {
        let response = await fetch('');
        let preys = await response.json();

        console.log(preys);

        dispatch({
            type: FETCH_PREYS,
            payload: preys
        })
    }
}