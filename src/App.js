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
        id: [1, 2, 3, 4],
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
          {this.state.tileState.id.map((id) => {
            return (
              <Tile
                tileState={this.state.tileState}
                key={id}
                color='green'
                updateData={this.updateData}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
