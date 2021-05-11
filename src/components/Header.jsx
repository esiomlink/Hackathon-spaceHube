import "./assets/header.css";


const Header = ({search, handleSearch, handleQuery}) => {

  return (

    <header className="header">
      <img src="http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png" alt="SpaceHub" />
      <div className='leftNav'>
        <form className="searchbar" methode="Get" action="rechercher" 
        onSubmit={(e)=> handleQuery(e, {search})}>
          <input type="text" placeholder="rechercher" value={search} onChange={(e)=>handleSearch(e.target.value)}></input>
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
