import React from "react";
import "./ProfileSetting.css";
import copy from "../../Assets/copy.png";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiFileCopyLine } from "react-icons/ri";
import moderator from "../../Assets/moderator.png";
import SwitchComponent from "../Switch/Switch";
import Header from "../Header/Header";

const ProfileSetting = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "90%",
          marginLeft: "2%",
          marginTop: "5%",
          marginBottom: 20,
        }}
      >
        <Header heading="Name of the project" search={false} />
      </div>
      <div className="options">
        <div className="creation">
          <p>
            <span>
              <i class="fas fa-calendar-alt"></i>
            </span>{" "}
            14 april, 2021
          </p>
          <p>20:30</p>
        </div>
        <div className="admin-setting">
          <h3>
            <span
              className="setting-icon"
              style={{ verticalAlign: "middle", marginRight: 10 }}
            >
              <AiOutlineSetting style={{ padding: 0 }} />
            </span>
            Admin
          </h3>
          <img src={copy} alt="" />
        </div>
        <div className="admin-setting setting-presenter">
          <h3>
            <span
              className="setting-icon presenter"
              style={{ verticalAlign: "middle", marginRight: 10 }}
            >
              <CgProfile />
            </span>
            Presenter
          </h3>
          <RiFileCopyLine className="copy" />
        </div>
        <div className="admin-setting setting-moderator">
          <h3>
            <span
              className="settin "
              style={{ verticalAlign: "middle", marginRight: 10 }}
            >
              <img src={moderator} alt="" />
            </span>
            Moderator
          </h3>
          <RiFileCopyLine className="copy" />
        </div>
      </div>
      <div className="card">
        <div className="setting-card">
          <h2>Settings</h2>
          <h4>Views</h4>
          <p>Admin View</p>
          <p>Presenter View</p>
          <div className="moderator-switch">
            <p>Moderator View </p>
            <SwitchComponent />
          </div>
          <h3>Date and Time</h3>
          <div className="date-time">
            <div className="detail">
              <p>Date</p>
              <p>14 April 2021</p>
            </div>

            <div className="detail">
              <p>Start time</p>
              <p>20:30</p>
            </div>
            <div className="detail">
              <p>End Time</p>
              <p></p>21:30
            </div>
          </div>
          <div>
            <button className="text-size active">Edit Settings</button>
          </div>
        </div>
        <div className="option-card">
          <h2>Options</h2>
          <div>
            <h4>Presenter View</h4>
            <div className="option-switch">
              <p>Name Visible </p>
              <SwitchComponent />
            </div>
            <div className="option-switch">
              <p>Start Time</p>
              <SwitchComponent />
            </div>
            <div className="option-switch">
              <p>Time Visible</p>
              <SwitchComponent />
            </div>
            <div className="option-switch">
              <p>Running Time </p>
              <SwitchComponent />
            </div>
            <div className="option-switch">
              <p>Time Left</p>
              <SwitchComponent />
            </div>
            <div className="option-switch">
              <p>Remarks Visible</p>
              <SwitchComponent />
            </div>
            <div className="option-switch">
              <p>Presenter can mark queestions as completed</p>
              <SwitchComponent />
            </div>
            {/* <div className="option-switch" style={{ marginTop: 10 }}>
              <p>Text Size</p>
              <div>
                <button className="text-size ">Small</button>
                <button className="text-size active">Medium</button>
                <button className="text-size">Large</button>
              </div>
              <SwitchComponent />
            </div> */}
          </div>
          <div style={{ marginTop: 20 }}>
            <h4>Moderator View</h4>
            <div className="option-switch">
              <p>Moderator can place remarks </p>
              <SwitchComponent disabled />
            </div>
            <div className="option-switch">
              <p>Moderator can edit remarks </p>
              <SwitchComponent />
            </div>
            <div className="option-switch">
              <p>Moderator can edit questions </p>
              <SwitchComponent />
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <h4>Advanced Options</h4>
            <div className="option-switch">
              <p>Custom text</p>
              <SwitchComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
