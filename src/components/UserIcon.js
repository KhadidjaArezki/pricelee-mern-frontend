import { useEffect, useRef } from "react"
import { selectCurrentUser, selectCurrentToken } from "../reducers/authReducer"
import { useSelector } from "react-redux"

const UserIcon = () => {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const isLogged = user && token
  const userIconRef = useRef()

  useEffect(() => {
    if (!isLogged) {
      userIconRef.current.classList.add("hidden")
    } else {
      userIconRef.current.classList.remove("hidden")
    }
  }, [isLogged])

  return (
    <li id="user-icon" className="hidden" ref={userIconRef}>
      {isLogged && user.substring(0, 1).toUpperCase()}
    </li>
  )
}

export default UserIcon
