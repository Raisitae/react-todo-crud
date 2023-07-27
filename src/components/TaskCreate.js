import React, { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskCreate() {
  const { createTask } = useContext(TaskContext);

  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please enter a task!");
      return;
    }
    createTask(task);
    setTask("");
  };

  return (
    <div className="div-form">
      <form className="form-submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Add a task!"
          onChange={handleChange}
          className="input-text"
        />
        <button type="submit" className="input-button">
          add
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
