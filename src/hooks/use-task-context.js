import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function useTaskContext() {
  return useContext(TaskContext);
}

export default useTaskContext;
