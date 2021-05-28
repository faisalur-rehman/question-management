import React from "react";
import LiveRemarkCard from "./LiveRemarkCard";
// import "./LiveQuestion.css";
import "./LiveRemarks.css";

const LiveRemarks = ({ noRemarks }) => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Live Remarks</h2>
      <div className="remark-header">
        {!noRemarks ? (
          <div
            className="remark"
            style={{
              backgroundColor: "white",
            }}
          >
            <i className="far fa-check-circle remark-tick"></i>
          </div>
        ) : (
          <div></div>
        )}
        <button
          className="IncomingQuestionCard-btn1"
          style={{ backgroundColor: "white" }}
        >
          <i
            className="fa fa-pen color"
            style={{ backgroundColor: "#007A8A" }}
          ></i>
          Remarks
        </button>
      </div>
      <div className="remark-panel">
        {!noRemarks ? (
          <>
            <LiveRemarkCard />
            <LiveRemarkCard />
            <LiveRemarkCard />
            <LiveRemarkCard />
          </>
        ) : (
          <div className="no-remarks"></div>
        )}
      </div>
    </div>
  );
};

export default LiveRemarks;
