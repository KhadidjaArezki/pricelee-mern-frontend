import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import UserIcon from '../components/UserIcon'

const User = () => {
  return (
    <ul className="user-area">
      <LoginButton/>
      <LogoutButton/>
      <UserIcon/>
    </ul>
  )
}

export default User
