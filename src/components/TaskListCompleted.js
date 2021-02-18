import React from "react";
import TaskList from "./TaskList";
import _ from "lodash";

function TaskListCompleted({ taskList, onCompletedChange }) {
  const sortedTaskListCompleted = _.orderBy(
    taskList,
    ["completedDate"],
    ["asc"]
  );
  return (
    <TaskList
      taskList={sortedTaskListCompleted}
      taskListName="Completed"
      onCompletedChange={onCompletedChange}
    />
  );
}

export default TaskListCompleted;
