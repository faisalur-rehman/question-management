import React from "react";
import "../../Assets/css/main.css";
import { socket } from "../../apis/socket-connect";
const DarkArchivedCard = ({ text, question }) => {
  function handleQuestion() {
    socket.emit(
      "move-archived-question-to-presenter",
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
    <section className="IncomingQuestionCard dark">
      <div className="card-header">
        <div>{/* <i className="fa fa-ellipsis-v"></i> */}</div>
        <div>
          <p style={{ textAlign: "center" }}>2:00</p>
          {text && <h5>Mathew Perry</h5>}
        </div>
        <div>
          <button className="reload" onClick={handleQuestion}>
            <i class="fas fa-redo-alt"></i>
          </button>
        </div>
      </div>
      <div className="card-body">
        <p>{question.questionText}</p>
      </div>
    </section>
  );
};

export default DarkArchivedCard;
