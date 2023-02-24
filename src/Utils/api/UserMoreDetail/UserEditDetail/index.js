import axios from "axios";
import api from "../..";
import { Path } from "../../endPoints";

export const userEditDetail = async (data) => {
  const url = await api.put(Path.userEditDetail, data);
  // const url = await axios.put(
  //   "http://192.168.29.113/ISTCOSA.API/User/PutUserMoreDetails?userId=1009",
  //   data
  // );
  return url;
};


