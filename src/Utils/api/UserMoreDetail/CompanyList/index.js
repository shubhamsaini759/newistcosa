import axios from "axios"


export const CompanyList = async () =>{
    const url = await axios.get('http://192.168.29.113/ISTCOSA.API/Company');
    const transformedData = url?.data?.map((x)=>({
        name: x?.CompanyName,
        id: x?.CompanyID,
    }));
    return transformedData;
}
