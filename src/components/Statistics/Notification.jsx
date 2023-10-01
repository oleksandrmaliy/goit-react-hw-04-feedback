import PropTypes from 'prop-types';
// import {} from './Feedback.styled';

function Notification ({message}){
    return (
        <p>{message}</p>
        )
    }

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};