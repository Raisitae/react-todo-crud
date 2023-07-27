import "./fonts/fonts.css";
import "./App.css";
import { useEffect, useContext } from "react";
import TaskCreate from "./components/TaskCreate.js";
import TaskList from "./components/TaskList.js";
import TaskContext from "./context/TaskContext";

function App() {
  const { fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="nav-header__text">add a task!</h1>
      </div>
      <TaskCreate />
      <div>
        <h2 className="task-subtitle">Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
