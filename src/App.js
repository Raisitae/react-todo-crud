import "./App.css";
import { useState, useEffect } from "react";
import TaskCreate from "./components/TaskCreate.js";
import TaskList from "./components/TaskList.js";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const URL = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(URL + "tasks");
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const createTask = async (title, completed) => {
    const response = await axios.post(URL + "tasks", {
      title,
      completed: false,
    });

    const updatedTasks = [...tasks, response.data];
    setTasks(updatedTasks);
    // important, we need the ...tasks to keep the
    // previous tasks, because we are working with objetcs
    // and not with arrays
  };

  const editTaskById = async (id, newTitle) => {
    const response = await axios.patch(URL + "tasks/" + id, {
      title: newTitle,
    });

    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...response.data };
      }
      return task;
    });

    setTasks(editedTasks);
  };

  const deleteTaskByID = async (id) => {
    await axios.delete(URL + "tasks/" + id);

    const deletedTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(deletedTasks);
  };

  const completeTaskByID = async (id, newCompleted) => {
    const response = await axios.patch(URL + "tasks/" + id, {
      completed: newCompleted,
    });

    const completedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...response.data };
      }
      return task;
    });
    setTasks(completedTasks);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="nav-header__text">Add a task!</h1>
      </div>
      <TaskCreate onCreate={createTask} />
      <div>
        <h2 className="task-subtitle">Tasks</h2>
        <TaskList
          tasks={tasks}
          onDelete={deleteTaskByID}
          onEdit={editTaskById}
          onComplete={completeTaskByID}
        />
      </div>
    </div>
  );
}

export default App;
