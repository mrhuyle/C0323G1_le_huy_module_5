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

export const addCustomer = async (customer) => {
  try {
    const response = await axios.post(`${baseURL}`, customer);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomerById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCustomer = async (customer) => {
  try {
    const response = await axios.put(`${baseURL}/${customer.id}`, customer);
    return response;
  } catch (error) {
    console.log(error);
  }
};
