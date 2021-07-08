import React from "react";
import "./SideBar.css";
import message from "../../Assets/message.png";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  const history = useHistory();

  const navigateToAllProjects = () => {
    history.push("/projects");
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img src={message} alt="Chat" />
        <div className="toolname">
          <p>
            <span style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>
              MED
            </span>
            quest
          </p>
          <p className="tool">Question Management Tool</p>
        </div>
      </div>
      <div className="menu">
        <p>Menu</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="fas fa-bolt"></i>
          <h3
            style={{ marginLeft: "25px" }}
            className="cursor"
            onClick={navigateToAllProjects}
          >
            Projects
          </h3>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="fal fa-analytics"></i>
          <h3 style={{ marginLeft: "15px" }}>Analytics</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
