import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './components/Tile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileState: {
        color: null,
        visible: false,
        result: []
      }
    }
  }

  updateData = (value) => {
    this.setState({
      result: this.state.tileState.result.push(value)
    })
  };

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="tile--wrapper">
          <div>
            <Tile
              tileState={this.state.tileState}
              id="1"
              color='green'
              updateData={this.updateData}
            />
            <Tile
              tileState={this.state.tileState}
              id="2"
              color='blue'
              updateData={this.updateData}
            />
          </div>
          <div>
            <Tile
              tileState={this.state.tileState}
              id="3"
              color='blue'
              updateData={this.updateData}
            />
            <Tile
              tileState={this.state.tileState}
              id="4"
              color='green'
              updateData={this.updateData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
