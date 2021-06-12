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
const RemoveButton = styled.button`
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
  const { cartItems, total, removeItem, handleQtyChange } =
    useContext(CartContext);
  const [cartItemsValue, setCartItemsValue] = cartItems;
  const [totalValue, setTotalValue] = total;

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
                <div>
                  Qty:
                  <button onClick={() => handleQtyChange(item.id, "subtract")}>
                    -
                  </button>
                  {item.quantity}
                  <button onClick={() => handleQtyChange(item.id, "add")}>
                    +
                  </button>
                </div>
                <RemoveButton onClick={() => removeItem(item.id)}>
                  X
                </RemoveButton>
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
