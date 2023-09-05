import axios from "axios";

const baseUrl = "http://localhost:3000/types";
export const getAllTypes = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};