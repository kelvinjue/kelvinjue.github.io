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
      </body>
    );
  }
}

export default Contacts;
