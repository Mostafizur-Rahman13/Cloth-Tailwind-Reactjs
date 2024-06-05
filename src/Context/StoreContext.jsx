import React, { createContext, useState } from 'react'
import all_product from '../assets/all_product'


export const StoreContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }

  return cart;
}


const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {

    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateToCart = (itemId, handle) => {
    // alert(itemId)
    // let match = cartItems[id] === itemId
  }

  const getTotalCartAmount = () => {

    let totalAmount = 0;

    for (let item in cartItems) {

      if (cartItems[item] > 0) {

        let itemInfo = all_product.find((product) => product.id === Number(item));

        totalAmount += itemInfo.new_price * cartItems[item];
      }

    }
    return totalAmount;
  }


  const getTotalCartItems = () => {

    let totalItems = 0;

    for (let item in cartItems) {

      if (cartItems[item] > 0) {

        totalItems += cartItems[item];

      }
    }
    return totalItems;
  }


  const contextValue =
  {
    all_product,
    cartItems,
    addToCart,
    removeToCart,
    getTotalCartAmount,
    getTotalCartItems,
    updateToCart
  };


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;