import api from "..";
import { Path } from "../endPoints";

export const Register = async (data) => {
  const url = await api.put(Path.Register,data);
  return url;
};
