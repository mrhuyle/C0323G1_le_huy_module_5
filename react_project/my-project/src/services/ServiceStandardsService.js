import axios from "axios";

const baseURL = `http://localhost:3000/serviceStandards`;

export const getAll = async () => {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
