import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section class="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./nourishnet.png" alt="logo" width={10} />

        <div className="flexCenter h-menu">
          <a href="">Register Now</a>
          <a href="">About Us</a>
          <a href="">Donate</a>
          <button className="button">
            <a href="">Contact Us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
