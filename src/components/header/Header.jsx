import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = { current: "home" };
    this.highlight = this.highlight.bind(this);
  }

  componentWillMount() {
    const { active } = this.props;
    this.setState({ current: active });
  }

  componentDidMount() {
    const { active } = this.props;
    this.highlight(active);
  }

  highlight(active) {
    console.log(active);
    const divs = Array.from(document.querySelectorAll("div.header-item"));
    console.log(divs);
    let div = "";
    console.log(divs);
    if (active === "home") {
      div = divs[0];
      div.setAttribute("id", "active");
    } else if (active === "projects") {
      div = divs[1];
      console.log(div);
      div.setAttribute("id", "active");
    } else if (active === "contacts") {
      div = divs[2];
      div.setAttribute("id", "active");
    }
  }
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-item" id="home">
          <NavLink className="link" to="./">
            HOME
          </NavLink>
        </div>
        <div className="header-item" id="projects">
          <NavLink className="link" to="./projects">
            PROJECTS
          </NavLink>
        </div>
        <div className="header-item" id="contacts">
          <NavLink className="link" to="./contacts">
            CONTACT
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
