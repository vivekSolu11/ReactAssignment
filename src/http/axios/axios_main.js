import axios from "axios";

const axiosMain = axios.create({
  baseURL: "http://localhost:3000",
  
  headers: {
    'Authorization': `Bearer`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
  },
  
});
export default axiosMain;
