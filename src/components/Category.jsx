import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardVideo from "./CardVideo";
import NavButton from "./NavButtons";
import "./assets/FetchVideo.css";
import "./assets/NavButtons.css";

function Category() {
  const [videos, setVideos] = useState();
  const [page, setPage] = useState(1);
  const { cat } = useParams();

  useEffect(() => {
    fetchApi();
  }, [page, videos]);

  function fetchApi() {
    axios
      .get(
        `https://images-api.nasa.gov/search?q=${cat}&page=${page}&media_type=video`
      )
      .then((r) => r.data.collection.items)
      .then((r) => setVideos(r));
  }
  let str = "";
  switch (cat ) {
    case 'tank':
      str = "Gros réservoir"
      break;
    case 'apollo 11':
      str = "RILF"
      break;
    case 'engine':
      str = "Joint de cullase"
      break;
    default:
      str = "Uranus"
  }
  return (
    <>
      <div className="button-container">
        <NavButton page={page} setPage={setPage} />
      </div>
       <h1 style={{textAlign:'center', fontSize: '2rem', margin:'1rem'}}>{str}</h1>
      <div className="gridVideo">
        {videos && videos.map((e) => <CardVideo preview={e} />)}
      </div>
      <div className="button-container">
        <NavButton page={page} setPage={setPage} />
      </div>
    </>
  );
}

export default Category;
