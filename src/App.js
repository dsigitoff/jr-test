import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './components/Tile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileState: {
        visible: false,
        id: [1, 2, 3, 4, 5, 6, 7, 8],
        result: [],
        computed: []
      }
    }
  }

  updateData = (value, id) => {
    this.setState({
      result: this.state.tileState.result.push(value),
      computed: this.state.tileState.computed.push(id)
    })
  };

  deleteTile = () => {
    let result = this.state.tileState.result;
    let id = this.state.tileState.id;
    let computed = this.state.tileState.computed;

    if(result.length === 2 && result[0] === result[1]) {
      this.setState({
        id: id.splice(computed[0], 1) && id.splice(computed[1], 1)
      })
    } else {
      this.setState({
        id
      })
    }
  }

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
                id={id}
                color={id % 2 === 0 ? 'blue' : 'green'}
                updateData={this.updateData}
                deleteTile={this.deleteTile}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
