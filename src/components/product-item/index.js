import PropTypes from 'prop-types'
import cn from 'classnames'
import Card from 'components/UI/Card'
import Button from 'components/UI/Button'
import { ProductType } from 'proptypes'
import './styles.scss'

const ProductItem = ({ product, setProduct, className }) => {
    return (
        <Card className={cn('product-item', className)} key={product.id}>
            {product.name}
            <Button text="buy" onClick={() => setProduct(product)} />
        </Card>
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape(ProductType).isRequired,
    setProduct: PropTypes.func.isRequired,
    className: PropTypes.string,
}

ProductItem.defaultProps = {
    className: '',
}

export default ProductItem
