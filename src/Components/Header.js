import React from "react";
import classes from "./Header.module.css";
import { Button } from "antd";

function Header({ onAddTaskClick, newTask, setNewTask }) {
  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <div className={classes.addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
        />
        <Button Type="primary" Shape="round" onClick={onAddTaskClick}>
          Add task
        </Button>
      </div>
    </header>
  );
}

export default Header;
