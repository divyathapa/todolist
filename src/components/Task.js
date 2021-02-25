import React from "react";
import { BiHeartCircle } from "react-icons/bi";

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <BiHeartCircle
        color="#d44720"
        onClick={(id) => {
          onDelete(task.id);
        }}
      />
      <p>
        {task.date}-{task.tasks}
      </p>
      <hr />
    </div>
  );
};

export default Task;
