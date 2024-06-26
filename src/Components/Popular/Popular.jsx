import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='new-collections h-5/6 flex flex-col gap-2.5 mt-10 mb-8'>

      <h1 className='text-[#171717] text-xl font-medium'>PEOPLE ALSO LIKE</h1>

      <hr className='w-48 xl:w-50 h-0.5 md:h-1 rounded-md bg-[#252525]' />

      <div className="collections  mt-2 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-4 lg:gap-5 xl:gap-8">


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