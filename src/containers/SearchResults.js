import { useSelector } from 'react-redux'
import PaginatedResults from './PaginatedResults'

const SearchResults = ({ itemsPerPage }) => {
  const search = useSelector(({ search }) => search)
  const isReceived = search.isReceivedResults
  const results = search.results

  const showNotReceived = () => 
    <div className="not-received">
      <p>Your search results will appear here.</p>
    </div>
  
  const showResults = () => {
    if (results.length === 0) {
      return (
        <div className="not-received">
          <p>No matching results were found for your search</p>
        </div>
      )
    }
    return (
      <PaginatedResults
        itemsPerPage={itemsPerPage}
      />
    )
  }

  return (
    <div className="search-results-wrapper">
      { isReceived ?  showResults() : showNotReceived() }
    </div>
  )
}

export default SearchResults