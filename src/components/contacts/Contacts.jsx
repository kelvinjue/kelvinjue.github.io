import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts">
      <div className="container">
        <h1 className="title">let's chat</h1>
        <div className="contacts-description">
          Here's some of my contact info and other stuff
        </div>
        <div className="social">
          email: kelvinjue <span className="highlight-pink"> (at) </span>{" "}
          berkeley
          <span className="highlight-blue"> (dot) </span> edu
        </div>

        <div className="contact-link-container">
          <span>
            <a href="https://www.linkedin.com/in/kelvin-jue">
              <img
                className="link"
                src={require("../../img/linkedin-black.png")}
                alt="linkedin"
              />
            </a>
          </span>
          <span>
            <a href="https://github.com/kelvinjue">
              <img
                className="link"
                src={require("../../img/github-black.svg")}
                alt="github"
              />
            </a>
          </span>
          <span>
            <a href="https://www.dropbox.com/s/257k2x41pevv2jz/kelvin_jue_resume.pdf?dl=0">
              <img
                className="link"
                src={require("../../img/file-black.png")}
                alt="document"
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
