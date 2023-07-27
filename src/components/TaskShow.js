import { useState } from "react";
import TaskEdit from "./TaskEdit.js";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskShow({ task }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTaskByID, editTaskById, completeTaskByID } =
    useContext(TaskContext);

  const handleDelete = () => {
    deleteTaskByID(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
    console.log(task.completed);
  };

  const onSubmit = (id, newTitle) => {
    setShowEdit(false);
    editTaskById(id, newTitle);
  };

  const handleCheckClick = () => {
    completeTaskByID(task.id, !task.completed);
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
