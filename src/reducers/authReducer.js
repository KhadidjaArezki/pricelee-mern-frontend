import { createSlice } from "@reduxjs/toolkit"

const createCookieInHour = (cookieName, cookieValue, hourToExpire) => {
    let date = new Date();
    date.setTime(date.getTime()+(hourToExpire*60*60*1000));
    document.cookie = cookieName + " = " + cookieValue + "; expires = " +date.toGMTString();
}

const storedUserData = () => {
  const cookie = document.cookie.split(';')
  const storedUserName = cookie[0]?.split('=')[1]
  const storedUserToken = cookie[1]?.split('=')[1]
  console.log('cookie : ', storedUserName + '\n' + storedUserToken)
  return [ storedUserName, storedUserToken ]
}
const [ storedUserName, storedUserToken ] = storedUserData()

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUserName || null,
    token: storedUserToken || null
  },
  reducers: {
    setCredentials: (state, action) => {
      const { username, token } = action.payload
      state.user = username
      state.token = token
      createCookieInHour('username', username, 12);
      createCookieInHour('token', token, 12);
    },
    resetCredentials: (state, _) => {
      state.user = null
      state.token = null
      document.cookie.split(";").forEach((c) => {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
      })
    },
  },
})

export const { setCredentials, resetCredentials } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token

