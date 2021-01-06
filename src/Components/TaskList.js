import { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task) => {
        return <TaskItem description={task.description} bookmark={task.bookmark} />;
      })}
    </div>
  );
};
export default TaskList;
