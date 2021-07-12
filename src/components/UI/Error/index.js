import cn from 'classnames'
import PropTypes from 'prop-types'
import ScreenSize from 'hocs/ScreenSize'
import './styles.scss'

const Error = ({ className, isMobile, text }) => {
    return (
        <div className={cn('error', { 'error--mobile': isMobile }, className)}>
            {text}
        </div>
    )
}

Error.propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    text: PropTypes.string,
}

Error.defaultProps = {
    className: '',
    isMobile: false,
    text: 'Sorry, try later',
}

export default ScreenSize(Error)
