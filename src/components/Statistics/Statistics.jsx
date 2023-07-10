// import PropTypes from 'prop-types';
// import {

import React, { Component } from "react"

 
// } from './Statistics.styled';

export class Statistics extends Component {

    // total = this.props.good + this.props.neutral + this.props.bad;

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

// Feedback.propTypes = {
 
// };