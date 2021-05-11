import axios from "axios";
import { useState, useEffect } from "react";
import CardVideo from './CardVideo';
import './assets/FetchVideo.css';
import './assets/NavButtons.css';
import NavButton from "./NavButtons";

export default function FetchVideo({search}) {
  const [videos, setVideos] = useState();
  const [page, setPage] = useState(1);
 

  useEffect(() => {
    fetchApi();
<<<<<<< HEAD
  }, [page, videos,search]);
=======
  }, [page]);
>>>>>>> a1d56b7a26e29e9ba4abb6096296652c4e22bb39

function fetchApi(){
  axios
  .get(`https://images-api.nasa.gov/search?q=${search}&page=${page}&media_type=video`)
  .then((r) => r.data.collection.items)
  .then((r) => setVideos(r));
}

  if (videos){
    return (
      <>
          <div className='button-container'>
            <NavButton page={page} setPage={setPage} />
          </div>
        <div className='gridVideo'>
          {videos && videos.map((e) => <CardVideo preview={e} />)}
        </div>
      </>
    );
  }else return <p>loading</p>;
}
