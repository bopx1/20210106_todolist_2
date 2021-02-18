import { actionTypes } from "../actionTypes";
import { GetUser, GetUserWithPassword } from "../services/LoginService";

export const AuthReducer = function (
  state = { email: "", password: "", user: null, isLoginFailed: false },
  action
) {
  switch (action.type) {
    case "@@INIT":
      return initState(state);
    case actionTypes.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case actionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    case actionTypes.LOGIN:
      return handleLogin(state, {});
    default:
      return {
        ...state,
      };
  }
};

const initState = (currentState) => {
  //   const token = localStorage.getItem("jwtToken");
  //   if (token) {
  //       return {
  //           ...currentState,
  //           token: token,
  //       }
  //   }
  const userEmail = localStorage.getItem("authUserEmail");
  if (userEmail) {
    return {
      ...currentState,
      user: GetUser(userEmail),
    };
  } else {
    return {
      ...currentState,
    };
  }
};

const handleLogin = (currentState, payload) => {
    console.log(currentState);
  const matchedUser = GetUserWithPassword(
    currentState.email,
    currentState.password
  );
  if (matchedUser) {
    localStorage.setItem("authUserEmail", matchedUser.email);
    window.location.replace("/todo");
    return {
      ...currentState,
      email: "",
      password: "",
      user: matchedUser,
      isLoginFailed: false,
    };
  } else {
    return {
      ...currentState,
      isLoginFailed: true,
    };
  }
};
