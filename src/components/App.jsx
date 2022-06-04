import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const objKey = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <section style={{ margin: '0 15px', fontFamily: 'inherit' }}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <div>
            {total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                percentage={this.countPositiveFeedbackPercentage}
              />
            )}
          </div>
        </Section>
      </section>
    );
  }
}

export default App;
