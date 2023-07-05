import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, selectCurrentToken } from '../reducers/authReducer'
import { useLogoutMutation } from '../reducers/authApiSlice'
import { resetCredentials } from '../reducers/authReducer'

const LogoutButton = () => {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const isLogged = user && token
  const logoutButtonRef = useRef()
  const dispatch = useDispatch()
  const [ logout, { isLoaading } ] = useLogoutMutation()

  useEffect(() => {
    if ( !isLogged ) {
      logoutButtonRef.current.classList.add('hidden')
    }
    else {
      logoutButtonRef.current.classList.remove('hidden')
    }
  }, [ user ])

  const handleLogout = async () => {
    await logout().unwrap()
    dispatch(resetCredentials())
  }

  return (
    <button
      id="logout"
      className='hidden'
      ref={ logoutButtonRef }
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default LogoutButton
