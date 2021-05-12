import axios from "axios";
import { useState, useEffect } from "react";
import CardVideo from './CardVideo';
import './assets/FetchVideo.css';
import './assets/NavButtons.css';
import NavButton from "./NavButtons";

export default function FetchVideo({search}) {
  const [videos, setVideos] = useState();
  const [page, setPage] = useState(1);
  const [isMageur, setIsMageur] = useState(true);
  console.log(isMageur)
 
  const handleMajeur=()=>{
    setIsMageur(false)
  }

  useEffect(() => {
    fetchApi();
  }, [page, videos,search]);

function fetchApi(){
  axios
  .get(`https://images-api.nasa.gov/search?page=${page}&media_type=video&q=${search}`)
  .then((r) => r.data.collection.items)
  .then((r) => setVideos(r));
}
  
  if (videos){
    return (
      <>
        {isMageur && (
          <div className="blur">
            <div className='majeur'>
              <h1>SpaceHub est un site Internet réservé aux robots mature !</h1>
              <h2>
                SpaceHub est strictement limité aux rovers de plus de 18 ans
                ou ayant l'âge légal dans votre juridiction, l'âge le plus élevé
                étant retenu.
              </h2>
              <div className='btn-majeur'>
                <button onClick={() => handleMajeur()}>Entrer</button>
                <button>Sortir</button>
              </div>
            </div>
          </div>
        )}
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
