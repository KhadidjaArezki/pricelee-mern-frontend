const axios = require('axios')
import { useSelector } from 'react-redux'

const token = useSelector(({ user }) => user.token)
const baseUrl = process.env.REACT_APP_BASE_TRACKERS_URL

const getAll = async () => {
  const config = {
    headers: { Authorization: `bearer ${ token }` },
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const trackProduct = async (productObject) => {
  const config = {
    headers: { Authorization: `bearer ${ token }` },
  }

  const response = await axios.post(baseUrl, productObject, config)
  return response.data
}

export default {
  getAll,
  trackProduct
}