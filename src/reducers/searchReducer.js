import { createSlice } from '@reduxjs/toolkit'
import productsService from '../services/products'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    keywords: '',
    filters: {
      sortOrder: "PricePlusShippingLowest"
    },
    results: [],
    isReceivedResults: false,
    currentPageResults: null,
    resultsOffset: 0
  },
  reducers: {
    setResults(state, action) {
      return {
        ...state,
        results: action.payload,
        isReceivedResults: true
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
    setCurrentPageResults(state, action) {
      return {
        ...state,
        currentPageResults: action.payload
      }
    },
    setResultsOffset(state, action) {
      return {
        ...state,
        resultsOffset: action.payload
      }
    }
  }
})

export const { setResults,
              setSearchFilters,
              setSearchKeywords,
              setCurrentPageResults,
              setResultsOffset
            } = searchSlice.actions

export const getResults = (searchObject) => {
  return async (dispatch) => {
    const results = await productsService.search(searchObject)
    dispatch(setResults(results))
  }
}

export default searchSlice.reducer
