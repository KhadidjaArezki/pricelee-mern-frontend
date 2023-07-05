import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { selectTrackerItems, selectTrackerCurrentItems, selectTrackerItemsOffset } from '../reducers/trackerReducer'
import { setCurrentItems, setItemsOffset } from '../reducers/trackerReducer'
import TrackerItem from '../components/TrackerItem'
import Pagination from '../components/Pagination'

const PaginatedTracker = ({ itemsPerPage }) => {
  const items = useSelector(selectTrackerItems)
  const currentItems = useSelector(selectTrackerCurrentItems)
  const itemsOffset = useSelector(selectTrackerItemsOffset)

  const dispatch = useDispatch()

  useEffect(() => {
    const endOffset = itemsOffset + itemsPerPage;
    dispatch(setCurrentItems(
      items.slice(itemsOffset, endOffset)
    ))
  }, [itemsOffset , items])

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % items.length
    dispatch(setItemsOffset(newOffset))
  }

  return (
    <>
      <div className="tracker-items">
        {
          currentItems && currentItems.map((item, index) =>
            <TrackerItem
              key={ index }
              item={ item }
            />
          )
        }
      </div>
      <Pagination
        pageCount={Math.ceil(items.length / itemsPerPage)}
        handlePageClick={ handlePageClick }
      />
    </>
  )
}
export default PaginatedTracker
