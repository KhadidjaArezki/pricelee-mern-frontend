import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setCredentials, resetCredentials } from "./authReducer"

const BASE_URL = process.env.REACT_APP_BASE_URL
const REFRESH_URI = "/tokens"

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // Send back http-only secure cookie with each query
  credentials: "include",
  // Attach token to headers on each query
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  },
})

// Create a custom query function to wrap base query,
// so if the latter fails, we can resend the request after getting a new token
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  // If token has expired, send a refreshToken request
  if (result?.error?.status === 403 || result?.error?.status === 401) {
    console.log("Sending refresh token to get new access token")
    const refreshResult = await baseQuery(REFRESH_URI, api, extraOptions)
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      // store new token
      api.dispatch(setCredentials({ username: user, ...refreshResult.data }))
      // Retry original request with new token
      result = await baseQuery(args, api, extraOptions)
    } else {
      // If user is not authorized to get token, log out
      await baseQuery(
      { url: REFRESH_URI,
        method: "DELETE"
      },
      api,
      extraOptions)
      api.dispatch(resetCredentials())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // Not yet specified. Extend api slices in authApiReducer
  // to separate auth functionality from other features
  endpoints: (builder) => ({}),
})
