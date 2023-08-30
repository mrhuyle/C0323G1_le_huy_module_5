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

export const addContract = async (contract) => {
  try {
    const response = await axios.post(`${baseURL}`, contract);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getContractById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editContract = async (contract) => {
  try {
    const response = await axios.put(`${baseURL}/${contract.id}`, contract);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
