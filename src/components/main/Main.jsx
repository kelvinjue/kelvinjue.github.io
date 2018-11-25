import React, { Component } from "react";
import "./Main.css";
import Header from "../header/Header";

class Main extends Component {
  render() {
    return (
      <body className="main">
        <div>
          <Header active="home" />
        </div>
        <div className="main">
          <div className="logo-wrapper">
            <img
              className="logo"
              src={require("../../img/logo.svg")}
              alt="logo"
            />
          </div>
          <div className="intro">
            <span className="hey">HEY THERE,</span>{" "}
            <span className="my-name">I'M KELVIN JUE</span>
            <div className="major">COMPUTER SCIENCE MAJOR AT UC BERKELEY</div>
            <div className="description">
              I'm a
              <div className="link-container">
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
            </div>
          </div>

          <div className="main-photo">
            <div id="hide-overflow">
              <img
                className="monkey"
                src={require("../../img/kelvin_head.jpg")}
                alt="mentored project"
              />
            </div>

            <img
              className="dots-1"
              src={require("../../img/dots-1.png")}
              alt="dots-1"
            />
            <img
              className="dots-2"
              src={require("../../img/dots-2.png")}
              alt="dots-2"
            />
          </div>
        </div>
      </body>
    );
  }
}

export default Main;
