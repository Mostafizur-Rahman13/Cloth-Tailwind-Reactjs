import React from 'react'

const ProductPath = ({ product }) => {
  return (

    <div className='product-desc gap-x-0.5 md:gap-x-2 mt-14 md:mt-8 flex items-center md:text-center text-[10px] md:text-xs lg:text-base xl:text-lg font-medium text-[#5e5e5e] capitalize border-x-[1px] border-t-[1px]'>
      <div className='my-2 ml-2'>
        home <span >|</span> shop <span>|</span> {product.category} <span>|</span> {product.name}
      </div>

    </div>
  )
}

export default ProductPath;
