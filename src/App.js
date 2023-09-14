import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="flex justify-center items-center mt-8">To Do App</h1>
      <div className="flex justify-center">
        <input
          className="border-solid border-2	hover:border-2 hover:border-sky-500 border-gray-200 "
          placeholder="Add Task"
        />
        <button className="bg-red-100 ml-2 px-2 rounded">add</button>
      </div>
      <table class="table-auto m-9 mx-auto">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
