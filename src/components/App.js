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
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.handleClickGood}>{options[0]}</button>
          <button onClick={this.handleClickNeutral}>{options[1]}</button>
          <button onClick={this.handleClickBad}>{options[2]}</button>
        </div>
        <h2>Statistics</h2>
        {this.countTotalFeedback() ? (
          <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Pisitive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </div>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    );
  }
}

export default App;