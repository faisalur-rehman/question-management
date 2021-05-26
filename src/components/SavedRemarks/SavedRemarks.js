import React from "react";
import SavedRemarksCard from "./SavedRemarksCard";

const SavedRemarks = ({ noRemarks }) => {
  let remarks = noRemarks ? "" : "saved-remarks-panel";
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Saved Remarks</h2>
      <div className={`${remarks}`}>
        {!noRemarks ? (
          <>
            <SavedRemarksCard />
            <SavedRemarksCard />
          </>
        ) : (
          <div className="no-question">
            <i class="far fa-hourglass"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedRemarks;
