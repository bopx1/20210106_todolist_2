import { actionTypes } from "../actionTypes";

export const changeInputTask = (newTaskName) => ({
  type: actionTypes.CHANGE_INPUT,
  payload: {
    taskName: newTaskName,
  },
});

export const updateToDoList = (newTodoList) => ({
  type: actionTypes.UPDATE_TODOLIST,
  payload: {
    newTodoList,
  },
});