import api from "../.."
import { Path } from "../../endPoints"


export const ProfessionalDetails = () =>{
    const url = api.get(Path.professionalDetails);
    return url
}