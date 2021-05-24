import React from "react";
import "../../Assets/css/main.css";

const IncomingQuestionCard = () => {
  return (
    <section className="IncomingQuestionCard">
      <div className="card-header">
        <div>
          <i className="fa fa-ellipsis-v"></i>
        </div>
        <div>
          <p style={{ textAlign: "center" }}>2:00</p>
          <h5>Hans Terlouw</h5>
        </div>
        <div>
          <button className="IncomingQuestionCard-btn1">
            <i className="fa fa-check-double"></i>
            Moderator
          </button>
          <button className="IncomingQuestionCard-btn2">
            <i className="fa fa-user-circle"></i>
            Presenter
          </button>
        </div>
      </div>
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
      </div>
    </section>
  );
};

export default IncomingQuestionCard;
