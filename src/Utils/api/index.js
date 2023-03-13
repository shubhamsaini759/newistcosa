import axios from "axios";

export default axios.create({
  // baseURL: "http://192.168.1.5/ISTCOSA.API/",
  baseURL: "http://13.233.130.119/",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
