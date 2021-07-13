import cn from 'classnames'
import PropTypes from 'prop-types'
import Title from 'components/UI/Title'
import './styles.scss'

const OrderConfirmation = ({ className }) => (
  <div className={cn('order-confirmation', className)}>
    <Title text="Congrats!" hElement={3} />
    <p>You've successfully purchased a MasterClass account.</p>
  </div>
)

OrderConfirmation.propTypes = {
  className: PropTypes.string,
}

OrderConfirmation.defaultProps = {
  className: '',
}

export default OrderConfirmation
