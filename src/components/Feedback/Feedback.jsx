// import PropTypes from 'prop-types';
// import {} from './Feedback.styled';

import React, { Component } from "react"

 export class Feedback extends Component {
     render() {
        return (
            <div>
                <p>Please leave feedback</p>
                <div>
                    <button type="button" onClick={this.props.handleGood}>
                        Good
                    </button>
                    <button type="button" onClick={this.props.handleNeutral}>Neutral</button>
                    <button type="button" onClick={this.props.handleBad}>Bad</button>
                </div>
                    
           </div>
              )
    }
}

// Feedback.propTypes = {
 
// };