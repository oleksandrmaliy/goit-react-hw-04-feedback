import PropTypes from 'prop-types';
// import {} from './Statistics.styled';

import Section from '../SectionTitle';
import Notification from './Notification';

function Statistics ({ good, neutral, bad, total, positive }) {
        return (
            <Section title='Statistics'>
                {total > 0 ? 
                    <div>
                        <p>Good: {good}</p>
                        <p>Neutral: {neutral}</p>
                        <p>Bad: {bad}</p>
                        <p>Total: {total}</p>
                        <p>Positive feedback: {positive}%</p>
                    </div> :
                    <Notification message="There is no feedback"/>
                }
            </Section>
        )
    }

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
};