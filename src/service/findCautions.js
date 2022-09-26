import axios from 'axios'

const CautionFinder = async () => {
  try {
    const url = `http://localhost:3003/findAllCautions`
    const response = await axios.get(url)
    return response
  } catch (error) {
    console.log(error)
    return false
  }
}

export default async () => await CautionFinder()
