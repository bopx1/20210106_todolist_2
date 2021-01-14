import classes from "./TaskList.module.css";
import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ taskList, onCompletedChange, onFavoritedChange }) {
  return (
    <section className="listTask">
      <div className="totalComplete">
        <span> Incompleted</span>
        <span> {taskList.length}</span>
      </div>
      <ul>
        {taskList.map((task) => {
          return (
            <li>
              <TaskItem
                task={task}
                onCompletedChange={onCompletedChange}
                onFavoritedChange={onFavoritedChange}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TaskList;
