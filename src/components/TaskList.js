import React from "react";
import TaskShow from "./TaskShow.js";

function TaskList({ tasks, onDelete, onEdit, onComplete }) {
  const renderedTasks = tasks.map((task) => {
    return (
      <TaskShow
        task={task}
        key={task.id}
        onDelete={onDelete}
        onEdit={onEdit}
        onComplete={onComplete}
      />
    );
  });

  return (
    <div>
      {renderedTasks.length === 0 ? (
        <div className="tasklist-container">
          <p className="p-notask">No tasks yet!</p>
        </div>
      ) : (
        <div className="tasklist-container">{renderedTasks}</div>
      )}
    </div>
  );
}

export default TaskList;
