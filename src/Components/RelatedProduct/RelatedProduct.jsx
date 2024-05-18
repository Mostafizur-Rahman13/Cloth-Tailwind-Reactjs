import React from 'react'
import product_data from '../../assets/data'
import Item from '../Item/Item'

const RelatedProduct = () => {

  return (
    <div className='related-Products h-10/12 flex flex-col items-center gap-2.5'>

      <h1 className='text-5xl font-semibold text-[#171717]'>Related Product</h1>

      <hr className='w-[200px] h-[6px] bg-[#252525] rounded-md text-center' />

      <div className='related-products-item mt-5 mb-20 md:grid grid-cols-4 gap-12 '>

        {product_data.map((item) => {

          const { id, name, image, old_price, new_price } = item

          return <Item key={id} id={id} name={name} image={image} old_price={old_price} new_price={new_price} />

        })}
      </div>
    </div>
  )
}

export default RelatedProduct