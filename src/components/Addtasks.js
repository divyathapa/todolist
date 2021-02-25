import React from "react";

export const Addtasks = () => {
  return (
    <div className="tasks">
      <form className="main-form">
        <div className="label-form">
          <label>Tasks</label>
          <input type="text"></input>
        </div>
        <div className="label-form">
          <label>Date</label>
          <input type="text"></input>
        </div>
        <div className="label-form">
          <label>Reminder</label>
          <input type="checkbox"></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
