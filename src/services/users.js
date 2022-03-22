const axios = require('axios')
require('dotenv').config()

const baseUrl = process.env.BASE_USERS_URL

const createUser = async (userObject) => {
  const response = await axios.post(baseUrl, userObject)
  return response.data
}

export default {
  createUser
}