import axios from "axios"

const cautionDelete = async (cautionId) => {
    try {
        const url = `http://localhost:3003/deleteCaution`
        const response = await axios.post(url, cautionId)
        console.log(response)
        return response
     } catch (error) {
         console.log(error)
         return false
     }
}

export default async (cautionId) => await cautionDelete(cautionId)