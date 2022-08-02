import { useState } from 'react';
import Feedback from 'components/Feedback/Feedback';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const totalFeedback = good + neutral + bad;

  const onLeaveFeedback = name => {
    switch (name) {
      case options[0]:
        setGood(prevState => prevState + 1);
        break;

      case options[1]:
        setNeutral(prevState => prevState + 1);
        break;

      case options[2]:
        setBad(prevState => prevState + 1);
        break;

      default:
        alert('Error');
    }
  };

  const countPositiveFeedbackPercentage = () => {
    if (totalFeedback) {
      return (good / totalFeedback) * 100;
    }
  };

  const positivePercentage = Math.trunc(countPositiveFeedbackPercentage());

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};
