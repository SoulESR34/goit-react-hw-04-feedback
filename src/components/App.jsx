import { Section } from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statics from 'components/Statistics/Statistics';
import React, { useState, useEffect } from 'react';

export const App = () => {
  const [goodFb, setGoodFb] = useState(0);
  const [neutralFb, setNeutralFb] = useState(0);
  const [badFb, setBadFb] = useState(0);
  const [totalFb, setTotalFb] = useState(0);
  const [goodPercentageFb, setgoodPercentageFb] = useState(0);


  const calcState = e => {
    const stateName = e.target.name;
    if (stateName === 'good') return setGoodFb(goodFb + 1);
    if (stateName === 'neutral') return setNeutralFb(neutralFb + 1);
    if (stateName === 'bad') return setBadFb(badFb + 1);
  }; 

  useEffect(() => {
    const countPositiveFeedbackPercentage = () => {
      const totalValues = goodFb + neutralFb + badFb;
      const postivePercentage = (goodFb / totalValues) * 100;
      setgoodPercentageFb(
        totalValues === 0 ? 0 : Number(postivePercentage.toFixed(0))
      );
    };
  
    const countTotalFeedback = () => {
      setTotalFb(goodFb + neutralFb + badFb);
    };
  

    countPositiveFeedbackPercentage();
    countTotalFeedback();
  }, [goodFb, neutralFb, badFb]);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={calcState}
      />

      {totalFb !== 0 ? (
        <Statics
          good={goodFb}
          neutral={neutralFb}
          bad={badFb}
          total={totalFb}
          positivePercentage={goodPercentageFb}
        />
      ) : (
        <h2>No feedback given</h2>
      )}
    </Section>
  );
};
