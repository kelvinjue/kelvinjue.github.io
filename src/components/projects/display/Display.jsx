import React, { Component } from "react";
import "./Display.css";

class Display extends Component {
  render() {
    const { src, alt, text } = this.props;
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
}

export default Display;
