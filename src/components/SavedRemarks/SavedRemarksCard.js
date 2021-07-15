import React, { useState } from "react";
import { socket } from "../../apis/socket-connect";
import "../../Assets/css/main.css";
import place from "../../Assets/place.png";
import EditQuestionModal from "../Modal/EditQuestionModal";

const SavedRemarksCard = ({ remark }) => {
  const [editRemark, setEditRemark] = useState(false);
  const [clicked, setClicked] = useState(false);
  let show = !clicked ? "menu-icon-none" : "";

  function deleteRemark(url) {
    socket.emit(
      url,
      {
        id: remark._id,
      },
      (data) => {
        console.log(data);
      }
    );
  }

  return (
    <section className="IncomingQuestionCard" style={{ width: 440 }}>
      <div className="card-header" style={{ alignItems: "center" }}>
        <div>
          <i
            className="fa fa-ellipsis-v"
            style={{ cursor: "pointer" }}
            onClick={() => setClicked(!clicked)}
          ></i>
          <i
            className={`fas fa-edit ${show}`}
            style={{
              color: "white",
              background: "lightgray",
              padding: 7,
              borderRadius: 8,
              paddingRight: 5,
              fontSize: ".7rem",
              marginLeft: 5,
            }}
            onClick={() => setEditRemark(true)}
          ></i>
          <span className={`${show} menu-icon`}>
            <i
              className="fal fa-minus-circle"
              onClick={() => deleteRemark("delete-remark")}
            ></i>
          </span>
        </div>
        <div>
          <p style={{ textAlign: "center" }}>2:00</p>
          {/* <h5>Hans Terlouw</h5> */}
        </div>
        <div>
          <img src={place} alt="" />
        </div>
      </div>
      <div className="card-body">
        <p>{remark.description}</p>
      </div>
      <EditQuestionModal
        show={editRemark}
        onClose={setEditRemark}
        question={remark}
        remark={true}
      />
    </section>
  );
};

export default SavedRemarksCard;
