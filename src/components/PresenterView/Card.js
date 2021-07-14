import React from "react";
import { socket } from "../../apis/socket-connect";
import "./PresenterView.css";

const Card = ({ remarks, question }) => {
  function handleIncomingQuestion(url) {
    socket.emit(
      url,
      {
        questionId: question._id,
        projectId: "60e53f6ce35eb82ea8585cf5",
      },
      (data) => {
        console.log(data);
      }
    );
  }
  return (
    <div>
      <div className="presenter-card">
        <div className="left">
          <p>13:02</p>
          <div>
            <i
              className="fas fa-check presenter-tick"
              onClick={() =>
                handleIncomingQuestion("move-presenter-question-to-archived")
              }
            ></i>
          </div>
        </div>
        <div className="right">
          {!remarks && <h5 className="name">{question && question.name}</h5>}
          <p>{question && question.questionText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
