import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { setCredentials } from "../reducers/authReducer"
import { useLoginMutation, useSignupMutation } from "../reducers/authApiSlice"
import { setNotification } from "../reducers/notificationReducer"
import { useHistory } from "react-router-dom"

const NAVIGATE_AFTER_LOGIN_URI = "tracker"

const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [signup] = useSignupMutation()
  const [signupUser, setSignupUser] = useState("")
  const [signupPwd, setSignupPwd] = useState("")
  const [loginUser, setLoginUser] = useState("")
  const [loginPwd, setLoginPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [login] = useLoginMutation()

  useEffect(() => {
    setErrMsg("")
  }, [signupUser, signupPwd, loginUser, loginPwd])

  const handleSignup = async (event) => {
    event.preventDefault()
    try {
      const userData = await signup({
        username: signupUser,
        password: signupPwd,
      }).unwrap()
      dispatch(setCredentials({ ...userData }))
      history.push(`/${NAVIGATE_AFTER_LOGIN_URI}`)
      setSignupUser("")
      setSignupPwd("")
    } catch (err) {
      if (!err?.status) {
        // isLoading: true - until timeout
        setErrMsg("No Server Response")
      } else if (err.status === 400) {
        setErrMsg("Missing Username or password")
      } else if (err.status === 500) {
        setErrMsg("Signup failed")
      }
      dispatch(
        setNotification(
          {
            message: errMsg || err.data?.error || err.error,
            type: "error",
          },
          5
        )
      )
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const userData = await login({
        username: loginUser,
        password: loginPwd,
      }).unwrap()
      dispatch(setCredentials({ ...userData }))
      history.push(`/${NAVIGATE_AFTER_LOGIN_URI}`)
      setLoginUser("")
      setLoginPwd("")
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
      dispatch(
        setNotification(
          {
            message: errMsg || err.data?.error || err.error,
            type: "error",
          },
          5
        )
      )
    }
  }

  const handleSignupUserInput = (event) => setSignupUser(event.target.value)
  const handleSignupPwdInput = (event) => setSignupPwd(event.target.value)
  const handleLoginUserInput = (event) => setLoginUser(event.target.value)
  const handleLoginPwdInput = (event) => setLoginPwd(event.target.value)

  return (
    <div id="signup">
      <main>
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignup}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="username"
              value={signupUser}
              onChange={handleSignupUserInput}
              placeholder="User name"
              required={true}
            />
            <input
              type="password"
              name="password"
              value={signupPwd}
              onChange={handleSignupPwdInput}
              placeholder="Password"
              required={true}
            />
            <button>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="text"
              id="username"
              value={loginUser}
              onChange={handleLoginUserInput}
              placeholder="username"
              required={true}
            />
            <input
              type="password"
              id="password"
              value={loginPwd}
              onChange={handleLoginPwdInput}
              placeholder="Password"
              required={true}
            />
            <button>Login</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Signup
