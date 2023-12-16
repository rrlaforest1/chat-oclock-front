import axios from "axios";

const myApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

myApi.getUserInfos = function () {
  return myApi
    .get("/api/user/verify")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

myApi.getUsers = function () {
  return myApi
    .get("/api/user")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

myApi.getMessages = function () {
  return myApi
    .get("/api/message")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

myApi.postMessage = function (message) {
  return myApi
    .post("/api/message", message)
    .then((response) => response)
    .catch((error) => error);
};

myApi.register = function (userInfos) {
  return myApi
    .post("/api/auth/register", userInfos)
    .then((response) => response)
    .catch((error) => error);
};

myApi.connect = function (userInfos) {
  return myApi
    .post("/api/auth/connect", userInfos)
    .then((response) => response)
    .catch((error) => {
      console.log("connect error", error);
      return error;
    });
};

myApi.interceptors.request.use((request) => {
  const token = localStorage.getItem("authToken");
  if (!token) return request;
  request.headers.authorization = `Bearer ${token}`;
  return request;
});

export default myApi;
