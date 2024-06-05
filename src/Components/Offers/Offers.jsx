import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (

    <div className="offers h-[25vh] md:h-3/6 lg:h-4/6 flex mb-10 my-4 md:mb-16 md:my-14 lg:mb-28 lg:my-[80px] bg-[#fde1ff]">

      <div className='offer w-11/12 md:h-[40vh] lg:h-[60vh] pl-10 md:pl-20 lg:pl-32 xl:pl-[140px] flex justify-between bg-gradient-to-r from-[#fde1ff]  to-[#e1ffea22]'>

        <div className='offers-left flex flex-col gap-2 justify-center '>
          <h1 className='text-[#171717] font-medium md:text-xl lg:text-4xl xl:text-6xl '>Exclusive</h1>
          <h1 className='text-[#171717] font-medium text-base md:text-xl lg:text-4xl xl:text-6xl '>Offers For You</h1>
          <p className='text-[#171717] font-medium text-[10px] md:text-base lg:text-lg xl:text-xl'>ONLY ON BEST SELLERS PRODUCTS</p>

          <button className='bg-pink-600 hover:bg-pink-700 text-[12px] md:text-lg xl:text-2xl font-medium text-white w-20 h-10 md:w-52 md:h-12 xl:w-80 xl:h-12 lg:py-1 xl:py-2 rounded-lg md:rounded-3xl'>Check Now</button>
        </div>

        <div className="offers-right w-[220px] flex align-center justify-center md:pt-8 xl:pt-10">
          <img className='' src={exclusive_image} alt="" />
        </div>

      </div>
    </div >
  )
}

export default Offers