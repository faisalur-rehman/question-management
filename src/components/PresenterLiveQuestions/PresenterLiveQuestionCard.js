import React from "react";
import "../../Assets/css/main.css";
import success from "../../Assets/success.png";

const PresenterLiveQuestionCard = () => {
  return (
    <section
      className="live-presenter"
      style={{ display: "flex", alignItems: "center" }}
    >
      <i
        className="fas fa-grip-lines"
        style={{ padding: "0 15px", color: "white" }}
      ></i>
      <div>
        <div className="card-header" style={{ padding: 7 }}>
          <div>
            <i className="fa fa-ellipsis-v"></i>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>2:00</p>
            <h5>Hans Terlouw</h5>
          </div>
          <div>
            {/* <button className="IncomingQuestionCard-btn2">
            <i className="fa fa-user-circle"></i>
            Presenter
          </button> */}
            <img src={success} alt="" />
          </div>
        </div>
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PresenterLiveQuestionCard;
