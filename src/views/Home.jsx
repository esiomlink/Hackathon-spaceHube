import React, { useContext } from 'react';
import FetchVideo from '../components/FetchVideo.jsx';
import LoginContext from '../contexts/LoginContext';
const Home = ({ query }) => {
  const { isMageur, setIsMageur } = useContext(LoginContext);
  return (
    <div>
      <FetchVideo {...query} isMageur={isMageur} setIsMageur={setIsMageur} />
    </div>
  );
};

export default Home;
