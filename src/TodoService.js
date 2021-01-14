import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/";

export const GetToDoList = async () => {
  return await axios.get(url);
};

export const GetToDoDetail = async (id) => {
  return await axios.get(url + id);
};
