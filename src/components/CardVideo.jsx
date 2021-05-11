import './assets/CardVideo.css';
const videoLink = "https://images-assets.nasa.gov/video/";

function CardVideo({preview}) {
if (preview){
    const tmpvid = `${videoLink}${preview.data[0].nasa_id}/${preview.data[0].nasa_id}~medium.mp4`;
    const tmpimg = `${videoLink}${preview.data[0].nasa_id}/${preview.data[0].nasa_id}~medium.jpg`;
    
    return (
        <div className="cardContainer">
             <a href={tmpvid}><img src={tmpimg} className="preview" alt={tmpimg}/></a> 
            <div className="infoCard">
                <a href="#">
                    <img src={tmpimg} alt="Actor's name"/>
                </a>
                <div className="status">
                <a href={tmpvid}>
                    <h3 className="name">{preview.data[0].title.split('_').join(' ').split(',').join(' ')}</h3>
                    </a>
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