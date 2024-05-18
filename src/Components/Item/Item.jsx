import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <Link to={`/product/${id}`} onClick={window.scroll(0, 0)}>
      <div className='item sm:w-[160px] md:w-[170px] lg:w-[220px] xl:w-[280px] hover:scale-105 duration-500 hover:border-2 hover:rounded-2xl hover:border-slate-700 p-1'>

        <img className='sm:w-[160px] md:w-[170px] lg:w-[220px] xl:w-[280px] hover:rounded-t-xl' src={image} alt="" />

        <p className='md:my-[6px]'>{name}</p>
        <div className="item-price md:flex gap-[20px] justify-center">
          <div className="item-price-new lg:text-[14px] xl:text-xl font-bold text-[#19176e]">
            $ - {new_price}
          </div>
          <div className="item-price-old lg:text-[14px] xl:text-[18px] font-semibold text-[#8c8c8c] ">
            <s> $ - {old_price}</s>
          </div>
        </div>
      </div >
    </Link>
  )
}

export default Item