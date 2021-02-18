import { combineReducers } from "redux";
import { AuthReducer } from "./reducers/AuthReducer";
import { TaskReducer } from "./reducers/TaskReducer";
import { Todos } from "./reducers/Todos";
import { CommonReducer } from "./reducers/CommonReducer";

export default combineReducers({
  task: TaskReducer,
  auth: AuthReducer,
  todos: Todos,
  common: CommonReducer
});
