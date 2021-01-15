import React from "react";
import TaskList from "./TaskList";
import _ from "lodash";

function TaskListIncompleted({
  taskList,
  onCompletedChange,
  onFavoriteChange,
}) {
  const sortedTaskListIncompleted = _.orderBy(
    taskList,
    ["isFavorite", "createdDate"],
    ["desc", "asc"]
  );
  return (
    <TaskList
      taskList={sortedTaskListIncompleted}
      taskListName="Incompleted"
      onCompletedChange={onCompletedChange}
      onFavoriteChange={onFavoriteChange}
    />
  );
}

export default TaskListIncompleted;
