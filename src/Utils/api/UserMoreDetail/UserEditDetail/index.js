import api from "../.."
import { Path } from "../../endPoints"


export const userEditDetail = async(data) =>{
    const url = await api .get(Path.userEditDetail,data)
    return url
}