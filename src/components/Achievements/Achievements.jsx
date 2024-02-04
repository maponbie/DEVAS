import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Achievements.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Achievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    breakPoint: {
      /* slides per view for small screens of 480px*/
      480: {
        slidesToShow: 1,
      },
      600: {
        slidesToShow: 2,
      },
      750: {
        slidesToShow: 3,
      },
      1100: {
        slidesToShow: 4,
      },
    },
  };
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="primaryText">Events</span>
        </div>
        <Slider {...settings}>
          {data.map((card, i) => (
            <div key={i} className="flexColStart r-card">
              <img src={card.image} alt="home" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Achievements;
