// import PropTypes from 'prop-types';
// import {} from './Feedback.styled';

function Feedback ({options, handleButtonIncrement}){
    return (
        <div>
            <p>Please leave feedback</p>
                <div>
                    {options.map(option => (
                        <button type='button' key={option} onClick={() => handleButtonIncrement(option)}>
                            {capitalize(option)}
                        </button>
                    ))}
                </div>
        </div>)
    }

export default Feedback;

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// Feedback.propTypes = {
 
// };