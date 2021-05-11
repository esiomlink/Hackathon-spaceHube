import { useContext } from 'react';
import LoginContext from '../contexts/LoginContext';
import './assets/header.css';

function Header() {

  const {  user } = useContext(LoginContext);
  return (
    <div className='header'>
      <div className='logo'>
        <img className='logo' src='logo' alt='SpaceHub' />
      </div>
      <div className='searchbar'>
        <form class='rechercher' methode='Get' action='rechercher'>
          <input type='text' placeholder='rechercher'></input>
          <button type='submit' className='clickLoop'>
            🔎
          </button>
        </form>
      </div>
      <div className='login'>
        <h1>{user}</h1>
      </div>
      <div className='premium'>
        <h1>Premium</h1>
      </div>
    </div>
  );
};

export default Header;
