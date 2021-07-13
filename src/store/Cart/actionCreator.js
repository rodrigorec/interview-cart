import { ADD_TO_CART, REMOVE_FROM_CART, INIT_CART } from './types'

export const addToCart = product => {
  return async dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: { product },
    })
  }
}

export const removeFromCart = product => {
  return async dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { product },
    })
  }
}

export const initCart = () => {
  return async dispatch => {
    dispatch({
      type: INIT_CART,
    })
  }
}
