import React, { useState } from "react";
import "./assets/header.css";


const Header = () => {
  const [search, setSearch] = useState("");
  
  return (
    <header className="header">
      <img src="http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png" alt="SpaceHub" />
      <div className='leftNav'>
        <form className="searchbar" methode="Get" action="rechercher">
            <input type="text" placeholder="rechercher"></input>
            <button type="submit" className="clickLoop">🔎</button>
        </form>
        <button className="login">
          Log In
        </button>
        <button className="premium">
          Premium
        </button>
      </div>
    </header>
  )
};

export default Header;
