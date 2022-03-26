import { useSelector } from 'react-redux'
import PaginatedTracker from './PaginatedTracker'

const TrackerItems = ({ itemsPerPage }) => {
  const user = useSelector(({ user }) => user)
  const isLogged = user.username && user.token
  const tracker = useSelector(({ tracker }) => tracker)
  const items = tracker.items

  const showNotLogged = () => 
    <>
      <p>Login to see your tracked products</p>
      <button className="cta cta-sm">
        <a href='/signup'>Login</a>
      </button>
    </>
  
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
    <div className="tracker-items-wrapper">
      { isLogged ? showItems() : showNotLogged() }
    </div>
  )

}

export default TrackerItems