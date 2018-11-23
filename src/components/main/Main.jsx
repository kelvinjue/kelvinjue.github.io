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
              ᵘʷᵘ oh frick ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ frick sorry guys ᵘʷᵘ
              ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ sorry im dropping ᵘʷᵘ my uwus all over the ᵘʷᵘ
              place ᵘʷᵘ ᵘʷᵘ ᵘʷᵘ sorry
              <div className="link-container">
                <span>
                  <a href="https://www.linkedin.com/in/kelvin-jue">
                    <img
                      className="link"
                      src={require("../../img/linkedin.svg")}
                      alt="logo"
                    />
                  </a>
                </span>
                <span>
                  <a href="https://github.com/kelvinjue">
                    <img
                      className="link"
                      src={require("../../img/github.svg")}
                      alt="logo"
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
                src={require("../../img/ikea_monkey.png")}
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
