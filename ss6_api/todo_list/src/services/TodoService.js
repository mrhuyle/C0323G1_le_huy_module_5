import axios from "axios";

export const getAll = async () => {
  try {
    const result = axios.get("http://localhost:3000/todos");
    return (await result).data;
  } catch (e) {
    console.log(e);
  }
};
