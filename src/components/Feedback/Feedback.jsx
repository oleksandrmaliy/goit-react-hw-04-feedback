import PropTypes from 'prop-types';
import {FbDiv} from './Feedback.styled';

import FeedbackOptions from './FeedbackOptions'

function Feedback ({options, onLeaveFeedback}){
    return (
        <FbDiv>
                <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
        </FbDiv>
    )}

export default Feedback;

Feedback.propTypes = {
     options: PropTypes.array.isRequired,
     onLeaveFeedback: PropTypes.func.isRequired,
     };