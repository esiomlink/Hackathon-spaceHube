import React, { useState , useEffect} from 'react'
// /import CardVideo from './CardVideo';/
import axios from 'axios';

function ListVideo() {
    const [previews, setPreviews] = useState([]);
    const [captures, setCaptures] = useState([]);

    useEffect(() => {
        fetchPreviews();
    }, [])

    const fetchPreviews = () => {
        axios
        .get('https://images-api.nasa.gov/search?q=rover&media_type=video')
        .then((res) => res.data.collection.items)
        .then((dto) => {
          setPreviews(dto);
        })
    }
    const fetchCapture = () => {
        previews.map((prev) => (
            axios.get(prev.href).then(r => r.data[0]).then((dto) => setCaptures(dto))
            ))
    }
    useEffect(()=>{
        fetchCapture();
    },[])
    return (
        <>
            {captures&&captures.map((cap)=> console.log(cap))}
        </>
    )
}

export default ListVideo
