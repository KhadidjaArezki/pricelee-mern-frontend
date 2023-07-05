// Extend apiSlice
import { apiSlice } from "./apiSlice"
import { setCredentials } from "../reducers/authReducer"

const LOGIN_URI = "/login"
const LOGOUT_URI = "/tokens"
const SIGNUP_URI = "/users"

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: LOGIN_URI,
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: LOGOUT_URI,
        method: "DELETE",
      })
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: SIGNUP_URI,
        method: "POST",
        body: { ...credentials },
      }),
    })
  }),
})

export const {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation // auto-generated hooks
} = authApiSlice

