import PropTypes from 'prop-types'
import cn from 'classnames'
import Card from 'components/UI/Card'
import Button from 'components/UI/Button'
import { ProductType } from 'proptypes'
import './styles.scss'

const ProductItem = ({
  className,
  product,
  cartProducts,
  addProduct,
  removeProduct,
}) => {
  const productQuantity = cartProducts.filter(
    cartProduct => cartProduct?.id === product?.id
  ).length

  return (
    <Card className={cn('product-item', className)} key={product.id}>
      {product.name}
      <span className="product-item__counter">{productQuantity}</span>
      <div className="product-item__button-container">
        <Button text="+" onClick={() => addProduct(product)} />
        <Button text="-" onClick={() => removeProduct(product)} />
      </div>
    </Card>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape(ProductType).isRequired,
  className: PropTypes.string,
}

ProductItem.defaultProps = {
  className: '',
}

export default ProductItem
