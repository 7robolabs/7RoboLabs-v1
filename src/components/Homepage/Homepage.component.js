import React from "react";
import NavItem from "../NavItem";
import "./Homepage.styles.scss";
import AboutUsSection from "./AboutUsSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import CaseStudiesSection from "./CaseStudiesSection";
import ProfessionalShareholders from "./ProfessionalShareholders";
import Footer from "../Footer";

const Homepage = () => {
  return (
    <div>
      <NavItem />
      <div className="roboticsDescriptionContainer">
        <div className="roboticsDescription">
          <h2 className="mainHeader">
            Robotics enables machines to perform tasks autonomously, <br/> enhancing
            efficiency.
          </h2>
          <p className="subHeader">Smart Solutions for Modern Challenges</p>
        </div>
        <img src="./images/robotics-image.png" alt="robotics-images" />
      </div>
      <AboutUsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CaseStudiesSection />
      <ProfessionalShareholders />
      <Footer />
    </div>
  );
};

export default Homepage;
