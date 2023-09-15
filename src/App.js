import "./App.css";
import { useState } from "react";

function AddTask({ onButtonClick }) {
  return (
    <button className="bg-cyan-100 ml-2 px-2 rounded" onClick={onButtonClick}>
      Add
    </button>
  );
}

function App() {
  const [task, setTask] = useState("");
  // const [addTask, setAddedTask] =useState(task);
  const [tasks, setTasks] = useState([]);
  function handleChange(event) {
    setTask(event.target.value);
  }
  function handleClick() {
    // setTasks(tasks.concat(task));
    setTasks([...tasks, task]);
    setTask('');
  }
  return (
    <div className="app">
      <h1 className="flex justify-center items-center mt-8">To Do App</h1>
      <div className="flex justify-center">
        <input
          className="border-solid border-2	hover:border-2 hover:border-sky-500 border-gray-200 "
          placeholder="Add Task"
          onChange={handleChange}
          value={task}
        />
        <AddTask onButtonClick={handleClick} />
      </div>
      <div className="tasklist">
        {tasks.map((task, i) => 
          <div className="text-black text-lg"
          key={i}>{task}</div>
        )}
      </div>
     
    </div>
  );
}

export default App;
