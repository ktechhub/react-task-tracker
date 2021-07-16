import PropTypes from 'prop-types'

const Button = ({color, text}) => {

    const onClick = () => {
        console.log('Clicked Button')
    }
    return <button onClick={onClick} className="btn" style={{ backgroundColor: color }}>{text}</button>
}

Button.defaultProps = {
    color: 'dark',
    text: 'Task Tracker',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button
