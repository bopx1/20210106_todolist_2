import axios from "axios";

const apiEndpoint = "http://localhost:5000";
const getToDoEndpoint = `${apiEndpoint}/Todo/GetTodos`;
const addTaskEndpoint = `${apiEndpoint}/Todo/AddTodo`;
const changeTaskCompletedEndpoint = `${apiEndpoint}/Todo/ChangeTaskCompletedState`;
const changeTaskFavoriteEndpoint = `${apiEndpoint}/Todo/ChangeTaskFavoriteState`;
const user = "binhnt";

export const GetToDoList = () => {
  return axios.get(getToDoEndpoint, {
    params: {
      user: user,
    },
  });
};

export const AddTask = (newTaskName) => {
  return axios.post(addTaskEndpoint, {
    taskName: newTaskName,
    user: user,
  });
};

export const ChangeTaskCompleted = (id, isCompleted) => {
  return axios.post(changeTaskCompletedEndpoint, {
    taskId: id,
    isCompleted: isCompleted,
  });
};

export const ChangeTaskFavorite = (id, isFavorite) => {
  return axios.post(changeTaskFavoriteEndpoint, {
    taskId: id,
    isFavorite: isFavorite,
  });
};
