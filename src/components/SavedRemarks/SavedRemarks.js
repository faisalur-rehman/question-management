import React from "react";
import AppLoading from "../../common/AppLoading";
import useFetchQuestions from "../../hooks/useFetchQuestions";
import SavedRemarksCard from "./SavedRemarksCard";

const SavedRemarks = ({ noRemarks }) => {
  let remarks = noRemarks ? "" : "saved-remarks-panel";
  const { questions, isLoading } = useFetchQuestions(
    "all-remarks",
    "",
    "updated-remarks"
  );
  // console.log("remarks", questions);
  // console.log("loading", isLoading);
  if (isLoading) {
    return <AppLoading />;
  }
  return (
    <div style={{ marginLeft: 10 }}>
      <h2 className="incoming">Saved Remarks</h2>
      <div className={`${remarks}`}>
        {questions.length === 0 && <NoQuestion />}
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

function NoQuestion() {
  return (
    <div className="no-question">
      <i className="far fa-hourglass"></i>
    </div>
  );
}
