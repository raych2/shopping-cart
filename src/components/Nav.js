import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <Link to="/">
        <h3>Favorite Perfume Store</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
