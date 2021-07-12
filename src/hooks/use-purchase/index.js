import { useSelector, useDispatch } from 'react-redux'
import {
    getPurchaseProducts,
    getPurchaseLoader,
    getPurchaseError,
} from 'store/purchase/selector'
import { confirmPurchase } from 'store/purchase/actionCreator'

export const usePurchase = () => {
    const dispatch = useDispatch()
    const purchaseLoader = useSelector(state => getPurchaseLoader(state))
    const purchaseError = useSelector(state => getPurchaseError(state))
    const purchaseProducts = useSelector(state => getPurchaseProducts(state))

    const purchase = purchase => {
        dispatch(confirmPurchase(purchase))
    }

    return { purchase, purchaseProducts, purchaseLoader, purchaseError }
}
