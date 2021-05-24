import React from "react";
import "../../Assets/css/main.css";
import IncomingQuestionCard from "./IncomingQuestionCard";
import "./IncomingQuestions.css";
const IncomingQuestion = () => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Incoming Questions</h2>
      <div className="incoming-quesiton-panel">
        <IncomingQuestionCard />
        <IncomingQuestionCard />
        <IncomingQuestionCard />
        <IncomingQuestionCard />
        <IncomingQuestionCard />
        <IncomingQuestionCard />
      </div>
    </div>
  );
};

export default IncomingQuestion;
