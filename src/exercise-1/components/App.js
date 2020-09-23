import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from "./home";
import Profile from "./profile";
import About from "./about";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <NavLink to="/" className="nav_link">
            Home
          </NavLink>
          <NavLink to="/my-profile" className="nav_link">
            My Profile
          </NavLink>
          <NavLink to="/about-us" className="nav_link">
            About us
          </NavLink>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-profile" component={Profile} />
            <Route exact path="/about-us" component={About} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
