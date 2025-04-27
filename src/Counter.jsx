import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
    this.handleDecremenet = this.handleDecremenet.bind(this);
    this.handleDecremenet = this.handleIncrement.bind(this);
  }

  handleDecremenet() {
    // this.setState({ count: this.state.count - 1 });
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleIncrement = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  };
  render() {
    const date = new Date("2027-01-01 00:00:00");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecremenet}>-</button>
        <span>
          {date.toDateString()} {this.state.count}
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
