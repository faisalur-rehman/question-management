import React from "react";
import AppLoading from "../../common/AppLoading";
import useFetchQuestions from "../../hooks/useFetchQuestions";
import Card from "./Card";
import ProjectDuration from "./ProjectDuration";

const PresenterView = () => {
  const { questions, isLoading } = useFetchQuestions(
    "all-presenter-questions",
    "new-presenter-question",
    "updated-presenter-questions"
  );

  console.log("presenter", questions);

  if (isLoading) {
    return <AppLoading />;
  }
  return (
    <div style={{ display: "flex", backgroundColor: "black" }}>
      <div style={{ width: "67%", margin: "20px 10px", height: "100vh" }}>
        <p style={{ color: "white", marginBottom: 5 }}>Presenter Questions</p>
        {questions.length === 0 && <NoQuestion />}
        {questions.map((question) => (
          <>
            <Card key={question._id} question={question} />
            <hr color="#707070" />
          </>
        ))}
      </div>
      <div
        className=""
        style={{ width: "30%", margin: "0 10px", maxHeight: "50vh" }}
      >
        <div>
          <ProjectDuration />
        </div>
        <div className="remarks-presenter">
          <p style={{ color: "white", marginBottom: "5px" }}>Remarks</p>
          <Card remarks={true} />
          <hr color="#707070" />
          <Card remarks={true} />
          <hr color="#707070" />
          <Card remarks={true} />
        </div>
        <div className="btn-div">
          <button className="attention-btn">Attention</button>
        </div>
      </div>
    </div>
  );
};

export default PresenterView;

function NoQuestion() {
  return (
    <div className="no-question">
      <i class="far fa-hourglass"></i>
    </div>
  );
}
