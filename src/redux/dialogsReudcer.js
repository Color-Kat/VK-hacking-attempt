import {
    FETCH_DIALOGS,
    FETCH_PREYS
} from "./types";

const initialState = {
    preys: [],
    dialogs: {}
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PREYS:
            return {
                ...state, preys: action.payload
            }

            case FETCH_DIALOGS:
                return {
                    ...state, dialogs: action.payload
                }

                default:
                    return state;
    }
}