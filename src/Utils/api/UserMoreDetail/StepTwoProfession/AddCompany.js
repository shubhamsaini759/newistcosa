import api from "../.."
import { Path } from "../../endPoints";

export const AddCompany = async(data) =>{
    const url = await api.post(Path.addCompany,data)
    return url;
}