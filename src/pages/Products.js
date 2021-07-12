import { useState } from 'react'
import { useProductList } from 'hooks/use-product-list'
import ProductList from 'components/product-list'
import PurchaseStepper from 'components/purchase-stepper'
import SimpleModal from 'components/SimpleModal'
import Error from 'components/UI/Error'
import Loader from 'components/UI/Loader'
import Title from 'components/UI/Title'
import Empty from 'components/Empty'

const ProductsPage = () => {
    const { productList, productListLoader, productListError } =
        useProductList()
    const [purchaseProduct, setPurchaseProduct] = useState(null)

    return (
        <>
            <Title text="Products" hElement={2} />
            {productListLoader && <Loader />}
            {!productListLoader && productList.length > 0 && (
                <ProductList
                    products={productList}
                    setProduct={setPurchaseProduct}
                />
            )}
            {!productListLoader && productList.length === 0 && (
                <Empty text="No products" />
            )}
            {!productListLoader && productListError && <Error />}
            <SimpleModal
                showModal={purchaseProduct !== null}
                setShowModal={() => setPurchaseProduct(null)}
            >
                <PurchaseStepper
                    purchaseProduct={purchaseProduct}
                    closeModal={() => setPurchaseProduct(null)}
                />
            </SimpleModal>
        </>
    )
}

export default ProductsPage
