import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import dropdown_icon from '../../assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'

const ShopCategory = (props) => {

  const { all_product } = useContext(StoreContext)

  return (
    <div className='shop-category items-center gap-2.5 mx-auto my-16 md:my-8'>

      {/* <img src={props.banner} alt="" /> */}

      <div className='shopcategory-indexshort flex my-5 mx-auto justify-between items-center'>

        <p ><span className='font-semibold'>Showing 1-12</span> out of 36 product</p>
        <div className="shopcategory-sort flex justify-between items-center py-1 lg:py-2 px-2 lg:px-3 xl:px-5 border-gray-600 border-[1px] rounded-2xl">
          Sort by <img className='md:py-1 lg:py-2 pl-1 ' src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products my-8 md:my-5 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-2 lg:gap-5">

        {all_product.map((item) => {

          if (props.category === item.category) {

            const { id, name, image, old_price, new_price } = item

            return <Item key={id} id={id} name={name} image={image} old_price={old_price} new_price={new_price} />

          } else {

            return null
          }

        })}

      </div>
      <div className="explore-more h-8 w-36  md:h-10 md:w-44 lg:h-12 lg:w-60 xl:h-14 xl:w-64 py-6 md:py-6 lg:my-8 xl:my-12 font-semibold flex justify-center items-center mx-auto  rounded-3xl bg-purple-800 text-white hover:bg-purple-700 hover:font-bold hover:duration-200 hover:delay-150 ">
        <button>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory