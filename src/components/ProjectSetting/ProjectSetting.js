import React from "react";
import SideBar from "../SideBar/SideBar";
import ProfileSetting from "../ProfileSetting/ProfileSetting";

const ProjectSetting = (props) => {
  console.log("props", props);
  return (
    <div className="sidebar-header body">
      <SideBar />
      <ProfileSetting />
    </div>
  );
};

export default ProjectSetting;
