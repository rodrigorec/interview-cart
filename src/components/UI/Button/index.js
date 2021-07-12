import cn from 'classnames'
import PropTypes from 'prop-types'
import ScreenSize from 'hocs/ScreenSize'
import './styles.scss'

const Button = ({ className, isMobile, text, onClick }) => (
    <button
        className={cn('button', { 'button--mobile': isMobile }, className)}
        onClick={onClick}
    >
        {text}
    </button>
)

Button.propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
    className: '',
    isMobile: false,
}

export default ScreenSize(Button)
