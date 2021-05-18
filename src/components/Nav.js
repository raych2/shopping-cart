import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Nav = () => {
  return (
    <Navbar>
      <NavLink to="/">
        <h3>Favorite Perfume Store</h3>
      </NavLink>
      <LinkList>
        <NavLink to="/shop">
          <li>Shop</li>
        </NavLink>
        <NavLink to="/cart">
          <li>Cart</li>
        </NavLink>
      </LinkList>
    </Navbar>
  );
};

export default Nav;
