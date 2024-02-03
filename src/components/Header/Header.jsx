import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./nourishnet.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <Link to="/register">Register Now</Link>
          <Link to="/companies">Residencies</Link>
          <Link to="/donate">Our Value</Link>
          <button className="button">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

