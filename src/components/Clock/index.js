import React, { Component } from 'react';

class Clock extends Component {
  state = {
    count: 0,
    date: new Date()
  };

  componentDidMount() {
    this.intervalId = setInterval(() => this.setState({ date: new Date() }), 1);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  renderMinutesSeconds = () => {
    const {count} = this.state
    const minutes = Math.floor(count/60)
    const seconds = Math.floor(count%60)
    return  `${minutes} mins : ${seconds}`
  }

  onTimerCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  onStart = () => {
    this.timerId = setInterval(this.onTimerCount, 1000);
  };

  onStop = () => {
    clearInterval(this.timerId);
  };

  onReset = () => {
    clearInterval(this.timerId);
    this.setState({ count: 0 });
  };

  render() {
    const { date, count } = this.state;
    return (
      <>
      <p>{this.renderMinutesSeconds(
        
      )}</p>
        <p>{date.toLocaleTimeString()}</p>
        <p>Count: {count}</p>
        <button onClick={this.onStart}>Start Button</button>
        <button onClick={this.onStop}>Stop Button</button>
        <button onClick={this.onReset}>Reset Button</button>
      </>
    );
  }
}

export default Clock;
