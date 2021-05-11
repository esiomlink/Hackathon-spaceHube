
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home';
import Navbar from './components/Navbar';
import Subscription from './components/Subscription';
function App() {
  return (
    <>
    <div className='App'>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/sub' component={Subscription} />
{/*         <Route path='/jeux' exact component={Carousel} /> */}
      </Router>
    </div>
    </>
  );
}

export default App;
