import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPageResults, setResultsOffset } from '../reducers/searchReducer'
import SearchResult from '../components/SearchResult'
import Pagination from '../components/Pagination'

const PaginatedResults = ({ itemsPerPage }) => {
  const search = useSelector(({ search }) => search)
  const results = search.results
  const currentResults = search.currentPageResults
  const resultsOffset = search.resultsOffset

  const dispatch = useDispatch()

  useEffect(() => {
    const endOffset = resultsOffset + itemsPerPage;
    dispatch(setCurrentPageResults(
      results.slice(resultsOffset, endOffset)
    ))
  }, [resultsOffset , results])

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % results.length
    dispatch(setResultsOffset(newOffset))
  }

  return (
    <>
      <div className='search-results'>
        {
          currentResults && currentResults.map((result, index) =>
            <SearchResult
              key={ index }
              result={ result}
            />
          )
        }
      </div>
      <Pagination
        pageCount={Math.ceil(results.length / itemsPerPage)}
        handlePageClick={ handlePageClick }
      />
    </>
  ) 
}

export default PaginatedResults