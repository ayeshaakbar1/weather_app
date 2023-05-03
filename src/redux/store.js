import { createStore, combineReducers } from "redux";
import weatherReducers from "./reducers";

const rootReducers = combineReducers({
  weatherReducers,
});
const store = createStore(rootReducers);

export default store;
