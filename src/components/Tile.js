import React, {Component} from 'react';
import './Tile.css';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      visible: this.props.visible,
    };
  this.unlockTile = this.unlockTile.bind(this)
  }

  unlockTile = () => {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      }
    });
    this.props.updateData(this.state.color);
    this.refs.btn.setAttribute("disabled", "disabled");
};

  render() {
    return (
      <button
        ref="btn"
        onClick={this.unlockTile}
        className={this.state.visible ? this.state.color + ' tile' : 'tile'}
      >
        {this.props.id}
      </button>
    )
  }
}