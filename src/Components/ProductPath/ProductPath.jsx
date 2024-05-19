import React from 'react'

const ProductPath = ({ product }) => {
  return (

    <div className='product-desc gap-x-0.5 md:gap-x-2 mt-8 mb-2 md:my-2 flex items-center md:text-center text-[10px] md:text-xs lg:text-base xl:text-lg font-medium text-[#5e5e5e]  capitalize'>
      home <span >|</span> shop <span>|</span> {product.category} <span>|</span> {product.name}
    </div>
  )
}

export default ProductPath;
