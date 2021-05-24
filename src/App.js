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

function App() {
  return (
    <div className="App">
      <DashboardHeader />
      <div className="sidebar-header">
        {/* <SideBar /> */}
        {/* <Projects /> */}
        {/* <ProfileSetting /> */}
        {/* <NewProject /> */}
        <Questions />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <IncomingQuestion />
          <SavedRemarks />
        </div>
        {/* <ArchivedQuestions /> */}
        {/* <LiveQuestions /> */}
        <LiveRemarks />
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
