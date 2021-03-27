import axios from "axios";

const api = axios.create({
  baseURL: "https://api.easyfront.cloud/",
  // baseURL: "http://192.168.0.11:3333",
});

export default api;
