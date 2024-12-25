import React from "react";
import { ROBOTICS_SERVICES } from "./constants";
import NavItem from "../NavItem";
import Footer from "../Footer";
import "./Services.styles.scss";

const Services = () => {
  return (
    <div className="servicesPage">
      <NavItem />
      <header className="header">
        <div className="header__content">
          <div className="header__text">
            <h1>Our Services</h1>
            <h2>
              Empowering Innovation through Robotics, IoT, AI & ML, and Tech
              Education Solutions
            </h2>
          </div>
          <img
            className="header__image"
            src="./images/servises.jpg"
            alt="Services"
          />
        </div>
      </header>
      <section className="services">
        <h3>SERVICES WE PROVIDE</h3>
        <h1>Our Purpose is To Deliver Excellence in Service and Execution</h1>
        <div className="services__list">
          {ROBOTICS_SERVICES?.map((service, index) => (
            <div key={index} className="services__card">
              <img src={service.image} alt={service.title} />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
