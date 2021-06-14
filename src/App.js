import "./App.css";
// import ArchivedQuestions from "./components/ArchivedQuestions/ArchivedQuestions";
import "./components/ArchivedQuestions/ArcheivedPanel.css";
import DashboardHeader from "./components/DasboardHeader/DashboardHeader";
import IncomingQuestion from "./components/IncomingQuestion/IncomingQuestion";
import LiveQuestions from "./components/LiveQuestions/LiveQuestions";
import NewProject from "./components/NewProject/NewProject";
import ProfileSetting from "./components/ProfileSetting/ProfileSetting";
import Projects from "./components/Projects/Projects";
import Questions from "./components/Questions/Questions";
import SavedRemarks from "./components/SavedRemarks/SavedRemarks";
import SideBar from "./components/SideBar/SideBar";
import LiveRemarks from "./components/LiveRemarks/LiveRemarks";
import DarkArchived from "./components/DarkArchived/DarkArchived";
import PresenterLiveQuestions from "./components/PresenterLiveQuestions/PresenterLiveQuestions";
import ModeratorView from "./components/ModeratorView/ModeratorView";
import AllScreens from "./components/AllScreens/AllScreens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import PresenterView from "./components/PresenterView/PresenterView";
import AlarmScreen from "./components/AlarmScreen/AlarmScreen";
import TransitionsModal from "./components/Modal/Modal";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <div className="body">
              <DashboardHeader />
              <AllScreens />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/screen2">
            <div className="sidebar-header body">
              <SideBar />
              <Projects />
            </div>
          </Route>
          <Route path="/screen4">
            <div className="sidebar-header body">
              <SideBar />
              <ProfileSetting />
            </div>
          </Route>
          <Route path="/screen5">
            <div className="sidebar-header body">
              <SideBar />
              <NewProject />
            </div>
          </Route>
          <Route path="/screen6">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <ModeratorView />
                <LiveQuestions />
                <PresenterLiveQuestions />
              </div>
            </div>
          </Route>
          <Route path="/screen7">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <Questions />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <IncomingQuestion />
                  <SavedRemarks />
                </div>
                <DarkArchived text={true} />
              </div>
            </div>
          </Route>
          <Route path="/screen8">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <ModeratorView />
                <LiveQuestions />
                <PresenterLiveQuestions />
              </div>
            </div>
          </Route>
          <Route path="/screen9">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <ModeratorView />
                <LiveQuestions />
                <DarkArchived text={true} />
              </div>
            </div>
          </Route>
          <Route path="/screen10">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <LiveQuestions />
                <PresenterLiveQuestions />
                {/* <div style={{ width: "80%" }}></div> */}
              </div>
            </div>
          </Route>
          <Route path="/screen11">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <LiveQuestions />
                <DarkArchived text={true} />
                {/* <div style={{ width: "80%" }}></div> */}
              </div>
            </div>
          </Route>
          <Route path="/screen12">
            <PresenterView />
          </Route>
          <Route path="/screen13">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <Questions />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <IncomingQuestion />
                  <SavedRemarks />
                </div>
                <LiveQuestions />
              </div>
            </div>
          </Route>
          <Route path="/screen14">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <ModeratorView />
                <LiveQuestions />
                <LiveRemarks />
              </div>
            </div>
          </Route>
          <Route path="/screen15">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <ModeratorView />
                <LiveQuestions />
                <DarkArchived />
              </div>
            </div>
          </Route>
          <Route path="/screen16">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <LiveQuestions />
                <LiveRemarks />
                {/* <div style={{ width: "80%" }}></div> */}
              </div>
            </div>
          </Route>
          <Route path="/screen17">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <LiveQuestions />
                <DarkArchived />
                {/* <div style={{ width: "80%" }}></div> */}
              </div>
            </div>
          </Route>
          <Route path="/screen18">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <Questions />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <IncomingQuestion />
                  <SavedRemarks />
                </div>
                <LiveRemarks />
              </div>
            </div>
          </Route>
          <Route path="/screen19">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <Questions />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <IncomingQuestion />
                  <SavedRemarks />
                </div>
                <DarkArchived />
              </div>
            </div>
          </Route>
          <Route path="/screen20">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <Questions />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30vw",
                  }}
                >
                  <IncomingQuestion noQuestion={true} />
                  <SavedRemarks noRemarks={true} />
                </div>
                <PresenterLiveQuestions noQuestion={true} />
              </div>
            </div>
          </Route>
          <Route path="/screen21">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <Questions />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "34vw",
                  }}
                >
                  <IncomingQuestion noQuestion={true} />
                  <SavedRemarks noRemarks={true} />
                </div>
                <LiveRemarks noRemarks={true} />
              </div>
            </div>
          </Route>
          <Route path="/screen22">
            <div className="body">
              <DashboardHeader />
              <div className="sidebar-header">
                <Questions />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "34vw",
                  }}
                >
                  <IncomingQuestion noQuestion={true} />
                  <SavedRemarks noRemarks={true} />
                </div>
                <LiveQuestions noQuestions={true} />
              </div>
            </div>
          </Route>
          <Route path="/screen23">
            <div className="body">
              <div className="sidebar-header">
                <AlarmScreen />
              </div>
            </div>
          </Route>
          <Route path="/screen24">
            <div className="body">
              <DashboardHeader />
              <TransitionsModal
                modalType="Add Question"
                modal={
                  <section className="question">
                    <h2>Question</h2>
                    <form action="" className="form">
                      <div className="form-group">
                        <label for="pasteName">Paste Name</label>
                        <input type="text" name="pasteName" />
                      </div>
                      <div className="form-group">
                        <label for="pasteQuestion">Paste Question</label>
                        <textarea
                          name="pasteQuestion"
                          id="pasteQuestion"
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
                            <i className="fa fa-check-double"></i>
                            Moderator
                          </button>
                          <button className="right-btn2">
                            <i className="fa fa-user-circle"></i>
                            Presenter
                          </button>
                        </div>
                      </div>
                    </form>
                  </section>
                }
              />
              <TransitionsModal
                modalType="Add Remarks"
                modal={
                  <section className="remarks">
                    <h2>Remarks</h2>
                    <form action="" className="form">
                      <div className="form-group">
                        <label for="opmerkingPlaatsen">
                          Opmerking plaatsen
                        </label>
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
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
