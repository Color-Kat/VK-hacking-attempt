import {
    FETCH_SCRIPT,
    TOGGLE_BURGER
} from "./types";

export function toggle_burger() {
    return {
        type: TOGGLE_BURGER
    };
}

export function fetchScript() {
    return async dispatch => {
        let response = await fetch(window.apiPath + 'index.php?action=script');
        let script = await response.json();

        dispatch({
            type: FETCH_SCRIPT,
            payload: script
        });
    }
}