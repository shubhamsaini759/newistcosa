import api from "../.."
import { Path } from "../../endPoints";



export const ProfessionalEdit = async (data) =>{
    const url = await api.put(Path.ProfessionalEdit,data)
    return url;
}