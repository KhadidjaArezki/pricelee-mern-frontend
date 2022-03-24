import { useSelector } from 'react-redux'
import PaginatedResults from './PaginatedResults'

const SearchResults = ({ itemsPerPage }) => {
  const search = useSelector(({ search }) => search)
  const isReceived = search.isReceived
  const results = search.results

  const showNotReceived = () => 
    <div className="not-received">
      <p>Your search results will appear here.</p>
    </div>
  
  const showResults = (results, itemsPerPage) => 
    <PaginatedResults
      results={results}
      itemsPerPage={itemsPerPage}
    />
 
  return (
    <div className="search-results-wrapper">
      { isReceived ?  showResults(results, itemsPerPage) : showNotReceived() }
    </div>
  )
}

export default SearchResults