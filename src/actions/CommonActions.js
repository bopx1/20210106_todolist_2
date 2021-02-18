import { actionTypes } from "../actionTypes";

export const setIsLoading = (isLoading) => ({
  type: actionTypes.LOADING,
  payload: {
    isLoading,
  },
});

export const setIsError = (isError) => ({
  type: actionTypes.ERROR,
  payload: {
    isError,
  },
});