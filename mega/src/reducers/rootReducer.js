import todoReducer from "./todosReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer
});


export default rootReducer