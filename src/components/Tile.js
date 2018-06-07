import React, {Component} from 'react';
import './Tile.css';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      id: this.props.id
    };
  }

  unlockTile = () => {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      }
    });
    this.props.updateData(this.state.color, this.state.id);
  };

  render() {
    return (
      <button
        disabled={this.state.visible}
        onClick={this.unlockTile}
        className={this.state.visible ? this.state.color + ' tile' : 'tile'}
      >
      </button>
    )
  }
}