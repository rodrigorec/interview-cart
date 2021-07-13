import PropTypes from 'prop-types'
import cn from 'classnames'
import PurchaseItem from 'components/PurchaseItem'
import { PurchaseType } from 'proptypes'
import './styles.scss'

const PurchaseList = ({ className, purchases }) => (
  <div className={cn('purchase-list', className)}>
    {purchases.map(purchase => (
      <PurchaseItem
        key={`${purchase.client.name}-${purchase.client.address}`}
        purchase={purchase}
      />
    ))}
  </div>
)

PurchaseList.propTypes = {
  purchases: PropTypes.arrayOf(PropTypes.shape(PurchaseType)).isRequired,
  className: PropTypes.string,
}

PurchaseList.defaultProps = {
  className: '',
}

export default PurchaseList
