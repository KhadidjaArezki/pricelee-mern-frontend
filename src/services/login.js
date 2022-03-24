const axios = require('axios')

const baseUrl = process.env.REACT_APP_BASE_LOGIN_URL

const login = async (userCredentials) => {
  const response = await axios.post(baseUrl, userCredentials)
  return response.data
}

export default {
  login
}