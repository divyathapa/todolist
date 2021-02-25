import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Add = ({ tasks }) => {
  return (
    <div className="add">
      <AiOutlinePlus color={!tasks.reminder ? "#1CD777" : "#d44720"} />
      <p>Add Task</p>
    </div>
  );
};

export default Add;
