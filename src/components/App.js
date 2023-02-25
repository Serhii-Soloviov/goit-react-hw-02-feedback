import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = e => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleClickNeutral = e => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleClickBad = e => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={this.handleClickGood}>{options[0]}</button>
        <button onClick={this.handleClickNeutral}>{options[1]}</button>
        <button onClick={this.handleClickBad}>{options[2]}</button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>

      </div>
    );
  }
}

export default App;
