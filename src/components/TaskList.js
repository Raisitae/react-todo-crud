import React from "react";
import TaskShow from "./TaskShow.js";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

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
