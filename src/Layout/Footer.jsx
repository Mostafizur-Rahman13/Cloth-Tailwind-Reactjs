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
      <div className="footer">
        <hr className='h-[2px] bg-slate-500' />
        <div className='footer-item md:flex justify-between list-none pb-10 gap-[50px] bg-[#FFFFFF]'>

          <div className='md:flex flex-col ml-4'>
            <h2 className='mt-[20px] font-semibold text-lg '>Legal</h2>
            <ul className='md:flex flex-col mt-4 gap-[10px] '>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Privacy Policy</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Payment Policy</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Shipping Policy</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Terms Conditions</li>
            </ul>
          </div>

          <div className='md:flex flex-col ml-4'>
            <h2 className='mt-[20px] font-semibold text-lg '>Information</h2>
            <ul className='md:flex flex-col mt-4 gap-[10px] '>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Exchange & Return</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Size Guide</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Loyalty Program</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Display Centers</li>
            </ul>

          </div>

          <div className='md:flex flex-col ml-4'>
            <h2 className='mt-[20px] font-semibold text-lg '>About us</h2>
            <ul className='md:flex flex-col mt-4 gap-[10px] '>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Contact us</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>Intellectul Property</li>
            </ul>

          </div>

          <div className='md:flex flex-col ml-4 px-12 '>

            <h2 className='mt-[20px] font-semibold text-lg'>Payment us by</h2>

            <div className='md:flex gap-x-5 mt-5'>
              <img className='rounded-lg' src={visa} alt="" />
              <img className='rounded-lg' src={mastercard} alt="" />
            </div>

            <div className='md:flex gap-x-5 mt-5'>
              <img className='rounded-lg' src={express} alt="" />
              <img className='rounded-lg' src={nagad} alt="" />
            </div>
            <div className='md:flex gap-x-5 mt-5'>
              <img className='rounded-lg' src={bkash} alt="" />
              <img className='rounded-lg' src={rocket} alt="" />
            </div>
          </div>

          <div className='md:flex flex-col ml-4'>
            <h2 className='mt-[20px] font-semibold text-lg'>Service Center</h2>
            <ul className='md:flex flex-col mt-4 gap-[10px]'>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>0987654321</li>
              <li className='text-[#828282] hover:text-[#2F2F2F] cursor-pointer'>unique@info.com</li>
            </ul>
          </div >
        </div >

        <hr className='h-[2px] bg-slate-500' />
        <h3 className='text-center mb-2'>© 2024 UNIQUE. All rights reserved.</h3>
      </div>
    </>
  )
}

export default Footer