const axios = require('axios')
require('dotenv').config()

const baseUrl = process.env.BASE_LOGIN_URL

const login = async (userCredentials) => {
  const response = await axios.post(userCredentials)
  return response.data
}

export default {
  login
}