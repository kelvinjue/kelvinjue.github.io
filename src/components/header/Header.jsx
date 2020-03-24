import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const [hightlight, changeHighlight] = useState({ current: "home" });
  const pathName = useLocation().pathname;
  useEffect(() => {
    const divs = Array.from(document.querySelectorAll("div.header-item"));
    let div = "";
    divs.map(div => div.setAttribute("id", ""));
    if (hightlight === "home" || pathName === "/") {
      div = divs[0];
      div.setAttribute("id", "active");
    } else if (hightlight === "projects" || pathName === "/projects") {
      div = divs[1];
      div.setAttribute("id", "active");
    } else if (hightlight === "contacts" || pathName === "/contacts") {
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
        <Link className="link" to="/" onClick={() => changeHighlight("home")}>
          HOME
        </Link>
      </div>
      <div className="header-item" id="projects">
        <Link
          className="link"
          to="/projects"
          onClick={() => changeHighlight("projects")}
        >
          PROJECTS
        </Link>
      </div>
      <div className="header-item" id="contacts">
        <Link
          className="link"
          to="/contacts"
          onClick={() => changeHighlight("contacts")}
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Header;
