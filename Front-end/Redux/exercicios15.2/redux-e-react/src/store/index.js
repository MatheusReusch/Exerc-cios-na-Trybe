import { createStore, combineReducers } from "redux";
import listReducer from "../reducers";
import listLucasReducer from "../reducers/lucas";

const rootReducer = combineReducers({ listReducer, listLucasReducer });

const store = createStore(rootReducer)

console.log(store.getState())

export default store