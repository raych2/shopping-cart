import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../shared/Header";
import StyledButton from "../shared/StyledButton";

const CartCollection = styled.div`
  display: grid;
  grid-template-columns: 75vw 25vw;
`;
const ItemCollection = styled.div`
  display: grid;
  grid-template-row: repeat(1, 1fr);
  row-gap: 20px;
`;
const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 4px;
  margin-left: 20px;
`;
const StyledImage = styled.img`
  height: 250px;
  width: auto;
  border: 5px solid gray;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const removeButton = styled.button`
  border-radius: 3px;
  padding: 10px;
  font-size: 1em;
  text-align: center;
  width: 10vw;
`;
const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EmptyMessage = styled.div`
  font-size: 2em;
  margin-bottom: 40px;
  text-align: center;
`;

const Cart = (props) => {
  const { cartItems, total } = useContext(CartContext);
  const [cartItemsValue, setCartItemsValue] = cartItems;
  const [totalValue, setTotalValue] = total;

  const removeItem = (id) => {
    for(let i = 0; i < cartItemsValue.length; i++){
      if(cartItemsValue[i].id === id) {
        setTotalValue(totalValue - cartItemsValue[i].price);
      }
    }
    const remainingItems = cartItemsValue.filter((item) => item.id !== id);
    setCartItemsValue(remainingItems);
  }

  return cartItemsValue.length !== 0 ? (
    <>
      <Header>Cart</Header>
      <CartCollection>
        <ItemCollection>
          {cartItemsValue.map((item, index) => {
            return (
              <ItemContainer key={index}>
                <StyledImage
                  src={item.image}
                  alt={`${item.brand} ${item.name}`}
                ></StyledImage>
                <InfoContainer>
                  <div>{item.brand}</div>
                  <div>{item.name}</div>
                </InfoContainer>
                <div>${item.price}</div>
                <div>Qty: {item.quantity}</div>
                <removeButton onClick={() => removeItem(item.id)}>X</removeButton>
              </ItemContainer>
            );
          })}
        </ItemCollection>
        <TotalContainer>Total: ${totalValue}</TotalContainer>
      </CartCollection>
    </>
  ) : (
    <EmptyCart>
      <Header>Cart</Header>
      <EmptyMessage>Your cart is currently empty</EmptyMessage>
      <Link to="/shop">
        <StyledButton>Return to Shop</StyledButton>
      </Link>
    </EmptyCart>
  );
};

export default Cart;
