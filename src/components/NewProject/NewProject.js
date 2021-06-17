import { Input } from "reactstrap";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

import Header from "../Header/Header";
import "./NewProject.css";
import * as projectApi from "../../apis/project";
import useApi from "../../hooks/useApi";

const NewProject = () => {
  const project = useApi(projectApi.createProject);

  const handleCreateProject = async () => {
    project.request({});
  };

  return (
    <div style={{ width: "90%" }}>
      <div className="new-project">
        <Header heading="New Project" search={false} />
        <div className="new-project-card">
          <label>Project Title</label>
          <br />
          <Input name="title" className="form-control project-input" />
          <p className="link">https://medquest.com(viewtype)</p>
          <label>Date</label>
          <br />
          <input name="title" className="form-control project-input date" />
          <MdDateRange className="date-icon" />
          <div className="time-details">
            <div>
              <label>Start Time</label>
              <br />
              <Input name="title" className="form-control project-input time" />
              <BiTimeFive className="time-icon" />
            </div>
            <div>
              <label>End Time</label>
              <br />
              <Input name="title" className="form-control project-input time" />
              <BiTimeFive className="time-icon" />
            </div>
          </div>
          <label>Project Passcode</label>
          <br />
          <Input name="passcode" className="form-control project-input" />
        </div>
        <div style={{ width: "35%" }}>
          <button
            color="primary"
            className="save-btn text-size active"
            onClick={handleCreateProject}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
