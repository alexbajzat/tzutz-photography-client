import React, { Component } from 'react';
import './App.css';

// pages

import { Header } from './header';

class App extends Component {
  render() {
    return (
      <div className="site-background">
        <Header></Header>
      </div>
    );
  }
}

export default App;
