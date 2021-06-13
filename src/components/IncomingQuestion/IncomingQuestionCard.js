import React, { useState } from "react";
import "../../Assets/css/main.css";
import archive_icon from "../../Assets/archive_icon.svg";

const IncomingQuestionCard = () => {
  const [clicked, setClicked] = useState(false);
  let show = !clicked ? "menu-icon-none" : "";
  return (
    <section className="IncomingQuestionCard">
      <div className="card-header">
        <div>
          <i
            className="fa fa-ellipsis-v"
            style={{ cursor: "pointer" }}
            onClick={() => setClicked(!clicked)}
          ></i>
          <img
            src={archive_icon}
            alt=""
            style={{ verticalAlign: "middle", marginLeft: 5 }}
            className={`${show}`}
          />
          <span className={`${show} menu-icon`}>
            <i class="fal fa-minus-circle" style={{}}></i>
          </span>
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
