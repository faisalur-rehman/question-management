import React, { useState, useEffect } from "react";
import AppLoading from "../../common/AppLoading";
import useFetchQuestions from "../../hooks/useFetchQuestions";
import Card from "./Card";
import ProjectDuration from "./ProjectDuration";
import { socket } from "../../apis/socket-connect";

const PresenterView = () => {
  const [allRemarks, setAllRemarks] = useState([]);

  useEffect(() => {
    socket.emit("all-remarks", (data) => {
      console.log("remarks", data);
      setAllRemarks(data);
    });
    socket.on("updated-remarks", (remarks) => {
      console.log("deleted", remarks);
      setAllRemarks(remarks);
    });
  }, []);
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
          {allRemarks.length === 0 && <NoQuestion />}
          {allRemarks.map((remark) => (
            <>
              <Card isRemarks={true} remark={remark} />
              <hr color="#707070" />
            </>
          ))}
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
