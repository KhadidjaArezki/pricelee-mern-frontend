const axios = require('axios')
require('dotenv').config()

const baseUrl = process.env.BASE_PRODUCTS_URL

const searchStores = async (searchObject) => {
  const response = await axios.post(baseUrl, searchObject)
  return response.data
}

export default {
  searchStores
}
