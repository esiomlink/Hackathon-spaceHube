import { Link } from 'react-router-dom';
import './assets/Navbar.css';

export default function Navbar(){
  return(
    <nav className="navbar-left">
      <ul className="left-menu"> 
        <li><Link className="left-text-white" to="/">Catégories</Link ></li>
        <li><Link className="left-text-white" to="/">Dernières Vidéos</Link ></li>
        <li><Link className="left-text-white" to="/">Vidéos Premium</Link ></li>
        <li><Link className="left-text-white" to="/">Acteurs</Link ></li>
      </ul>
    </nav>
  )
}