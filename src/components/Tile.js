import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      visible: this.props.visible,
    }
  }
  unlockTile(e){
    e.preventDefault();
    this.setState({
      visible: !this.state.visible,
    });
  }

  // lockTile() {
  //   if(this.state.locked) {
  //     return false
  //   }
  // }

  render() {
    return (
      <div
        className={this.state.visible ? this.state.color + ' tile' : 'tile'}
        onClick={(e) => {
          this.props.updateData(this.state.color)
          this.unlockTile(e)
          // this.lockTile()
        }}
      >
        {this.props.id}
      </div>
    )
  }
}