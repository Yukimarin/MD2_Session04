import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <p>Bạn đã bấm {this.state.count} lần</p>
        <button onClick={this.handleClick}> Click</button>
      </div>
    );
  }
}
