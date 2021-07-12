import PropTypes from 'prop-types'
import cn from 'classnames'
import Card from '../UI/Card'
import { PurchaseType } from 'proptypes'
import Title from 'components/UI/Title'
import './styles.scss'

const PurchaseItem = ({
    purchase: { product, client, payment, className },
}) => {
    return (
        <Card
            className={cn('purchase-item', className)}
            key={`${product.id}-${client.name}-${client.address}`}
        >
            <div className="purchase-item__section">
                <Title
                    className="purchase-item__title"
                    text="Product"
                    hElement={5}
                />
                <span className="purchase-item__dsc">{product.name}</span>
            </div>
            <div className="purchase-item__section">
                <Title
                    className="purchase-item__title"
                    text="Client's information"
                    hElement={5}
                />
                <span className="purchase-item__dsc">Name: {client.name}</span>
                <span className="purchase-item__dsc">
                    Address: {client.address}
                </span>
            </div>
            <div className="purchase-item__section">
                <Title
                    className="purchase-item__title"
                    text="Payment information"
                    hElement={5}
                />
                <span className="purchase-item__dsc">Name: {payment.name}</span>
                <span className="purchase-item__dsc">
                    Card number: {payment.card}
                </span>
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
