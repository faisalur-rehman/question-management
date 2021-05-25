import React from "react";
import "../../Assets/css/main.css";

const DarkArchivedCard = ({ text }) => {
  return (
    <section className="IncomingQuestionCard dark">
      <div className="card-header">
        <div>{/* <i className="fa fa-ellipsis-v"></i> */}</div>
        <div>
          <p style={{ textAlign: "center" }}>2:00</p>
          {text && <h5>Mathew Perry</h5>}
        </div>
        <div>
          <button className="reload">
            <i class="fas fa-redo-alt"></i>
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

export default DarkArchivedCard;
