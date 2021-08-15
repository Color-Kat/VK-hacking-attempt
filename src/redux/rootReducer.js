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
    HIDE_LOADER,
    SHOW_LOADER,
    TOGGLE_BURGER,
    TOGGLE_LOADER
} from "./types";

const initialState = {
    show_burger: false,
    is_loading: false
};

export const rootReducer = combineReducers({
    app: (state = initialState, action) => {
        switch (action.type) {
            case TOGGLE_BURGER:
                return {
                    ...state, show_burger: !state.show_burger
                };

            case TOGGLE_LOADER:
                return {
                    ...state, is_loading: !state.is_loading
                };

            case SHOW_LOADER:
                return {
                    ...state, is_loading: true
                };

            case HIDE_LOADER:
                return {
                    ...state, is_loading: false
                };

            default:
                return state;
        }
    },
    dialogs: dialogsReducer,
    preys: preysReducer,
    script: scriptReducer
})