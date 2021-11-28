import React, { Component } from "react";

class CountSec extends Component {
  state = { count: 0 };
  handle = null;

  componentDidMount() {
    console.log("componentDidMount is called");
    this.handle = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount is called");
    clearInterval(this.handle);
  }

  render() {
    return <p>{this.state.count} [sec]</p>;
  }
}

export default CountSec;
