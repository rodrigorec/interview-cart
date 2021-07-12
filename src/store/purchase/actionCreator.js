import { PURCHASE, PURCHASE_SUCCESS, PURCHASE_ERROR } from './types'
import { makePurchase } from 'api'

export const confirmPurchase = purchase => {
    return async dispatch => {
        dispatch({
            type: PURCHASE,
        })
        try {
            await makePurchase()
            dispatch({
                type: PURCHASE_SUCCESS,
                payload: { product: purchase },
            })
        } catch (e) {
            console.log(e)
            dispatch({
                type: PURCHASE_ERROR,
            })
        }
    }
}
