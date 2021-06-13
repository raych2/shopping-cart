import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../shared/Header";
import StyledButton from "../shared/StyledButton";
import {
  faTrashAlt,
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
const TotalSection = styled(InfoContainer)`
  align-items: center;
`;
const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: space-evenly;
`;
const Quantity = styled.div`
  padding: 0 10px;
`;
const Checkout = styled(StyledButton)`
  width: 10vw;
  margin: 40px 0;
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
                <QuantityContainer>
                  <Quantity>Qty:</Quantity>
                  <FontAwesomeIcon
                    icon={faMinusSquare}
                    size="lg"
                    onClick={() => handleQtyChange(item.id, "subtract")}
                  />
                  <Quantity>{item.quantity}</Quantity>
                  <FontAwesomeIcon
                    icon={faPlusSquare}
                    size="lg"
                    onClick={() => handleQtyChange(item.id, "add")}
                  />
                </QuantityContainer>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  size="lg"
                  onClick={() => removeItem(item.id)}
                />
              </ItemContainer>
            );
          })}
        </ItemCollection>
        <TotalSection>
          <TotalContainer>Total: ${totalValue}</TotalContainer>
          <Checkout>Checkout</Checkout>
        </TotalSection>
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
