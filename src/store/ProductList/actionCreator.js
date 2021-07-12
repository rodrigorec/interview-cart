import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
  INIT_PRODUCT_LIST,
} from './types'
import { getProducts } from 'api'

export const loadProductList = () => {
  return async dispatch => {
    dispatch({
      type: GET_PRODUCT_LIST,
    })
    try {
      const productList = await getProducts()
      dispatch({
        type: GET_PRODUCT_LIST_SUCCESS,
        payload: { productList: productList },
      })
    } catch (e) {
      console.log(e)
      dispatch({
        type: GET_PRODUCT_LIST_ERROR,
      })
    }
  }
}

export const initProductList = () => {
  return async dispatch => {
    dispatch({
      type: INIT_PRODUCT_LIST,
    })
  }
}
