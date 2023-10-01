// import PropTypes from 'prop-types';
// import {} from './Feedback.styled';

import Section from '../SectionTitle/SectionTitle';
import FeedbackOptions from './FeedbackOptions'

function Feedback ({options, onLeaveFeedback}){
    return (
        <div>
            <Section title='Please leave feedback'>
                <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
            </Section>
        </div>)
    }

export default Feedback;



// Feedback.propTypes = {
 
// };