import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import remove_icon from '../../assets/cart_cross_icon.png'
import all_product from '../../assets/all_product'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigator = useNavigate()
  const { cartItems, addToCart, removeToCart, getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className='cartitems '>
      <div className="cart-itemm ">
        <div className="cartitems-format-main my-3 mt-8  gap-1 text-[#555] cart-responsive ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className='h-[2px] bg-[#e2e2e2] ' />

        {all_product.map((item) => {

          const { id, image, name, new_price } = item;

          if (cartItems[id] > 0) {

            return <div key={id}>
              <div className="cartitems-format py-4 gap-1  font-medium text-[#454545] cart-responsive ">
                <img className='pointer' src={image} alt="" />
                <p className='pointer text-xs xl:text-base'>{name}</p>
                <p className='pointer'>${new_price}</p>
                <button className='pointer '>{cartItems[id]}</button>
                <p className='pointer'>${cartItems[id] * new_price}</p>
                <p className='pointer mx-auto text-center text-2xl border-[none] hover:border-2 py-[2px] px-4 hover:rounded-lg hover:bg-red-600 hover:shadow-lg hover:shadow-indigo-700 hover:border-[none] hover:text-white' onClick={() => { removeToCart(id) }} >x</p>
              </div>
              <hr className='h-0.5 bg-[#e2e2e2]' />
            </div>
          }
        })}

      </div>

      <div className="cart-bottom w-full md:w-5/12 my-20">
        <div className="cart-total flex flex-col gap-5">

          <h2 className='text-2xl font-bold'>Cart Totals</h2>

          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2.5' />

            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Charge</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-2.5' />

            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Grand Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigator("/placeorder")} className='text-[white] bg-[#b847ff] hover:bg-[#9343c4] transition-[0.3s] w-[max(15vw,200px)] rounded cursor-pointer text-base py-3.5'>Proceed To Checkout</button>
        </div>

      </div>
    </div >

  )
}

export default Cart
