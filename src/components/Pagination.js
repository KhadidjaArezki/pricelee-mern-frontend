import ReactPaginate from 'react-paginate'

const Pagination = () => {
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
          className='pagination'
          breakLabel="..."
          nextLabel=">>"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={5}
          previousLabel="<<"
          renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination