const axios = require('axios')

const baseUrl = process.env.BASE_TRACKERS_URL

const getAll = async () => {
  const config = {
    headers: { Authorization: `bearer ${ token }` },
  }
  const response = await axios.get(baseUrl, config)
}

export default {
  getAll
}