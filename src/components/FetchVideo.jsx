import axios from "axios";
import { useState, useEffect } from "react";

const videoLink="https://images-assets.nasa.gov/video/"

export default function FetchVideo() {
  const [videos, setVideos] = useState();
  useEffect(() => {
    axios
      .get("https://images-api.nasa.gov/search?q=rover&media_type=video")
      .then((r) => r.data.collection.items)
      .then(r=>setVideos(r));
    }, []);
    
    if (videos)
    {return (
      videos.map(e=> {
        const tmpvid =`${videoLink}${e.data[0].nasa_id}/${e.data[0].nasa_id}~medium.mp4`; 
        const tmpimg =`${videoLink}${e.data[0].nasa_id}/${e.data[0].nasa_id}~small.jpg`;
        return (
        <a href = {tmpvid} ><img src = {tmpimg} /></a>
        )})
    );} else return <p>loading</p>
}
