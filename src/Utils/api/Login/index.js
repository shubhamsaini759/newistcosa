import api from "..";
import { Path } from "../endPoints";

export const Logins = async (data) => {
  const url = await api.get(Path.UserLogin + data);
  return url;
};
