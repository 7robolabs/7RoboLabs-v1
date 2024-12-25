import React from "react";
import "./AboutUs.styles.scss";
import NavItem from "../NavItem";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <NavItem />
      {/* About Us Section */}
      <section className="about">
        <div className="about__content">
          <h1>About Us</h1>
          <p>
            Our company specializes in providing comprehensive solutions in
            robotics, drones, AI & ML, IoT, and technology education, fostering
            innovation and skill development.
          </p>
        </div>
        <div className="about__image">
          <img src="./images/ahand.png" alt="Robotics Hand" />
        </div>
      </section>

      {/* Empowering Innovation Section */}
      <section className="innovation">
        <div className="innovation__image">
          <img src="./images/roboticsmain.webp" alt="Empowering Innovation" />
        </div>
        <div className="innovation__content">
          <h3>About Us</h3>
          <h1>Empowering Innovation by Enabling Robotics</h1>
          <p>
            At our company, we are committed to advancing technology and
            innovation in robotics. We provide solutions that push boundaries
            and create opportunities for people to interact with robotics in
            meaningful ways. Our mission is to make robotics accessible,
            powerful, and transformative.
          </p>
          <ul>
            <li>
              <img src="./images/robothand1.png" alt="Icon" />
              Who benefits from our robotics solutions?
            </li>
            <li>
              <img src="./images/robothand1.png" alt="Icon" />
              How do we support growth and innovation?
            </li>
            <li>
              <img src="./images/robothand1.png" alt="Icon" />
              Our Vision for the Future of Robotics
            </li>
          </ul>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats__card">
          <img src="./images/robotic1.png" alt="Completed Projects" />
          <h4>200+</h4>
          <p>Completed Projects</p>
        </div>
        <div className="stats__card">
          <img src="./images/AI-ML.png" alt="Satisfied Clients" />
          <h4>50+</h4>
          <p>Satisfied Clients</p>
        </div>
        <div className="stats__card">
          <img src="./images/educ.png" alt="Successive Rate" />
          <h4>90%</h4>
          <p>Successive Rate</p>
        </div>
        <div className="stats__card">
          <img src="./images/Analasis.png" alt="Support Done" />
          <h4>90+</h4>
          <p>Support Done</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
