import React, { useContext } from 'react';
import LoginContext from '../contexts/LoginContext';
import './assets/Login.css';

const Login = () => {
  const { log, setLog, setUser } = useContext(LoginContext);
  function onclique() {
    setUser(log)
  }
  return (
    <div className='login'>
      <h1>Connexion membre</h1>
      <h4>Accédez à votre compte Pornhub ou Pornhub Premium</h4>
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
        />
      </div>
      <div className='password'>
        <button type='button' onClick={onclique}>
          Se connecter
        </button>
      </div>
    </div>
  );
};

export default Login;
