import React from "react";
import { useHistory } from "react-router-dom";
import "./Projects.css";

const ProjectName = (props) => {
  const history = useHistory();
  console.log("project", props);

  function handleClick() {
    const role = localStorage.getItem("role");
    let URL = "/permissions";
    if (role === "presenter") {
      URL = "/screen12";
    } else if (role === "moderator") {
      URL = "/screen24";
    }
    history.push({
      pathname: `${URL}`,
      state: { project: props.project },
    });
  }

  return (
    <div className="project-name">
      <p>{props.project.title}</p>
      <div className="project-details">
        <p>{props.project.scheduleDate}</p>
        <button onClick={handleClick}>Project Details</button>
      </div>
    </div>
  );
};

export default ProjectName;
