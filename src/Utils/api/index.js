import axios from "axios";

export default axios.create({
    baseURL: "http://13.233.130.119/",
    headers: {
        accept: "application/json",
        "Content-Type": "application/json"
    }
});