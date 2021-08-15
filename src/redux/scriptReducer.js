import {
    FETCH_SCRIPT
} from "./types";

let initialState = {
    code: ''
}

export const scriptReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SCRIPT:
            return {
                ...state, code: action.payload
            };

        default:
            return state;
    }
}