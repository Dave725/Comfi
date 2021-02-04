import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="f wrapper">
        <div className="brand">
          <Link to="/">
            <img src="/images/Comfi-logo1.png" alt="" />
          </Link>
        </div>
        <div className="f options">
          <Link to="/about">
            <p>About us</p>
          </Link>
          <Link to="/products">
            <p>Products</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
