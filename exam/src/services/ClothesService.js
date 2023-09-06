import axios from "axios";

const baseURL = "http://localhost:8080/api/clothes";

export const getAll = async (page, name, type) => {
  try {
    let response = null;
    if (name == null && type == null) {
      response = await axios.get(`${baseURL}?page=${page}`);
    } else if (type == null) {
      response = await axios.get(
        `${baseURL}?name_like=${name}&_sort=quantity&_order=asc`
      );
    } else if (name == null) {
      response = await axios.get(
        `${baseURL}?type_like=${type}&_sort=quantity&_order=asc`
      );
    }
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCloth = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addCloth = async (cloth) => {
  console.log(cloth);
  try {
    const response = await axios.post(`${baseURL}`, cloth);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getClothById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editCloth = async (cloth) => {
  try {
    const url = baseURL + "/" + cloth.id;
    console.log(url);
    console.log(cloth);
    const response = await axios({
      method: "put",
      url: url,
      data: cloth,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
