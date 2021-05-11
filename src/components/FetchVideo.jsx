import axios from "axios";
import { useState, useEffect } from "react";
import CardVideo from './CardVideo';
import './assets/FetchVideo.css';
import NavButton from "./NavButtons";

export default function FetchVideo() {
  const [videos, setVideos] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchApi();
  }, [page]);

function fetchApi(){
  axios
  .get(`https://images-api.nasa.gov/search?page=${page}&media_type=video`)
  .then((r) => r.data.collection.items)
  .then((r) => setVideos(r));
}

  if (videos){
    return (
    <>
      <div className="gridVideo">
        <div >
          <NavButton page={page} setPage={setPage} />
        </div>
        {(videos && videos.map((e) => <CardVideo preview={e}/>))}
      </div>
    </>
    );
  }else return <p>loading</p>;
}
