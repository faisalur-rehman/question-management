import React, { useEffect, useState } from "react";
import { socket } from "../../apis/socket-connect";
import AppLoading from "../../common/AppLoading";
import useFetchQuestions from "../../hooks/useFetchQuestions";
import SavedRemarksCard from "./SavedRemarksCard";

const SavedRemarks = ({ noRemarks }) => {
  let remarks = noRemarks ? "" : "saved-remarks-panel";
  const [allRemarks, setAllRemarks] = useState([]);

  useEffect(() => {
    console.log("getting all remarks");
    socket.emit("all-remarks", (data) => {
      console.log("remarks", data);
      setAllRemarks(data);
    });
    socket.on("updated-remarks", (remarks) => {
      console.log("deleted", remarks);
      setAllRemarks(remarks);
    });
  }, []);

  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Saved Remarks</h2>
      <div className={`${remarks}`}>
        {allRemarks.length === 0 && <NoQuestion />}
        {allRemarks.map((remark) => (
          <SavedRemarksCard key={remark._id} remark={remark} />
        ))}
      </div>
    </div>
  );
};

export default SavedRemarks;

function NoQuestion() {
  return (
    <div className="no-question">
      <i className="far fa-hourglass"></i>
    </div>
  );
}
