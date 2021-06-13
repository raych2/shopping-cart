import React, { useState } from "react";
import styled from "styled-components";

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

const Perfume = (props) => {
  const product = props.product;

  return (
    <PerfumeDiv>
      <StyledImage
        src={product.image}
        alt={`${product.brand} ${product.name}`}
      ></StyledImage>
      <PerfumeInfo>{product.brand}</PerfumeInfo>
      <PerfumeInfo>{product.name}</PerfumeInfo>
      <PerfumeInfo>${product.price}</PerfumeInfo>
    </PerfumeDiv>
  );
};

export default Perfume;
