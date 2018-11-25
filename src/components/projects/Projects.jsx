import React, { Component } from "react";
import Header from "../header/Header";
import Display from "./display/Display";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <body className="projects">
        <div className="logo-wrapper">
          <img
            className="logo"
            src={require("../../img/logo.svg")}
            alt="logo"
          />
        </div>
        <Header active="projects" />
        <h1 className="title">PROJECTS</h1>
        <div className="project-description">
          Here's some stuff that I've worked on
        </div>
        <div className="display-wrapper">
          <Display
            src={require("../../img/teacher-portal-2.png")}
            alt="Teacher Portal"
            text="This semester I worked with a team of other developers to work on an NPO project for a local high school. 
            The teacher portal acts as a way for students and teachers to interact by collecting feedback and saving documents."
          />
          <Display
            src={require("../../img/where2meet.png")}
            alt="Where2Meet"
            text="For CalHacks, my team built an app to solve the ever persistent problem of indecision. 
            Once users login, they can choose their friends to hangout with, and using their locations a central location can be found"
          />
          <Display
            src={require("../../img/cny.jpeg")}
            alt="Photography"
            text={
              <span>
                Not really a CS project, but I'm really trying to get into
                photography!{" "}
                <a href="https://photos.app.goo.gl/HWGYU1L4sDKT4VAQ6">
                  Check it out!
                </a>
              </span>
            }
          />
        </div>
        <div className="tech-wrapper">
          I'VE WORKED IN
          <img
            className="logo"
            src={require("../../img/react.svg")}
            alt="react"
          />
          <img
            className="logo"
            src={require("../../img/python.svg")}
            alt="python"
          />
          <img
            className="logo"
            src={require("../../img/java.svg")}
            alt="java"
          />
          <img
            className="logo"
            src={require("../../img/postgresql.svg")}
            alt="psql"
          />
          <img className="logo" src={require("../../img/c.svg")} alt="c" />
        </div>
      </body>
    );
  }
}

export default Projects;
