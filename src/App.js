import { useState, useEffect } from "react";
import "./App.css";
import CompleteTask from "./components/CompleteTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import uuid from "react-uuid";
import { GetToDoDetail, GetToDoList } from "./TodoService";

function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let [reloadCount, setReloadCount] = useState(0);
  let [taskList, setTaskList] = useState([]);
  let [newTask, setNewTask] = useState("");

  useEffect(async () => {
    try {
      const response = await GetToDoList();
      const detailReponse = await GetToDoDetail(response.data[0].id);
      setTaskList([detailReponse.data]);
    } catch (ex) {
      console.log(ex);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [reloadCount]);

  const getCompletedTaskList = () => {
    return taskList
      .filter((task) => {
        return task.completed;
      })
      .sort((t1, t2) => {
        return t1.completedDate - t2.completedDate;
      });
  };

  const getIncompletedTaskList = () => {
    return taskList
      .filter((task) => {
        return !task.completed;
      }).sort((t1, t2) => {
        return t1.createdDate - t2.createdDate;
      })
      .sort((t1, t2) => {
        if (t1.isFavorited && !t2.isFavorited) return -1;
        if (!t1.isFavorited && t2.isFavorited) return 1;
        return 0;
      });
  };

  const onAddTaskClick = () => {
    if (!newTask) return;
    let newTaskList = [
      ...taskList,
      {
        id: uuid(),
        completed: false,
        isFavorited: false,
        title: newTask,
        createdDate: new Date().getTime(),
        completedDate: new Date(1900, 1, 1),
      },
    ];
    setTaskList(newTaskList);
    setNewTask("");
  };

  const onCompletedChange = (id, completed) => {
    let newTaskList = taskList.map((task) => {
      if (task.id === id) {
        let newTask = {
          ...task,
          completed: completed,
          completedDate: completed
            ? new Date().getTime()
            : new Date(1900, 1, 1),
        };
        return newTask;
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  const onFavoritedChange = (id, isFavorited) => {
    console.log(isFavorited);
    let newTaskList = taskList.map((task) => {
      if (task.id === id) {
        let newTask = {
          ...task,
          isFavorited: isFavorited,
        };
        return newTask;
      }
      return task;
    });
    setTaskList(newTaskList);
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
        <Header
          onAddTaskClick={onAddTaskClick}
          newTask={newTask}
          setNewTask={setNewTask}
        />
        <TaskList
          taskList={getIncompletedTaskList()}
          onCompletedChange={onCompletedChange}
          onFavoritedChange={onFavoritedChange}
        />
        <CompleteTask
          taskList={getCompletedTaskList()}
          onCompletedChange={onCompletedChange}
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
