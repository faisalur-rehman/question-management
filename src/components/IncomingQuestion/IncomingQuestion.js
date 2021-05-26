import React from "react";
import "../../Assets/css/main.css";
import IncomingQuestionCard from "./IncomingQuestionCard";
import "./IncomingQuestions.css";
const IncomingQuestion = ({ noQuestion }) => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Incoming Questions</h2>
      <div className="incoming-quesiton-panel">
        {!noQuestion ? (
          <>
            <IncomingQuestionCard />
            <IncomingQuestionCard />
            <IncomingQuestionCard />
            <IncomingQuestionCard />
            <IncomingQuestionCard />
            <IncomingQuestionCard />
          </>
        ) : (
          <div className="no-question">
            <i class="far fa-hourglass"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomingQuestion;
