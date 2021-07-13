import { ADD_TO_CART, REMOVE_FROM_CART, INIT_CART } from './types'

const initialState = {
  products: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        products: [...state.products, action.payload.product],
      }
    }
    case REMOVE_FROM_CART: {
      const removingProductIndex = state.products.findIndex(
        product => product.id === action.payload.product.id
      )
      const cloneProducts = [...state.products]
      if (removingProductIndex >= 0) {
        cloneProducts.splice(removingProductIndex, 1)
      }
      return {
        ...state,
        products: [...cloneProducts],
      }
    }
    case INIT_CART: {
      return {
        ...initialState,
      }
    }
    default:
      return state
  }
}

export default cartReducer
