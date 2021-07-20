import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import NavBar from './components/NavBar';
import Home from './components/Home/index';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import Profile from './components/Profile';
import SearchResultScreen from './screens/SearchResultScreen';
import Matches from './components/Matches';
import Settings from './components/Settings'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <div>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <NavBar />
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/search">
              <SearchResultScreen />
            </Route>
            <Route exact path="/matches">
              <Matches />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
