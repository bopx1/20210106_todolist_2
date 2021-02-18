import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  taskList,
  taskListName,
  onCompletedChange,
  onFavoriteChange,
}) {
  return (
    <section className="listTask">
      {/* <div className="totalComplete">
        <span> {taskListName}</span>
        <span> {taskList.length}</span>
      </div> */}
      <ul>
        {taskList.map((task) => {
          return (
            <li key={task.id}>
              <TaskItem
                task={task}
                onCompletedChange={onCompletedChange}
                onFavoriteChange={onFavoriteChange}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TaskList;
