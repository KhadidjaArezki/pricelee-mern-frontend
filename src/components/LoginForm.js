import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'

const LoginForm = () => {
  const user = useSelector(({ user }) => user)
  const isLogged = user.username && user.token
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    dispatch(loginUser(username, password))
    .catch(error => {
      dispatch(setNotification({
        message: error.message,
        type: 'error'
      }, 3))
    })
  }

  return (
    <div className="login">
      <form onSubmit={ handleLogin }>
        <label htmlFor="chk" aria-hidden="true">Login</label>
        <input type="text" name="username" placeholder="User name" required={ true }/>
        {/* <input type="email" name="email" placeholder="Email" required=""/> */}
        <input type="password" name="password" placeholder="Password" required={ true }/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm