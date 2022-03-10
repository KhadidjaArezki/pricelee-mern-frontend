import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Search from './containers/Search';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          {/* <Route path='/about'>
            <About/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route> */}
          <Route path='/login'>
            <Login/>
          </Route>
          {/* <Route path='/logout'>
            <Logout/>
          </Route> */}
          <Route path='/search'>
            <Search/>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
