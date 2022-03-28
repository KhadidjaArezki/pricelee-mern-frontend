import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'

const LogoutButton = () => {
  const user = useSelector(({ user }) => user)
  const isLogged = user.username && user.token
  const logoutButtonRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    if ( !isLogged ) {
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
    <button
      id="logout"
      className='hidden'
      ref={ logoutButtonRef }
      onClick={handleLogout}
    >
      <a href="/">Logout</a>
    </button>
  )
}

export default LogoutButton