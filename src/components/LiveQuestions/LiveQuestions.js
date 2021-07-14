import React from "react";
// import "../ArchivedQuestions/ArcheivedPanel.css";
import "./LiveQuestion.css";
import LiveQuestionCard from "./LiveQuestionCard";
import AppLoading from "../../common/AppLoading";
import useFetchQuestions from "../../hooks/useFetchQuestions";

const LiveQuestions = ({ noQuestions }) => {
  const { questions, isLoading } = useFetchQuestions(
    "all-moderator-questions",
    "new-moderator-question",
    "updated-moderator-questions"
  );

  if (isLoading) {
    return <AppLoading />;
  }
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Question Moderation</h2>
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
        {questions.length === 0 && <NoQuestion />}
        {questions.map((question) => (
          <LiveQuestionCard key={question._id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default LiveQuestions;
function NoQuestion() {
  return (
    <div className="no-question">
      <i className="far fa-hourglass"></i>
    </div>
  );
}
