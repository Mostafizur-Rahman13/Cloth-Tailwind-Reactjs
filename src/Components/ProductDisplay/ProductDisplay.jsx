import React, { useContext } from 'react'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { StoreContext } from '../../Context/StoreContext';

const ProductDisplay = ({ product }) => {

  const { id, image, name, old_price, new_price, category } = product;

  const { addToCart } = useContext(StoreContext);

  return (
    <div className='main-product-display'>
      <div className="product-display animate-[fadeIn_1s] my-4 flex flex-col mt-0 gap-4 md:flex-row justify-center p-1.5 border-[1px]">

        <div className="product-display-left md:w-[55%] border-[1px] p-2 lg:p-2 xl:p-4 flex flex-col-reverse lg:flex-row gap-2 lg:gap-2.5 xl:gap-4">

          <div className="product-display-img-list border-[1px] p-1 xl:p-2 flex justify-center lg:justify-start lg:flex-col gap-2.5 lg:gap-2.5 xl:gap-4">
            <img className='product-slide-img' src={image} alt="" />
            <img className='product-slide-img' src={image} alt="" />
            <img className='product-slide-img' src={image} alt="" />
            <img className='product-slide-img' src={image} alt="" />
          </div>

          <div className="product-display-img">
            <img className='product-display-main-img h-[330px] w-[520px] lg:h-[440px] lg:w-[600px] xl:w-[520px] xl:h-[520px] shadow-sm shadow-cyan-500 hover:shadow-md hover:shadow-cyan-600' src={image} alt="" />
          </div>
        </div>

        <div className="product-display-right md:w-[45%] p-2 lg:p-2 xl:p-4 flex flex-col">

          <h1 className='text-base lg:text-xl xl:text-3xl font-medium '>{name}</h1>

          <div className="product-display-right-star text-xs md:text-sm lg:text-lg xl:text-xl md:my-1 lg:my-2 flex items-center gap-1 text-[#1c1c1c] ">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>

          <div className="product-display-right-prices my-2 lg:my-3 xl:my-5 flex gap-3 xl:gap-4 text-xl lg:text-2xl xl:text-3xl font-semibold ">

            <div className="product-display-right-price-old line-through text-[#818181bc]">
              ${old_price}
            </div>

            <div className="product-display-right-price-old text-[#ff4141] ">
              ${new_price}
            </div>

          </div>

          <div className="product-display-right-size">
            <h1 className='text-lg lg:text-xl xl:text-2xl text-[#656565] font-semibold '>Select Size</h1>
          </div>

          <div className="product-display-right-size py-1 flex gap-4 text-base xl:text-lg">

            <div className='size-responsive size-hover'>S</div>
            <div className='size-responsive size-hover'>M</div>
            <div className='size-responsive size-hover'>L</div>
            <div className='size-responsive size-hover'>XL</div>
            <div className='size-responsive size-hover'>XXL</div>

          </div>

          <div className='flex'>

            <button onClick={() => { addToCart(id) }} className='w-48 xl:w-80 my-4 xl:my-5 rounded-md text-base xl:text-lg bg-[#C21E56] hover:bg-[#c21e55e9]  text-white font-semibold px-4 py-2.5 lg:px-8  lg:py-3 xl:py-4 text-center border-none outline-none cursor-pointer'>ADD TO BAG</button>
          </div>

          <div className="product-display-right-description flex flex-col text-base xl:text-lg gap-2 my-1 lg:my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque voluptatum consectetur adipisicing elit.

            <p className='product-display-right-category'> <span className='font-semibold'>Category : </span>{category}, T-shirt, Crop-Top</p>

            <p className='product-display-right-category'> <span className='font-semibold'>Tags : </span> Modern, Tranding, Latest</p>

          </div>

        </div>
      </div >
    </div >
  )
}

export default ProductDisplay