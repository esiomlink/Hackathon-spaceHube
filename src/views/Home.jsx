import React from 'react';
import Pub from '../components/Pub.jsx';
import Navbar from '../components/Navbar.jsx';
import FetchVideo from '../components/FetchVideo.jsx';
import Header from '../components/Header.jsx';



const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Pub />
      <FetchVideo />
    </div>
  );
}

export default Home;
