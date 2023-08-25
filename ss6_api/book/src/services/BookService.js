import axios from "axios";

export const getAll = async () => {
  try {
    const response = await axios.get("http://localhost:3000/books");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addBook = async (book) => {
  console.log(book);
  try {
    const response = await axios.post("http://localhost:3000/books", book);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/books/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/books/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const submitEdit = async (id, book) => {
  try {
    const response = await axios.put(`http://localhost:3000/books/${id}`, book);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
