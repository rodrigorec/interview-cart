import { PURCHASE, PURCHASE_SUCCESS, PURCHASE_ERROR } from './types'

const initialState = {
    products: [],
    loading: false,
    error: false,
}

const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE: {
            return {
                ...state,
                loading: true,
            }
        }
        case PURCHASE_SUCCESS: {
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload.product],
            }
        }
        case PURCHASE_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }
        default:
            return state
    }
}

export default purchaseReducer
