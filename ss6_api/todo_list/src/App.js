import { useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";
import { FormToDo } from "./components/FormToDo";
import * as todoService from "./services/TodoService";
import Swal from "sweetalert2";

function App() {
  // State List
  const [todosList, setTodosList] = useState([]);
  // State id
  const [id, setId] = useState(1);

  // Get All
  useEffect(() => {
    getAll();
  }, []);
  // Find recent max Id after newList:
  useEffect(() => {
    const maxId = todosList.reduce(
      (max, todo) => (todo.id > max ? todo.id : max),
      0
    );
    setId(maxId + 1);
  }, [todosList]);

  const getAll = async () => {
    const result = await todoService.getAll();
    setTodosList((prev) => result);
    console.log(result);
  };
  // Auto incremnetId function
  const autoIncrementId = () => {
    setId((prev) => prev + 1);
  };
  const [todo, setTodo] = useState({});
  const addTodo = async (todoValue) => {
    autoIncrementId();
    const newTodo = {
      userId: 1,
      id: id,
      title: todoValue,
      completed: true,
    };
    console.log(newTodo);
    setTodo(newTodo);
    const response = await todoService.addTodo(newTodo);
    console.log(response);
    if (response.status === 201) {
      Swal.fire({
        title: response.statusText + " successfully",
        icon: "success",
      });
    }
    getAll();
  };

  return (
    <>
      <h1>Todo List</h1>
      <FormToDo addTodo={addTodo}></FormToDo>
      {todosList.map((todo) => {
        return <Todo key={todo.id} todo={todo}></Todo>;
      })}
    </>
  );
}

export default App;
