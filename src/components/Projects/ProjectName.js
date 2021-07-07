import React from "react";
import "./Projects.css";

const ProjectName = (props) => {
  console.log("projects", props.project.scheduleDate);
  return (
    <div className="project-name">
      <p>{props.project.title}</p>
      <div className="project-details">
        <p>{props.project.scheduleDate}</p>
        <button>Project Details</button>
      </div>
    </div>
  );
};

export default ProjectName;
