import React from "react";
import axios from "axios";

export const baseURL = "http://localhost:3000/otherServices";

export const getAll = async () => {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
