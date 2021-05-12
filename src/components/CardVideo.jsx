import './assets/CardVideo.css';
import { useHistory } from 'react-router-dom';
const videoLink = "https://images-assets.nasa.gov/video/";

function CardVideo({preview}) {
    let history = useHistory();
    if (preview){
        const tmpvid = `${videoLink}${preview.data[0].nasa_id}/${preview.data[0].nasa_id}~medium.mp4`;
        const tmpimg = `${videoLink}${preview.data[0].nasa_id}/${preview.data[0].nasa_id}~medium.jpg`;
        const OpenDetails = () => {
          history.push(`play/${preview.data[0].nasa_id}`)
        }
        
    return (
        <div className="cardContainer">
             <img onClick={OpenDetails} src={tmpimg} className="preview" alt={tmpimg}/> 
            <div className="infoCard">
                    <img onClick={OpenDetails} src={tmpimg} alt="Actor's name"/>
                <div className="status">
                    <h3 className="name" onClick={OpenDetails}>{preview.data[0].title.split('_').join(' ').split(',').join(' ')}</h3>
                    <span>{preview.data[0].photographer}</span>
                    {preview.data[0].keywords && <ul>{preview.data[0].keywords.filter((e,i)=>i<3).map(e=><li>{e.split('_').join(' ').split(',').join(' ')}</li>)}</ul>}
                    <span> {preview.data[0].date_created}</span>
                </div>
            </div>
        </div>
    )
} else return <p>loading</p>
}

export default CardVideo