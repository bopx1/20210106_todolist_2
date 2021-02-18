import { actionTypes } from "../actionTypes";

export const changeEmail = (newEmail) => ({
  type: actionTypes.CHANGE_EMAIL,
  payload: {
    email: newEmail,
  },
});

export const changePassword = (newPassword) => ({
  type: actionTypes.CHANGE_PASSWORD,
  payload: {
    password: newPassword,
  },
});

export const login = () => ({
    type: actionTypes.LOGIN,
    payload: {}
});