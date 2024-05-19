import React from 'react'
import express from '../assets/Aexpress.jpg'
import visa from '../assets/visa.jpg'
import mastercard from '../assets/mastercard.jpg'
import bkash from '../assets/bkash.jpg'
import rocket from '../assets/rocket.jpg'
import nagad from '../assets/nagad.jpg'


const Footer = () => {
  return (
    <>
      <div className="footer mx-auto">
        <hr className='h-0.5 bg-slate-500' />
        <div className='footer-item grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr_1fr] justify-between mx-auto  list-none pb-10 lg:gap-5 xl:gap-10 bg-[#FFFFFF]'>

          <div className='flex flex-col md:ml-10'>
            <h2 className='mt-[20px] font-semibold text-lg '>Legal</h2>
            <ul className='flex flex-col mt-4 gap-2.5'>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Privacy Policy</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Payment Policy</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Shipping Policy</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Terms Conditions</li>
            </ul>
          </div>

          <div className='flex flex-col '>
            <h2 className='mt-5 font-semibold text-lg '>Information</h2>
            <ul className='flex flex-col mt-4 gap-2.5 '>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Exchange & Return</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Size Guide</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Loyalty Program</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Display Centers</li>
            </ul>

          </div>

          <div className='flex flex-col md:ml-0 '>
            <h2 className='mt-5 font-semibold text-lg '>About us</h2>
            <ul className='flex flex-col mt-4 gap-2.5 '>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Contact us</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Intellectul Property</li>
            </ul>

          </div>

          <div className='flex flex-col md:ml-10 lg:ml-0 '>

            <h2 className='mt-5 font-semibold text-lg'>You Can Pay</h2>

            <div className='flex gap-x-5 mt-5'>
              <img className='rounded-lg' src={visa} alt="" />
              <img className='rounded-lg' src={mastercard} alt="" />
            </div>

            <div className='flex gap-x-5 mt-5'>
              <img className='rounded-lg' src={express} alt="" />
              <img className='rounded-lg' src={nagad} alt="" />
            </div>
            <div className='flex gap-x-5 mt-5'>
              <img className='rounded-lg' src={bkash} alt="" />
              <img className='rounded-lg' src={rocket} alt="" />
            </div>
          </div>

          <div className='flex flex-col md:ml-0'>
            <h2 className='mt-5 font-semibold text-lg'>Service Center</h2>
            <ul className='flex flex-col mt-4 gap-2.5'>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>01971334863</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>mostafiztarek@gmail.com</li>
            </ul>
          </div >
        </div >

        <hr className='h-0.5 bg-slate-500' />
        <h3 className='text-center mb-2'>© 2024 UNIQUE. All rights reserved.</h3>
      </div>
    </>
  )
}

export default Footer