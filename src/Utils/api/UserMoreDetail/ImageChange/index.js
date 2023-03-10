import axios from "axios";
import api from "../..";
import { Path } from "../../endPoints";


export const ImageChange = async (data) =>{
    const url = await api.put( Path.changeImage,data)
        return url;
    
}