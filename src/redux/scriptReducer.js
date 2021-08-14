import {
    FETCH_SCRIPT
} from "./types";

let initialState = {
    script: ''
}

export const scriptReducer = (state, action) => {

    switch (action.type) {
        case FETCH_SCRIPT:
            return {
                ...state, script: action.payload
            };

        default:
            return state;
    }


}