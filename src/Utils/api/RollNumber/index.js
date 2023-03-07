import api from "..";
import { Path } from "../endPoints";

export const RegRollNumber = async (data) => {
  const url = await api.get(Path.RollNumber + data);
  const transformedData = url?.data?.map((x) => ({
    value: x?.RollNumberID,
    id: x?.RollNumberID,
  }));
  return transformedData;
};
