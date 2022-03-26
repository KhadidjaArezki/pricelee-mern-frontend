import { createSlice } from '@reduxjs/toolkit'
import trackerService from '../services/trackers'

const trackerSlice = createSlice({
  name: 'tracker',
  initialState: {
    items: [],
    currentItems: [],
    itemsOffset: 0
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
    },
    updateDesiredPrice(state, action) {
      const updatedAlert = action.payload
      const id = updatedAlert.alertId
      return state.items.map(item => 
        item.alertId !== id ?
          item
          : updatedAlert
      )
    },
    removeAlert(state, action) {
      const id = action.payload.id
      return state.items.filter(item => 
        item.alertId !== id)
    }
  }
})

export const { setTracker, setCurrentItems,
              setItemsOffset, appendItem,
              updateDesiredPrice, removeAlert
} = trackerSlice.actions

export const getTracker = (token) => {
  return async (dispatch) => {
    const tracker = await trackerService.getAll(token)
    dispatch(setTracker(tracker))
  }
}

export const trackProduct = (productObject, token) => {
  return async (dispatch) => {
    const newItem = await trackerService.createNew(productObject, token)
    dispatch(appendItem(newItem))
  }
}

export const updateAlert = (id, alertToUpdate, token) => {
  return async (dispatch) => {
    const updatedAlert = await trackerService.update(id, alertToUpdate, token)
    dispatch(updateDesiredPrice(updatedAlert))
  }
}

export const deleteAlert = (id, token) => {
  return async (dispatch) => {
    const deletedAlert = await trackerService.remove(id, token)
    dispatch(removeAlert(deletedAlert))
  }
}

export default trackerSlice.reducer