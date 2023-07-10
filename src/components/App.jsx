import React, { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";



export class App extends Component {
  
  state = {
  good: 0,
  neutral: 0,
    bad: 0,
  show: true,
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
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positive = Math.round((this.state.good / total) * 100);
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <Feedback
          handleGood={this.handleGood}
          handleNeutral={this.handleNeutral}
          handleBad={this.handleBad} />
        {(total > 0) && <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positive={positive} />}
        
         {/* {good = this.state.good, neutral = this.state.neutral, bad=this.state.bad} */}
      </div>
    )
  }
}
