import React from "react";
// import "../ArchivedQuestions/ArcheivedPanel.css";
import "./LiveQuestion.css";
import LiveQuestionCard from "./LiveQuestionCard";

const LiveQuestions = () => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Live Questions</h2>
      <div className="live-header">
        <div className="">
          {/* <i className="far fa-check-circle tick"></i>
          <span>Back to live</span> */}
        </div>
        <button
          className="IncomingQuestionCard-btn1"
          style={{ backgroundColor: "white" }}
        >
          <i className="fa fa-check-double"></i>
          Moderator
        </button>
      </div>
      <div className="archeived-quesiton-panel">
        <LiveQuestionCard />
        <LiveQuestionCard />
        <LiveQuestionCard />
        <LiveQuestionCard />
        <LiveQuestionCard />
      </div>
    </div>
  );
};

export default LiveQuestions;
