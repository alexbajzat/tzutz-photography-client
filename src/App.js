import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// pages
import { Home } from "./home";
import { Admin, AdminLogin } from "./admin";

class App extends Component {
  render() {
    return (
      <div className="site-background">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin-login" component={AdminLogin} />
        </Router>
      </div>
    );
  }
}

export default App;
