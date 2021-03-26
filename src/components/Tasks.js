import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onChange }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Tasks;
