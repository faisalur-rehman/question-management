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

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <DashboardHeader />
            <AllScreens />
          </Route>
          {/* <Route path='/login'>

          </Route> */}
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
        </Switch>

        {/* <SideBar /> */}
        {/* <Projects /> */}
        {/* <ProfileSetting /> */}
        {/* <NewProject /> */}

        {/* screen 7 */}

        {/* <Questions />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IncomingQuestion />
          <SavedRemarks />
        </div>
        <DarkArchived text={true} /> */}

        {/* screen 8 */}

        {/* <ModeratorView />
        <LiveQuestions />
        <PresenterLiveQuestions /> */}

        {/* screen 9 */}

        {/* <ModeratorView />
        <LiveQuestions />
        <DarkArchived text={true} />

        {/* screen 10 */}

        {/* <LiveQuestions />
        <PresenterLiveQuestions />
        <div style={{ width: "80%" }}></div> */}

        {/* screen 11 */}

        {/* <LiveQuestions />
        <DarkArchived text={true} />
        <div style={{ width: "80%" }}></div> */}

        {/* screen 14 */}

        {/* <ModeratorView />
        <LiveQuestions />
        <LiveRemarks /> */}

        {/* screen 15 */}

        {/* <ModeratorView />
        <LiveQuestions />
        <DarkArchived /> */}

        {/* screen 16 */}

        {/* <LiveQuestions />
        <LiveRemarks />
        <div style={{ width: "80%" }}></div> */}

        {/* screen 17 */}

        {/* <LiveQuestions />
        <DarkArchived />
        <div style={{ width: "80%" }}></div> */}

        {/* screen 18 */}

        {/* <Questions />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IncomingQuestion />
          <SavedRemarks />
        </div>
        <LiveRemarks /> */}

        {/* screen 19 */}
        {/* <Questions />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IncomingQuestion />
          <SavedRemarks />
        </div>
        <DarkArchived /> */}

        {/* <div style={{ display: "flex", flexDirection: "column" }}>
          <IncomingQuestion />
          <SavedRemarks />
        </div> */}
        {/* <ArchivedQuestions /> */}
        {/* <LiveRemarks /> */}
        {/* <DarkArchived /> */}
      </div>
      {/* <div>
        <Projects />
      </div> */}
      {/* <Navbar />
      <Main /> */}
    </Router>
  );
}

export default App;
