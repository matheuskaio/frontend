import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-backend8.herokuapp.com"
});

export default api;
