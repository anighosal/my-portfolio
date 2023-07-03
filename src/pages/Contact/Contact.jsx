import React from "react";
import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedin,
  FaVoicemail,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section container">
      <h2 className="section-title">Contact Me</h2>
      <div>
        <form className="contact-form">
          <div className="form-input-group grid grid-cols-2">
            <div className="form-input-div">
              <h2>Your Name</h2>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full bg-red-300 "
              />
            </div>
            <div className="form-input-div">
              <h2>Your Email</h2>
              <input
                type="email"
                placeholder="Type here"
                className="input w-full  bg-red-300"
              />
            </div>
            <div className="form-input-div">
              <h2>Your Message</h2>
              <textarea
                className="textarea textarea-bordered w-full h-28 bg-red-300 container"
                placeholder="your message"
              ></textarea>
            </div>
          </div>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>

      <div className="contact-socials flex gap-2 mt-3 ">
        <a href="https://www.facebook.com/" className="contact-social-link">
          <FaFacebookF></FaFacebookF>
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          className="contact-social-link"
        >
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://github.com/" className="contact-social-link">
          <FaGithubAlt></FaGithubAlt>
        </a>
      </div>
    </div>
  );
};

export default Contact;
