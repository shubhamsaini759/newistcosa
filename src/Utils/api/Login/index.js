import api from "..";
import { Path } from "../endPoints";

export const Logins = async (data) => {
  const url = await api.post(Path.UserLogin,data);
  return url;
};
