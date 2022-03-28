import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import searchReducer from './reducers/searchReducer'
import trackerReducer from './reducers/trackerReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    tracker: trackerReducer,
    notification: notificationReducer
  }
})

export default store