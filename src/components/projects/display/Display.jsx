import React from "react";
import "./Display.css";

function Display(props) {
  const { src, alt, text } = props;
  return (
    <div>
      <div className="box">
        <img className="photo" src={src} alt={alt} />
        <h2 className="header">{alt}</h2>
        <div className="text"> {text}</div>
      </div>
    </div>
  );
}

export default Display;
