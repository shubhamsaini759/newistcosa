import axios from "axios";
import api from "../";
import { Path } from "../endPoints";

export const CountryList = async () => {
  // const url = await api .get(Path.Country);
  const url = await axios.get("http://13.233.130.119/CommonType/GetByCountry");
  const transformedData = url?.data?.map((x) => ({
    name: x?.countryName,
    id: x?.countryId,
  }));
  return transformedData;
};
