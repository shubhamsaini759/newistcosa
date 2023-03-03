import api from "../.."
import { Path } from "../../endPoints"


export const ProfessionalInfo = async (data) =>{
    const url = await api.post(Path.professionalInfo,data)
    return url;
}