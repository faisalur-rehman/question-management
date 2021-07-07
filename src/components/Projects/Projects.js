import React from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import "./Projects.css";
import "../Header/Header.css";
import ProjectName from "./ProjectName";
import Header from "../Header/Header";
import * as projectApi from "../../apis/project";
import useApi from "../../hooks/useApi";
import AppLoading from "../../common/AppLoading";
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

      <ListAllProjects />
    </div>
  );
};

export default Projects;

function ListAllProjects() {
  const {
    request,
    isLoading,
    data: projects,
  } = useApi(projectApi.fetchAllProjects);

  useEffect(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || !projects) {
    return <AppLoading />;
  }

  return (
    <>
      {projects.map((project) => (
        <ProjectName key={project._id} project={project} />
      ))}
    </>
  );
}
