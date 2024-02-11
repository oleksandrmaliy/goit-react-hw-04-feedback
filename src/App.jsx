import React, { useState} from "react";
import Feedback from './components/Feedback/';
import Statistics from './components/Statistics/';
import Section from './components/SectionTitle/';
import Notification from './components/Statistics/Notification'

function App () {
  const [votes, setVotes] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
  });

      const { good, neutral, bad } = votes;
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
   
  // state = {
  // good: 0,
  // neutral: 0,
  // bad: 0,
  // }

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = votes;
    return good + neutral + bad;
  }
  
  const countPositiveFeedbackPercentage = () => {
    // const { good } = votes;
    return Math.round((good * 100 ) / countTotalFeedback());
   }

  const onLeaveFeedback = (option) => {
    setVotes(prevVotes => (
    {...prevVotes,
      [option]: prevVotes[option] + 1}
  ))
}

  // render() {
    // const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title='Please leave feedback'>
        <Feedback
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys(votes)}
        />
        </Section>
  
        <Section title='Statistics'>
        { countTotalFeedback() ? 
          (<Statistics
          // const { good, neutral, bad } = votes
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positive={countPositiveFeedbackPercentage()} />) :
          (<Notification message="There is no feedback"/>) }
        </Section>
      </div>
    )
  }
// }

export default App;