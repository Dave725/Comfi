import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div class="f wrapper">
        <div class="brand">
          <Link to="/">
            <img src="/images/Comfi-logo1.png" alt="" />
          </Link>
        </div>
        <div class="f options">
          {/* <p>
            <a href="#testimonials">Reviews</a>
          </p>
          <p>
            <a href="footer">Contact</a>
          </p> */}
          <Link to="/products">
            <button class="btn btn-cta">
              <span>View all products</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
