import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const options = Object.values(this.state);
    return options.reduce((acc, option) => (acc += option), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return !this.countTotalFeedback()
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = e => {
    const chosenOption = e.target.attributes.option.value;

    this.setState(prevState => {
      const newValue = prevState[chosenOption] + 1;

      return { ...prevState, ...{ [chosenOption]: newValue } };
    });

    this.countTotalFeedback();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
