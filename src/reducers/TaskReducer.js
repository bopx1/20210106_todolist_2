import {
    actionTypes,
} from "../actionTypes";

export const TaskReducer = function (state = { taskName: "" }, action) {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT:
      return {
        ...state,
        taskName: action.payload.taskName,
      };
    default:
      return state;
  }
};
