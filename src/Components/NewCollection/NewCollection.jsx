import React from 'react'
import new_collection from '../../assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className='new-collections h-5/6 flex flex-col  gap-1.5 lg:gap-2.5 mt-10 mb-8'>
      <h1 className='text-[#171717]  text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium'>NEW COLLECTIONS</h1>

      <hr className='w-20 md:w-40 lg:w-48 xl:w-52 h-0.5 md:h-1 xl:h-1.5 mt-2 rounded-md bg-[#252525]' />

      <div className="collections  mt-2 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-4 lg:gap-5 xl:gap-8">

        {new_collection.map((item) => {

          const { id, name, image, old_price, new_price } = item

          return <Item key={id} id={id} name={name} image={image} old_price={old_price} new_price={new_price} />

        })}

      </div>
    </div>
  )
}

export default NewCollection