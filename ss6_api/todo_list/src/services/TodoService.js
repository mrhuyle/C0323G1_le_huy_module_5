import axios from "axios";

export const getAll = async () => {
  try {
    const response = await axios.get("http://localhost:3000/todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (newTodo) => {
  try {
    const response = await axios.post("http://localhost:3000/todos", newTodo);
    if (response.status === 201) {
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
