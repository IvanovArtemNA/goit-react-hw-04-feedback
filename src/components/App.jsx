import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = event => {
    if (event === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (event === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (event === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

   countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
   }
    
    countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
    return 0;
    }
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }

    render() {
      return (
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100vh',
          fontSize: 26,
          color: '#8B4513',
          backgroundColor: '#FFE4E1',
        }}
      >
        <Section title="Please leave feedback">
          <Feedback
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
          />{' '}
        </Section>
          <Section title="Statistics">
          {this.countTotalFeedback() !==0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}/>
          ) : (<Notification message="There is no feedback" />)}
        </Section>
          </div>
        );
    }
}
