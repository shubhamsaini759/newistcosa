import axios from "axios";
import api from "..";
import { Path } from "../endPoints";

export const StateList = async (id) => {
  // const url = await api.get(Path.State + id);
  const url = await axios.get(
    "http://13.233.130.119/CommonType/GetByState?CountryId=" + id
  );

  const transformedData = url?.data?.map((x) => ({
    name: x?.StateName,
    id: x?.StateId,
  }));
  return transformedData;
};
