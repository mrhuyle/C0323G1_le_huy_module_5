import axios from "axios";

const baseUrl = "http://localhost:8080/api/types/";
export const getAllTypes = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTypeByID = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
