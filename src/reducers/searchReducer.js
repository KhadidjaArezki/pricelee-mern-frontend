import { createSlice } from '@reduxjs/toolkit'
import productsService from '../services/products'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    keywords: '',
    filters: {},
    results: [],
    isReceived: false
  },
  reducers: {
    setResults(state, action) {
      return {
        ...state,
        results: action.payload,
        isReceived: true
      }
    },
    setSearchKeywords(state, action) {
      return {
        ...state,
        keywords: action.payload
      }
    },
    setSearchFilters(state, action) {
      return {
        ...state,
        filters: action.payload
      }
    },
  }
})

export const { setResults, setSearchFilters, setSearchKeywords } = searchSlice.actions

export const getResults = (searchObject) => {
  return async (dispatch) => {
    const results = await productsService.search(searchObject)
    dispatch(setResults(results))
  }
}

export default searchSlice.reducer