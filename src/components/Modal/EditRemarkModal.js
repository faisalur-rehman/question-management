import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AppForm from "../../common/AppForm";
import { socket } from "../../apis/socket-connect";
import { Field } from "formik";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const EditRemarkModal = ({ show, onClose, remark }) => {
  const initialValues = {
    description: remark.description,
  };
  const classes = useStyles();

  const handleSubmit = ({ formValues }) => {
    const project = "60e53f6ce35eb82ea8585cf5";
    const formFields = { ...formValues, project, remarkId: remark._id };

    // const url = getURLForCreatingQuestions();

    socket.emit("update-remark", { ...formFields }, (data) => {
      console.log("socket updating remark", data);
    });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={show}
        onClose={() => onClose(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <div className={classes.paper}>
            <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="pasteQuestion">Edit</label>

                  <Field as="textarea" name="description" />
                </div>
                <div className="btn-group">
                  <div className="left-btn">
                    <button type="submit">
                      <i className="fa fa-save"></i>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </AppForm>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditRemarkModal;
