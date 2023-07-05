import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./reducers/searchReducer"
import trackerReducer from "./reducers/trackerReducer"
import notificationReducer from "./reducers/notificationReducer"
import authReducer from "./reducers/authReducer"
import { apiSlice } from "./reducers/apiSlice"

const store = configureStore({
  reducer: {
    search: searchReducer,
    tracker: trackerReducer,
    notification: notificationReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // This required for RTK Query to cache results
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
