import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return <button className="btn" style={{ backgroundColor: color }}>{text}</button>
}

Button.defaultProps = {
    color: 'dark',
    text: 'Task Tracker',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button
