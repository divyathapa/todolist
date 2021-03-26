import "./App.css";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import image from "./image/caughtup.png";
import { Addtasks } from "./components/Addtasks";
import AddButton from "./components/AddButton";
import Header from "./components/Header";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "IBM Plex Mono",
  },
  heading: {
    textAlign: "center",
    fontFamily: "IBM Plex Mono",
  },
  button: {
    display: "none",
    color: "red",
  },
  unbutton: {
    display: "inline",
    color: "green",
  },
});

function App() {
  const classes = useStyles();
  const [showAddTasks, setShowAddTasks] = useState(false);
  const [day, setDay] = useState();
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      time: "6am",
      texts: "running",
      reminder: true,
    },
    {
      id: 2,
      time: "2pm",
      texts: "lunch",
      reminder: true,
    },
    {
      id: 3,
      time: "6pm",
      texts: "dinner",
      reminder: false,
    },
  ]);

  useEffect(() => {
    toDay();
    console.log(`initial: ${showAddTasks}`);
  }, []);
  /*
  Delete tasks 
  */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /*
  Add tasks
*/
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log("adding tasks", task, newTask);
  };

  /*
Toggle tasks
*/
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  /*adding task to show
   */
  const addNewTask = () => {
    setShowAddTasks(!showAddTasks);
    console.log(`clicked${showAddTasks}`);
  };

  // changing tasks
  const tasksChange = () => {
    setShowAddTasks(!showAddTasks);
  };

  /*
get day
*/
  const toDay = () => {
    var d = new Date();
    var weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var m = months[d.getMonth()];
    var dy = weekdays[d.getDay()];
    var dt = d.getDate();
    setDay(dy);
    setMonth(m);
    setDate(dt);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="h3" className={classes.heading}>
        {" "}
        Today {day},{month}
        {date}
      </Typography>
      <Tasks tasks={tasks} onDelete={deleteTask} onChange={toggleReminder} />
      {!showAddTasks ? (
        <AddButton text="Add todos" onClick={addNewTask} />
      ) : (
        <Addtasks onAdd={addTask} tasksChange={tasksChange} />
      )}

      <img src={image} alt="imageOne" />
    </div>
  );
}

export default App;
