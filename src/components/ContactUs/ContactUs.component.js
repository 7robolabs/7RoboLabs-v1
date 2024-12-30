import React, { useState, useRef } from "react";
import NavItem from "../NavItem";
import Footer from "../Footer";
import emailjs from "@emailjs/browser";
import "./ContactUs.styles.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const serviceID = "service_3a5vkip";
    const templateID = "template_8t8kwtm";
    const publicKey = "dqWNR_vMqHB8K27EI";
    const templateParams = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
      message: formData.message,
    };
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setFormData({ name: "", email: "", number: "", message: "" });
        alert("Your message has been sent successfully!");
      })
      .catch((err) => {
        console.error("Error sending message:", err);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <div className="contactUs">
      <NavItem />
      <header className="heroSection">
        <div className="contentWrapper">
          <div className="heroText">
            <h1 data-aos="fade-up">Contact Us</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              At our robotics company, we strive to create solutions that
              operate seamlessly and efficiently, ensuring a smooth experience
              without any disruptions or unnecessary complications.
            </p>
          </div>
          <img
            className="heroImage"
            src="./images/ahand.png"
            alt="Contact Us"
            data-aos="fade-left"
          />
        </div>
      </header>

      <div className="contactMainHeader">
        <h2>Let's Connect</h2>
      </div>
      <section className="contactMain">
        <div className="contactCard" data-aos="fade-right">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <span className="contactUsImages">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#2be0f7"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
              </span>
              <span>
                <span style={{ fontWeight: "700" }}>Phone: </span> <br /> +91
                9494750807
              </span>
            </li>
            <li>
              <span className="contactUsImages">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#2BE0F7"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
              </span>
              <span>
                <span style={{ fontWeight: "700" }}>Email ID:</span> <br />{" "}
                7robolabs@gmail.com
              </span>
            </li>
            <li>
              <span className="contactUsImages">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#2BE0F7"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </span>
              <span>
                <span style={{ fontWeight: "700" }}>Location:</span> <br />{" "}
                Palamaner
              </span>
            </li>
          </ul>
        </div>

        <div className="contactFormContainer" data-aos="fade-left">
          <h3>Send Us a Message</h3>
          <form className="contactForm" ref={form} onSubmit={sendMail}>
            <div className="formGroup">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <input
                type="tel"
                name="number"
                placeholder="Phone Number (optional)"
                value={formData.number}
                onChange={handleChange}
              />
            </div>

            <div className="formGroup">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <input type="submit" className="submitButton" value="Send" />
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
