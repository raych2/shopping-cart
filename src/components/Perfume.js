import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "../shared/StyledButton";

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

const StyledCounter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 10px;
  width: 20vw;
`;

const Perfume = (props) => {
  const [count, setCount] = useState(0);

  const product = props.product;
  const addToCart = props.addToCart;

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <PerfumeDiv>
      <StyledImage
        src={product.image}
        alt={`${product.brand} ${product.name}`}
      ></StyledImage>
      <PerfumeInfo>{product.brand}</PerfumeInfo>
      <PerfumeInfo>{product.name}</PerfumeInfo>
      <PerfumeInfo>${product.price}</PerfumeInfo>
      <StyledCounter>
        <button onClick={decreaseCount}>-</button>
        {count}
        <button onClick={increaseCount}>+</button>
      </StyledCounter>
      <StyledButton onClick={() => addToCart(product, count)}>
        Add to Cart
      </StyledButton>
    </PerfumeDiv>
  );
};

export default Perfume;
