import React from "react";
import Card from "./Card";
import ProjectDuration from "./ProjectDuration";

const PresenterView = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "black" }}>
      <div style={{ width: "70%", margin: "20px 10px" }}>
        <p style={{ color: "white", marginBottom: 5 }}>Incoming Questions</p>
        <Card />
        <hr color="#707070" />
        <Card />
        <hr color="#707070" />
        <Card />
        <hr color="#707070" />
        <Card />
        <hr color="#707070" />
        <Card />
        <hr color="#707070" />
        <Card />
        <hr color="#707070" />
      </div>
      <div
        className=""
        style={{ width: "30%", margin: "0 10px", maxHeight: "50vh" }}
      >
        <div>
          <ProjectDuration />
        </div>
        <div className="remarks-presenter">
          <p style={{ color: "white", marginBottom: "5px" }}>Remarks</p>
          <Card remarks={true} />
          <hr color="#707070" />
          <Card remarks={true} />
          <hr color="#707070" />
          <Card remarks={true} />
        </div>
        <div className="btn-div">
          <button className="attention-btn">Attention</button>
        </div>
      </div>
    </div>
  );
};

export default PresenterView;
