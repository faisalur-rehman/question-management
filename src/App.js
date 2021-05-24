import "./App.css";
import Header from "./components/Header/Header";
import IncomingQuestion from "./components/IncomingQuestion/IncomingQuestion";
import NewProject from "./components/NewProject/NewProject";
import ProfileSetting from "./components/ProfileSetting/ProfileSetting";
import Projects from "./components/Projects/Projects";
import Questions from "./components/Questions/Questions";
import SavedRemarks from "./components/SavedRemarks/SavedRemarks";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
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
