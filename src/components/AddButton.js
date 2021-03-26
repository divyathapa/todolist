import React from "react";
import AddIcon from "@material-ui/icons/Add";
const addButton = ({ text, onClick }) => {
  return (
    <div onClick={onClick}>
      <AddIcon></AddIcon>
      {text}
    </div>
  );
};

export default addButton;
