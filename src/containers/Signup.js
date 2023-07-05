//import SignupForm from '../components/SignupForm'
//import LoginForm from '../components/LoginForm'
import { useDispatch } from 'react-redux'
import { useRef, useState, useEffect } from "react"
import { setCredentials } from "../reducers/authReducer"
import { useLoginMutation, useSignupMutation } from "../reducers/authApiSlice"
import { setNotification } from '../reducers/notificationReducer'
import { useHistory } from "react-router-dom"

const NAVIGATE_AFTER_LOGIN_URI = "tracker"

const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [ signup, { isLoading }] = useSignupMutation()
  const errRef = useRef()
  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [ login ] = useLoginMutation()

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd])

  const handleSignup = async (event) => {
    event.preventDefault()
    try {
      const userData = await signup({
        username: user,
        password: pwd
      }).unwrap()
      dispatch(setCredentials({ ...userData }))
      history.push(`/${NAVIGATE_AFTER_LOGIN_URI}`)
      setUser("")
      setPwd("")
    } catch (err) {
      if (!err?.status) {
        // isLoading: true - until timeout
        setErrMsg("No Server Response")
      } else if (err.status === 400) {
        setErrMsg("Missing Username or password")
      } else if (err.status === 500) {
        setErrMsg("Login failed")
      }
      dispatch(setNotification({
        message: errMsg || err.data?.error || err.error,
        type: 'error'
      }, 5))
    }
  }
  
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const userData = await login({
        username: user,
        password: pwd
      }).unwrap()
      dispatch(setCredentials({ ...userData }))
      history.push(`/${NAVIGATE_AFTER_LOGIN_URI}`)
      setUser("")
      setPwd("")
    } catch (err) {
      if (!err?.status) {
        // isLoading: true - until timeout
        setErrMsg("No Server Response")
      } else if (err.status === 400) {
        setErrMsg("Missing Username or password")
      } else if (err.status === 401) {
        setErrMsg("Unauthorized")
      } else if (err.status === 500) {
        setErrMsg("Login failed")
      }
      dispatch(setNotification({
        message: errMsg || err.data?.error || err.error,
        type: 'error'
      }, 5))
    }
  }

  const handleUserInput = (event) => setUser(event.target.value)
  const handlePwdInput = (event) => setPwd(event.target.value)
  
  return (
    <div id='signup'>
      <main>
        <input type="checkbox" id="chk" aria-hidden="true"/>
        
        <div className="signup">
          <form onSubmit={ handleSignup }>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="username" placeholder="User name" required={ true } />
            <input type="password" name="password" placeholder="Password" required={ true }/>
            <button>Sign up</button>
          </form>
        </div>
        
        <div className="login">
 
            <form onSubmit={handleLogin}>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="text" id="username" value={user} onChange={handleUserInput} placeholder="username" required={true} />
              <input type="password" id="password" value={pwd} onChange={handlePwdInput} placeholder="Password" required={true} />
              <button>Login</button>
            </form>
        
        </div>
        {/*<SignupForm/> 
        <LoginForm/>*/}
      </main>
    </div>
  )
}

export default Signup
