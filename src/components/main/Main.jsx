import React, { useState, useEffect } from "react";
import "./Main.css";

function Main() {
  const [role, updateRole] = useState(0);

  const roles = ["student", "teacher", "pokemon master", "volleyball player"];

  useEffect(() => {
    const interval = setInterval(() => {
      updateRole(role => (role + 1) % roles.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="main">
      <div className="intro">
        <span className="hey">HEY THERE,</span>{" "}
        <span className="my-name">I'M KELVIN JUE</span>
        <div className="major">I STUDY CS + BUSINESS AT UC BERKELEY</div>
        <div className="description">
          I'm just a <span style={{ color: "#e77fae" }}>{roles[role]}</span>
          <div>trying to make some cool things.</div>
        </div>
      </div>

      <div className="main-photo">
        <div id="hide-overflow">
          <img
            className="monkey"
            src={require("../../img/kelvin.jpg")}
            alt="mentored project"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
