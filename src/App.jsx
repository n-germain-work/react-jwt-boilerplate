import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import Login from "./components/Login";
import Logout from "./components/Logout";
import TokenContextProvider from "./contexts/TokenContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <TokenContextProvider>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/logout">Disconnect</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/users">
              <Users />
            </PrivateRoute>
            <Route exact path="/logout">
              <Logout />
            </Route>
          </Switch>
        </div>
      </Router>
    </TokenContextProvider>
  );
}

export default App;
