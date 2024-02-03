import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innterWidth flexCenter hero-container">
        {/*left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Nourish Net
              <br />
              Food Relief Program <br />
              for College Students
            </h1>
          </div>
          <div classname="flexColStart hero-des">
            <span>
              We believe no college student should face the challenge of hunger
              alone. In the bustling halls of academia, <br />
              we're dedicated to ensuring that every student has access to the
              nourishment they need to thrive.{" "}
            </span>
          </div>
          <div className="flexCenter search-bar">
            <input type="text" />
            <button className="button">Search</button>
          </div>
        </div>

        {/*right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./food-network.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
