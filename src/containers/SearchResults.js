import { useState } from "react"

const SearchResults = ({ results }) => {
  const [isReceived, setReceived] = useState(false)

  const showNotReceived = () => 
    <div className="not-received">
      <p>Your search results will appear here.</p>
    </div>
  
  const showResults = () => 
    <div></div>

  return (
    <div className="search-results">
      { isReceived ?  showResults() : showNotReceived() }
    </div>
  )
}

export default SearchResults