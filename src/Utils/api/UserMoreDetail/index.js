import api from ".."
import { Path } from "../endPoints"

export const UserMoreDetail =  async () => {
    const url = await api .get(Path.userMoreDetail)
    const transformedData = url?.data
    return transformedData
}

