import axios from "axios";
import api from "..";
import { Path } from "../endPoints";

export const UserMoreDetail = async () => {
  // const url = await api .get(Path.userMoreDetail)
  const url = await axios.get(
    "http://13.233.130.119/User/EditUserMoreDetails/1009"
  );

  const transformedData = url?.data;
  console.log(transformedData,'userapidetail')
  return transformedData;
};
