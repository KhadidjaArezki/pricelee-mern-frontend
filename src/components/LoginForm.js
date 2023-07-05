import { useRef, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCredentials } from "../reducers/authReducer"
import { useLoginMutation } from "../reducers/authApiSlice"
// import { useSelector, useDispatch } from "react-redux"
// import { loginUser } from "../reducers/userReducer"
import { setNotification } from "../reducers/notificationReducer"

const NAVIGATE_AFTER_LOGIN_URI = "/tracker"

const LoginForm = () => {
  // const user = useSelector(({ user }) => user)
  const userRef = useRef()
  const errRef = useRef()
  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")

  const [login, { isLoading }] = useLoginMutation()
  // const isLogged = user.username && user.token
  const dispatch = useDispatch()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const userData = await login({ user, pwd }).unwrap()
      dispatch(setCredentials({ ...userData }))
      setUser("")
      setPwd("")
      // <Redirect from={location} to=`${NAVIGATE_AFTER_LOGIN_URI}` />
      window.location.replace(
        `${process.env.REACT_APP_FRONTEND_SERVER_URL}/${NAVIGATE_AFTER_LOGIN_URI}`
      )
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true - until timeout
        setErrMsg("No Server Response")
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or password")
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized")
      } else {
        setErrMsg("Login failed")
      }
      errRef.current.focus()
      // dispatch(
      //   setNotification({
      //     message: errMsg,
      //     type: "error",
      //   }, 3))
    }

    // const username = event.target.username.value
    // const password = event.target.password.value
    // dispatch(loginUser(username, password)).catch((error) => {
    //   dispatch(
    //     setNotification(
    //       {
    //         message: error.message,
    //         type: "error",
    //       },
    //       3
    //     )
    //   )
    // })
  }

  const handleUserInput = (event) => setUser(event.target.value)
  const handlePwdInput = (event) => setPwd(event.target.value)

  return (
    <div className="login">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <form onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            id="username"
            value={user}
            ref={userRef}
            onChange={handleUserInput}
            placeholder="username"
            required={true}
          />
          <input
            type="password"
            id="password"
            value={pwd}
            onChange={handlePwdInput}
            placeholder="Password"
            required={true}
          />
          <button>Login</button>
        </form>
      )}
    </div>
  )
}

export default LoginForm
