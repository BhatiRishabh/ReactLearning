import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState)=>({
        count:prevState.count+1
    }))
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {

    return (
      <>
        <h1> Counter - {this.state.count}</h1>
        <button onClick={this.incrementFive}>increment Five times</button>
      </>
    );
  }
}

export default Counter;
