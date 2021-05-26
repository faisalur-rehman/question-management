import React from "react";
import "./PresenterLiveQuestion.css";
import PresenterLiveQuestionCard from "./PresenterLiveQuestionCard";

const PresenterLiveQuestions = ({ noQuestion }) => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">LIVE Questions</h2>
      <div className="live-header bg-presenter">
        {!noQuestion ? (
          <div
            className="remark"
            style={{
              backgroundColor: "white",
            }}
          >
            <i className="far fa-check-circle remark-tick"></i>
          </div>
        ) : (
          <div></div>
        )}
        <button className="IncomingQuestionCard-btn2 light">
          <i className="fa fa-user-circle"></i>
          Presenter
        </button>
      </div>
      <div className="archeived-quesiton-panel">
        {!noQuestion ? (
          <>
            <PresenterLiveQuestionCard />
            <PresenterLiveQuestionCard />
            <PresenterLiveQuestionCard />
            <PresenterLiveQuestionCard />
            <PresenterLiveQuestionCard />
          </>
        ) : (
          <div className="no-question-presenter"></div>
        )}
      </div>
    </div>
  );
};

export default PresenterLiveQuestions;
