import axios from 'axios'
import { hostURL } from '../libs/util'

const baseUrl = `${hostURL}/api/login`

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }