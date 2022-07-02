import {combineReducers, legacy_createStore} from "redux"
import { authReducer } from "./Auth/authReducer";
import { Reducer } from "./Todo/todoReducer";

const rootReducer = combineReducers({
    todoApp:Reducer,
    // auth:authReducer
})
export const store = legacy_createStore(rootReducer);