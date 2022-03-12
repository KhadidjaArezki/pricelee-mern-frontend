import { useState } from 'react'
import PaginatedResults from './PaginatedResults'

const SearchResults = ({ results, itemsPerPage }) => {
  const [isReceived, setReceived] = useState(true)

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