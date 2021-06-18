import DashboardHeader from "../components/DasboardHeader/DashboardHeader";
import TransitionsModal from "../components/Modal/Modal";
import SavedRemarks from "../components/SavedRemarks/SavedRemarks";
import Questions from "../components/Questions/Questions";
import IncomingQuestion from "../components/IncomingQuestion/IncomingQuestion";
import LiveQuestions from "../components/LiveQuestions/LiveQuestions";
import CreateQuestion from "../widgets/question/CreateQuestion";

export default function QuestionsScreen() {
  return (
    <div className="body">
      <DashboardHeader />
      <CreateQuestion />
      <TransitionsModal
        modalType="Add Remarks"
        modal={
          <section className="remarks">
            <h2>Remarks</h2>
            <form action="" className="form">
              <div className="form-group">
                <label for="opmerkingPlaatsen">Opmerking plaatsen</label>
                <textarea
                  name="opmerkingPlaatsen"
                  id="opmerkingPlaatsen"
                ></textarea>
              </div>
              <div className="btn-group">
                <div className="left-btn">
                  <button>
                    <i className="fa fa-save"></i>
                    Save
                  </button>
                </div>
                <div className="right-btn">
                  <button className="right-btn1">
                    <i className="fa fa-pen"></i>
                    Modirator
                  </button>
                </div>
              </div>
            </form>
          </section>
        }
      />
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
