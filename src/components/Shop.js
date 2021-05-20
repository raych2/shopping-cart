import React, { useState } from "react";
import perfumes from "../images/perfumeData";
import styled from "styled-components";
import Header from "../shared/Header";

const PerfumeCollection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const PerfumeDiv = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PerfumeInfo = styled.div`
  margin: 5px;
`;

const StyledImage = styled.img`
  height: 400px;
  width: auto;
  border: 5px solid gray;
`;

const Shop = () => {
  const [products, setProducts] = useState(perfumes);

  return (
    <div>
      <Header>Fragrances</Header>
      <PerfumeCollection>
        {products.map((product) => {
          return (
            <PerfumeDiv key={product.id}>
              <StyledImage
                src={product.image}
                alt={`${product.brand} ${product.name}`}
              ></StyledImage>
              <PerfumeInfo>{product.brand}</PerfumeInfo>
              <PerfumeInfo>{product.name}</PerfumeInfo>
              <PerfumeInfo>${product.price}</PerfumeInfo>
            </PerfumeDiv>
          );
        })}
      </PerfumeCollection>
    </div>
  );
};

export default Shop;
