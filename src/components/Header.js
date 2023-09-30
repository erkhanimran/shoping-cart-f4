import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <p>Shopping Cart</p>
      </div>
      <div className="right-links">
        <Link to="/">Home Page</Link>
        <Link to="/cart">Cart Page</Link>
      </div>
    </header>
  );
};

export default Header;
