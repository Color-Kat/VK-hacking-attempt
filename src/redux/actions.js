import {
    FETCH_SCRIPT
} from "./types";

export function fetchScript() {
    return async dispatch => {
        let resoponse = await fetch('');
        let script = await resoponse.json();

        dispatch({
            type: FETCH_SCRIPT,
            payload: response
        });
    }
}