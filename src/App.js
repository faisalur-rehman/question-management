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

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <DashboardHeader />
            <AllScreens />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/screen2">
            <div className="sidebar-header">
              <SideBar />
              <Projects />
            </div>
          </Route>
          <Route path="/screen4">
            <div className="sidebar-header">
              <SideBar />
              <ProfileSetting />
            </div>
          </Route>
          <Route path="/screen5">
            <div className="sidebar-header">
              <SideBar />
              <NewProject />
            </div>
          </Route>
          <Route path="/screen6">
            <DashboardHeader />
            <div className="sidebar-header">
              <ModeratorView />
              <LiveQuestions />
              <PresenterLiveQuestions />
            </div>
          </Route>
          <Route path="/screen7">
            <DashboardHeader />
            <div className="sidebar-header">
              <Questions />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <IncomingQuestion />
                <SavedRemarks />
              </div>
              <DarkArchived text={true} />
            </div>
          </Route>
          <Route path="/screen8">
            <DashboardHeader />
            <div className="sidebar-header">
              <ModeratorView />
              <LiveQuestions />
              <PresenterLiveQuestions />
            </div>
          </Route>
          <Route path="/screen9">
            <DashboardHeader />
            <div className="sidebar-header">
              <ModeratorView />
              <LiveQuestions />
              <DarkArchived text={true} />
            </div>
          </Route>
          <Route path="/screen10">
            <DashboardHeader />
            <div className="sidebar-header">
              <LiveQuestions />
              <PresenterLiveQuestions />
              <div style={{ width: "80%" }}></div>
            </div>
          </Route>
          <Route path="/screen11">
            <DashboardHeader />
            <div className="sidebar-header">
              <LiveQuestions />
              <DarkArchived text={true} />
              <div style={{ width: "80%" }}></div>
            </div>
          </Route>
          <Route path="/screen12">
            <PresenterView />
          </Route>
          <Route path="/screen13">
            <DashboardHeader />
            <div className="sidebar-header">
              <Questions />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <IncomingQuestion />
                <SavedRemarks />
              </div>
              <LiveQuestions />
            </div>
          </Route>
          <Route path="/screen14">
            <DashboardHeader />
            <div className="sidebar-header">
              <ModeratorView />
              <LiveQuestions />
              <LiveRemarks />
            </div>
          </Route>
          <Route path="/screen15">
            <DashboardHeader />
            <div className="sidebar-header">
              <ModeratorView />
              <LiveQuestions />
              <DarkArchived />
            </div>
          </Route>
          <Route path="/screen16">
            <DashboardHeader />
            <div className="sidebar-header">
              <LiveQuestions />
              <LiveRemarks />
              <div style={{ width: "80%" }}></div>
            </div>
          </Route>
          <Route path="/screen17">
            <DashboardHeader />
            <div className="sidebar-header">
              <LiveQuestions />
              <DarkArchived />
              <div style={{ width: "80%" }}></div>
            </div>
          </Route>
          <Route path="/screen18">
            <DashboardHeader />
            <div className="sidebar-header">
              <Questions />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <IncomingQuestion />
                <SavedRemarks />
              </div>
              <LiveRemarks />
            </div>
          </Route>
          <Route path="/screen19">
            <DashboardHeader />
            <div className="sidebar-header">
              <Questions />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <IncomingQuestion />
                <SavedRemarks />
              </div>
              <DarkArchived />
            </div>
          </Route>
          <Route path="/screen20">
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
          </Route>
          <Route path="/screen21">
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
          </Route>
          <Route path="/screen22">
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
          </Route>
          <Route path="/screen23">
            <div className="sidebar-header">
              <AlarmScreen />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
