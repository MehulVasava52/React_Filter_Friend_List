import { createStore, applyMiddleware } from "redux";
import mainReducer from "../src/reducers/mainReducer";
import Thunk from "redux-thunk";

const store = createStore(mainReducer, applyMiddleware(Thunk));
export default store;
