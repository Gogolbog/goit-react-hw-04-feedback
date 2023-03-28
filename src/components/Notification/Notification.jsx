import PropTypes from 'prop-types';
import { P } from './NotificationStyled';

export const Notification = ({ message }) => {
    return (
        <>
            <P>{message}</P>
        </>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
};