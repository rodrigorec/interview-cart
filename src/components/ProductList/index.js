import PropTypes from 'prop-types'
import cn from 'classnames'
import ProductItem from 'components/ProductItem'
import { ProductType } from 'proptypes'
import { useCart } from 'hooks/UseCart'
import './styles.scss'

const ProductList = ({ className, products }) => {
  const { cartProducts, addProductToCart, removeProductFromCart } = useCart()

  return (
    <div className={cn('product-list', className)}>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          addProduct={addProductToCart}
          removeProduct={removeProductFromCart}
          cartProducts={cartProducts}
        />
      ))}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(ProductType)).isRequired,
}

ProductList.defaultProps = {
  className: '',
}

export default ProductList
