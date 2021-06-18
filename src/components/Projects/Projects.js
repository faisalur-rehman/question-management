import React from "react";
import "./Projects.css";
import "../Header/Header.css";
import ProjectName from "./ProjectName";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
// import Projects from "../Projects/Projects";

const Projects = () => {
  const history = useHistory();

  const navigateToCreateProject = () => {
    history.push("/create-project");
  };

  return (
    <div style={{ margin: 30, width: "90%" }}>
      <Header heading="Projects" search={true} />
      <div className="projects">
        <div className="add-project">
          <button onClick={navigateToCreateProject}>
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
