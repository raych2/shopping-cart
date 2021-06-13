import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import StyledButton from "../shared/StyledButton";

const PerfumeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 50px;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
`;
const Detail = styled.div`
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  height: 400px;
  width: auto;
  border: 5px solid gray;
  margin-left: 100px;
`;

const PerfumeDetail = ({ match }) => {
  const { shopItems, addToCart } = useContext(CartContext);
  const [shopItemsValue, setShopItemsValue] = shopItems;

  const selectedPerfume = shopItemsValue.find(
    ({ id }) => id === Number(match.params.id)
  );

  const addProduct = () => {
    let newItem = {
      id: selectedPerfume.id,
      brand: selectedPerfume.brand,
      name: selectedPerfume.name,
      image: selectedPerfume.image,
      price: selectedPerfume.price,
      quantity: 1,
    };
    addToCart(newItem);
  };

  return (
    <div>
      <PerfumeContainer>
        <StyledImage
          src={selectedPerfume.image}
          alt={`${selectedPerfume.brand} ${selectedPerfume.name}`}
        ></StyledImage>
        <DetailContainer>
          <Detail>
            <h1>{selectedPerfume.brand}</h1>
            <h2>{selectedPerfume.name}</h2>
          </Detail>
          <Detail>
            <h3>${selectedPerfume.price}</h3>
          </Detail>
          <Detail>{selectedPerfume.size}</Detail>
          <Detail>{selectedPerfume.description}</Detail>
          <StyledButton onClick={addProduct}>Add to Cart</StyledButton>
        </DetailContainer>
      </PerfumeContainer>
    </div>
  );
};

export default PerfumeDetail;
