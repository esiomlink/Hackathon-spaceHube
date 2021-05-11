
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Navbar from './components/Navbar';
import FetchVideos from './components/FetchVideo';

function App() {
  return (
    <>
    <div className='App'>
          <FetchVideos />
      <Router>
        <Route path='/' exact component={Home} />
{/*         <Route path='/jeux' exact component={Carousel} /> */}
      </Router>
    </div>
    </>
  );
}

export default App;
