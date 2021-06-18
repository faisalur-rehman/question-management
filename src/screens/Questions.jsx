import { useEffect, useState } from "react";
import { Field } from "formik";

import DashboardHeader from "../components/DasboardHeader/DashboardHeader";
import TransitionsModal from "../components/Modal/Modal";
import SavedRemarks from "../components/SavedRemarks/SavedRemarks";
import Questions from "../components/Questions/Questions";
import IncomingQuestion from "../components/IncomingQuestion/IncomingQuestion";
import LiveQuestions from "../components/LiveQuestions/LiveQuestions";
import AppForm from "../common/AppForm";
import { createQuestionSchema } from "../utils/validations";
import { socket } from "../apis/socket-connect";

export default function QuestionsScreen() {
  return (
    <div className="body">
      <DashboardHeader />
      <CreateQuestion />
      <TransitionsModal
        modalType="Add Remarks"
        modal={
          <section className="remarks">
            <h2>Remarks</h2>
            <form action="" className="form">
              <div className="form-group">
                <label for="opmerkingPlaatsen">Opmerking plaatsen</label>
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
  );
}

function CreateQuestion() {
  const [questionSelected, setQuestionSelected] = useState();

  useEffect(() => {
    socket.on("exception", (errors) => {
      console.log("socket errors", errors);
    });
  }, []);

  const handleSubmit = ({ formValues }) => {
    console.log("questionSelected", questionSelected);

    const project = "60cbe95e130a2e1045a84d55";
    const formFields = { ...formValues, project };

    const url = getURLForCreatingQuestions();
    console.log("url", url);

    // socket.emit("create-incoming-question", { ...formFields }, (data) => {
    //   console.log("socket incoming question", data);
    // });
    // console.log("form values", formFields);
  };

  const getURLForCreatingQuestions = () => {
    let url = "create-incoming-question";

    if (questionSelected === "moderator") {
      url = " create-moderator-question";
    } else if (questionSelected === "presenter") {
      url = "create-presenter-question";
    }

    return url;
  };

  return (
    <TransitionsModal
      modalType="Add Question"
      modal={
        <section className="question">
          <h2>Question</h2>
          <AppForm
            initialValues={questionInitialValue}
            validationSchema={createQuestionSchema}
            handleSubmit={handleSubmit}
          >
            <div className="form">
              <div className="form-group">
                <label for="pasteName">Paste Name</label>
                {/* <input type="text" name="name" /> */}
                <Field type="text" name="name" />
              </div>
              <div className="form-group">
                <label for="pasteQuestion">Paste Question</label>
                {/* <textarea name="pasteQuestion" id="pasteQuestion"></textarea> */}
                <Field as="textarea" name="questionText" />
              </div>
              <div className="btn-group">
                <div className="left-btn">
                  <button
                    type="submit"
                    onClick={() => setQuestionSelected("save")}
                  >
                    <i className="fa fa-save"></i>
                    Save
                  </button>
                </div>
                <div className="right-btn">
                  <button
                    className="right-btn1"
                    type="submit"
                    onClick={() => setQuestionSelected("moderator")}
                  >
                    <i className="fa fa-check-double"></i>
                    Moderator
                  </button>
                  <button
                    className="right-btn2"
                    type="submit"
                    onClick={() => setQuestionSelected("presenter")}
                  >
                    <i className="fa fa-user-circle"></i>
                    Presenter
                  </button>
                </div>
              </div>
            </div>
          </AppForm>
        </section>
      }
    />
  );
}

const questionInitialValue = {
  name: "",
  questionText: "",
};
