import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import searchReducer from './reducers/searchReducer'
import trackerReducer from './reducers/trackerReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    tracker: trackerReducer
  }
})

export default store