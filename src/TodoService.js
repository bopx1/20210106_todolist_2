import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/";

export const GetToDoList = async () => {
  return await new Promise((resolve) => {
    setTimeout(async () => {
      resolve(await axios.get(url))
    }, 3000);
  });
};

export const GetToDoDetail = async (id) => {
  return await new Promise((resolve) => {
    setTimeout(async () => {
      resolve(await axios.get(url))
    }, 3000);
  });
};
