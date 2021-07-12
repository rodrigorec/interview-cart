import PropTypes from 'prop-types'
import cn from 'classnames'
import ProductItem from 'components/product-item'
import { ProductType } from 'proptypes'
import './styles.scss'

const ProductList = ({ products, setProduct, className }) => (
    <div className={cn('product-list', className)}>
        {products.map(product => (
            <ProductItem
                key={product.id}
                product={product}
                setProduct={setProduct}
            />
        ))}
    </div>
)

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape(ProductType)).isRequired,
    setProduct: PropTypes.func.isRequired,
}

ProductList.defaultProps = {
    className: '',
}

export default ProductList
