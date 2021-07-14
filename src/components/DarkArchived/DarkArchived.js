import React from "react";
import DarkArchivedCard from "./DarkArchivedCard";
// import "./ArcheivedPanel.css";
import "./DarkArchived.css";
import useFetchQuestions from "../../hooks/useFetchQuestions";
import AppLoading from "../../common/AppLoading";

const DarkArchived = ({ text }) => {
  const { questions, isLoading } = useFetchQuestions(
    "all-archived-questions",
    "",
    "updated-archived-questions"
  );

  console.log("dark archieved", questions);

  if (isLoading) {
    return <AppLoading />;
  }

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
        {questions.length === 0 && <NoQuestion />}
        {questions.map((question) => (
          <DarkArchivedCard text={text} question={question} />
        ))}
      </div>
    </div>
  );
};

export default DarkArchived;

function NoQuestion() {
  return (
    <div className="no-question">
      <i class="far fa-hourglass"></i>
    </div>
  );
}
