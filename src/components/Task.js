import React from "react";
import { Checkbox } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

const GreenCheckbox = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Task = ({ task, onDelete, onChange }) => {
  return (
    <div>
      <GreenCheckbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        label="Custom icon"
        checked={task.reminder}
        onChange={() => onChange(task.id)}
      />

      <p onDoubleClick={(id) => onDelete(task.id)}>
        {task.time}-{task.texts}
      </p>
      <hr />
    </div>
  );
};

export default Task;
