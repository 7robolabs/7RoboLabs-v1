import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.styles.scss";

const ServicesSection = () => {
  return (
    <div className="servicesSection">
      <div className="backgroundSection">
        <div className="contentSection">
          <h4 className="servicesTitle">SERVICES WE PROVIDE</h4>
          <h1 className="servicesHeading">
            Our Goal Is To Provide <br /> Excellent Service And <br /> Flawless
            Execution
          </h1>
          <h3 className="servicesDescription">
            We are committed to delivering excellence <br /> in service and
            execution, creating <br /> lasting value by exceeding expectations
            in every detail.
          </h3>
        </div>
      </div>

      <div className="cardsSection">
        <div className="cardRow">
          <div className="serviceCard">
            <img src="./images/robotic1.png" alt="Robotics" className="serviceImage" />
            <div className="cardContent">
              <h5 className="cardTitle">Robotics</h5>
              <p className="cardDescription">
                Building the Future:
                <br /> Hands-on Robotics <br /> for Innovators
              </p>
              <Link to="#" className="readMore">
                READ MORE
              </Link>
            </div>
          </div>

          <div className="serviceCard">
            <img src="./images/AI-ML.png" alt="AI and ML" className="serviceImage" />
            <div className="cardContent">
              <h5 className="cardTitle">
                Artificial Intelligence <br /> Machine Learning
              </h5>
              <p className="cardDescription">
                Unlocking the Future:
                <br /> AI and ML from Theory
                <br /> to Practice
              </p>
              <Link to="#" className="readMore">
                READ MORE
              </Link>
            </div>
          </div>
        </div>

        <div className="cardRow">
          <div className="serviceCard">
            <img src="./images/educ.png" alt="Education" className="serviceImage" />
            <div className="cardContent">
              <h5 className="cardTitle">Education</h5>
              <p className="cardDescription">
                Empowering Future Innovators:
                <br /> Navigating Technology
                <br /> in Education
              </p>
              <Link to="#" className="readMore">
                READ MORE
              </Link>
            </div>
          </div>

          <div className="serviceCard">
            <img src="./images/Analasis.png" alt="Analysis" className="serviceImage" />
            <div className="cardContent">
              <h5 className="cardTitle">Analysis</h5>
              <p className="cardDescription">
                Robotics Analysis:
                <br /> Evaluating Performance and
                <br /> Enhancing Design
              </p>
              <Link to="#" className="readMore">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
