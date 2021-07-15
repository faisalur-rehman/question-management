import React, { useState } from "react";
import TransitionsModal from "../../components/Modal/Modal";
import AppForm from "../../common/AppForm";
import { socket } from "../../apis/socket-connect";
import { Field } from "formik";
import place from "../../Assets/place.png";
const CreateRemarks = () => {
  const [remarkSelected, setRemarkSelected] = useState();

  const handleSubmit = ({ formValues }) => {
    const projectId = "60e53f6ce35eb82ea8585cf5";
    const formFields = { ...formValues, projectId };
    const url = getURLForCreatingRemarks();
    socket.emit(url, { ...formFields }, (data) => {
      console.log("socket remarks", data);
    });
  };

  const getURLForCreatingRemarks = () => {
    let url = "create-remark";

    if (remarkSelected === "place") {
      url = "place";
    }

    return url;
  };
  return (
    <div>
      <TransitionsModal
        modalType="Add Remarks"
        modal={
          <section className="remarks">
            <h2>Remarks</h2>
            <AppForm
              initialValues={initialValues}
              // validationSchema={createQuestionSchema}
              handleSubmit={handleSubmit}
            >
              <div className="form">
                <div className="form-group">
                  <label htmlFor="pasteQuestion">Add Remarks</label>

                  <Field as="textarea" name="description" />
                </div>
                <div className="btn-group">
                  <div className="left-btn">
                    <button
                      type="submit"
                      onClick={() => setRemarkSelected("save")}
                    >
                      <i className="fa fa-save"></i>
                      SAVE
                    </button>
                  </div>
                  <div className="right-btn">
                    <button
                      className="right-btn1"
                      type="submit"
                      onClick={() => setRemarkSelected("place")}
                    >
                      <img src={place} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </AppForm>
          </section>
        }
      />
    </div>
  );
};

export default CreateRemarks;

const initialValues = {
  description: "",
};
