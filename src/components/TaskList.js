import React from "react";
import TaskShow from "./TaskShow.js";
import useTaskContext from "../hooks/use-task-context.js";

function TaskList() {
  const { tasks } = useTaskContext();

  const renderedTasks = tasks.map((task) => {
    return <TaskShow task={task} key={task.id} />;
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
