import React from "react";

const ModeratorQuestion = () => {
  return (
    <section className="question">
      <h2>Question</h2>
      <form action="" className="form">
        <div className="form-group">
          <label for="pasteName">Paste Name</label>
          <input type="text" name="pasteName" />
        </div>
        <div className="form-group">
          <label for="pasteQuestion">Paste Question</label>
          <textarea name="pasteQuestion" id="pasteQuestion"></textarea>
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
              <i className="fa fa-check-double"></i>
              Moderator
            </button>
            <button className="right-btn2">
              <i className="fa fa-user-circle"></i>
              Presenter
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ModeratorQuestion;
