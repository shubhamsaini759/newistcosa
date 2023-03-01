import axios from "axios";
import api from "..";
import { Path } from "../endPoints"


export const UserProfileDetails = async () =>{
    const url = await api.get(Path.userProfile);
    const transformedData = url?.data;
    return transformedData;
}