import React from "react";
import SavedRemarks from "../SavedRemarks/SavedRemarks";
import ModeratorQuestion from "./ModeratorQuestion";

const ModeratorView = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ModeratorQuestion />
      <SavedRemarks />
    </div>
  );
};

export default ModeratorView;
