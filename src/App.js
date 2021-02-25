import "./App.css";
import Tasks from "./components/Tasks";
import { useState } from "react";
import image from "./image/caughtup.png";
import { Addtasks } from "./components/Addtasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      month: "January",
      date: 19,
      tasks: "anniversary",
      reminder: true,
    },
    {
      id: 2,
      month: "February",
      date: 17,
      tasks: "birthday",
      reminder: true,
    },
    {
      id: 3,
      month: "February",
      date: 19,
      tasks: "birthday",
      reminder: false,
    },
  ]);

  /*
  Delete tasks 
  when u click first it displays 1
  you want to get id that is not displayed
  tasks.filter((task)=> {tasks.id != id})
  */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  /*
  Add tasks
*/
  const anyTask = () => {
    console.log("Task added!");
  };

  return (
    <div className="App">
      <header>
        <p> Daily todos</p>
      </header>
      <h1>
        Today <span>Thur, Feb 25</span>
      </h1>
      <Tasks tasks={tasks} onDelete={deleteTask} />
      <Addtasks />
      <img src={image} alt="imageOne" />
    </div>
  );
}

export default App;
