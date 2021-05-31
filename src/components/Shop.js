import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import perfumes from "../images/perfumeData";
import styled from "styled-components";
import Header from "../shared/Header";
import Perfume from "./Perfume";

const PerfumeCollection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Shop = (props) => {
  const [products, setProducts] = useState(perfumes);
  const { cartItems, total } = useContext(CartContext);
  const [cartItemsValue, setCartItemsValue] = cartItems;
  const [totalValue, setTotalValue] = total;

  const addToCart = (product) => {
    let newItem = [
      ...cartItemsValue,
      {
        id: product.id,
        brand: product.brand,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      },
    ];
    setCartItemsValue(newItem);
    let newPrice = totalValue + product.price;
    setTotalValue(newPrice);
  };

  return (
    <div>
      <Header>Fragrances</Header>
      <PerfumeCollection>
        {products.map((product) => {
          return (
            <Perfume key={product.id} product={product} addToCart={addToCart} />
          );
        })}
      </PerfumeCollection>
    </div>
  );
};

export default Shop;
