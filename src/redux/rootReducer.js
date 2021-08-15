import {
    combineReducers
} from "redux";

import {
    dialogsReducer
} from "./dialogsReudcer";
import {
    preysReducer
} from "./preysReduces";
import {
    scriptReducer
} from "./scriptReducer";
import {
    TOGGLE_BURGER
} from "./types";

const initialState = {
    show_burger: false
};

export const rootReducer = combineReducers({
    app: (state = initialState, action) => {
        switch (action.type) {
            case TOGGLE_BURGER:

                return {
                    ...state, show_burger: !state.show_burger
                };

            default:
                return state;
        }
    },
    dialogs: dialogsReducer,
    preys: preysReducer,
    script: scriptReducer
})