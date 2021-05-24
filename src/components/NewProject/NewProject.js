import React from "react";
import Header from "../Header/Header";
import { Button, Input } from "reactstrap";
import "./NewProject.css";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";

const NewProject = () => {
  return (
    <div style={{ width: "90%" }}>
      <div className="new-project">
        <Header heading="New Project" search={false} />
        <div className="new-project-card">
          <label>Project Title</label>
          <br />
          <Input name="title" className="form-control input" />
          <p className="link">https://medquest.com(viewtype)</p>
          <label>Date</label>
          <br />
          <Input name="title" className="form-control input date" />
          <MdDateRange className="date-icon" />
          <div className="time-details">
            <div>
              <label>Start Time</label>
              <br />
              <Input name="title" className="form-control input time" />
              <BiTimeFive className="time-icon" />
            </div>
            <div>
              <label>End Time</label>
              <br />
              <Input name="title" className="form-control input time" />
              <BiTimeFive className="time-icon" />
            </div>
          </div>
          <label>Project Passcode</label>
          <br />
          <Input name="passcode" className="form-control input" />
        </div>
        <div style={{ width: "35%" }}>
          <button color="primary" className="save-btn text-size active">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
