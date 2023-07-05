import { Route } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../reducers/authReducer"
import Tracker from "./Tracker"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min"

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()
  
  return token ? <Tracker /> : <Redirect from={location.pathname} to="/signup" />
}
export default RequireAuth
