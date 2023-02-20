import api from "..";
import { Path } from "../endPoints";

export const StateList = async (id) => {
  const url = await api .get(Path.State + id)
  const transformedData = url?.data?.map((x) => ({
    name: x?.StateName,
    id: x?.StateId,
  }));
  return transformedData;
};
