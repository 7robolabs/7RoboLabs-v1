import React from "react";
import "./WhyChooseUsSection.styles.scss";

const WhyChooseUsSection = () => {
  return (
    <div className="whyChooseUsSection">
      <div className="imageSection">
        <div className="mainImage">
          <img src="./images/robotwithtab.png" alt="Robot with Tablet" />
        </div>
      </div>
      <div className="textSection">
        <h3 className="sectionTitle">WHY CHOOSE US</h3>
        <h1 className="mainHeading">
          Robotics improves automation, <br /> increases efficiency, and boosts{" "}
          <br /> productivity across diverse industries.
        </h1>
        <p className="description">
          Transforming Industries Through <br /> Advanced Automation and
          Enhanced Efficiency
        </p>
        <div className="featuresList">
          <div className="featureItem">
            <img
              className="featureIcon"
              src="./images/robothand1.png"
              alt="Feature Icon"
            />
            <div className="featureText">Innovation That Drives Success</div>
          </div>
          <div className="featureItem">
            <img
              className="featureIcon"
              src="./images/robothand1.png"
              alt="Feature Icon"
            />
            <div className="featureText">
              Empowering Your Future with Cutting-Edge Solutions
            </div>
          </div>
          <div className="featureItem">
            <img
              className="featureIcon"
              src="/images/robothand1.png"
              alt="Feature Icon"
            />
            <div className="featureText">Your Vision, Our Commitment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
