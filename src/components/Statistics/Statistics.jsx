import PropTypes from 'prop-types';

import {StatBlock} from './Statistics.styled';

function Statistics ({ good, neutral, bad, total, positive }) {
    return (
        <StatBlock>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positive}%</p>
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