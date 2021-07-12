import { useState, useEffect } from 'react'
import SimpleModal from 'components/SimpleModal'
import { useCart } from 'hooks/UseCart'
import Title from 'components/UI/Title'
import Empty from 'components/Empty'
import ProductList from 'components/ProductList'
import PurchaseStepper from 'components/PurchaseStepper'
import Button from 'components/UI/Button'

const Cart = () => {
  const [showModal, setShowModal] = useState(false)
  const { cartProducts, cleanCart } = useCart()
  const sortedProducts = Array.from(new Set(cartProducts.map(a => a.id))).map(
    id => {
      return cartProducts.find(a => a.id === id)
    }
  )

  useEffect(() => {
    return () => {
      cleanCart()
    }
  }, [])

  return (
    <>
      <Title text="Cart" hElement={2} />
      {cartProducts.length === 0 ? (
        <Empty text="No products in the cart" />
      ) : (
        <>
          <ProductList products={sortedProducts} />
          <Button
            isScreenWidth={true}
            onClick={() => setShowModal(true)}
            text="Purchase"
          />
        </>
      )}

      <SimpleModal
        showModal={showModal}
        setShowModal={() => setShowModal(!showModal)}
      >
        <PurchaseStepper
          closeModal={() => setShowModal(!showModal)}
          purchaseProducts={cartProducts}
        />
      </SimpleModal>
    </>
  )
}

export default Cart
