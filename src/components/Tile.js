import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      visible: this.props.visible,
      locked: this.props.locked,
      result: []
    }
  }
  unlockTile(){
    this.setState({
      visible: !this.state.visible,
      locked: !!this.state.visible,
      result: this.state.result.concat(this.state.color)
    })
  }

  render() {
    return (
      <div className={this.state.visible ? this.state.color + ' tile' : 'tile'} onClick={(e) => this.unlockTile(e)}>{this.props.id}</div>
    )
  }
}