import React from "react";
import NavItem from "../NavItem";
import Footer from "../Footer";
import "./ContactUs.styles.scss";

const ContactUs = () => {
  const sendMail = () => {
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      number: document.getElementById("number").value,
    };

    const serviceID = "service_gj57uzq";
    const templateID = "template_8t8kwtm";

    window?.emailjs
      .send(serviceID, templateID, params)
      .then(() => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("number").value = "";
        alert("Your message has been sent successfully!");
      })
      .catch((err) => console.error("Error sending message:", err));
  };

  return (
    <div className="contactUs">
      <NavItem />
      <header className="heroSection">
        <div className="contentWrapper">
          <div className="heroText">
            <h1>Contact Us</h1>
            <p>
              We’re here to assist with any questions or issues you may have.
              Reach out to us, and we’ll respond promptly.
            </p>
          </div>
          <img
            className="heroImage"
            src="./images/ahand.png"
            alt="Contact Us Hero"
          />
        </div>
      </header>

      <section className="contactFormWrapper">
        <h2 className="formHeading">
          Let’s Connect{" "}
          <img className="helpIcon" src="./images/help.webp" alt="Help Icon" />
        </h2>
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="formGroup">
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              id="number"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button type="button" className="submitButton" onClick={sendMail}>
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
