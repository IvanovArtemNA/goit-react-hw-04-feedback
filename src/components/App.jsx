import React from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = event => {
    const counter = prevState => prevState + 1;
    switch (event) {
      case 'good':
        setGood(counter);
        break;
      case 'neutral':
        setNeutral(counter);
        break;
      case 'bad':
        setBad(counter);
        break;
      default:
    }
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);

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
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />{' '}
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
