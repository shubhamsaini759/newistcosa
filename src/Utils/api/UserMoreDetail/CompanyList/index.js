import axios from "axios"
import api from "../..";
import { Path } from "../../endPoints";


export const CompanyList = async () =>{
    const url = await api.get(Path.companyList)
    // const url = await axios.get('http://192.168.29.113/ISTCOSA.API/Company');
    const transformedData = url?.data?.map((x)=>({
        value: x?.CompanyName,
        id: x?.CompanyID,
    }));
        console.log(transformedData,'listttttttttttt')
    return transformedData;

}