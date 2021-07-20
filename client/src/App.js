import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import NavBar from "./components/NavBar";
import Home from "./components/Home/index";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import Profile from "./components/Profile";
import SearchResultScreen from './screens/SearchResultScreen';
import Matches from "./components/Matches";
import Settings from "./components/Settings";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
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
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
