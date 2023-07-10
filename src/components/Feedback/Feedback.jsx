// import PropTypes from 'prop-types';
// import {

import React, { Component } from "react"

 
// } from './Feedback.styled';

export class Feedback extends Component {

    
//     state = {
//         value: 100,
//     }

//     handleGood = () => {
//         console.log('Pressed Good');
//         console.log(this);
//         this.setState(prevState => {
//             return {
//                 value: prevState.value + 1
//             }
//         });
//    }
    render() {
        return (
            <div>
                <p>Please leave feedback</p>
                <div>
                    <button type="button" onClick={this.props.handleGood}>Good</button>
                    <button type="button" onClick={this.props.handleNeutral}>Neutral</button>
                    <button type="button" onClick={this.props.handleBad}>Bad</button>
                </div>
         
            </div>
      
        )
    }
}

// Feedback.propTypes = {
 
// };