import React from "react";
import ReactPlayer from "react-player";
import { useParams } from 'react-router-dom';
import "./assets/playvideo.css";

function Playvideo() {
  let { video } = useParams();
  console.log(video)
  return (
    <div className="mainWrap">
      <div className="wrapper">
        <ReactPlayer
          url="https://images-assets.nasa.gov/video/JPL-20200617-M2020f-0002-L-30%20Perseverance%20Video%20File/JPL-20200617-M2020f-0002-L-30%20Perseverance%20Video%20File~medium.mp4"
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
