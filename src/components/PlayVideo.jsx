import React from "react";
import ReactPlayer from "react-player";
import { useParams } from 'react-router-dom';
import "./assets/playvideo.css";

function Playvideo() {

  const videoLink = "https://images-assets.nasa.gov/video/";
  let { id } = useParams();
  const tmpvid = `${videoLink}${id}/${id}~medium.mp4`;
  console.log(tmpvid)
  return (
    <div className="mainWrap">
      <div className="wrapper">
        <ReactPlayer
          url={tmpvid}
          controls={true}
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
