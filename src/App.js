import {useState} from 'react';
import LoginContext from './contexts/LoginContext';
import { BrowserRouter as Router, Route,  useRouteMatch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Playvideo from "./components/PlayVideo";
import Subscription from "./components/Subscription";
import Category from "./components/Category";
import Pub from "./components/Pub.jsx";
import Log from './views/Log';
import Profile from './components/Profiles';

function App() {
  const [log, setLog] = useState('');
  const [user, setUser] = useState('Login');
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({ search });
  const [isMageur, setIsMageur] = useState(true);

  const handleSearch = (newValue) => setSearch(newValue);
  const handleQuery = (e, search) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <>
      <div className='App'>
        <Router>
          <LoginContext.Provider value={{ user: user }}>
            <Header
              search={search}
              handleSearch={handleSearch}
              handleQuery={handleQuery}
            />
          </LoginContext.Provider>
          <div className='mainWrap'>
            <Navbar />
            <LoginContext.Provider
              value={{
                setIsMageur: setIsMageur,
                isMageur: isMageur,
              }}
            >
              <Route path='/' exact>
                <Home query={query} />
              </Route>
            </LoginContext.Provider>
            <Route path='/Actors' exact>
              <Profile />
            </Route>
            <Route path='/sub' component={Subscription} />
            <LoginContext.Provider
              value={{
                log: log,
                setLog: setLog,
                setUser: setUser,
                setIsMageur: setIsMageur,
              }}
            >
              <Route path='/log' component={Log} />
            </LoginContext.Provider>
            <Pub />
            <Route
              path='/play/:id/:title/:autor/:date/:keywords'
              component={Playvideo}
            />
            <Route path='/category/:cat'>
              <Category />
            </Route>
            <Route path='/premium/:cat'>
              <Category />
            </Route>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
