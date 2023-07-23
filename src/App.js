import "./App.css";
import { useState } from "react";
import TaskCreate from "./components/TaskCreate.js";
import TaskList from "./components/TaskList.js";

function App() {
  const [tasks, setTasks] = useState([]);

  // important, we need the ...tasks to keep the
  // previous tasks, because we are working with objetcs
  // and not with arrays

  const createTask = (task) => {
    const updatedTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 1000),
        title: task,
        //description: description,
        completed: false,
      },
    ];
    setTasks(updatedTasks);
  };

  const deleteTaskByID = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="nav-header__text">Add a task!</h1>
      </div>
      <TaskCreate onCreate={createTask} />
      <div>
        <h2 className="task-subtitle">Tasks</h2>
        <TaskList tasks={tasks} onDelete={deleteTaskByID} />
      </div>
    </div>
  );
}

export default App;
