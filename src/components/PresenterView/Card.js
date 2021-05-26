import React from "react";
import "./PresenterView.css";

const Card = ({ remarks }) => {
  return (
    <div>
      <div className="presenter-card">
        <div className="left">
          <p>13:02</p>
          <div>
            <i className="fas fa-check presenter-tick"></i>
          </div>
        </div>
        <div className="right">
          {!remarks && <h5 className="name">Mathew Perry</h5>}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quidem beatae sunt repellat sed ex minus, iusto, laboriosam culpa
            provident exercitationem explicabo quae incidunt eos similique
            incidunt eos similique incidunt eos similique incidunt eos similique
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
