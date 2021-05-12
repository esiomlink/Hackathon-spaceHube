import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Header from "./components/Header";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Subscription from "./components/Subscription";
import Pub from "./components/Pub.jsx";
import Playvideo from "./components/PlayVideo";
function App() {
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
          <Header
            search={search}
            handleSearch={handleSearch}
            handleQuery={handleQuery}
          />
          <div className="mainWrap">
            <Navbar />
            <Route path="/" exact>
              <Home query={query} />
            </Route>
            <Route path="/sub" component={Subscription} />
            <Route path="/play/:id/:title/:autor/:date/:keywords" component={Playvideo} />
            <Pub />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
