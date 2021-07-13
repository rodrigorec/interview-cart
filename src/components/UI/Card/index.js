import cn from 'classnames'
import PropTypes from 'prop-types'
import './styles.scss'

const Card = ({ className, children }) => (
  <div className={cn('card', className)}>{children}</div>
)

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

Card.defaultProps = {
  className: '',
}

export default Card
