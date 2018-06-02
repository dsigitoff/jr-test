import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {
  render() {
    return (
      <div className="tile">{this.props.id}</div>
    )
  }
}