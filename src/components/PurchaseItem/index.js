import { useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Card from '../UI/Card'
import { PurchaseType } from 'proptypes'
import Title from 'components/UI/Title'
import './styles.scss'

const PurchaseItem = ({
  purchase: { products, client, payment, className },
}) => {
  const groupArrayOfObjects = useCallback(
    (list, key) => {
      const grouped = list.reduce(function (rv, x) {
        ;(rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
      }, {})
      const groupedProducts = []
      for (let prop in grouped) {
        groupedProducts.push({
          [prop]: grouped[prop].length,
        })
      }
      return groupedProducts
    },
    [products]
  )

  const cleanItemDescription = useCallback(product =>
    JSON.stringify(product).replace(/[{}"]/g, ''), []);

  return (
    <Card
      className={cn('purchase-item', className)}
      key={`${client.name}-${client.address}`}
    >
      <div className="purchase-item__section">
        <Title className="purchase-item__title" text="Product" hElement={5} />
        {groupArrayOfObjects(products, 'name').map(product => (
          <span className="purchase-item__dsc">
            {cleanItemDescription(product)}
          </span>
        ))}
      </div>
      <div className="purchase-item__section">
        <Title
          className="purchase-item__title"
          text="Client's information"
          hElement={5}
        />
        <span className="purchase-item__dsc">Name: {client.name}</span>
        <span className="purchase-item__dsc">Address: {client.address}</span>
      </div>
      <div className="purchase-item__section">
        <Title
          className="purchase-item__title"
          text="Payment information"
          hElement={5}
        />
        <span className="purchase-item__dsc">Name: {payment.name}</span>
        <span className="purchase-item__dsc">Card number: {payment.card}</span>
      </div>
    </Card>
  )
}

PurchaseItem.propTypes = {
  purchase: PropTypes.shape(PurchaseType).isRequired,
  className: PropTypes.string,
}

PurchaseItem.defaultProps = {
  className: '',
}

export default PurchaseItem
