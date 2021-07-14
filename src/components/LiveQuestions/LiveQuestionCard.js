import React, { useState } from "react";
import "../../Assets/css/main.css";
import { socket } from "../../apis/socket-connect";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
import EditQuestionModal from "../Modal/EditQuestionModal";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

const LiveQuestionCard = ({ question }) => {
  // const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  const [editQuestion, setEditQuestion] = useState(false);
  let show = !clicked ? "menu-icon-none" : "";

  function handleModeratorQuestion(url) {
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
    <section
      className="IncomingQuestionCard live-question"
      style={{ width: "100%" }}
    >
      <div className="card-header">
        <div>
          <i
            className="fa fa-ellipsis-v"
            style={{ cursor: "pointer" }}
            onClick={() => setClicked(!clicked)}
          ></i>
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
              onClick={() =>
                handleModeratorQuestion("delete-moderator-question")
              }
            ></i>
          </span>
        </div>
        <div>
          <p style={{ textAlign: "center" }}>2:00</p>
          <h5>Hans Terlouw</h5>
        </div>
        <div>
          <button
            className="IncomingQuestionCard-btn2"
            onClick={() =>
              handleModeratorQuestion("move-moderator-question-to-presenter")
            }
          >
            <i className="fa fa-user-circle"></i>
            Presenter
          </button>
        </div>
      </div>
      <div className="card-body">
        <p>{question.questionText}</p>
      </div>
      <EditQuestionModal
        show={editQuestion}
        onClose={setEditQuestion}
        question={question}
      />
    </section>
  );
};

export default LiveQuestionCard;
