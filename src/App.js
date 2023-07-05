import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./containers/Home"
import Search from "./containers/Search"
import Signup from "./containers/Signup"
import Tracker from "./containers/Tracker"
import NotFound from "./components/NotFound"
import Notification from "./components/Notification"
import RequireAuth from "./containers/RequireAuth"
import { Switch } from "react-router-dom/cjs/react-router-dom.min"

function App() {
  return (
    <>
      <Notification />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          {/* Protected Routes */}
          <Route path="/tracker">
            <RequireAuth />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
