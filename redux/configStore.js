import { combineReducers, createStore } from "redux";
import quiz from "./modules/quiz";
import user from "./modules/user";
import ranking from "./modules/ranking";

const rooReducer = combineReducers({ quiz, user, ranking });

const store = createStore(rooReducer);

export default store;
