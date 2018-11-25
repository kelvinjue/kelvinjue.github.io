import React, { Component } from "react";
import Header from "../header/Header";
import "./Contacts.css";

class Contacts extends Component {
  render() {
    return (
      <body className="contacts">
        <div className="logo-wrapper">
          <img
            className="logo"
            src={require("../../img/logo.svg")}
            alt="logo"
          />
        </div>
        <Header active="contacts" />
        <h1 className="title">LET'S CHAT</h1>
        <div className="contacts-description">
          Here's some of my contact info and other stuff
        </div>
        <div className="social">
          email: kelvinjue <span className="highlight"> (at) </span> berkeley
          <span className="highlight"> (dot) </span> edu
        </div>

        <div className="contact-link-container">
          <span>
            <a href="https://www.linkedin.com/in/kelvin-jue">
              <img
                className="link"
                src={require("../../img/linkedin.svg")}
                alt="linkedin"
              />
            </a>
          </span>
          <span>
            <a href="https://github.com/kelvinjue">
              <img
                className="link"
                src={require("../../img/github.svg")}
                alt="github"
              />
            </a>
          </span>
          <span>
            <a href="https://www.dropbox.com/s/lubqfyj9xheacj5/kelvin_jue_resume_dropbox.pdf?dl=0">
              <img
                className="link"
                src={require("../../img/contract-1.svg")}
                alt="document"
              />
            </a>
          </span>
        </div>
      </body>
    );
  }
}

export default Contacts;
