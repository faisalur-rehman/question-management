import React from "react";
import warning from "../../Assets/warning.png";
import volume from "../../Assets/volume.png";
import video from "../../Assets/video.png";
import screen from "../../Assets/screen.png";
import "./AlarmScreen.css";

const AlarmScreen = () => {
  return (
    <div className="alarm-presenter">
      <div className="warning">
        <div>
          <img src={warning} alt="" />
          <p>Presenter Alarm</p>
        </div>
        <div className="icons">
          <img src={volume} alt="" />
          <img src={video} alt="" />
          <img src={screen} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AlarmScreen;
