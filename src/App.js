import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import uuid from "react-uuid";
import { GetToDoDetail, GetToDoList, AddTodo, ChangeTaskCompleted, ChangeTaskFavorite } from "./services/TodoService";
import TaskListCompleted from "./components/TaskListCompleted";
import TaskListIncompleted from "./components/TaskListIncompleted";
import _ from "lodash";

function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [isLoadingAddTodo, setIsLoadingAddTodo] = useState(false);
  let [isLoadingChangeTaskCompleted, setIsLoadingChangeTaskCompleted] = useState(false);
  let [isLoadingChangeTaskFavorite, setIsLoadingChangeTaskFavorite] = useState(false);
  let [isError, setIsError] = useState(false);
  let [isErrorAddTodo, setIsErrorAddTodo] = useState(false);
  let [isErrorChangeTaskCompleted, setIsErrorChangeTaskCompleted] = useState(false);
  let [isErrorChangeTaskFavorite, setIsErrorChangeTaskFavorite] = useState(false);
  let [reloadCount, setReloadCount] = useState(0);
  let [taskList, setTaskList] = useState([]);
  let [completedTaskList, incompletedTaskList] = _.partition(
    taskList,
    (t) => t.isCompleted
  );
  useEffect(async () => {
    try {
      const response = await GetToDoList();
      setTaskList(response.data);
    } catch (ex) {
      console.log(ex);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [reloadCount]);

  const handleAddTask = async (newTask) => {
    if (!newTask) return;
    try {
      setIsErrorAddTodo(false);
      setIsLoadingAddTodo(true);
      await AddTodo(newTask);
      setReloadCount(reloadCount + 1);
    } catch (ex) {
      console.log(ex);
      setIsErrorAddTodo(true);
    } finally {
      setIsLoadingAddTodo(false);
    }
  };

  const handleCompletedChange = async (id, isCompleted) => {
    try {
      setIsErrorChangeTaskCompleted(false);
      setIsLoadingChangeTaskCompleted(true);
      await ChangeTaskCompleted(id, isCompleted);
      setReloadCount(reloadCount + 1);
    } catch (ex) {
      console.log(ex);
      setIsErrorChangeTaskCompleted(true);
    } finally {
      setIsLoadingChangeTaskCompleted(false);
    }
  };

  const handleFavoriteChange = async (id, isFavorite) => {
    try {
      setIsErrorChangeTaskFavorite(false);
      setIsLoadingChangeTaskFavorite(true);
      await ChangeTaskFavorite(id, isFavorite);
      setReloadCount(reloadCount + 1);
    } catch (ex) {
      console.log(ex);
      setIsErrorChangeTaskFavorite(true);
    } finally {
      setIsLoadingChangeTaskFavorite(false);
    }
  };

  const renderErrorContent = () => {
    return (
      <div>
        "Loi roi"
        <button
          onClick={() => {
            setIsLoading(true);
            setIsError(false);
            setReloadCount(reloadCount + 1);
          }}
        >
          Tải lại
        </button>
      </div>
    );
  };

  const renderContent = () => {
    return isLoading ? (
      "Loading"
    ) : (
      <div>
        <Header onAddTask={handleAddTask} />
        <TaskListIncompleted
          taskList={incompletedTaskList}
          onCompletedChange={handleCompletedChange}
          onFavoriteChange={handleFavoriteChange}
        />
        <TaskListCompleted
          taskList={completedTaskList}
          onCompletedChange={handleCompletedChange}
        />
      </div>
    );
  };

  return (
    <div className="App">
      {isError ? renderErrorContent() : renderContent()}
    </div>
  );
}

export default App;
