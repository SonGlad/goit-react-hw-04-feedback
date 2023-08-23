import PropTypes from 'prop-types';

export const Notification = ({message}) => {
    return (
        <p style={{margin: '0px'}}>{message}</p>
    )
};

Notification.protoTypes = {
    message: PropTypes.string.isRequired,
};