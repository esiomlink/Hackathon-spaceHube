import React from "react";
import ReactPlayer from "react-player";
import { useParams } from 'react-router-dom';
import "./assets/playvideo.css";

function Playvideo() {

  const videoLink = "https://images-assets.nasa.gov/video/";
  let { id } = useParams();
  let { title } = useParams();
  let { autor } = useParams();
  let { date } = useParams();
  let { keywords } = useParams();
  const tmpvid = `${videoLink}${id}/${id}~medium.mp4`;

  title.split('_').join(' ').split(',').join(' ')
  autor.split('_').join(' ').split(',').join(' ')
  date.split('_').join(' ').split(',').join(' ')
  keywords = keywords.split('_').join(' ').split(',').join(' #')
  // keywords = keywords.replace(/[^\w\s]/gi, '')
  // console.log(typeof {keywords})
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
            <a href="#">#{keywords} </a>
          </div>
          <h1>{title}</h1>
          <p>{autor ? "Anonym" : autor} • 60 884 vues • Diffusée en direct le {date}</p>
        </div>
        <span id='separator'></span>
      </div>
    </div>
  );
}

export default Playvideo;
