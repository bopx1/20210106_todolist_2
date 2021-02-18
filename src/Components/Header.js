import React, { useState } from "react";
import classes from "./Header.module.css";
import { Button } from "antd";
import { AddTask } from "../services/TodoService";
import { useDispatch, useSelector } from "react-redux";
import { changeInputTask } from "../actions/TaskActions";

function Header({ handleAddTaskFinished }) {
  let [isLoadingAddTask, setIsLoadingAddTask] = useState(false);
  const newTask = useSelector(state => state.task.taskName);
  const dispatch = useDispatch();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask(newTask);
      dispatch(changeInputTask(newTask));
    }
  };

  const handleAddTask = async (newTask) => {
    if (!newTask) return;
    try {
      setIsLoadingAddTask(true);
      await AddTask(newTask);
      handleAddTaskFinished();
    } catch (ex) {
      console.log(ex);
    } finally {
      setIsLoadingAddTask(false);
    }
  };
  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <div className={classes.addTask}>
        <input
          type="text"
          disabled={isLoadingAddTask}
          value={newTask}
          onChange={(e) => dispatch(changeInputTask(e.target.value))}
          placeholder="Add a task"
          onKeyDown={handleKeyDown}
        />
        <Button
          disabled={isLoadingAddTask}
          onClick={() => {
            console.log(newTask);
            handleAddTask(newTask);
            
            dispatch(changeInputTask(''));
          }}
        >
          Add task
        </Button>
      </div>
    </header>
  );
}

export default Header;
