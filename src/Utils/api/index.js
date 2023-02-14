import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.29.210/ISTCOSA.API/",
    headers: {
        accept: "application/json",
        "Content-Type": "application/json"
    }
});