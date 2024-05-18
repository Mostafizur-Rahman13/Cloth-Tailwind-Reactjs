import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import dropdown_icon from '../../assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'

const ShopCategory = (props) => {

  const { all_product } = useContext(StoreContext)

  return (
    <div className='shop-category w-11/12 items-center block mx-auto my-8'>

      <img src={props.banner} alt="" />

      <div className='shopcategory-indexshort flex my-5 mx-auto justify-between align-center'>

        <p ><span className='font-semibold'>Showing 1-12</span>out of 36 product</p>
        <div className="shopcategory-sort flex justify-between align-center px-5 py-2 border-gray-600 border-[1px] rounded-2xl">
          Sort by <img className='py-2 pl-1 ' src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products grid grid-cols-4 justify-between gap-20 my-5 ">

        {all_product.map((item) => {

          if (props.category === item.category) {

            const { id, name, image, old_price, new_price } = item

            return <Item key={id} id={id} name={name} image={image} old_price={old_price} new_price={new_price} />

          } else {

            return null
          }

        })}

      </div>
      <div className="explore-more h-14 w-64 font-semibold flex justify-center items-center mx-auto my-12 rounded-3xl bg-purple-800 text-white hover:bg-purple-700 hover:font-bold hover:duration-300 hover:delay-150 ">
        <button>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory