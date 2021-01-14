import { StarOutlined, StarFilled } from "@ant-design/icons";

const TaskItem = ({ task, onCompletedChange, onFavoritedChange }) => {
  return (
    <div className="wrapItem">
      <div>
        <input
          type="checkbox"
          className="a"
          checked={task.completed}
          onChange={(event) => onCompletedChange(task.id, event.target.checked)}
        />
        <label>{task.title}</label>
      </div>
      {!task.isFavorited ? (
        <StarOutlined
          style={{ visibility: task.completed ? "hidden" : "visible" }}
          onClick={(event) => {
            event.preventDefault();
            onFavoritedChange(task.id, true);
          }}
        />
      ) : (
        <StarFilled
          style={{ visibility: task.completed ? "hidden" : "visible" }}
          onClick={(event) => {
            event.preventDefault();
            onFavoritedChange(task.id, false);
          }}
        />
      )}
    </div>
  );
};
export default TaskItem;
