import axios from "axios";

const baseURL = "http://localhost:3000/contracts";

export const getAll = async (code, page) => {
  try {
    let response = null;
    if (code == null && page == null) {
      response = await axios.get(`${baseURL}`);
    } else if (page == null) {
      response = await axios.get(`${baseURL}?code_like=${code}`);
    } else {
      response = await axios.get(`${baseURL}?_page=${page}&code_like=${code}`);
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
