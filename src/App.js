import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './components/Tile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      id: [1, 2, 3, 4, 5, 6, 7, 8],
      result: [],
      computed: []
    }
  }

  matchedTiles = () => {
    let index = this.state.id;
    let computed = this.state.computed;

    this.setState({
      id: index.filter(elem => elem !== computed[0] && elem !== computed[1]),
      result: [],
      computed: []
    })
  };

  updateData = (value, id) => {
    this.setState(prevState => {
      return {
        result: prevState.result.concat(value),
        computed: prevState.computed.concat(id)
      }
    });
  };

  componentDidUpdate() {
    let result = this.state.result;

    return result.length > 1 && result[0] === result[1] ? this.matchedTiles() : null
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            Round: {this.state.result.length > 1 && this.state.result[0] !== this.state.result[1] ? 'You lose! Restart game' : (this.state.id.length > 0) ? 'Choose your destiny' : 'You win!'}
          </h1>
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="tile--wrapper">
          {
            this.state.id.map((id) => {
              return (
                <Tile
                  key={id}
                  id={id}
                  color={id % 2 === 0 ? 'blue' : 'green'}
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
