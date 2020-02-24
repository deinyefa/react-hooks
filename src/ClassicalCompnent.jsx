import React, { Component } from "react";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <>
        <p>count is {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
      </>
    );
  }
}