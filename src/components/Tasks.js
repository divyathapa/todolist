import React from "react";
import Task from "./Task";
import Add from "./Add";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task task={task} key={task.id} onDelete={onDelete} />
      ))}
      <Add tasks={tasks} />
    </div>
  );
};

export default Tasks;
