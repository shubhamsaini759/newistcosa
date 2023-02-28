import axios from "axios";
import api from "..";
import { Path } from "../endPoints";

export const CityList = async (id) => {
  // const url = await api .get(Path.City + id)
  const url = await axios.get(
    "http://13.233.130.119/CommonType/GetByCity?StateId= " + id
  );
  const transformedData = url?.data?.map((x) => ({
    value: x?.CityName,
    id: x?.CityId,
  }));
  return transformedData;
};
