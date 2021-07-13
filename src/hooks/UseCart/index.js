import { useSelector, useDispatch } from 'react-redux'
import { getCart } from 'store/Cart/selector'
import { addToCart, removeFromCart, initCart } from 'store/Cart/actionCreator'

export const useCart = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => getCart(state))

  const addProductToCart = product => {
    dispatch(addToCart(product))
  }

  const removeProductFromCart = product => {
    dispatch(removeFromCart(product))
  }

  const cleanCart = () => {
    dispatch(initCart())
  }

  return { cartProducts, addProductToCart, removeProductFromCart, cleanCart }
}
