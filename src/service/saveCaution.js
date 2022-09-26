import axios from 'axios'

const saveCaution = async data => {
  try {
    const url = `http://localhost:3003/cautionRegister`
    await axios.post(url, data)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export default saveCaution
