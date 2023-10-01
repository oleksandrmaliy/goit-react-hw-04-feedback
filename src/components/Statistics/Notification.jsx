import PropTypes from 'prop-types';
import {Msg} from './Notification.styled';

function Notification ({message}){
    return (
        <Msg>{message}</Msg>
        )
    }

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};