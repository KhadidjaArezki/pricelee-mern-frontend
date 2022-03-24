import { createSlice } from '@reduxjs/toolkit'
import trackerService from '../services/trackers'

const trackerSlice = createSlice({
  name: 'tracker',
  initialState: {
    tracker: [],
    newTracker: {}
  },
  reducers: {
    setTracker(state, action) {

    }
  }
})