import axios from "axios";

const baseURL = "http://localhost:3000/customers";

export const getAll = async (name, page) => {
  try {
    let response = null;
    if (name == null && page == null) {
      response = await axios.get(`${baseURL}`);
    } else if (page == null) {
      response = await axios.get(`${baseURL}?name_like=${name}`);
    } else {
      response = await axios.get(`${baseURL}?_page=${page}&name_like=${name}`);
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteObject = async (object) => {
  try {
    const id = object.id;
    const response = await axios.delete(`${baseURL}/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
