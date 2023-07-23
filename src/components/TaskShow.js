function TaskShow({ task, onDelete }) {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="task-container">
      <h1 className="task-title">{task.title}</h1>
      <div className="task-actions">
        <button className="btn-delete" onClick={handleDelete}>
          X
        </button>
      </div>
    </div>
  );
}

export default TaskShow;
