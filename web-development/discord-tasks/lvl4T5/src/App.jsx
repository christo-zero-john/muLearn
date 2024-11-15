import AddItem from "./components/add-item";
import "./styles.css";
import "./defaults.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    console.log("List: ", todoList);
  }, [todoList]);

  return (
    <div className="en-Oxanium">
      <AddItem list={todoList} setList={setTodoList} />
    </div>
  );
}

export default App;
