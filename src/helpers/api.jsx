import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchData = async () => {
  try {
    const apiCall = axios.get(API_URL);
    return apiCall;
  } catch (error) {
    console.log(error);
  }
};
