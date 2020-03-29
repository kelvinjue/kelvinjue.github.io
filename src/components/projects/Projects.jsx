import React from "react";
import Display from "./display/Display";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <h1 className="title">projects</h1>
        <div className="project-description">
          here's some stuff that I've worked on...
        </div>
        <div className="display-wrapper">
          <div className="display">
            in <span style={{ color: "#e77fae" }}>spring 2020</span>... i was a
            project manager for a team of 8 that built out a data migration
            service for cloud-deployed databases for{" "}
            <span style={{ color: "#1c4bcc" }}>datastax</span>
          </div>
          <div className="display">
            in <span style={{ color: "#1c4bcc" }}>fall 2019</span>... i was a
            part of a team that helped build out invite features on the{" "}
            <span style={{ color: "#e77fae" }}>storr</span> mobile app
          </div>
          <div className="display">
            in <span style={{ color: "#e77fae" }}>summer 2020</span>... i worked
            as an intern on the <span style={{ color: "#1c4bcc" }}>amazon</span>{" "}
            homepage team to build out internal tools helpful for debugging
          </div>
          <div className="display">
            in <span style={{ color: "#1c4bcc" }}>spring 2019</span>... i worked
            on a team that built a rate-limiter service for{" "}
            <a
              href={
                "https://community.atlassian.com/t5/Agile-articles/Atlassian-Cloud-Platform-s-spring-2019-student-project-with-UC/ba-p/1155788"
              }
              style={{ color: "#e77fae" }}
            >
              atlassian
            </a>
          </div>
          <div className="display">
            in <span style={{ color: "#e77fae" }}>fall 2018</span>... i helped
            build a{" "}
            <a
              href={
                "https://medium.com/berkeley-codebase/the-mentored-project-72db8aabb70e"
              }
              style={{ color: "#1c4bcc" }}
            >
              portal
            </a>{" "}
            for students and teachers at a local high school
          </div>
        </div>
      </div>
      <div className="project-description">i've worked in...</div>
      <div className="tech-wrapper">
        <div className="tech-1">react</div>
        <div className="tech-1">golang</div>
        <div className="tech-2">java</div>
        <div className="tech-2">python</div>
        <div className="tech-3">sql</div>
        <div className="tech-3">graphql</div>
        <div className="tech-3">
          <span id="smallGuy">trying to learn</span> ruby
          <span style={{ color: "#e77fae" }}>/</span>rails
        </div>
      </div>
    </div>
  );
}

export default Projects;
