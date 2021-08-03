import {
    combineReducers
} from "redux";
import {
    dialogsReducer
} from "./dialogsReudcer";

export const rootReducer = combineReducers({
    dialogs: dialogsReducer
})