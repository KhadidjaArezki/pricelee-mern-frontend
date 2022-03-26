import { useDispatch } from 'react-redux'
import { createUser } from '../reducers/userReducer'

const SignupForm = () => {
  const dispatch = useDispatch()

  const handleSignup = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    dispatch(createUser(username, password))
  }
  return (
    <div className="signup">
      <form onSubmit={ handleSignup }>
        <label htmlFor="chk" aria-hidden="true">Sign up</label>
        <input type="text" name="username" placeholder="User name" required={ true } />
        {/* <input type="email" name="email" placeholder="Email" required=""/> */}
        <input type="password" name="password" placeholder="Password" required={ true }/>
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default SignupForm