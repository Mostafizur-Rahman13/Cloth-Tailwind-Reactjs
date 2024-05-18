import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay'
import ProductPath from '../../Components/ProductPath/ProductPath'
import ProductDescription from '../../Components/ProductDescription/ProductDescription'
import RelatedProduct from '../../Components/RelatedProduct/RelatedProduct'
import { StoreContext } from '../../Context/StoreContext'


const Product = () => {

  const { all_product } = useContext(StoreContext)
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>

      <ProductPath product={product} />

      <ProductDisplay product={product} />

      <ProductDescription />

      <RelatedProduct />

    </div>
  )
}

export default Product