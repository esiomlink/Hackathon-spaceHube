
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Header from './components/Header';
import { useState } from 'react';
import Navbar from './components/Navbar';
function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (newValue) => setSearch(newValue);
  const handleQuery = ((e,search) =>{
      e.preventDefault();
      setQuery(search);
      setSearch("");
    });
  return (
    <>
    <div className='App'>
      <Router>
        <Header search={search} handleSearch={handleSearch} handleQuery={handleQuery}/>
        <Navbar />
        <Route path='/' exact>
          <Home query={query}/>
        </Route>
{/*         <Route path='/jeux' exact component={Carousel} /> */}
      </Router>

    </div>
    </>
  );
}

export default App;
