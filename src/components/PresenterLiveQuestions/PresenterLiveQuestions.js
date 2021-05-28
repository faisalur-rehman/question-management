import React from "react";
import "./PresenterLiveQuestion.css";
import PresenterLiveQuestionCard from "./PresenterLiveQuestionCard";

const PresenterLiveQuestions = ({ noQuestion }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className="incoming">LIVE Questions</h2>
      <div
        style={{
          marginLeft: 10,
          maxWidth: "500px",
          minWidth: "450px",
          height: "92vh",
          overflow: "scroll",
        }}
        className="live-presenter"
      >
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
        <div className="">
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
    </div>
  );
};

export default PresenterLiveQuestions;
