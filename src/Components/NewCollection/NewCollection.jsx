import React from 'react'
import new_collection from '../../assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className='new-collections h-5/6 md:flex flex-col items-center gap:[10px] mt-10 mb-8'>
      <h1 className='text-[#171717] font-medium text-5xl'>NEW COLLECTIONS</h1>

      <hr className='w-[200px] h-[6px] mt-4 rounded-md bg-[#252525]' />
      <div className="collections mt-5 md:grid grid-cols-4 gap-12 ">

        {new_collection.map((item) => {

          const { id, name, image, old_price, new_price } = item

          return <Item key={id} id={id} name={name} image={image} old_price={old_price} new_price={new_price} />

        })}

      </div>
    </div>
  )
}

export default NewCollection