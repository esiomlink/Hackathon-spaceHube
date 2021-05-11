
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <div className='App'>
          
      <Router>
          <Navbar />
        <Route path='/' exact component={Home} />
{/*         <Route path='/jeux' exact component={Carousel} /> */}
      </Router>

    </div>
    </>
  );
}

export default App;
