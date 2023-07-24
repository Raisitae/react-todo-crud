import { useState } from "react";
import TaskEdit from "./TaskEdit.js";

function TaskShow({ task, onDelete, onEdit, onComplete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
    console.log(task.completed);
  };

  const onSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  const handleCheckClick = () => {
    onComplete(task.id, !task.completed);
  };

  return (
    <div className="task-container">
      {showEdit ? (
        <TaskEdit task={task} onSubmit={onSubmit} />
      ) : (
        <h1 className="task-title">{task.title}</h1>
      )}
      <div className="task-actions">
        <button className="btn btn-edit" onClick={handleEditClick}>
          Edit
        </button>
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={handleCheckClick}
        />
        <button className="btn btn-delete" onClick={handleDelete}>
          X
        </button>
      </div>
    </div>
  );
}

export default TaskShow;
