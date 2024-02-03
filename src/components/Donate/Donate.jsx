import React from "react";
import "./Donate.css";

const Donate = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">
            Make a Difference with Your Donation Today!
            <br />
          </span>
          <span className="secondaryText">
            Every donation goes directly towards providing nutritious meals and
            essential food supplies to students in need.
          </span>
          <span>
            <button className="button">
              <a href="mailto: info@rewritingthecode.org">Donate Now</a>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Donate;
