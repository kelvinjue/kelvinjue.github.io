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
      <div className="main-photo">
        <div id="hide-overflow">
          <img
            className="monkey"
            src={require("../../img/kelvin.jpg")}
            alt="mentored project"
          />
        </div>
      </div>
      <div className="intro">
        <span className="hey">hey there, i'm</span>{" "}
        <span className="my-name">kelvin jue</span>
        <div className="major">i study cs + business at uc berkeley</div>
        <div className="description">
          i'm just a <span style={{ color: "#e77fae" }}>{roles[role]}</span>
          <div>trying to make some cool things.</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
