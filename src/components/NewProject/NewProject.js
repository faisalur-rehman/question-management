import { Input } from "reactstrap";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { Field } from "formik";

import Header from "../Header/Header";
import "./NewProject.css";
import * as projectApi from "../../apis/project";
import useApi from "../../hooks/useApi";
import AppForm from "../../common/AppForm";
import { projectSchema } from "../../utils/validations";

const NewProject = () => {
  const project = useApi(projectApi.createProject);

  const handleCreateProject = async ({ formValues }) => {
    console.log(formValues);
    // project.request({});
  };

  return (
    <div style={{ width: "90%" }}>
      <AppForm
        initialValues={initialValue}
        validationSchema={projectSchema}
        handleSubmit={handleCreateProject}
      >
        <div className="new-project">
          <Header heading="New Project" search={false} />
          <div className="new-project-card">
            <label>Project Title</label>
            <br />
            <Field name="title" className="form-control project-input" />
            <p className="link">https://medquest.com(viewtype)</p>
            <label>Date</label>
            <br />
            {/* <input
              type="date"
              name="title"
              className="form-control project-input date"
            /> */}
            <Field
              type="date"
              name="scheduleDate"
              className="form-control project-input date"
            />

            <MdDateRange className="date-icon" />
            <div className="time-details">
              <div>
                <label>Start Time</label>
                <br />
                {/* <input
                  type="time"
                  name="title"
                  className="form-control project-input time"
                /> */}
                <Field
                  type="time"
                  name="startTime"
                  className="form-control project-input time"
                />
                <BiTimeFive className="time-icon" />
              </div>
              <div>
                <label>End Time</label>
                <br />
                <Field
                  type="time"
                  name="endTime"
                  className="form-control project-input time"
                />
                <BiTimeFive className="time-icon" />
              </div>
            </div>
          </div>
          <div style={{ width: "35%" }}>
            <button
              color="primary"
              className="save-btn text-size active"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </AppForm>
    </div>
  );
};

export default NewProject;

const initialValue = {
  title: "",
  scheduleDate: "",
  startTime: "",
  endTime: "",
};
