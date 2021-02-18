import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Checkbox } from "antd";

const TaskItem = ({ task, onCompletedChange, onFavoriteChange }) => {
  return (
    <div className="wrapItem">
      <div>
        <Checkbox checked={task.isCompleted} onChange={(event) => onCompletedChange(task.id, event.target.checked)} />
        <label>{task.taskName}</label>
      </div>
      {!task.isFavorite ? (
        <StarOutlined
          style={{ visibility: task.isCompleted ? "hidden" : "visible" }}
          onClick={() => {
            onFavoriteChange(task.id, true);
          }}
        />
      ) : (
        <StarFilled
          style={{ visibility: task.isCompleted ? "hidden" : "visible" }}
          onClick={() => {
            onFavoriteChange(task.id, false);
          }}
        />
      )}
    </div>
  );
};
export default TaskItem;
