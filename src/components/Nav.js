import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = styled.nav`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
`;
const LinkList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20vw;
  list-style-type: none;
`;
const NavLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  color: #fff;
`;
const Company = styled.h3`
  margin-left: 60px;
`;

const Nav = () => {
  const { cartItems } = useContext(CartContext);
  const [cartItemsValue, setCartItemsValue] = cartItems;

  return (
    <Navbar>
      <NavLink to="/">
        <Company>Favorite Perfume Store</Company>
      </NavLink>
      <LinkList>
        <NavLink to="/shop">
          <li>Shop</li>
        </NavLink>
        <NavLink to="/cart">
          <li>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>
              (
              {cartItemsValue.reduce((acc, item) => {
                return acc + item.quantity;
              }, 0)}
              )
            </span>
          </li>
        </NavLink>
      </LinkList>
    </Navbar>
  );
};

export default Nav;
