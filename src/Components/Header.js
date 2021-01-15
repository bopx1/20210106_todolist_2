import React, { useState } from "react";
import classes from "./Header.module.css";
import { Button } from "antd";

function Header({ onAddTask }) {
  const [newTask, setNewTask] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddTask(newTask);
      setNewTask("");
    }
  };
  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <div className={classes.addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
          onKeyDown={handleKeyDown}
        />
        <Button
          onClick={() => {
            onAddTask(newTask);
            setNewTask("");
          }}
        >
          Add task
        </Button>
      </div>
    </header>
  );
}

export default Header;
