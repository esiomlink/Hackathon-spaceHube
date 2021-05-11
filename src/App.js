import {useState} from 'react';
import LoginContext from './contexts/LoginContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Subscription from './components/Subscription';
import Pub from './components/Pub.jsx';
import Log from './views/Log';
function App() {
  const [log, setLog] = useState('');
  const [user, setUser] = useState('Login');
    console.log(user)
  console.log(log)
  return (
    <>
      <div className='App'>
        <Router>
          <LoginContext.Provider value={{ user: user }}>
            <Header />
          </LoginContext.Provider>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/sub' component={Subscription} />
          <LoginContext.Provider
            value={{ log: log, setLog: setLog, setUser: setUser }}
          >
            <Route path='/log' component={Log} />
          </LoginContext.Provider>
          <Pub />
        </Router>
      </div>
    </>
  );
}

export default App;
