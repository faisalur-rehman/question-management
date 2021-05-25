import React from "react";
import ArchivedQuestionCard from "./ArchivedQuestionsCard";
import "./ArcheivedPanel.css";
const ArchivedQuestions = (props) => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Saved Remarks</h2>
      <div className="archeived-header">
        <div className="back-live" style={{ backgroundColor: "red" }}>
          <i className="far fa-check-circle tick"></i>
          <span>Back to live</span>
        </div>
        <button className="IncomingQuestionCard-btn2">
          <i className="fa fa-user-circle"></i>
          Presenter
        </button>
      </div>
      <div className="archeived-quesiton-panel">
        <ArchivedQuestionCard dark={props.dark} />
        <ArchivedQuestionCard dark={props.dark} />
        <ArchivedQuestionCard dark={props.dark} />
        <ArchivedQuestionCard dark={props.dark} />
        <ArchivedQuestionCard dark={props.dark} />
      </div>
    </div>
  );
};

export default ArchivedQuestions;
