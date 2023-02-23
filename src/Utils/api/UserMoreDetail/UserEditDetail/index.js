import axios from "axios";
import api from "../..";
import { Path } from "../../endPoints";

export const userEditDetail = async (data) => {
  // const url = await api.put(Path.userEditDetail, data);
  const url = await axios.put(
    "http://13.233.130.119/User/UserPersonalEdit/1009",
    data
  );
  return url;
};
