import React, { useEffect } from "react";
import logo from "../../Assets/message.png";
import useApi from "../../hooks/useApi";
import "./DashboardHeader.css";
import * as projectApi from "../../apis/project";
import AppLoading from "../../common/AppLoading";

const DashboardHeader = () => {
  const { request, isLoading, data } = useApi(projectApi.fecthSingleProject);

  useEffect(() => {
    request(localStorage.getItem("moderator-projectId"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return <AppLoading />;
  }
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
          {data && (
            <p id="bold">
              {new Date(data.scheduleDate).toLocaleDateString("en-GB")}
            </p>
          )}
          {data && <p>{data.title}</p>}
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
