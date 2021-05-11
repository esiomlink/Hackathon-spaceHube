import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import FetchVideos from './components/FetchVideo';

function App() {
  return (
    <>

      <FetchVideos />
      <div className="App">
    </div>
    </>
  );
}

export default App;
