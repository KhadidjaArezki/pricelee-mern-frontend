import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/users'
import loginService from '../services/login'
import jwt_decode from "jwt-decode";

const storedUser = JSON.parse(localStorage.getItem('USER'))

const getStoredUsername = () => {
  return storedUser ? storedUser.username : ''
}

const getStoredUserToken = () => {
  return storedUser ? storedUser.token : ''
}

const getTokenCreationDate = () => {
  return storedUser ? storedUser.tokenCreationDate : 0
}

const initialState = {
  username: getStoredUsername(),
  token: getStoredUserToken(),
  tokenCreationDate: getTokenCreationDate()
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(_, action) {
      localStorage.setItem('USER', JSON.stringify({
        username: action.payload.username,
        token: action.payload.token,
        tokenCreationDate: jwt_decode(action.payload.token).exp
      }))
    },
    getUser() {
      return JSON.parse(localStorage.getItem('USER'))
    },
    removeUser() {
      localStorage.removeItem('USER')
      return initialState
    }
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
    dispatch(getUser())
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
    dispatch(getUser())
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(removeUser())
  }
}

export default userSlice.reducer