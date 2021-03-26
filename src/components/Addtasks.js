import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

export const Addtasks = ({ onAdd, tasksChange }) => {
  const [texts, setTexts] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ texts, time, reminder });
    setTexts("");
    setTime("");
    setReminder(false);
  };

  return (
    <div>
      <form className="main-form" onSubmit={onSubmit}>
        <div className="label-form">
          <input
            type="text"
            value={texts}
            placeholder="tasks"
            onChange={(e) => setTexts(e.currentTarget.value)}
            required
          ></input>
        </div>
        <div className="label-form">
          <input
            type="text"
            placeholder="time"
            value={time}
            onChange={(e) => setTime(e.currentTarget.value)}
            required
          ></input>
        </div>
        <div className="label-form">
          <label>Reminder</label>
          <input
            type="checkbox"
            onChange={(e) => setReminder(e.currentTarget.checked)}
          ></input>
        </div>

        <Button type="submit" variant="outlined">
          Add
        </Button>
        <Button variant="outlined" onClick={tasksChange}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

Addtasks.propTypes = {
  tasks: PropTypes.string,
  date: PropTypes.number,
};
