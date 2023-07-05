import { useRef, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectCurrentUser, selectCurrentToken } from "../reducers/authReducer"

const LoginButton = () => {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const isLogged = user && token
  const logintButtonRef = useRef()

  useEffect(() => {
    if (isLogged) {
      logintButtonRef.current.classList.add("hidden")
    } else {
      logintButtonRef.current.classList.remove("hidden")
    }
  }, [isLogged])

  return (
    <button id="login" className="hidden" ref={logintButtonRef}>
      <a href="/signup">Login</a>
    </button>
  )
}

export default LoginButton
