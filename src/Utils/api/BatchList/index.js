import axios from "axios";

export const BatchList = async () => {
  const url = await axios.get("http://13.233.130.119/Batch");
  const transformedData = url?.data?.map((item) => ({
    id: item?.BatchID,
    value: item?.BatchID,
  }));
  return transformedData;
};
