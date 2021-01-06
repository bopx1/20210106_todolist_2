import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import Footer from "./Components/Footer";
import { useState } from "react";
import Button from "./Components/Button";

function App() {
  let [taskList, setTaskList] = useState([]);
  let [newTask, setNewTask] = useState('');
  const onAddTaskClick = () => {
    let newTaskList = [
      ...taskList,
      {
        description: newTask,
        bookmark: false,
      },
    ];
    setTaskList(newTaskList);
    setNewTask('');
  };
  return (
    <div className="App">
      <Header />
      <TaskList taskList={taskList} />
      <Footer onAddTaskClick={onAddTaskClick} newTask={newTask} setNewTask={setNewTask} />
    </div>
  );
}

export default App;
