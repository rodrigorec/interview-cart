import cn from 'classnames'
import PropTypes from 'prop-types'
import ScreenSize from 'hocs/ScreenSize'
import './styles.scss'

const Button = ({ className, isScreenWidth, isMobile, text, onClick }) => (
  <button
    className={cn(
      'button',
      {
        'button--screen-width': isScreenWidth,
        'button--mobile': isMobile,
      },
      className
    )}
    onClick={onClick}
  >
    {text}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  isScreenWidth: PropTypes.bool,
  isMobile: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  className: '',
  isScreenWidth: false,
  isMobile: false,
}

export default ScreenSize(Button)
