import api from "..";
import { Path } from "../endPoints";

export const CityList = async (id) => {
  const url = await api .get(Path.City + id)
  const transformedData = url?.data?.map((x) => ({
    name: x?.CityName,
    id: x?.CityId,
  }));
  return transformedData;
};
