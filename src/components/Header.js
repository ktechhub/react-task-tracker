import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="blue" text="Add Task"/>
            <Button color="green" text="Add Task"/>
            <Button color="black" text="Add Task"/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}

//css in JS
// const headingStyle = {
//     color: 'blue',
//     backgroundColor: 'black'
// }

export default Header
