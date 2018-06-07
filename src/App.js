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

  updateData = (value, id) => {
    let result = this.state.result;
    let index = this.state.id;
    let computed = this.state.computed;

    this.setState(prevState => {
      return {
        result: prevState.result.concat(value),
        computed: prevState.computed.concat(id)
      }
    });

    if(result.length > 1 && result[0] === result[1]) {
      this.setState({
        id: index.filter(elem => elem !== computed[0] && elem !== computed[1]),
        result: [],
        computed: []
      })
    }

  };


  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="tile--wrapper">
          {
            this.state.id.map((id) => {
            return (
              <Tile
                visible={this.state.visible}
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
