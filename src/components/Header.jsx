
import { useContext } from 'react';
import LoginContext from '../contexts/LoginContext';
import './assets/header.css';
import "./assets/header.css";


const Header = ({search, handleSearch, handleQuery}) => {
  const { user } = useContext(LoginContext);
  return (
    <header className='header'>
      <img
        src='/logo.png'
        alt='SpaceHub'
      />
      <div className='leftNav'>
        <form
          className='searchbar'
          methode='Get'
          action='rechercher'
          onSubmit={(e) => handleQuery(e, { search })}
        >
          <input
            type='text'
            placeholder='rechercher'
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          ></input>
          <button type='submit' className='clickLoop'>
            🔎
          </button>
        </form>
        <button className='login'>
          {user}
        </button>
        <button className='premium'>Premium</button>
      </div>
    </header>
  );
};

export default Header;
