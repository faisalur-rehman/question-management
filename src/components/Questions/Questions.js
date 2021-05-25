import React from "react";
import "../../Assets/css/main.css";
import "./Question.css";
const Questions = (props) => {
  let bg = props.alarmActive ? "bg" : "";
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <section className="question">
        <h2>Question</h2>
        <form action="" className="form">
          <div className="form-group">
            <label for="pasteName">Paste Name</label>
            <input type="text" name="pasteName" />
          </div>
          <div className="form-group">
            <label for="pasteQuestion">Paste Question</label>
            <textarea name="pasteQuestion" id="pasteQuestion"></textarea>
          </div>
          <div className="btn-group">
            <div className="left-btn">
              <button>
                <i className="fa fa-save"></i>
                Save
              </button>
            </div>
            <div className="right-btn">
              <button className="right-btn1">
                <i className="fa fa-check-double"></i>
                Moderator
              </button>
              <button className="right-btn2">
                <i className="fa fa-user-circle"></i>
                Presenter
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="alarm">
        <h2>Presenter Alarm</h2>
        <div className="alarm-btn-group">
          <button className={`${bg}`}>
            <i className="far fa-volume-up"></i>
            Audio Alarm
          </button>
          <button>
            <i className="far fa-video"></i>
            Video Alarm
          </button>
          <button>
            <i className="far fa-desktop"></i>
            Beeld Alarm
          </button>
        </div>
      </section>
      <section className="remarks">
        <h2>Remarks</h2>
        <form action="" className="form">
          <div className="form-group">
            <label for="opmerkingPlaatsen">Opmerking plaatsen</label>
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
            <div className="right-btn">
              <button className="right-btn1">
                <i className="fa fa-pen"></i>
                Modirator
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Questions;
