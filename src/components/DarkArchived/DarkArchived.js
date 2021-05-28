import React from "react";
import DarkArchivedCard from "./DarkArchivedCard";
// import "./ArcheivedPanel.css";
import "./DarkArchived.css";

const DarkArchived = ({ text }) => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Archived Questions</h2>
      <div className="archeived-header">
        <div className="back-live" style={{ backgroundColor: "red" }}>
          <i className="far fa-check-circle tick"></i>
          <span>Back to live</span>
        </div>
        <button className="IncomingQuestionCard-btn2 remark-button">
          <i className="fa fa-pen"></i>
          Remarks
        </button>
      </div>
      <div
        className="archeived-quesiton-panel dark"
        style={{ minHeight: "88vh" }}
      >
        <DarkArchivedCard text={text} />
        <DarkArchivedCard text={text} />
        <DarkArchivedCard text={text} />
        <DarkArchivedCard text={text} />
      </div>
    </div>
  );
};

export default DarkArchived;
