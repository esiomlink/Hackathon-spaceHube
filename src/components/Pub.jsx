import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Pub.css'
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
const Pub = () => {
  return (
    <div className='carousel'>
      <AliceCarousel
        className='carouselBox'
        duration={600}
        autoPlay
        infinite
        startIndex={1}
        fadeOutAnimation
        mouseDragEnabled
        playButtonEnabled
        autoPlayInterval={5000}
      >
        <img src={img1} alt='img' />
        <img src={img2} alt='img' />
        <img src={img3} alt='img' />
      </AliceCarousel>
    </div>
  );
};

export default Pub;
