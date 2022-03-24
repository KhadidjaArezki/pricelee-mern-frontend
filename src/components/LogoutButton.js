import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'

const LogoutButton = () => {
  const user = useSelector(({ user }) => user)
  const logoutButtonRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    if ( !user.username && !user.token ) {
      logoutButtonRef.current.classList.add('hidden')
    }
    else {
      logoutButtonRef.current.classList.remove('hidden')
    }
  }, [ user ])

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <li
      id="logout"
      className='hidden'
      ref={ logoutButtonRef }
      onClick={handleLogout}
    >
      <a href="/">Logout</a>
    </li>
  )
}

export default LogoutButton