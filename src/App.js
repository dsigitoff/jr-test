import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './components/Tile';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="tile--wrapper">
            <div>
              <Tile id="1"/>
              <Tile id="2"/>
            </div>
            <div>
              <Tile id="3"/>
              <Tile id="4"/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
