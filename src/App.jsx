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


handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1})  
        );
  }
  
handleNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1})            
        );
  }

handleBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1})            
        );
  }

  render() {
   
    const { good, neutral, bad } = this.state;
  
    return (
      <div>
        <Feedback
          handleGood={this.handleGood}
          handleNeutral={this.handleNeutral}
          handleBad={this.handleBad} />
        
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
