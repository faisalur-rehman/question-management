import "./App.css";
import ArchivedQuestions from "./components/ArchivedQuestions/ArchivedQuestions";
import DashboardHeader from "./components/DasboardHeader/DashboardHeader";
import Header from "./components/Header/Header";
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
function App() {
  return (
    <div className="App">
      <DashboardHeader />
      <div className="sidebar-header">
        {/* <SideBar /> */}
        {/* <Projects /> */}
        {/* <ProfileSetting /> */}
        {/* <NewProject /> */}

        {/* screen 7 */}

        <Questions />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IncomingQuestion />
          <SavedRemarks />
        </div>
        <DarkArchived text={true} />

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
    </div>
  );
}

export default App;
