import React from "react";
import logo from "../../Assets/message.png";
import "./DashboardHeader.css";
const DashboardHeader = () => {
  return (
    <section className="dashboard-header">
      <div className="dashboard-header-row">
        <div className="dashboard-header-col1">
          <img className="dashboard-header-title-img" src={logo} alt="" />
          <span className="bold" style={{ fontSize: 31 }}>
            MED
          </span>
          quest
        </div>
        <div className="dashboard-header-col2">
          <p id="bold">Friday April, 23</p>
          <p>Name of Project</p>
        </div>
        <div className="dashboard-header-col3">
          <div className="dashboard-header-col3-icon1">
            <i className="fal fa-clock"></i>
          </div>
          <div>
            <p className="dashboard-header-col3-icon2">--:--</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;
