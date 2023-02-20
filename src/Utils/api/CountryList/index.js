import api from "../";
import { Path } from "../endPoints";

export const CountryList = async () => {
  const url = await api .get(Path.Country);
  const transformedData = url?.data?.map((x) => ({
    name: x?.countryName,
    id: x?.countryId,
  }));
  return transformedData;
};
