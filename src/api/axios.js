import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5299'
});

export default instance;