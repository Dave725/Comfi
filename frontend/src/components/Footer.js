import React from "react";
import "../index.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div class="social">
        <i class="fas fa-envelope fa-lg"></i>
        <i class="fab fa-tiktok fa-lg"></i>
        <i class="fab fa-instagram fa-lg"></i>
        <i class="fab fa-facebook-f fa-lg"></i>
      </div>
      <p>&copy; Comfi 2021</p>
    </footer>
  );
};

export default Footer;
