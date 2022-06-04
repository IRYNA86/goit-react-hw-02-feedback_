import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.css'

function Notification ({message}){
    return (
        <h3 className = {s.text}>{message}</h3>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification