import React from "react";
import { useHistory } from "react-router-dom";
import { socket } from "../../apis/socket-connect";
import "./Projects.css";

const ProjectName = (props) => {
  const history = useHistory();
  console.log("project", props);

  function handleClick() {
    // const role = localStorage.getItem("role");
    // let URL = "/permissions";
    // if (role === "presenter") {
    //   URL = "/screen12";
    // } else if (role === "moderator") {
    //   URL = "/screen24";
    // }
    // history.push({
    //   pathname: `${URL}`,
    //   state: { project: props.project },
    // });
    history.push("/permissions");
  }

  function handleStartTimer() {
    socket.emit("start-timer", {}, (data) => {
      console.log("timer", data);
    });
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
        <p>
          {new Date(props.project.scheduleDate).toLocaleDateString("en-GB")}
        </p>
        <button onClick={handleClick}>Project Details</button>
        <button onClick={handleStartTimer} style={{ marginLeft: 5 }}>
          Start Timer
        </button>
      </div>
    </div>
  );
};

export default ProjectName;
