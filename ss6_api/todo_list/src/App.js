import { useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";
import * as todoService from "./services/TodoService";

function App() {
  const [todosList, setTodosList] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    const result = await todoService.getAll();
    setTodosList((prev) => result);
    console.log(result);
  };
  return (
    <>
      <h1>Todo List</h1>
      <form>
        <div>
          <input type="text" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {todosList.map((todo) => {
        console.log(todo);
        return <Todo key={todo.id} todo={todo}></Todo>;
      })}
    </>
  );
}

export default App;
