import { combineReducers, createStore } from "redux";
import quiz from "./modules/quiz";
import user from "./modules/user";

const rooReducer = combineReducers({ quiz, user });

const store = createStore(rooReducer);

export default store;
