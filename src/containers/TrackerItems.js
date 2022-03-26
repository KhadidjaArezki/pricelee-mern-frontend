import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTracker } from '../reducers/trackerReducer'
import PaginatedTracker from './PaginatedTracker'

const TrackerItems = ({ itemsPerPage }) => {
  const user = useSelector(({ user }) => user)
  const token = user.token
  const isLogged = user.username && user.token
  const tracker = useSelector(({ tracker }) => tracker)
  const items = tracker.items
  console.log(items);

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTracker(token))
  }, [])

  const showNotLogged = () =>
    <div className="not-received">
      <p>Login to see your tracked products</p>
      <button className="cta cta-sm">
        <a href='/signup'>Login</a>
      </button>
    </div>
  
  const showItems = () => {
    if (items.length === 0) {
      return (
        <div className="not-received">
          <p>Your tracked products will appear here.</p>
          <button className="cta cta-sm">
            <a href='/search'>Start tracking</a>
          </button>
        </div>
      )
    }
    return (
      <PaginatedTracker
        itemsPerPage={ itemsPerPage }
      />
    )
  }

  return (
    <div className="items-wrapper">
      { isLogged ? showItems() : showNotLogged() }
    </div>
  )

}

export default TrackerItems