import axios from "axios";

const api = axios.create({
  baseURL: "https://oministack-backend-lucas.herokuapp.com"
});

export default api;
