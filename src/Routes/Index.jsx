import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import Login from '../Pages/Login/Login'
import Cart from '../Pages/Cart/Cart'
import Product from '../Pages/Product/Product'
import ShopCategory from '../Pages/ShopCategory/ShopCategory'
import Home from '../Pages/Home/Home'
import men_banner from '../assets/banner_mens.png'
import women_banner from '../assets/banner_women.png'
import kids_banner from '../assets/banner_kids.png'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import PlaceOrder from '../Pages/PlaceOrder/PlaceOrder'

const Index = () => {

  const { login, SetShowLogin } = useState(false)

  return (

    < BrowserRouter >

      <Navbar SetShowLogin={SetShowLogin} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login SetShowLogin={SetShowLogin} />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/men" element={<ShopCategory banner={men_banner} category='men' />} />

        <Route path="/women" element={<ShopCategory banner={women_banner} category='women' />} />

        <Route path="/kids" element={<ShopCategory banner={kids_banner} category='kid' />} />

        <Route path="/product" element={<Product />} >

          <Route path=":productId" element={<Product />} />

        </Route>

        <Route path="/placeorder" element={<PlaceOrder />} />

      </Routes>

      <Footer />

    </BrowserRouter >

  )
}


export default Index