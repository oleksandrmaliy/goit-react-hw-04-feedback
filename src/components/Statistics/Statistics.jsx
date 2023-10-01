import PropTypes from 'prop-types';

import Notification from './Notification';
import {StatBlock} from './Statistics.styled';

function Statistics ({ good, neutral, bad, total, positive }) {
        return (
            <StatBlock>
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
            </StatBlock>
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