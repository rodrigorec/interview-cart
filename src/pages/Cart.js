import { usePurchase } from 'hooks/use-purchase'
import PurchaseList from 'components/purchase-list'
import Title from 'components/UI/Title'
import Empty from 'components/Empty'

const Cart = () => {
    const { purchaseProducts } = usePurchase()
    return (
        <>
            <Title text="Cart" hElement={2} />
            {purchaseProducts.length === 0 ? (
                <Empty text="No purchases" />
            ) : (
                <PurchaseList purchases={purchaseProducts} />
            )}
        </>
    )
}

export default Cart
