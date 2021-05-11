import { Link } from 'react-router-dom';
import './assets/Navbar.css';

export default function Navbar(){
  return(
    <nav className="navbar-left">
      <ul> 
        <li><Link className="left-text-white" to="/">Categories</Link ></li>
        <li><Link className="left-text-white" to="/">Latest Videos</Link ></li>
        <li><Link className="left-text-white" to="/">Premium Videos</Link ></li>
        <li><Link className="left-text-white" to="/">Actors</Link ></li>
      </ul>
    </nav>
  )
}