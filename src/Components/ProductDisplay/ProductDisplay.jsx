import React, { useContext } from 'react'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { StoreContext } from '../../Context/StoreContext';

const ProductDisplay = ({ product }) => {

  const { id, image, name, old_price, new_price } = product;

  const { addToCart } = useContext(StoreContext);

  return (
    <div className='main-product-display'>
      <div className="product-display my-4 flex justify-center">

        <div className="product-display-left border-[1px] p-2 lg:p-2 xl:p-4 flex gap-2 lg:gap-2.5 xl:gap-4">

          <div className="product-display-img-list border-[1px] p-1 xl:p-2 flex flex-col gap-2.5 lg:gap-2.5 xl:gap-4">
            <img className='w-[100px] lg:w-[144px] xl:w-[160px] hover:border-[1px] hover:border-red-600' src={image} alt="" />
            <img className='w-[100px] lg:w-[144px] xl:w-[160px] hover:border-[1px] hover:border-red-600' src={image} alt="" />
            <img className='w-[100px] lg:w-[144px] xl:w-[160px] hover:border-[1px] hover:border-red-600' src={image} alt="" />
            <img className='w-[100px] lg:w-[144px] xl:w-[160px] hover:border-[1px] hover:border-red-600' src={image} alt="" />
          </div>

          <div className="product-display-img ">
            <img className='product-display-main-img lg:h-[440px] lg:w-[600px] xl:w-[700px] xl:h-[553px]' src={image} alt="" />
          </div>
        </div>

        <div className="product-display-right p-2 lg:p-2 xl:p-4 flex flex-col">

          <h1 className='text-xl lg:text-xl xl:text-3xl font-medium '>{name}</h1>

          <div className="product-display-right-star my-2 flex items-center gap-1 text-[#1c1c1c] ">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>

          <div className="product-display-right-prices lg:my-3 xl:my-5 flex lg:gap-3 xl:gap-4 lg:text-2xl xl:text-3xl font-medium ">

            <div className="product-display-right-price-old line-through text-[#818181]">
              ${old_price}
            </div>

            <div className="product-display-right-price-old text-[#ff4141] ">
              ${new_price}
            </div>

          </div>

          <div className="product-display-right-size">
            <h1 className='lg:text-xl xl:text-2xl text-[#656565] font-semibold text-center'>Select Size</h1>
          </div>

          <div className="product-display-right-size border-y-2 py-1 flex gap-2 justify-center">

            <div className=' cursor-pointer py-1 px-2.5  lg:py-1 lg:px-2.5 xl:py-2 xl:px-4 hover:rounded-sm hover:text-white hover:ring-yellow-600 hover:bg-indigo-700 hover:shadow-md hover:shadow-red-600'>S</div>
            <div className=' cursor-pointer py-1 px-2.5 lg:py-1 lg:px-2.5 xl:py-2 xl:px-4 hover:rounded-sm hover:text-white hover:ring-yellow-600 hover:bg-indigo-700 hover:shadow-md hover:shadow-red-600'>M</div>
            <div className=' cursor-pointer py-1 px-2.5  lg:py-1 lg:px-2.5 xl:py-2 xl:px-4 hover:rounded-sm hover:text-white hover:ring-yellow-600 hover:bg-indigo-700 hover:shadow-md hover:shadow-red-600'>L</div>
            <div className=' cursor-pointer py-1 px-2.5 lg:py-1 lg:px-2.5 xl:py-2 xl:px-4 hover:rounded-sm hover:text-white hover:ring-yellow-600 hover:bg-indigo-700 hover:shadow-md hover:shadow-red-600'>XL</div>
            <div className=' cursor-pointer py-1 px-2.5 lg:py-1 lg:px-2.5 xl:py-2 xl:px-4 hover:rounded-sm hover:text-white hover:ring-yellow-600 hover:bg-indigo-700 hover:shadow-md hover:shadow-red-600'>XXL</div>

          </div>

          <div className='flex justify-center'>

            <button onClick={() => { addToCart(id) }} className='w-42 lg:w-42 xl:w-52 my-3.5  lg:my-3.5 xl:my-5 rounded-xl lg:rounded-2xl xl:rounded-lg text-xs lg:text-xs xl:text-base bg-red-700 hover:bg-red-600  text-white  font-semibold px-10 py-2.5 border-none outline-none cursor-pointer'>ADD TO BAG</button>
          </div>

          <div className="product-display-right-description my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque voluptatum consectetur adipisicing elit.
          </div>

          <p className='product-display-right-category mt-2 '> <span className='font-semibold'>Category : </span>Woman,T-shirt, Crop-Top</p>

          <p className='product-display-right-category mt-2 '> <span className='font-semibold'>Tags : </span> Modern, Tranding, Latest</p>
        </div>
      </div >
    </div >
  )
}

export default ProductDisplay