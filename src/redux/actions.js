import {
    FETCH_SCRIPT
} from "./types";

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