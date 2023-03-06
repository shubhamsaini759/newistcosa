import axios from "axios";


export const ImageChange = async (data) =>{
    const url = await axios.put('http://192.168.29.113/ISTCOSA.API/User/ChangeProfilePicture?userId=1000',data)
        return url;
    
}