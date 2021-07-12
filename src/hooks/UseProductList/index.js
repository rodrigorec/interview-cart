import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getProductList,
  getProductListLoader,
  getProductListError,
} from 'store/ProductList/selector'
import {
  loadProductList,
  initProductList,
} from 'store/ProductList/actionCreator'

export const useProductList = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => getProductList(state))
  const productListLoader = useSelector(state => getProductListLoader(state))
  const productListError = useSelector(state => getProductListError(state))
  useEffect(() => {
    dispatch(loadProductList())
    return () => {
      dispatch(initProductList())
    }
  }, [])

  return { productList, productListLoader, productListError }
}
