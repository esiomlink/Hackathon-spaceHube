import axios from "axios";
import { useState, useEffect } from "react";
import CardVideo from './CardVideo';



export default function FetchVideo() {
  const [videos, setVideos] = useState();
  useEffect(() => {
    axios
      .get("https://images-api.nasa.gov/search?q=rover&media_type=video")
      .then((r) => r.data.collection.items)
      .then((r) => setVideos(r));
  }, [videos]);

  if (videos){
    return (videos && videos.map((e) => <CardVideo preview={e}/>  
    ))
  }else return <p>loading</p>;
}
