import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../shared/Header";
import Perfume from "./Perfume";

const PerfumeCollection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;
const PerfumeLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #000;
`;

const Shop = (props) => {
  const { shopItems, addToCart } = useContext(CartContext);
  const [shopItemsValue, setShopItemsValue] = shopItems;

  return (
    <div>
      <Header>Fragrances</Header>
      <PerfumeCollection>
        {shopItemsValue.map((product) => {
          return (
            <PerfumeLink to={`/shop/${product.id}`}>
              <Perfume
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            </PerfumeLink>
          );
        })}
      </PerfumeCollection>
    </div>
  );
};

export default Shop;
