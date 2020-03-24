import React, { Component, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [hightlight, changeHighlight] = useState({ current: "home" });

  // componentDidMount() {
  //   const { active } = this.props;
  //   this.highlight(active);
  // }
  useEffect(() => {
    console.log(hightlight);
    const divs = Array.from(document.querySelectorAll("div.header-item"));
    console.log(divs);
    let div = "";
    divs.map(div => div.setAttribute("id", ""));
    console.log(divs);
    if (hightlight === "home") {
      div = divs[0];
      div.setAttribute("id", "active");
    } else if (hightlight === "projects") {
      div = divs[1];
      console.log(div);
      div.setAttribute("id", "active");
    } else if (hightlight === "contacts") {
      div = divs[2];
      div.setAttribute("id", "active");
    }
  });
  return (
    <div className="header-wrapper">
      <div className="logo-wrapper">
        <img className="logo" src={require("../../img/logo.svg")} alt="logo" />
      </div>
      <div className="header-item" id="home">
        <NavLink
          className="link"
          to="/personal-website-v2/"
          onClick={() => changeHighlight("home")}
        >
          HOME
        </NavLink>
      </div>
      <div className="header-item" id="projects">
        <NavLink
          className="link"
          to="/personal-website-v2/projects"
          onClick={() => changeHighlight("projects")}
        >
          PROJECTS
        </NavLink>
      </div>
      <div className="header-item" id="contacts">
        <NavLink
          className="link"
          to="/personal-website-v2/contacts"
          onClick={() => changeHighlight("contacts")}
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
