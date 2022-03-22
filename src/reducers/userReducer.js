import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/users'
import loginService from '../services/login'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    token: ''
  },
  reducers: {
    setUser(_, action) {
      localStorage.setItem('USER', JSON.stringify({
        username: action.payload.username,
        token: action.payload.token
      }))
      dispatch(getUser())
    },
    getUser() {
      return JSON.parse(localStorage.getItem('USER'))
    },
    removeUser() {
      localStorage.removeItem('USER')
      return {
        username: '',
        token: ''
      }
    },
  }
})

export const { setUser, getUser, removeUser } = userSlice.actions

export const createUser = (username, password) => {
  return async (dispatch) => {
    const user = await userService.createUser({
      username,
      password
    })
    dispatch(setUser({
      username: user.username,
      token: user.token
    }))
  }
}

export const loginUser = (username, password) => {
  return async (dispatch) => {
    const user = await loginService.login({
      username,
      password
    })
    dispatch(setUser({
      username: user.username,
      token: user.token
    }))
  }
}
export default userSlice.reducer