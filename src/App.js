import React, { Component } from "react";
import "./App.css";

// pages
import { Home } from "./home";
import { Showroom } from './showroom';
import { Contact } from './contact';

class App extends Component {
  render() {
    return (
      <div class="no-scrollable-main">
        <Home/>
        <Showroom/>
        <Contact/>
      </div>
    );
  }
}

export default App;
