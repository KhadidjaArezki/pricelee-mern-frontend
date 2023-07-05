import { createSlice } from "@reduxjs/toolkit"

const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    items: [],
    currentItems: [],
    itemsOffset: 0,
  },
  reducers: {
    setTracker(state, action) {
      return {
        ...state,
        items: action.payload,
      }
    },
    setCurrentItems(state, action) {
      return {
        ...state,
        currentItems: action.payload,
      }
    },
    setItemsOffset(state, action) {
      return {
        ...state,
        itemsOffset: action.payload,
      }
    },
    appendItem(state, action) {
      state.items.push(action.payload)
    },
    updateDesiredPrice(state, action) {
      const updatedAlert = action.payload
      const id = updatedAlert.alertId
      return {
        ...state,
        items: state.items.map((item) =>
          item.alertId !== id ? item : updatedAlert
        ),
      }
    },
    removeAlert(state, action) {
      const id = action.payload.id
      return {
        ...state,
        items: state.items.filter((item) => item.alertId !== id),
      }
    },
  },
})

export const {
  setTracker,
  setCurrentItems,
  setItemsOffset,
  appendItem,
  updateDesiredPrice,
  removeAlert,
} = trackerSlice.actions

export const selectTrackerItems = (state) => state.tracker.items
export const selectTrackerCurrentItems = (state) => state.tracker.currentItems
export const selectTrackerItemsOffset = (state) => state.tracker.itemsOffset
export default trackerSlice.reducer
