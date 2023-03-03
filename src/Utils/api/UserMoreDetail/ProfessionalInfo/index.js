import axios from "axios";
import api from "../.."
import { Path } from "../../endPoints"


export const ProfessionalInfo = async (data) =>{
    // const url = await api.post(Path.professionalInfo,data)
    const url = await axios.post('http://192.168.29.113/ISTCOSA.API/User/AddProfessionalInfo',data)
    return url;
}