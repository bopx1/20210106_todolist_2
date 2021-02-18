import { userList } from "../constants/users";

export const GetUserWithPassword = (email, password) => {
  return userList.find((user) => {
    return user.email === email && user.password === password ? user : null;
  });
};

export const GetUser = (email) => {
  return userList.find((user) => {
    return user.email === email ? user : null;
  });
};