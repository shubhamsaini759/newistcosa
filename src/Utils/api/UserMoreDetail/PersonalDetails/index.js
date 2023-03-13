import api from "../.."
import { Path } from "../../endPoints"



export const PersonalDetails = () =>{
    const url = api.get(Path.PersonalDetails)
    return url;
}