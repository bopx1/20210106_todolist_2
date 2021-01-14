import React from "react";
import TaskItem from "./TaskItem";

function CompleteTask({ taskList, onCompletedChange }) {
  return (
    <section className="listTask">
      <div className="totalComplete">
        <span> Completed</span>
        <span> {taskList.length}</span>
      </div>
      <ul>
        {taskList.map((task) => {
          return (
            <li>
              <TaskItem task={task} onCompletedChange={onCompletedChange} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CompleteTask;
