import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innterWidth flexCenter hero-container">
        {/*left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              <h1>Nourish Net</h1>
              <br />
              <p>
                Food Relief Program <br />
                for College Students
              </p>
            </motion.h1>
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
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./food-network.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
