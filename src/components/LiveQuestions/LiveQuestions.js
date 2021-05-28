import React from "react";
// import "../ArchivedQuestions/ArcheivedPanel.css";
import "./LiveQuestion.css";
import LiveQuestionCard from "./LiveQuestionCard";

const LiveQuestions = ({ noQuestions }) => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Live Questions</h2>
      <div className="live-header">
        <div className=""></div>
        <button
          className="IncomingQuestionCard-btn1"
          style={{ backgroundColor: "white" }}
        >
          <i className="fa fa-check-double"></i>
          Moderator
        </button>
      </div>
      <div
        className="moderator-panel"
        style={{ height: "87vh", overflow: "scroll" }}
      >
        {!noQuestions ? (
          <>
            <LiveQuestionCard />
            <LiveQuestionCard />
            <LiveQuestionCard />
            <LiveQuestionCard />
            <LiveQuestionCard />
            <LiveQuestionCard />
            <LiveQuestionCard />
          </>
        ) : (
          <div className="no-questions-moderator"></div>
        )}
      </div>
    </div>
  );
};

export default LiveQuestions;
