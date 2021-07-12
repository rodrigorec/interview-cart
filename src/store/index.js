import { combineReducers } from 'redux'
import productListReducer from './ProductList/reducer'
import purchaseReducer from './Purchase/reducer'
import cartReducer from './Cart/reducer'

export default combineReducers({
  productList: productListReducer,
  purchase: purchaseReducer,
  cart: cartReducer,
})
