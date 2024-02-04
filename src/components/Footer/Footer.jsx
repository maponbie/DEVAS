import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
      <span>© Nourish Net</span>
    </footer>
  );
};

export default Footer;
