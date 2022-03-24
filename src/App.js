import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Search from './containers/Search';
import Signup from './containers/Signup';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
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
