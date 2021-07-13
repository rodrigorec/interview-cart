import { usePurchase } from 'hooks/UsePurchase'
import PurchaseList from 'components/PurchaseList'
import Title from 'components/UI/Title'
import Empty from 'components/Empty'

const Purchases = () => {
  const { purchaseProducts } = usePurchase()
  return (
    <>
      <Title text="Purchases" hElement={2} />
      {purchaseProducts.length === 0 ? (
        <Empty text="No purchases" />
      ) : (
        <PurchaseList purchases={purchaseProducts} />
      )}
    </>
  )
}

export default Purchases
