import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*left side */}
        <div classname="flexColStart c-left">
          <span className="greenText">
            Our Contacts <br />
          </span>
          <span className="primaryText">
            Easy to Contact Us <br />
          </span>
          <span className="secondaryText">
            Whether you're a student in need of support, a potential partner, or
            someone looking to get involved, we welcome your inquiries and
            feedback. Together, we can make a difference in the lives of college
            students struggling with food insecurity.
          </span>

          <div className="flexColStart contactModes">
            {/*first row of modes */}
            {/*first mode: call us */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">999 999 9999</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/*second mode: chat */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">999 999 9999</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="./components/ChatBot/index.html" target="_blank">
                    Chat Now
                  </a>{" "}
                </div>
              </div>
            </div>

            {/*second row of modes */}
            {/*third mode: video call */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">999 999 9999</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/*fourth mode: message */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">999 999 9999</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/*right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contactImage.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
