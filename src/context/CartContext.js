import React, { useState, createContext } from "react";
import perfumes from "../images/perfumeData";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [shopItems, setShopItems] = useState(perfumes);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    let cartItemsTotal = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(cartItemsTotal);
  };

  const handleQtyChange = (id, op) => {
    cartItems.map((item, i) => {
      if (item.id === id) {
        const cartCopy = [...cartItems];
        const copiedItem = cartCopy[i];
        if (op === "add") {
          copiedItem.quantity += 1;
          cartCopy[i] = copiedItem;
          setCartItems(cartCopy);
        } else if (op === "subtract") {
          copiedItem.quantity -= 1;
          cartCopy[i] = copiedItem;
          setCartItems(cartCopy);
        }
      }
    });
    handleTotal();
  };

  const addToCart = (product) => {
    let duplicate = false;
    cartItems.map((item, i) => {
      if (item.id === product.id) {
        const modifiedCart = [...cartItems];
        const modifiedItem = modifiedCart[i];
        modifiedItem.quantity += item.quantity;
        modifiedCart[i] = modifiedItem;
        setCartItems(modifiedCart);
        handleTotal();
        duplicate = true;
      }
    });
    if (!duplicate) {
      const newItem = [...cartItems, product];
      setCartItems(newItem);
      let newPrice = total + product.price * product.quantity;
      setTotal(newPrice);
    }
  };

  const removeItem = (id) => {
    cartItems.map((item) => {
      if (item.id === id) {
        setTotal(total - item.price * item.quantity);
      }
    });
    const remainingItems = cartItems.filter((item) => item.id !== id);
    setCartItems(remainingItems);
  };
  return (
    <CartContext.Provider
      value={{
        shopItems: [shopItems, setShopItems],
        cartItems: [cartItems, setCartItems],
        total: [total, setTotal],
        addToCart,
        removeItem,
        handleQtyChange,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
