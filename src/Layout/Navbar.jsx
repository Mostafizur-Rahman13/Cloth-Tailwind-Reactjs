import React, { useContext, useRef, useState } from 'react'
import cart from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
import menu_icon from '../assets/menu-icon.png'
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
    <div className="navbar flex justify-around items-center gap-5 p-4 py-4 md:border-b-[1px] border-[#182123]  ">


      <img onClick={menuToggle} className='h-[30px] w-[30px] pt-1 md:hidden' src={menu_icon} alt="" />

      <Link to="/"> <div className='nav-logo text-center items-center font-bold text-2xl lg:text-4xl '>
        UNIQUE
      </div></Link>

      <ul ref={menuRef} className='nav-menu md:flex md:items-center md:gap-6 md:text-sm md:font-medium lg:gap-12 lg:text-xl'>

        <Link to="/"> <li onClick={() => { setMenu("home") }} className={`${menu === "home" ? `border-b-[4px] border-indigo-800 border-r-[1px] pr-[11px] ` : `cursor-pointer border-r-[1px] pr-[11px] hover:border-b-[4px] border-rounded:lg pb-[4px] border-indigo-500`}`}>Home</li></Link>


        <Link to="/men"> <li onClick={() => { setMenu("men") }} className={`${menu === "men" ? `border-b-[4px] border-indigo-800 border-r-[1px] pr-[11px]` : `cursor-pointer border-r-[1px] pr-[11px] hover:border-b-[4px] border-rounded:lg pb-[4px] border-indigo-500`}`}>Men</li></Link>

        <Link to="/women"> <li onClick={() => { setMenu("Woman") }} className={`${menu === "Woman" ? `border-b-[4px] border-indigo-800 border-r-[1px] pr-[11px] ` : `cursor-pointer border-r-[1px] pr-[11px] hover:border-b-[4px] border-rounded:lg pb-[4px] border-indigo-500`}`}> Women</li></Link>


        <Link to="/kids"><li onClick={() => { setMenu("kids") }} className={`${menu === "kids" ? `border-b-[4px] border-indigo-800 border-r-[1px] pr-[11px]` : `cursor-pointer border-r-[1px] pr-[11px] hover:border-b-[4px] border-rounded:lg border-indigo-800`}`}>Kids</li></Link>



      </ul >

      <div className="nav-login-cart mb-1 flex md:gap-[50px] items-center ">

        <Link to="/cart"><img src={cart} className='w-12 lg:w-12 text-indigo-900 md:hover:scale-105 relative' /> </Link>

        {getTotalCartItems() === 0 ? <></> : <div className={`w-4 h-4 rounded-lg ml-7 mt-[-26px] text-[8px] lg:w-[20px] lg:h-[20px] lg:rounded-xl absolute lg:ml-[37px] lg:mt-[-30px] lg:text-xs flex items-center justify-center text-white bg-slate-600`}>{getTotalCartItems()}</div>}

        <Link to="/login"> <button className='sm:text-[8px] py-2 px-4 lg:px-8 md:text-sm lg:text-xl rounded-md lg:rounded-xl bg-indigo-900 text-white font-medium text-center items-center hover:ring-2 ring-orange-600 hover:bg-indigo-800' onClick={() => { setShowLogin(true) }}>Signin</button></Link>

      </div>

    </div >
  )
}

export default Navbar