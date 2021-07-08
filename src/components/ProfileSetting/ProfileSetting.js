import React, { useState, useEffect } from "react";
import "./ProfileSetting.css";
import copy from "../../Assets/copy.png";
import { AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiFileCopyLine } from "react-icons/ri";
import moderator from "../../Assets/moderator.png";
import SwitchComponent from "../Switch/Switch";
import Header from "../Header/Header";
import useApi from "../../hooks/useApi";
import * as projectApi from "../../apis/project";

const ProfileSetting = () => {
  const [nameVisible, setNameVisible] = useState(false);
  const [isStartTimeVisible, setIsStartTimeVisible] = useState(false);
  const [isTimeVisible, setIsTimeVisible] = useState(false);
  const [isRunningTimeVisible, setIsRunningTimeVisible] = useState(false);
  const [isTimeLeftVisible, setIsTimeLeftVisible] = useState(false);
  const [isRemarksVisible, setIsRemarksVisible] = useState(false);
  const [presenterMarkQuestion, setPresenterMarkQuestion] = useState(false);
  const [isViewEnable, setIsViewEnable] = useState(false);
  const [canPlaceRemarks, setCanPlaceRemarks] = useState(false);
  const [canEditRemarks, setCanEditRemarks] = useState(false);
  const [canEditQuestions, setCanEditQuestions] = useState(false);

  const presenterPermissions = useApi(projectApi.presenterPermissions);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await presenterPermissions.request();
        console.log("presenter", data);
        setIsRemarksVisible(data.isRemarksVisible);
        setIsRunningTimeVisible(data.isRunningTimeVisible);
        setIsStartTimeVisible(data.isStartTimeVisible);
        setIsTimeLeftVisible(data.isTimeLeftVisible);
        setIsTimeVisible(data.isTimeVisible);
      } catch (_) {}
    }
    fetchData();
  }, []);
  const moderatorPermissions = useApi(projectApi.moderatorPermissions);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await moderatorPermissions.request();
        console.log("moderator", data);
        setCanEditQuestions(data.canEditQuestions);
        setCanEditRemarks(data.canEditRemarks);
        setCanPlaceRemarks(data.canPlaceRemarks);
        setIsViewEnable(data.isViewEnable);
      } catch (_) {}
    }
    fetchData();
  }, []);

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
            <SwitchComponent
              property="isViewEnable"
              state={isViewEnable}
              setState={setIsViewEnable}
              role="moderator"
            />
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
              <SwitchComponent
                property="nameVisible"
                state={nameVisible}
                setState={setNameVisible}
                role="presenter"
              />
            </div>
            <div className="option-switch">
              <p>Start Time</p>
              <SwitchComponent
                property="isStartTimeVisible"
                state={isStartTimeVisible}
                setState={setIsStartTimeVisible}
                role="presenter"
              />
            </div>
            <div className="option-switch">
              <p>Time Visible</p>
              <SwitchComponent
                property="isTimeVisible"
                state={isTimeVisible}
                setState={setIsTimeVisible}
                role="presenter"
              />
            </div>
            <div className="option-switch">
              <p>Running Time </p>
              <SwitchComponent
                property="isRunningTimeVisible"
                state={isRunningTimeVisible}
                setState={setIsRunningTimeVisible}
                role="presenter"
              />
            </div>
            <div className="option-switch">
              <p>Time Left</p>
              <SwitchComponent
                property="isTimeLeftVisible"
                state={isTimeLeftVisible}
                setState={setIsTimeLeftVisible}
                role="presenter"
              />
            </div>
            <div className="option-switch">
              <p>Remarks Visible</p>
              <SwitchComponent
                property="isRemarksVisible"
                state={isRemarksVisible}
                setState={setIsRemarksVisible}
                role="presenter"
              />
            </div>
            <div className="option-switch">
              <p>Presenter can mark queestions as completed</p>
              <SwitchComponent
                property="presenterMarkQuestion"
                state={presenterMarkQuestion}
                setState={setPresenterMarkQuestion}
                role="presenter"
              />
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <h4>Moderator View</h4>
            <div className="option-switch">
              <p>Moderator can place remarks </p>
              <SwitchComponent
                property="canPlaceRemarks"
                state={canPlaceRemarks}
                setState={setCanPlaceRemarks}
                role="moderator"
              />
            </div>
            <div className="option-switch">
              <p>Moderator can edit remarks </p>
              <SwitchComponent
                property="canEditRemarks"
                state={canEditRemarks}
                setState={setCanEditRemarks}
                role="moderator"
              />
            </div>
            <div className="option-switch">
              <p>Moderator can edit questions </p>
              <SwitchComponent
                property="canEditQuestions"
                state={canEditQuestions}
                setState={setCanEditQuestions}
                role="moderator"
              />
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <h4>Advanced Options</h4>
            <div className="option-switch">
              <p>Custom text</p>
              {/* <SwitchComponent /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
