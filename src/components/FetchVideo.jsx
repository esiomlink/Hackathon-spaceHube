import axios from "axios";
import { useState, useEffect } from "react";
import CardVideo from './CardVideo';
import './assets/FetchVideo.css';



export default function FetchVideo() {
  const [videos, setVideos] = useState();
  useEffect(() => {
    axios
      .get("https://images-api.nasa.gov/search?q=rovers&media_type=video&page=2")
      .then((r) => r.data.collection.items)
      .then((r) => setVideos(r));
  }, [videos]);

  if (videos){
    return <div className="gridVideo">{(videos && videos.map((e) => <CardVideo preview={e}/>))}</div>
  }else return <p>loading</p>;
}
