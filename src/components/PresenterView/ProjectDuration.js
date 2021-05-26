import React, { useState } from "react";

const ProjectDuration = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p style={{ color: "white", marginTop: 20, marginBottom: 0 }}>
        Name of Project
      </p>
      <div
        className="duration"
        onClick={() => {
          setCount((prev) => (count < 2 ? prev + 1 : 0));
        }}
      >
        {/* <h5>Name of Project</h5> */}
        {count === 0 && (
          <div className="timer">
            <h4>Running Time</h4>
            <p>13:56:34</p>
            <i class="fas fa-horizontal-rule" style={{ color: "#707070" }}></i>
            <i class="fas fa-horizontal-rule" style={{ color: "white" }}></i>
            <i class="fas fa-horizontal-rule" style={{ color: "#707070" }}></i>
          </div>
        )}
        {count === 1 && (
          <div className="timer">
            <h4>Start Time</h4>
            <p>13:56:34</p>
            <i class="fas fa-horizontal-rule" style={{ color: "#707070" }}></i>
            <i class="fas fa-horizontal-rule" style={{ color: "#707070" }}></i>
            <i class="fas fa-horizontal-rule" style={{ color: "white" }}></i>
          </div>
        )}
        {count === 2 && (
          <div className="timer">
            <h4>End Time</h4>
            <p>13:56:34</p>
            <i class="fas fa-horizontal-rule" style={{ color: "white" }}></i>
            <i class="fas fa-horizontal-rule" style={{ color: "#707070" }}></i>
            <i class="fas fa-horizontal-rule" style={{ color: "#707070" }}></i>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectDuration;
