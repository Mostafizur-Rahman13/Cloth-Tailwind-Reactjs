import React, { useContext, useRef, useState } from 'react'
import cart from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
import menu_icon from '../assets/menu-icon.png'
import user_icon from '../assets/user_icon.png'
import './Navbar.css'

const Navbar = ({ setShowLogin }) => {

  const { getTotalCartItems } = useContext(StoreContext);
  const [menu, setMenu] = useState("home")
  const menuRef = useRef()


  const menuToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className="navbar w-full flex justify-around items-center gap-5 p-4 py-4 md:border-b-[1px] border-[#182123] shadow-lg shadow-indigo-500 rounded-sm ">


      <img onClick={menuToggle} className='h-[30px] w-[30px]  pt-1 md:hidden' src={menu_icon} alt="" />

      <Link to="/"> <div className='nav-logo text-center items-center font-bold text-2xl lg:text-4xl '>
        UNIQUE
      </div></Link>

      <ul ref={menuRef} className='nav-menu md:flex md:items-center md:gap-6 md:text-sm md:font-medium lg:gap-12 lg:text-xl'>

        <Link to="/"> <li onClick={() => { setMenu("home") }} className={`${menu === "home" ? `item-active` : `item-default pointer`}`}>Shop</li></Link>


        <Link to="/panjabi"> <li onClick={() => { setMenu("panjabi") }} className={`${menu === "panjabi" ? `item-active` : `item-default pointer`}`}>Panjabi</li></Link>

        <Link to="/tshirt"> <li onClick={() => { setMenu("tshirt") }} className={`${menu === "tshirt" ? `item-active` : `item-default pointer`}`}>T_Shirt</li></Link>

        <Link to="/women"> <li onClick={() => { setMenu("Woman") }} className={`${menu === "Woman" ? `item-active ` : `item-default pointer`}`}> Women T_Shirt</li></Link>


        <Link to="/kids"><li onClick={() => { setMenu("kids") }} className={`${menu === "kids" ? `item-active ` : `item-default pointer`}`}>Kids</li></Link>



      </ul >

      <div className="nav-login-cart  flex gap-x-5  md:gap-[50px] justify-items-center items-center ">

        <Link to="/cart"><img src={cart} className='w-10 lg:w-12 text-indigo-900 md:hover:scale-105 relative' /> </Link>

        {getTotalCartItems() === 0 ? <></> : <div className={`w-4 h-4 rounded-lg ml-7 mt-[-26px] text-[8px] lg:w-[20px] lg:h-[20px] lg:rounded-xl absolute lg:ml-[37px] lg:mt-[-30px] lg:text-xs flex items-center justify-center text-white bg-slate-600`}>{getTotalCartItems()}</div>}


        <Link to="/login"> <img src={user_icon} className='w-8 lg:w-10  items-center  ' onClick={() => { setShowLogin(true) }} /> </Link>

      </div>

    </div >
  )
}

export default Navbar
