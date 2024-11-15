import AddItem from "./components/add-item";
import "./styles.css";
import "./defaults.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import ViewItems from "./components/view-items";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("todo-list"));
    if (temp) {
      setTodoList(temp);
    } else {
      localStorage.setItem("todo-list", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    console.log("List: ", todoList);
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="en-Oxanium bg-dark text-light hd-100 overflow-auto no-scrollbar">
      <h1 className="text-center p-4">Simple ToDo React App</h1>
      <AddItem list={todoList} setList={setTodoList} />
      <ViewItems list={todoList} setList={setTodoList} />
    </div>
  );
}

export default App;
