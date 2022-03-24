import { useDispatch, useSelector } from 'react-redux'
import { setSearchKeywords, getResults } from '../reducers/searchReducer'
import magnifier from "../icons/magnifying-glass.png";

const SearchBox = () => {
  const search = useSelector(({ search }) => search)
  const dispatch = useDispatch()

  const handleSearchChange = (event) => {
    const searchKeywords = event.target.value
    dispatch(setSearchKeywords(searchKeywords))
  }

  const cleanFilters = (filters) => {
    for (const field in filters) {
      if (filters[field] === '') {
        delete filters[field]
      }
    }
    return filters
  }

  const handleSearch = (event) => {
    event.preventDefault()
    const searchObject = {
      keywords: search.keywords,
      ...cleanFilters({
        ...search.filters
      })
    }
    dispatch(getResults(searchObject))
  }

  return (
    <form
      className="searchbox"
      onSubmit={ handleSearch }>
      <input
        type="search"
        name='search'
        placeholder= { search.keywords || "Search..."}
        onChange={ handleSearchChange }
      />
      <button className='searchbox__btn'>
        <img src={magnifier} alt="magnifying glass"/>
      </button>
    </form>
  )
}

export default SearchBox