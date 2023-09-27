// import PropTypes from 'prop-types';
// import {} from './Statistics.styled';

import React, { Component } from "react"

class Statistics extends Component {

   
    render() {
        return (
            <div>
                <p>Statistics</p>
                <div>
                    <p>Good: {this.props.good}</p>
                    <p>Neutral: {this.props.neutral}</p>
                    <p>Bad: {this.props.bad}</p>
                    <p>Total: {this.props.total}</p>
                    <p>Positive feedback: { }{this.props.positive}%</p>
                </div>
         
            </div>
      
        )
    }
}

export default Statistics;

// Feedback.propTypes = {
 
// };