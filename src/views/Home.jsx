import React from 'react';
import Pub from '../components/Pub.jsx';
// import Navbar from '../components/Navbar.jsx';
import FetchVideo from '../components/FetchVideo.jsx';


const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Pub />
      <FetchVideo/>
    </div>
  );
}

export default Home;
