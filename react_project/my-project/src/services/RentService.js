import axios from "axios";

const baseURL = "http://localhost:3000/services";

export const getAll = async (name, page) => {
  try {
    let response = null;
    if (name == null && page == null) {
      response = await axios.get(`${baseURL}`);
    } else {
      response = await axios.get(`${baseURL}?_page=${page}&name_like=${name}`);
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
