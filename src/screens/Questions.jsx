import DashboardHeader from "../components/DasboardHeader/DashboardHeader";
import SavedRemarks from "../components/SavedRemarks/SavedRemarks";
import Questions from "../components/Questions/Questions";
import IncomingQuestion from "../components/IncomingQuestion/IncomingQuestion";
import LiveQuestions from "../components/LiveQuestions/LiveQuestions";
import CreateQuestion from "../widgets/question/CreateQuestion";
import CreateRemarks from "../widgets/remarks/CreateRemarks";

export default function QuestionsScreen() {
  return (
    <div className="body">
      <DashboardHeader />
      <CreateQuestion />
      <CreateRemarks />
      <div className="sidebar-header">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SavedRemarks />
          <Questions />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IncomingQuestion />
        </div>
        <LiveQuestions />
      </div>
    </div>
  );
}
