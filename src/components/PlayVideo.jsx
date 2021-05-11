import React from "react";
import ReactPlayer from "react-player";
import "./assets/playvideo.css";

function Playvideo() {
  return (
    <div className="mainWrap">
      <div className="wrapper">
        <ReactPlayer
          url="https://images-assets.nasa.gov/video/Dragon%20Downlink/Dragon%20Downlink~medium.mp4"
          controls="true"
          wrapper="div"
          playing
        />
        <div className="infoVideo">
          <div>
            <a href="#">#react </a>
            <a href="#">#react </a>
            <a href="#">#react </a>
          </div>
          <h1>Title title title</h1>
          <p>60 884 vues•Diffusée en direct le 29 juil. 2020</p>
        </div>
        <span id='separator'></span>
      </div>
    </div>
  );
}

export default Playvideo;
