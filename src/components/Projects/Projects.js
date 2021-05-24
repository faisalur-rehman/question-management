import React from "react";
import "./Projects.css";
import "../Header/Header.css";
import ProjectName from "./ProjectName";
import Header from "../Header/Header";
// import Projects from "../Projects/Projects";

const Projects = () => {
  return (
    <div style={{ margin: 30, width: "90%" }}>
      <Header heading="Projects" search={true} />
      <div className="projects">
        <div className="add-project">
          <button>
            <span>+</span>New Project
          </button>
        </div>
      </div>

      <ProjectName />
      <ProjectName />
      <ProjectName />
      <ProjectName />
      <ProjectName />
      <ProjectName />
      <ProjectName />
    </div>
  );
};

export default Projects;
