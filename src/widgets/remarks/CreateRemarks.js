import React, { useState } from "react";
import TransitionsModal from "../../components/Modal/Modal";
// import AppForm from "../../common/AppForm";
import { socket } from "../../apis/socket-connect";
import place from "../../Assets/place.png";
const CreateRemarks = () => {
  const [remarkSelected, setRemarkSelected] = useState();
  const [description, setDescription] = useState("");
  // const [allRemarks, setAllRemarks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectId = "60e53f6ce35eb82ea8585cf5";
    const formFields = { description, projectId };
    const url = getURLForCreatingQuestions();
    socket.emit(url, { ...formFields }, (data) => {
      console.log("socket remarks", data);
      // setAllRemarks(prevRemarks=>[...prevRemarks,data])
    });
    socket.emit("all-remarks", {}, (data) => {
      console.log("all remarks", data);
    });
  };

  const getURLForCreatingQuestions = () => {
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
          //   <section className="remarks">
          //     <h2>Remarks</h2>
          //     <AppForm
          //       initialValues={initialValues}
          //       // validationSchema={createQuestionSchema}
          //       handleSubmit={handleSubmit}
          //     >
          //       <Field as="textarea" name="remark" />
          //       <div className="btn-group">
          //         <div className="left-btn">
          //           <button
          //             type="submit"
          //             onClick={() => setQuestionSelected("save")}
          //           >
          //             <i className="fa fa-save"></i>
          //             Save
          //           </button>
          //         </div>
          //         <div className="right-btn">
          //           <button
          //             className="right-btn1"
          //             type="submit"
          //             onClick={() => setQuestionSelected("place")}
          //           >
          //             <i className="fa fa-pen"></i>
          //             Moderator
          //           </button>
          //         </div>
          //       </div>
          //     </AppForm>
          //   </section>
          <section className="remarks">
            <h2>Remarks</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label for="opmerkingPlaatsen">Opmerking plaatsen</label>
                <textarea
                  name="opmerkingPlaatsen"
                  id="opmerkingPlaatsen"
                  value={description}
                  onChange={({ target }) => setDescription(target.value)}
                ></textarea>
              </div>
              <div className="btn-group">
                <div className="left-btn">
                  <button
                    type="submit"
                    onClick={() => setRemarkSelected("save")}
                  >
                    <i className="fa fa-save"></i>
                    Save
                  </button>
                </div>
                <div className="right-btn">
                  <button
                    type="submit"
                    onClick={() => setRemarkSelected("place")}
                    style={{ marginTop: 8, border: "none" }}
                  >
                    <div>
                      <img src={place} alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </section>
        }
      />
    </div>
  );
};

export default CreateRemarks;
