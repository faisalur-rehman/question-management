import { useState } from "react";
import { Field } from "formik";

import AppForm from "../../common/AppForm";
import { socket } from "../../apis/socket-connect";
import TransitionsModal from "../../components/Modal/Modal";
import { createQuestionSchema } from "../../utils/validations";
import useSocketError from "../../hooks/useSocketError";

export default function CreateQuestion() {
  useSocketError();
  const [questionSelected, setQuestionSelected] = useState();

  const handleSubmit = ({ formValues }) => {
    const project = "60cbe95e130a2e1045a84d55";
    const formFields = { ...formValues, project };

    const url = getURLForCreatingQuestions();

    socket.emit(url, { ...formFields }, (data) => {
      console.log("socket incoming question", data);
    });
  };

  const getURLForCreatingQuestions = () => {
    let url = "create-incoming-question";

    if (questionSelected === "moderator") {
      url = "create-moderator-question";
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
