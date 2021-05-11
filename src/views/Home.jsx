import FetchVideo from '../components/FetchVideo.jsx';


const Home = ({query}) => {

  return (
    <div>
      <FetchVideo {...query} />
    </div>
  );
}

export default Home;
