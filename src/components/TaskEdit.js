import { useState } from "react";

function TaskEdit({ task, onSubmit }) {
  const [newTitle, setNewTitle] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task.id, newTitle);
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div className="div-editContainer">
      <h1 className="task-title">{task.title}</h1>
      <p className="p-notask">was your old task name, let's rename it!</p>
      <div className="div-form">
        <form className="form-submit form-edit" onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTitle}
            onChange={handleChange}
            className="input-text edit-input"
          />
          <button type="submit" className="btn btn-edit" onClick={handleSubmit}>
            change
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskEdit;
