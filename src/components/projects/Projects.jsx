import React, { Component } from "react";
import Header from "../header/Header";
import Display from "./display/Display";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      {/* <div className="logo-wrapper">
        <img className="logo" src={require("../../img/logo.svg")} alt="logo" />
      </div> */}
      {/* <Header active="projects" /> */}
      <div className="container">
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
            src={require("../../img/atl.jpg")}
            alt="Atlassian Rate-Limiter"
            text={
              <span>
                During Spring 2019, I worked with a team to build a rate-limiter
                for Atlassian.{" "}
                <a
                  className="photo-link"
                  href="https://photos.app.goo.gl/HWGYU1L4sDKT4VAQ6"
                >
                  Check it out!
                </a>
              </span>
            }
          />
        </div>
      </div>
      <div className="tech-wrapper">
        I'VE WORKED IN
        <img
          className="tech-logo"
          src={require("../../img/react.svg")}
          alt="react"
        />
        <img
          className="tech-logo"
          src={require("../../img/python.svg")}
          alt="python"
        />
        <img
          className="tech-logo"
          src={require("../../img/java.svg")}
          alt="java"
        />
        <img
          className="tech-logo"
          src={require("../../img/postgresql.svg")}
          alt="psql"
        />
      </div>
      <div className="tech-wrapper">
        <img
          className="tech-logo"
          src={require("../../img/go.png")}
          alt="golang"
        />
        <img
          className="tech-logo"
          src={require("../../img/graphql.png")}
          alt="graphql"
        />
        <img className="tech-logo" src={require("../../img/c.svg")} alt="c" />
      </div>
    </div>
  );
}

export default Projects;
