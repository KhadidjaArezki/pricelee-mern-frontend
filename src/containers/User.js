import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import UserIcon from '../components/UserIcon'

const User = () => {
  const user = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  useEffect(() => {
    if ( user.tokenCreationDate > new Date - (72 * 3600 * 1000)) {
      dispatch(logoutUser)
    }
  }, [])

  return (
    <ul className="user-area">
      <LoginButton/>
      <LogoutButton/>
      <UserIcon/>
    </ul>
  )
}

export default User