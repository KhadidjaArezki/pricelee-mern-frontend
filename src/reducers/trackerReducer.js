import { createSlice } from '@reduxjs/toolkit'
import trackerService from '../services/trackers'

const trackerSlice = createSlice({
  name: 'tracker',
  initialState: {
    items: [],
    currentItems: [],
    itemsOffset: 0,
    newItem: {}
  },
  reducers: {
    setTracker(state, action) {
      return {
        ...state,
        items: action.payload
      }
    },
    setCurrentItems(state, action) {
      return {
        ...state,
        currentItems: action.payload
      }
    },
    setItemsOffset(state, action) {
      return {
        ...state,
        itemsOffset: action.payload
      }
    },
    appendItem(state, action) {
      state.items.push(action.payload)
    }
  }
})

export const { setTracker, setCurrentItems,
              setItemsOffset, appendItem
            } = trackerSlice.actions

export const getTracker = () => {
  return async (dispatch, getState) => {
    const token = getState().user.token
    const tracker = await trackerService.getAll(token)
    dispatch(setTracker(tracker))
  }
}

export const trackProduct = (productObject) => {
  return async (dispatch, getState) => {
    const token = getState().user.token
    const newItem = await trackerService.createNew(productObject, token)
    dispatch(appendItem(newItem))
  }
}

export default trackerSlice.reducer