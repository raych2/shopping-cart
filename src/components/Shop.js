import React, { useState } from "react";
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

  const addToCart = props.addToCart;

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
