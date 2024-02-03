import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section class="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./nourishnet.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="">Register Now</a>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <button className="button">
            <a href="">Contact Us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
