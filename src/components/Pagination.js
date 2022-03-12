import ReactPaginate from 'react-paginate'

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
          className='pagination'
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination