import axios from "axios";

export const getAll = () => {
  try {
    const res = axios.get(`http://localhost:3000/users`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => {
  try {
    const res = axios.delete(`http://localhost:3000/users/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
