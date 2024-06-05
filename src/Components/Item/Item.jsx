import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <Link to={`/product/${id}`} onClick={window.scroll(0, 0)}>
      <div className='item animate-[fadeIn_1s]  w-[160px] md:w-[170px] lg:w-[220px] xl:w-[280px] hover:scale-105 duration-500 hover:border-2 hover:rounded-2xl hover:border-slate-700 p-1'>

        <img className='w-[160px] md:w-[170px] lg:w-[220px] xl:w-[280px] hover:rounded-t-xl' src={image} alt="" />

        <p className='my-1.5 text-[14px] lg:text-base'>{name}</p>
        <div className="item-price flex gap-5 justify-center">
          <div className="item-price-new text-base lg:text-lg xl:text-xl font-bold text-[#19176e]">
            $ - {new_price}
          </div>
          <div className="item-price-old text-base lg:text-lg xl:text-xl font-semibold text-[#8c8c8c] ">
            <s> $ - {old_price}</s>
          </div>
        </div>
      </div >
    </Link>
  )
}

export default Item