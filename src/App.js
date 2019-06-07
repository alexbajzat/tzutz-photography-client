import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// pages
import { Home } from "./home";
import { Showroom } from './showroom';

class App extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Showroom/>
      </div>
    );
  }
}

export default App;
