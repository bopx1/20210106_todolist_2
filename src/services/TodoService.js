import axios from "axios";

const apiEndpoint = "http://localhost:5000";
const getToDoEndpoint = `${apiEndpoint}/Todo/GetTodos`;
const addToDoEndpoint = `${apiEndpoint}/Todo/AddTodo`;
const changeTaskCompletedEndpoint = `${apiEndpoint}/Todo/ChangeTaskCompletedState`;
const changeTaskFavoriteEndpoint = `${apiEndpoint}/Todo/ChangeTaskFavoriteState`;
const user = "binhnt";

export const GetToDoList = async () => {
  return await new Promise((resolve) => {
    setTimeout(async () => {
      resolve(
        (
          await axios.get(getToDoEndpoint, {
            params: {
              user: user,
            },
          })
        ).data
      );
    }, 1000);
  });
};

export const AddTodo = async (newTaskName) => {
  return await new Promise((resolve) => {
    setTimeout(async () => {
      resolve(
        (
          await axios.post(addToDoEndpoint, {
            taskName: newTaskName,
            user: user,
          })
        ).data
      );
    }, 1000);
  });
};

export const ChangeTaskCompleted = async (id, isCompleted) => {
  return await new Promise((resolve) => {
    setTimeout(async () => {
      resolve(
        (
          await axios.post(changeTaskCompletedEndpoint, {
            taskId: id,
            isCompleted: isCompleted,
          })
        ).data
      );
    }, 20);
  });
};

export const ChangeTaskFavorite = async (id, isFavorite) => {
  return await new Promise((resolve) => {
    setTimeout(async () => {
      resolve(
        (
          await axios.post(changeTaskFavoriteEndpoint, {
            taskId: id,
            isFavorite: isFavorite,
          })
        ).data
      );
    }, 20);
  });
};
