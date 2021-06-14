import React from "react";
import "../../Assets/css/main.css";
import "./Question.css";
const Questions = (props) => {
  let bg = props.alarmActive ? "bg" : "";
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
    </div>
  );
};

export default Questions;
