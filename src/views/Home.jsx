import Pub from '../components/Pub.jsx';
import FetchVideo from '../components/FetchVideo.jsx';


const Home = ({query}) => {

  return (
    <div>
      <Pub />
      <FetchVideo {...query} />
    </div>
  );
}

export default Home;
