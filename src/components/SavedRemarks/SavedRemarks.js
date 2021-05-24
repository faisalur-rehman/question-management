import React from "react";
import SavedRemarksCard from "./SavedRemarksCard";

const SavedRemarks = () => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Saved Remarks</h2>
      <div className="saved-remarks-panel">
        <SavedRemarksCard />
        <SavedRemarksCard />
      </div>
    </div>
  );
};

export default SavedRemarks;
