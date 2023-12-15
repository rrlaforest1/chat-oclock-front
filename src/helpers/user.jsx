import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const getUserInfos = async (id) => {
  try {
    const response = axios.get(`${baseURL}/api/user/verify`, id);
    console.log("resposne", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
