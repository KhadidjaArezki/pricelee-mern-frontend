const axios = require('axios')

const baseUrl = process.env.REACT_APP_BASE_USERS_URL

const createUser = async (userObject) => {
  const response = await axios.post(baseUrl, userObject)
  return response.data
}

export default {
  createUser
}