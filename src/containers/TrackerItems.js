import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser, selectCurrentToken } from '../reducers/authReducer'
import { useGetTrackerQuery } from '../reducers/trackerApiSlice'
import { setTracker, selectTrackerItems } from '../reducers/trackerReducer'
import { setNotification } from '../reducers/notificationReducer'
import PaginatedTracker from './PaginatedTracker'

const TrackerItems = ({ itemsPerPage }) => {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const isLogged = user && token
  const items = useSelector(selectTrackerItems)
  const { data } = useGetTrackerQuery()
  const dispatch = useDispatch()
  
  useEffect(async () => {
    try {
      data && dispatch(setTracker([...data ]))
    } catch(err) {
      console.log(err)
      dispatch(setNotification({
        message: "An error occured while getting your data",
        type: 'error'
      }, 5))
    }
  }, [data])

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
