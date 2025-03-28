import { useState, useEffect } from 'react';
import  './App.css';
import Feedback from './components/Feedback';
import Options from './components/Options';
import Notification from './components/Notifications';
import Description from './components/Description';
const App = () => {
  const initialFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(initialFeedback);
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  return (
    <div>
      <Description/>
      <Options
      onFeedback={updateFeedback}
      onReset={resetFeedback}
      hasFeedback={totalFeedback > 0}/>
      {totalFeedback > 0 && (
        <Feedback
        feedback={feedback}
        total={totalFeedback}
        positive={positiveFeedback}/>
      )}
      {totalFeedback === 0 &&
        <Notification message= "No feedback yet."/>}
    </div>
  );
};


export default App
