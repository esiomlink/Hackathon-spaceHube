import React, { useContext } from 'react';
import LoginContext from '../contexts/LoginContext';
import { Link } from 'react-router-dom';
import './assets/Login.css';

const Login = () => {
  const { log, setLog, setUser, setIsMageur } = useContext(LoginContext);
  function onclique() {
    setUser(log)
    setIsMageur(false)
  }
  return (
    <div className='container-user'>
      <div className='user'>
        <h1>Connexion membre</h1>
        <h4>Accédez à votre compte Spacehub ou Spacehub Premium</h4>
        <div className='nom'>
          <input
            placeholder="Nom d'utilisateur"
            type='email'
            id='name'
            name='name'
            value={log}
            onChange={(e) => setLog(e.target.value)}
            required
          />
        </div>
        <div className='password'>
          <input
            placeholder='Mot de passe'
            type='password'
            id='name'
            name='name'
            required
            minlength='4'
            maxlength='8'
            size='10'
            required
          />
        </div>
        <div className='password'>
          <Link className='password' to='/'>
            <button type='button' onClick={onclique}>
              Se connecter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
