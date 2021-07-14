import React, { useState } from "react";
import "../../Assets/css/main.css";
import archive_icon from "../../Assets/archive_icon.svg";
import TransitionsModal from "../Modal/Modal";
import { socket } from "../../apis/socket-connect";

const LiveQuestionCard = ({ question }) => {
  const [clicked, setClicked] = useState(false);
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
        <div
          style={{
            display: "flex",
          }}
        >
          <i
            className="fa fa-ellipsis-v"
            onClick={() => setClicked(!clicked)}
            style={{ cursor: "pointer" }}
          ></i>
          <TransitionsModal
            img={true}
            show={show}
            src={archive_icon}
            modalType="Edit Question"
            modal={
              <form action="" className="form">
                <div className="form-group">
                  <label for="opmerkingPlaatsen">Edit Question</label>
                  <textarea
                    name="opmerkingPlaatsen"
                    id="opmerkingPlaatsen"
                  ></textarea>
                </div>
                <div className="btn-group">
                  <div className="left-btn">
                    <button>
                      <i className="fa fa-save"></i>
                      Save
                    </button>
                  </div>
                </div>
              </form>
            }
          />
          <span className={`${show}`} style={{ marginTop: -4, marginLeft: 5 }}>
            <i
              className="fal fa-minus-circle"
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                borderRadius: 7,
                verticalAlign: "middle",
              }}
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
    </section>
  );
};

export default LiveQuestionCard;
