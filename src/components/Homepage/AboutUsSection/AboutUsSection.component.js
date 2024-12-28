import React from "react";
import "./AboutUsSection.styles.scss";

const AboutUsSection = () => {
  return (
    <div className="aboutUsContainer">
      <div className="imageSection">
        <div className="image-section-1">
          <img
            className="image1"
            src="./images/robo-head.jpg"
            alt="Robot Head"
          />
          <img
            className="image2"
            src="./images/robo-head.jpg"
            alt="Robot Head"
          />
        </div>
        <div className="image-section-2">
          <img
            className="image3"
            src="./images/robot2withkids.png"
            alt="Robot with Kids"
          />
          <img
            className="image4"
            src="./images/robot2withkids.png"
            alt="Robot with Kids"
          />
        </div>
      </div>

      <div className="aboutusSection">
        <h4 className="aboutTitle">ABOUT US</h4>
        <h1 className="mainHeading">
          Enhancing Lives with <br /> Autonomous Care and <br /> Support
        </h1>
        <p className="description">
          Robotics meets needs with precision, <br /> minimizing errors while
          enhancing experiences, <br /> ensuring efficient solutions without
          compromise.
        </p>

        <div className="statisticItem">
          <div className="statImage">
            <img
              className="statImage1"
              src="./images/robot-call.png"
              alt="Robot Call"
              style={{
                width: "100px",
              }}
            />
          </div>
          <div className="statText">
            <div className="stat-heading">100% Customers Satisfaction</div>
            <div>Committed to Delivering Excellence Every Time</div>
          </div>
        </div>

        <div className="statisticItem">
          <div className="statImage">
            <img
              className="statImage2"
              src="./images/Quality1.png"
              alt="Quality Assurance"
              style={{
                width: "60px",
              }}
            />
          </div>
          <div className="statText">
            <div className="stat-heading">Quality Assurance Guarantee</div>
            <div>Ensuring Excellence in Every Detail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
