import React, { Component } from "react";
import "./App.css";

// pages
import { Header } from "./header";
import { Home } from "./home";

class App extends Component {
  render() {
    return (
      <div className="site-background">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
