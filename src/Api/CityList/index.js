import axios from "axios";

export const CityList = async (id) => {
  const url = await axios.get(
    "http://13.233.130.119/CommonType/GetByCity?StateId=" + id
  );
  const transformedData = url?.data?.map((x) => ({
    name: x?.CityName,
    id: x?.CityId,
  }));
  return transformedData;
};
