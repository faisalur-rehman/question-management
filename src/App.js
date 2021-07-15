import "./App.css";
import "./components/ArchivedQuestions/ArcheivedPanel.css";
import DashboardHeader from "./components/DasboardHeader/DashboardHeader";
import IncomingQuestion from "./components/IncomingQuestion/IncomingQuestion";
import LiveQuestions from "./components/LiveQuestions/LiveQuestions";
import NewProject from "./components/NewProject/NewProject";
import Projects from "./components/Projects/Projects";
import Questions from "./components/Questions/Questions";
import SavedRemarks from "./components/SavedRemarks/SavedRemarks";
import SideBar from "./components/SideBar/SideBar";
import LiveRemarks from "./components/LiveRemarks/LiveRemarks";
import DarkArchived from "./components/DarkArchived/DarkArchived";
import PresenterLiveQuestions from "./components/PresenterLiveQuestions/PresenterLiveQuestions";
import ModeratorView from "./components/ModeratorView/ModeratorView";
import AllScreens from "./components/AllScreens/AllScreens";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import PresenterView from "./components/PresenterView/PresenterView";
import AlarmScreen from "./components/AlarmScreen/AlarmScreen";
import Register from "./components/auth/Register";
import QuestionsScreen from "./screens/Questions";
import SuperUser from "./components/auth/SuperUser";
import ProjectSetting from "./components/ProjectSetting/ProjectSetting";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/create-superuser">
            <SuperUser />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <div className="body">
              <DashboardHeader />
              <AllScreens />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/projects">
            <div className="sidebar-header body">
              <SideBar />
              <Projects />
            </div>
          </Route>
          <Route path="/permissions">
            <ProjectSetting />
          </Route>
          <Route path="/create-project">
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
          <Route path="/screen24" component={QuestionsScreen} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
