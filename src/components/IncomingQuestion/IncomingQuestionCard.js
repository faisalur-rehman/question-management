import React, { useState } from "react";
import "../../Assets/css/main.css";
import { socket } from "../../apis/socket-connect";
import EditQuestionModal from "../Modal/EditQuestionModal";

const IncomingQuestionCard = (props) => {
  const [clicked, setClicked] = useState(false);
  const [editQuestion, setEditQuestion] = useState(false);
  let show = !clicked ? "menu-icon-none" : "";

  function handleIncomingQuestion(url) {
    socket.emit(
      url,
      {
        questionId: props.question._id,
        projectId: localStorage.getItem("moderator-projectId"),
      },
      (data) => {
        console.log(data);
      }
    );
  }

  return (
    <section className="IncomingQuestionCard">
      <div className="card-header">
        <div>
          {props.moderatorPermissions.canEditQuestions && (
            <i
              className="fa fa-ellipsis-v"
              style={{ cursor: "pointer" }}
              onClick={() => setClicked(!clicked)}
            ></i>
          )}
          <i
            className={`fas fa-edit ${show}`}
            style={{
              color: "white",
              background: "lightgray",
              padding: 7,
              borderRadius: 8,
              paddingRight: 5,
              fontSize: ".7rem",
              marginLeft: 5,
            }}
            onClick={() => setEditQuestion(true)}
          ></i>
          <span className={`${show} menu-icon`}>
            <i
              className="fal fa-minus-circle"
              onClick={() => handleIncomingQuestion("delete-incoming-question")}
            ></i>
          </span>
        </div>
        <div>
          <p style={{ textAlign: "center" }}>2:00</p>
          <h5>Hans Terlouw</h5>
        </div>
        <div>
          <button
            className="IncomingQuestionCard-btn1"
            onClick={() =>
              handleIncomingQuestion("move-incoming-question-to-moderator")
            }
          >
            <i className="fa fa-check-double"></i>
            Moderator
          </button>
          <button
            className="IncomingQuestionCard-btn2"
            onClick={() =>
              handleIncomingQuestion("move-incoming-question-to-presenter")
            }
          >
            <i className="fa fa-user-circle"></i>
            Presenter
          </button>
        </div>
      </div>
      <div className="card-body">
        <p>{props.question.questionText}</p>
      </div>
      <EditQuestionModal
        show={editQuestion}
        onClose={setEditQuestion}
        question={props.question}
      />
    </section>
  );
};

export default IncomingQuestionCard;
