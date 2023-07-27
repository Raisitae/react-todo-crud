import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TaskContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const URL = process.env.REACT_APP_SERVER_URL;

  const fetchTasks = async () => {
    const response = await axios.get(URL + "tasks");
    setTasks(response.data);
  };

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

  const value = {
    tasks,
    fetchTasks,
    createTask,
    editTaskById,
    deleteTaskByID,
    completeTaskByID,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export { Provider };

export default TaskContext;
