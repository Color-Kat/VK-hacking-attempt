import {
    combineReducers
} from "redux";
import {
    dialogsReducer
} from "./dialogsReudcer";
import {
    preysReducer
} from "./preysReduces";

export const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    preys: preysReducer
})