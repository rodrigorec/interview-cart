import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
  INIT_PRODUCT_LIST,
} from './types'

const initialState = {
  productList: [],
  loading: false,
  error: false,
}

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      return {
        ...initialState,
        loading: true,
      }
    }
    case GET_PRODUCT_LIST_SUCCESS: {
      return {
        productList: action.payload.productList,
        error: false,
        loading: false,
      }
    }
    case GET_PRODUCT_LIST_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      }
    }
    case INIT_PRODUCT_LIST: {
      return {
        ...initialState,
      }
    }
    default:
      return state
  }
}

export default productListReducer
