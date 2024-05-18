import React from 'react'

const ProductPath = ({ product }) => {
  return (
    <div className='product-desc flex align-center items-center text-center text-2 text-[#5e5e5e] gap-2 font-medium my-2 capitalize'>
      home <span className='text-xl font-medium'>|</span> shop <span className='text-xl font-medium'>|</span> {product.category} <span className='text-xl font-medium'>|</span> {product.name}

    </div>
  )
}

export default ProductPath