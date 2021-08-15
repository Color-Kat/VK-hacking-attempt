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

export const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    preys: preysReducer,
    script: scriptReducer
})