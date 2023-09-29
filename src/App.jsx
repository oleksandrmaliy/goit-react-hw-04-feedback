import React, { Component } from "react";
import Feedback from './components/Feedback/';
import Statistics from './components/Statistics/';



export class App extends Component {
  
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }

  countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100 ) / this.countTotalFeedback());
  }

  handleButtonIncrement = (option) => {
        this.setState(prevState => (
         {[option]: prevState[option] + 1}
        ))
}

  render() {
   
    const { good, neutral, bad } = this.state;
  
    return (
      <div>
        <Feedback
          handleButtonIncrement={this.handleButtonIncrement}
          options={Object.keys(this.state)}
        />
        
        {(this.countTotalFeedback() > 0) && <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedbackPercentage()} />}
      </div>
    )
  }
}
