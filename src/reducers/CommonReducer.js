import {
    actionTypes,
} from "../actionTypes";

export const CommonReducer = function (state = { isLoading: false, isError: false }, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
      case actionTypes.ERROR:
        return {
          ...state,
          isError: action.payload.isError,
        };
    default:
      return state;
  }
};
