const axios = require('axios')

const baseUrl = process.env.REACT_APP_BASE_TRACKERS_URL

const getAll = async (token) => {
  const config = {
    headers: { Authorization: `bearer ${ token }` },
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const createNew = async (productObject, token) => {
  const config = {
    headers: { Authorization: `bearer ${ token }` },
  }

  const response = await axios.post(baseUrl, productObject, config)
  return response.data
}

const update = async (id, alertToUpdate, token) => {
  const config = {
    headers: { Authorization: `bearer ${ token }` },
  }

  const response = await axios.put(`${ baseUrl }/${ id }`, alertToUpdate, config)
  return response.data
}

const remove = async (id, token) => {
  const config = {
    headers: { Authorization: `bearer ${ token }` },
  }

  const response = await axios.delete(`${ baseUrl }/${ id }`, config)
  return response.data
}

export default {
  getAll,
  createNew,
  update,
  remove
}