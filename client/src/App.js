import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';
import Matches from './components/Matches';
import Settings from './components/Settings'

function App() {
  return (
      <Router>
        <div>
          <NavBar />
          <div>
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/">
              <Profile />
            </Route>
            <Route exact path="/search">
              <SearchBar />
            </Route>
            <Route exact path="/matches">
              <Matches />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
          </div>
        </div>
      </Router>
  );
}

export default App;
