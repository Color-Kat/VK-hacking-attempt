import {
    FETCH_PREYS
} from "./types";

const initialState = {
    preys: [],
    currentPrey: {}
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PREYS:
            return {
                ...state, preys: action.payload
            }

            default:
                return state;
    }
}