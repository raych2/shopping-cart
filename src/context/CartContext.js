import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <CartContext.Provider
      value={{ cartItems: [cartItems, setCartItems], total: [total, setTotal] }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
