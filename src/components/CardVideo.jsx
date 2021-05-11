import './assets/CardVideo.css';
const videoLink = "https://images-assets.nasa.gov/video/";

function CardVideo({preview}) {
if (preview){
    const tmpvid = `${videoLink}${preview.data[0].nasa_id}/${preview.data[0].nasa_id}~medium.mp4`;
    const tmpimg = `${videoLink}${preview.data[0].nasa_id}/${preview.data[0].nasa_id}~medium.jpg`;
    
    return (
        <div className="cardContainer">
            <a href={tmpvid}><div 
                className="preview" 
                style={{background: `url(${tmpimg}) center`, backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'}}>
        {/* <p>{tmpimg}</p> */}
            </div></a>
            <div className="infoCard">
                <img src={tmpimg} alt="Actor's name"/>
                <div className="status">
                <a href={tmpvid}><h3>Title Video</h3></a>
                    <span>Autor video</span>
                    <span>N° views</span>
                    <span> Date de post de la video</span>
                </div>
            </div>
        </div>
    )
} else return <p>loading</p>
}

export default CardVideo