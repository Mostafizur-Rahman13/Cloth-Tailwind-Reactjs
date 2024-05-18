import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div

      className='popular h-[90vh] md:h-[66vh] lg:h-[70vh] xl:h-5/6 flex flex-col items-center md:gap-[6px] lg:gap:[10px]'>

      <h1 className='text-[#171717] md:text-xl lg:text-4xl xl:text-5xl font-medium '>POPULAR IN WOMEN</h1>

      {/* <hr className='lg:w-40 xl:w-52 xl:h-2 lg:mt-0 xl:mt-4 rounded-md bg-[#252525]' /> */}
      <div className="popular-item mb-4 md:mt-3 md:mb-4 lg:mt-4 lg:mb-5 xl:mt-10 xl:mb-20 grid grid-cols-2 gap-5 md:flex md:gap-1.5 lg:gap-5 xl:gap-8">
        {

          data_product.map((item) => {

            const { id, name, image, old_price, new_price } = item

            return <Item key={id} id={id} name={name} image={image} old_price={old_price} new_price={new_price} />
          })
        }
      </div>

    </div >
  )
}

export default Popular