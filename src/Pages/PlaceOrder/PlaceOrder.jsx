import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='place-order w-11/12 md:w-10/12 flex flex-col md:flex-row items-start sm:justify-between gap-12 mx-auto  mt-14 md:my-10' >

      <div className='place-order-left'>

        <p className='title text-3xl font-semibold'>Delivery Information</p>

        <div className='multi-fields flex gap-2.5'>
          <input className='place-order-input' type="text" placeholder='First name' />
          <input className='place-order-input' type="text" placeholder='Last name' />
        </div>

        <input className='place-order-input' type="email" placeholder='Email' />
        <input className='place-order-input' type="text" placeholder='Street' />

        <div className='multi-fields flex gap-2.5'>
          <input className='place-order-input' type="text" placeholder='City' />
          <input className='place-order-input' type="text" placeholder='State' />
        </div>

        <div className='multi-fields flex gap-2.5'>
          <input className='place-order-input' type="text" placeholder='Zip code' />
          <input className='place-order-input' type="text" placeholder='Country' />
        </div>

        <input className='place-order-input' type="text" placeholder='Phone' />

      </div>



      <div className='place-order-right w-full md:w-3/6'>

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
          <button onClick={() => navigator("/placeorder")} className='cart-btn pointer'>Proceed To Payment</button>
        </div>

      </div>

    </form>
  )
}

export default PlaceOrder