import PropTypes from 'prop-types';
import {FbOpt} from './FeedbackOptions.styled';

function FeedbackOptions ({options, onLeaveFeedback}){
    return(
        <FbOpt>
            {options.map(option => (
                <button type='button' key={option} onClick={() => onLeaveFeedback(option)}>
                    {capitalize(option)}
                </button>
            ))}
        </FbOpt>
    )
}

export default FeedbackOptions;

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    };