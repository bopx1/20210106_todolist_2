import {
    actionTypes,
} from "../actionTypes";

export const Todos = function (state = [], action) {
  switch (action.type) {
    case actionTypes.UPDATE_TODOLIST:
      return {
        ...state,
        todoList: action.payload.newTodoList
      };
    default:
      return state;
  }
};
