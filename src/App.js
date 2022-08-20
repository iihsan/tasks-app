import "./styles/App.scss";
import { useState } from "react";
import TaskList from "./components/Task/List";
import TaskForm from "./components/Task/Form";
import TaskInfo from "./components/Task/Footer";

const App = () => {
  var storedNames = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(storedNames ? storedNames : []);
  const [task, setTask] = useState(null);
  const [update, setUpdate] = useState(null);

  const states = {
    tasks,
    setTasks,
    task,
    setTask,
    update,
    setUpdate,
  };

  return (
    <section className="container">
      <div className="col-xl-5 col-md-8 px-5 py-3 mt-3 task-container">
        <p className="task-title my-2">
          E<span style={{ color: "#f37658" }}>Sirius</span> Task App
        </p>
        <TaskForm
          state={{
            task: [task, setTask],
            tasks: [tasks, setTasks],
            update: [update, setUpdate],
          }}
        />
        <TaskList
          state={{
            tasks: [tasks, setTasks],
            update: [update, setUpdate],
          }}
        />
        <TaskInfo
          state={{
            tasks: [tasks, setTasks],
          }}
        />
      </div>
    </section>
  );
};

export default App;
