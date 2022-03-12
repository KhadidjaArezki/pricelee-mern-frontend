import { useState, useEffect } from "react"
import SearchResult from '../components/SearchResult'
import Pagination from "../components/Pagination"

const PaginatedResults = ({ results, itemsPerPage }) => {
  const [currentResults, setCurrentResults] = useState(null)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentResults(results.slice(itemOffset, endOffset))
  }, [itemOffset, itemsPerPage])

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % results.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <div className='search-results'>
        {
          currentResults && currentResults.map(result =>
            <SearchResult result={result}/>
          )
        }
      </div>
      <Pagination
        pageCount={Math.ceil(results.length / itemsPerPage)}
        handlePageClick={handlePageClick}
      />
    </>
  ) 
}

export default PaginatedResults