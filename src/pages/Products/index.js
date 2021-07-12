import { useProductList } from 'hooks/UseProductList'
import ProductList from 'components/ProductList'
import Error from 'components/UI/Error'
import Loader from 'components/UI/Loader'
import Title from 'components/UI/Title'
import Empty from 'components/Empty'

const ProductsPage = () => {
  const { productList, productListLoader, productListError } = useProductList()

  return (
    <>
      <Title text="Products" hElement={2} />
      {productListLoader && <Loader />}
      {!productListLoader && productList.length > 0 && (
        <ProductList products={productList} />
      )}
      {!productListLoader && !productListError && productList.length === 0 && (
        <Empty text="No products" />
      )}
      {!productListLoader && productListError && <Error />}
    </>
  )
}

export default ProductsPage
