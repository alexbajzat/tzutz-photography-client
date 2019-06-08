import React, { Component } from "react";
import "./App.css";

// pages
import { Home } from "./home";
import { Showroom } from './showroom';

class App extends Component {
  render() {
    return (
      <div class="no-scrollable-main">
        <Home/>
        <Showroom/>
      </div>
    );
  }
}

export default App;
