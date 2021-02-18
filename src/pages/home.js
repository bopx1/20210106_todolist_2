import { useState, useEffect } from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import Header from "../components/Header";
import {
  GetToDoList,
  ChangeTaskCompleted,
  ChangeTaskFavorite,
} from "../services/TodoService";
import TaskListCompleted from "../components/TaskListCompleted";
import TaskListIncompleted from "../components/TaskListIncompleted";
import { Spin } from "antd";
import _ from "lodash";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateToDoList } from "../actions/TaskActions";
import { setIsLoading, setIsError } from "../actions/CommonActions";

const { Panel } = Collapse;
const convertDate = (time) => new Date(time).getTime();

export default function Home() {
  const isLoading = useSelector((state) => state.common.isLoading);
  const isError = useSelector((state) => state.common.isError);
  let [reloadCount, setReloadCount] = useState(0);
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.todos.todoList);
  let [completedTaskList, incompletedTaskList] = _.partition(
    taskList,
    (t) => t.isCompleted
  );
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(setIsLoading(true));
        const response = await GetToDoList();
        let data = response.data.data.map((task) => {
          return {
            ...task,
            completedDate: convertDate(task.completedDate),
            createdDate: convertDate(task.createdDate),
          };
        });
        dispatch(updateToDoList(data));
      } catch (ex) {
        console.log(ex);
        dispatch(setIsError(true));
      } finally {
        dispatch(setIsLoading(false));
      }
    }
    fetchData();
  }, [reloadCount, dispatch]);

  const handleCompletedChange = async (id, isCompleted) => {
    try {
      dispatch(setIsError(false));
      dispatch(setIsLoading(true));
      await ChangeTaskCompleted(id, isCompleted);
      setReloadCount(reloadCount + 1);
    } catch (ex) {
      console.log(ex);
      dispatch(setIsError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const handleFavoriteChange = async (id, isFavorite) => {
    try {
      dispatch(setIsError(false));
      dispatch(setIsLoading(true));
      await ChangeTaskFavorite(id, isFavorite);
      setReloadCount(reloadCount + 1);
    } catch (ex) {
      console.log(ex);
      dispatch(setIsError(true));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  const renderErrorContent = () => {
    return (
      <div>
        "Loi roi"
        <button
          onClick={() => {
            dispatch(setIsLoading(true));
            dispatch(setIsError(false));
            setReloadCount(reloadCount + 1);
          }}
        >
          Tải lại
        </button>
      </div>
    );
  };

  const handleAddTaskFinished = () => {
    setReloadCount(reloadCount + 1);
  };

  const renderContent = () => {
    return isLoading ? (
      <div className="loading">
        <Spin />
      </div>
    ) : (
      <div>
        <Header handleAddTaskFinished={handleAddTaskFinished} />
        <Collapse defaultActiveKey={["1", "2"]}>
          <Panel header={"Incompleted (" + incompletedTaskList.length + ")"} key="1">
            <TaskListIncompleted
              taskList={incompletedTaskList}
              onCompletedChange={handleCompletedChange}
              onFavoriteChange={handleFavoriteChange}
            />
          </Panel>
          <Panel header={"Completed (" + completedTaskList.length + ")"} key="2">
            <TaskListCompleted
              taskList={completedTaskList}
              onCompletedChange={handleCompletedChange}
            />
          </Panel>
        </Collapse>
      </div>
    );
  };
  return (
    <div>
      {isError ? renderErrorContent() : renderContent()}
      <Link to="/">Logout</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}
