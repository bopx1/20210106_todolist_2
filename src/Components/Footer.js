import Button from "./Button";

const Footer = ({ onAddTaskClick, newTask, setNewTask }) => {
  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <Button text="Add task" onClick={onAddTaskClick} />
    </div>
  );
};
export default Footer;
