import React, { useEffect, useState } from "react";
import DashboardHeader from "../components/DasboardHeader/DashboardHeader";
import SavedRemarks from "../components/SavedRemarks/SavedRemarks";
import Questions from "../components/Questions/Questions";
import IncomingQuestion from "../components/IncomingQuestion/IncomingQuestion";
import LiveQuestions from "../components/LiveQuestions/LiveQuestions";
import CreateQuestion from "../widgets/question/CreateQuestion";
import CreateRemarks from "../widgets/remarks/CreateRemarks";
import useApi from "../hooks/useApi";
import * as projectApi from "../apis/project";

export default function QuestionsScreen(props) {
  !localStorage.getItem("moderator-projectId") &&
    localStorage.setItem(
      "moderator-projectId",
      props.location.state.project._id
    );
  const [moderatorPermissions, setModeratorPermissions] = useState({});
  const permissions = useApi(projectApi.moderatorPermissions);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await permissions.request();
        console.log("moderator", data);
        setModeratorPermissions(data);
      } catch (_) {}
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="body">
      <DashboardHeader />
      <CreateQuestion />
      {moderatorPermissions && moderatorPermissions.canPlaceRemarks && (
        <CreateRemarks />
      )}
      <div className="sidebar-header">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SavedRemarks moderatorPermissions={moderatorPermissions} />
          <Questions />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IncomingQuestion moderatorPermissions={moderatorPermissions} />
        </div>
        <LiveQuestions />
      </div>
    </div>
  );
}
