import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.29.113/ISTCOSA.API/",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
