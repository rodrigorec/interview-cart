import { combineReducers } from 'redux'
import productListReducer from './product-list/reducer'
import purchaseReducer from './purchase/reducer'

export default combineReducers({
    productList: productListReducer,
    purchase: purchaseReducer,
})
