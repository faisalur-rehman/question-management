import React from "react";
import "./SideBar.css";
import message from "../../Assets/message.png";
const SideBar = () => {
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
    </div>
  );
};

export default SideBar;
