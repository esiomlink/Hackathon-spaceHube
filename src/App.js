import {useState} from 'react';
import LoginContext from './contexts/LoginContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Playvideo from "./components/PlayVideo";
import Subscription from "./components/Subscription";
import Pub from "./components/Pub.jsx";
import Log from './views/Log';
function App() {
  const [log, setLog] = useState('');
  const [user, setUser] = useState('Login');
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({ search });

  const handleSearch = (newValue) => setSearch(newValue);
  const handleQuery = (e, search) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <>
      <div className="App">
        <Router>
        <LoginContext.Provider value={{ user: user }}>
          <Header
            search={search}
            handleSearch={handleSearch}
            handleQuery={handleQuery}
          />
          </LoginContext.Provider>
          <div className="mainWrap">
            <Navbar />
            <Route path="/" exact>
              <Home query={query} />
            </Route>
            <Route path="/sub" component={Subscription} />
            <LoginContext.Provider
              value={{ log: log, setLog: setLog, setUser: setUser }}
            >
              <Route path='/log' component={Log} />
            </LoginContext.Provider>
            <Pub />
            <Route path="/play/:id/:title/:autor/:date/:keywords" component={Playvideo} />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
